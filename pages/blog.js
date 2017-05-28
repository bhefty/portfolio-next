import React, { Component } from 'react'
import Layout from '../components/layout'
import Splash from '../components/splash'
import BlogPageList from '../components/blogPageList'
import BlogPost from '../components/blogPost'

export default class extends Component { 
    static async getInitialProps() {
        const res = await fetch(`http://portfoliowp.x10host.com/wp-json/wp/v2/posts?orderBy=date&_embed&categories=2`)
        const json = await res.json()
        return { blogs: json }
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