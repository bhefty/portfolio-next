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
    static async getInitialProps(props) {
        if (props.req) {
            const protocol = (props.req.secure) ? 'https' : 'http'
            // Fetch recent projects
            const resRecentProjects = await fetch(`${protocol}://${props.req.get('Host')}/api/recentprojects`)
            const recentProjectsJSON = await resRecentProjects.json()

            // Fetch recent post
            const resRecentPost = await fetch(`${protocol}://${props.req.get('Host')}/api/recentpost`)
            const recentPostJSON = await resRecentPost.json()
            return { projects: recentProjectsJSON.recentProjectsJSON, post: recentPostJSON.latestPost }
        }
        // Fetch recent projects
        const resRecentProjects = await fetch(`/api/recentprojects`)
        const recentProjectsJSON = await resRecentProjects.json()

        // Fetch recent post
        const resRecentPost = await fetch(`/api/recentpost`)
        const recentPostJSON = await resRecentPost.json()
        return { projects: recentProjectsJSON.recentProjectsJSON, post: recentPostJSON.latestPost }
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