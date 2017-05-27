import React, { Component } from 'react';

class BlogPost extends Component {
    async componentDidMount() {
        const res = await fetch(`${API_URL}/${this.props.id}?_embed`)
        const json = await res.json()
        const blogPost = {
            date: new Date(json.date).toLocaleDateString(),
            title: json.title.rendered,
            content: json.content.rendered,
            mediaURL: json._embedded['wp:featuredmedia'][0].source_url
        }
        this.setState({ post: blogPost })
    }
    render() {
        return (
            <section id='blog-post-container'>
                {!this.state || !this.state.post ?
                        <div className="loading">
                            <div className="spinner-donut large tertiary"></div>
                        </div>
                        :
                <div className='blog-card-container animated fadeIn'>
                    <div className="blog-card-img">
                        <img src={this.state.post.mediaURL} alt={this.state.post.title}/>
                    </div>
                    <p className="blog-date">{this.state.post.date}</p>
                    <h3>{this.state.post.title}</h3>
                    <p className="blog-content" dangerouslySetInnerHTML={{__html: this.state.post.content}}></p>
                </div>
                }
            </section>
        );
    }
};

export default BlogPost;


