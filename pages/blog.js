import React, { Component } from 'react'
import { initGA, logPagePview } from '../utils/analytics'
import Layout from '../components/layout'
import Splash from '../components/splash'
import BlogPageList from '../components/blogPageList'
import BlogPost from '../components/blogPost'

export default class extends Component { 
    static async getInitialProps(props) {
        if (props.req) {
            const protocol = (props.req.secure) ? 'https' : 'http'
            const res = await fetch(`${protocol}://${props.req.get('Host')}/api/blog`)
            const json = await res.json()
            return { blogs: json.blogsJSON }
        }
        const res = await fetch(`/api/blog`)
        const json = await res.json()
        return { blogs: json.blogsJSON }
    }

    componentDidMount() {
        initGA()
        logPagePview()
    }
    

    render() {
        return (
            <Layout
                title='Bill Hefty | Blog'
                splashHeader={(<Splash
                    page='blog'
                    header='blog'
                    subHeader='Read about some of my latest journeys and findings.'
                />)}
            >
                <BlogPageList blogs={this.props.blogs} />
            </Layout>
        )
    }
}