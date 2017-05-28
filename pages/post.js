import React, { Component } from 'react'
import Layout from '../components/layout'
import Splash from '../components/splash'
import BlogPost from '../components/blogPost'

export default class extends Component {
    static async getInitialProps(props) {
        const res = await fetch(`${props.req.protocol}://${req.get('Host')}/api/post:${props.query.id}`)
        const json = res.json()
        return { post: blogPost }
        // const res = await fetch(`http://portfoliowp.x10host.com/wp-json/wp/v2/posts/${props.query.id}?_embed`)
        // const json = await res.json()
        // const blogPost = {
        //     date: new Date(json.date).toLocaleDateString(),
        //     title: json.title.rendered,
        //     content: json.content.rendered,
        //     mediaURL: json._embedded['wp:featuredmedia'][0].source_url
        // }
        // return { post: blogPost }
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