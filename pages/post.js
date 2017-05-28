import React, { Component } from 'react'
import Layout from '../components/layout'
import Splash from '../components/splash'
import BlogPost from '../components/blogPost'

export default class extends Component {
    static async getInitialProps(props) {
        if (props.req) {
            const protocol = (props.req.secure) ? 'https' : 'http'
            const res = await fetch(`${protocol}://${props.req.get('Host')}/api/post/${props.query.id}`)
            const json = await res.json()
            return { post: json.blogPost }
        }
        const res = await fetch(`/api/post/${props.query.id}`)
        const json = await res.json()
        return { post: json.blogPost }
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
                <BlogPost post={this.props.post} />
            </Layout>
        )
    }
}