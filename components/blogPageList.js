import React, { Component } from 'react';
import BlogCard from './blogCard'

class BlogPageList extends Component {
    async componentDidMount() {
        const res = await fetch(`${API_URL}?orderBy=date&_embed&categories=2`)
        const json = await res.json()
        this.setState({ blogs: json })
    }

    render() {
        return (
            <section id='blog-page-list-container' className='container'>
                {!this.state || !this.state.blogs ?
                    <div className="loading">
                        <div className="spinner-donut large tertiary"></div>
                    </div>
                    :
                    <div className="blog-list">
                        {this.state.blogs.map((blog, idx) => {
                            return (
                                <div key={idx}>
                                    <BlogCard
                                        title={blog.title.rendered}
                                        image={blog._embedded['wp:featuredmedia'][0].source_url}
                                        date={new Date(blog.date).toLocaleDateString()}
                                        excerpt={blog.excerpt.rendered.replace(/<p class=\"link-more\">.*/g, '')}

                                    />
                                    {idx + 1 !== this.state.blogs.length &&
                                        <hr />
                                    }
                                </div>
                            )
                        })}
                    </div>
                }
            </section>
        );
    }
}

export default BlogPageList;