import React, { Component } from 'react'
import Layout from '../components/layout'
import Splash from '../components/splash'
import ProjectPageList from '../components/projectPageList'

export default class extends Component {
    static async getInitialProps() {
        const res = await fetch(`http://portfoliowp.x10host.com/wp-json/wp/v2/posts?orderBy=date&order=desc&_embed&categories=4`)
        const json = await res.json()
        return { projects: json }
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