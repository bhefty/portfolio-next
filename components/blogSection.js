import React, { Component } from 'react';

class BlogSection extends Component {
    constructor() {
        super()
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        const fetchRecentPost = fetch(`http://billhefty-portfolio-wp.herokuapp.com/wp-json/wp/v2/posts?orderBy=date&per_page=1`)

        fetchRecentPost.then((response) => response.json())
            .then((post) => {
                let latestPost = {
                    date: new Date(post[0].date).toLocaleDateString(),
                    title: post[0].title.rendered,
                    excerpt: post[0].excerpt.rendered.replace(/<p class=\"link-more\">.*/g, ''),
                    mediaID: post[0].featured_media
                }
                return latestPost
            })
            .then(latestPost => {
                const fetchRecentPostImage = fetch(`http://billhefty-portfolio-wp.herokuapp.com/wp-json/wp/v2/media/${latestPost.mediaID}`)
                fetchRecentPostImage.then(response => response.json())
                    .then(media => {
                        latestPost.mediaURL = media.guid.rendered
                        return latestPost
                    })
                    .then(latestPost => {
                        this.setState({ post: latestPost })
                    })
            })
    }
    
    render() {
        const { post } = this.state
        return (
            <section id='blog-section'>
                <h2 className="blog-subhead">The latest post:</h2>
                { !post.title ?
                    <div className="post-loading">
                        <div className="spinner-donut large tertiary"></div>
                    </div>

                    :
                    <div className='post-content container'>
                        <h1 className="post-title">{ post.title }</h1>
                        <p className="post-date">{ post.date }</p>
                        <div className="post-image-container">
                            <img className="post-image" src={ post.mediaURL } alt={ post.title } />
                        </div>
                        <p className="post-excerpt" dangerouslySetInnerHTML={{__html: post.excerpt }} ></p>
                        <a href='/' className='button primary'>Continue reading...</a>
                        <a href='/' className='button tertiary'>View all posts</a>
                    </div>
                 }
            </section>
        );
    }
};

export default BlogSection;