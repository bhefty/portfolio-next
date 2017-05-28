require('dotenv').config()
const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const fetch = require('isomorphic-fetch')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000
const API_URI = process.env.API_URI

// Cache rendered HTML pages
const ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60 // 1 hour
})

app.prepare()
    .then(() => {
        const server = express()

        const wrapAsync = handler => (req, res) => handler(req)
            .then(result => res.json(result))
            .catch(error => res.status(500).json({ error: error.message }))

        // Use the `renderAndCache` utility defined below to serve pages
        server.get('/', (req, res) => {
            renderAndCache(req, res, '/')
        })

        server.get('/api/blog', wrapAsync(async function(req) {
            const apiResponse = await fetch(`${API_URI}?orderBy=date&_embed&categories=2`)
            const blogsJSON = await apiResponse.json()
            return { blogsJSON }
        }))

        server.get('/api/recentpost', wrapAsync(async function(req) {
            const apiResponse = await fetch(`${API_URI}?orderBy=date&per_page=1&_embed&categories=2`)
            const json = await apiResponse.json()
            const latestPost = {
                date: new Date(json[0].date).toLocaleDateString(),
                title: json[0].title.rendered,
                excerpt: json[0].excerpt.rendered.replace(/<p class=\"link-more\">.*/g, ''),
                mediaURL: json[0]._embedded['wp:featuredmedia'][0].source_url,
                id: json[0].id
            }
            return { latestPost }
        }))

        server.get('/api/recentprojects', wrapAsync(async function(req) {
            const apiResponse = await fetch(`${API_URI}?orderBy=date&order=desc&_embed&categories=3`)
            const recentProjectsJSON = await apiResponse.json()
            return { recentProjectsJSON }
        }))

        server.get('/api/projects', wrapAsync(async function(req) {
            const apiResponse = await fetch(`${API_URI}?orderBy=date&order=desc&_embed&categories=4`)
            const projectsJSON = await apiResponse.json()
            return { projectsJSON }
        }))

        server.get('/api/post/:id', wrapAsync(async function(req) {
            const apiResponse = await fetch(`${API_URI}/${req.params.id}?_embed`)
            const json = await apiResponse.json()
            const blogPost = {
                date: new Date(json.date).toLocaleDateString(),
                title: json.title.rendered,
                content: json.content.rendered,
                mediaURL: json._embedded['wp:featuredmedia'][0].source_url
            }
            return { blogPost }
        }))

        server.get('/post/:id', (req, res) => {
            const queryParams = { id: req.params.id }
            renderAndCache(req, res, '/post', queryParams )
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${PORT}`)
        })
    })

function getCacheKey(req) {
    return `${req.url}`
}

function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)

    // If page is in the cache, serve it
    if (ssrCache.has(key)) {
        console.log(`CACHE HIT: ${key}`)
        res.send(ssrCache.get(key))
        return
    }

    // If not in cache, render the page into HTML
    app.renderToHTML(req, res, pagePath, queryParams)
        .then((html) => {
            // Cache the page
            console.log(`CACHE MISS: ${key}`)
            ssrCache.set(key, html)

            res.send(html)
        })
        .catch((err) => {
            app.renderError(err, req, res, pagePath, queryParams)
        })
}