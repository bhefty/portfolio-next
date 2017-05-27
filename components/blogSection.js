import React, { Component } from 'react';
import Link from 'next/link'
import Reveal from 'react-reveal'

class BlogSection extends Component {
    constructor() {
        super()
        this.state = {
            post: {}
        }
    }

    async componentDidMount() {
        const res = await fetch(`${API_URL}?orderBy=date&per_page=1&_embed&categories=2`)
        const json = await res.json()
        const latestPost = {
            date: new Date(json[0].date).toLocaleDateString(),
            title: json[0].title.rendered,
            excerpt: json[0].excerpt.rendered.replace(/<p class=\"link-more\">.*/g, ''),
            mediaURL: json[0]._embedded['wp:featuredmedia'][0].source_url,
            id: json[0].id
        }
        this.setState({ post: latestPost })
    }
    
    render() {
        const { post } = this.state
        return (
            <section id='blog-section'>
                <h2 className="blog-subhead">The latest post:</h2>
                { !post.title ?
                    <div className="loading">
                        <div className="spinner-donut large tertiary"></div>
                    </div>

                    :
                    <Reveal effect='animated fadeIn'>
                        <div className='post-content container'>
                            <h1 className="post-title">{ post.title }</h1>
                            <p className="post-date">{ post.date }</p>
                            <div className="post-image-container">
                                <img className="post-image" src={ post.mediaURL } alt={ post.title } />
                            </div>
                            <p className="post-excerpt" dangerouslySetInnerHTML={{__html: post.excerpt }} ></p>
                            <Link prefetch href={{pathname: '/post', query: { id: post.id }}}><a className='button primary'>Continue reading...</a></Link>
                            <Link prefetch href='/blog'><a className='button tertiary'>View all posts</a></Link>
                        </div>
                    </Reveal>
                 }
            </section>
        );
    }
};

export default BlogSection;