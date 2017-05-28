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
        const res = await fetch(`http://portfoliowp.x10host.com/wp-json/wp/v2/posts?orderBy=date&per_page=1&_embed&categories=2`)
        const json = await res.json()
        const latestPost = {
            date: new Date(json[0].date).toLocaleDateString(),
            title: json[0].title.rendered,
            excerpt: json[0].excerpt.rendered.replace(/<p class=\"link-more\">.*/g, ''),
            mediaURL: json[0]._embedded['wp:featuredmedia'][0].source_url,
            id: json[0].id
        }
        console.log('server', latestPost)
        return { post: latestPost }
    }

    render() {
        return (
            <div>
                <Layout>
                    <About />
                    <ProjectSpacer />
                    <ProjectsSection />
                    <BlogSpacer />
                    <BlogSection post={this.props.post} />
                    <ContactSpacer />
                    <Contact />
                </Layout>
            </div>
        )
    }
}