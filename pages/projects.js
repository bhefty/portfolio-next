import React, { Component } from 'react'
import Layout from '../components/layout'
import Splash from '../components/splash'
import ProjectPageList from '../components/projectPageList'

export default class extends Component {
    static async getInitialProps(props) {
        if (props.req) {
            const protocol = (props.req.secure) ? 'https' : 'http'
            const res = await fetch(`${protocol}://${props.req.get('Host')}/api/projects`)
            const json = await res.json()
            return { projects: json.projectsJSON }
        }
        const res = await fetch(`/api/projects`)
        const json = await res.json()
        return { projects: json.projectsJSON }
    }

    render() {
        return (
            <Layout
                title='Bill Hefty | Projects' 
                splashHeader={(<Splash
                    page='projects'
                    header='projects'
                    subHeader='Checkout some of my recent projects.'
                />)}
            >
                <ProjectPageList projects={this.props.projects} />
            </Layout>
        )
    }
}