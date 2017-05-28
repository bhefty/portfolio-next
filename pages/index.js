import React, { Component } from 'react'
import Layout from '../components/layout'
import About from '../components/about'
import ProjectSpacer from '../components/projectSpacer'
import ProjectsSection from '../components/projectsSection'
import BlogSpacer from '../components/blogSpacer'
import BlogSection from '../components/blogSection'
import ContactSpacer from '../components/contactSpacer'
import Contact from '../components/contact'

export default class extends Component {
    static async getInitialProps() {
        // Fetch recent projects
        const resRecentProjects = await fetch(`http://portfoliowp.x10host.com/wp-json/wp/v2/posts?orderBy=date&order=desc&_embed&categories=3`)
        const jsonRecentProjects = await resRecentProjects.json()

        // Fetch recent post
        const resRecentPost = await fetch(`http://portfoliowp.x10host.com/wp-json/wp/v2/posts?orderBy=date&per_page=1&_embed&categories=2`)
        const jsonRecentPost = await resRecentPost.json()
        const latestPost = {
            date: new Date(jsonRecentPost[0].date).toLocaleDateString(),
            title: jsonRecentPost[0].title.rendered,
            excerpt: jsonRecentPost[0].excerpt.rendered.replace(/<p class=\"link-more\">.*/g, ''),
            mediaURL: jsonRecentPost[0]._embedded['wp:featuredmedia'][0].source_url,
            id: jsonRecentPost[0].id
        }
        
        // Add to props
        return { projects: jsonRecentProjects, post: latestPost }
    }

    render() {
        return (
            <div>
                <Layout>
                    <About />
                    <ProjectSpacer />
                    <ProjectsSection projects={this.props.projects} />
                    <BlogSpacer />
                    <BlogSection post={this.props.post} />
                    <ContactSpacer />
                    <Contact />
                </Layout>
            </div>
        )
    }
}