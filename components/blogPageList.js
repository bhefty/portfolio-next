import React from 'react';
import PropTypes from 'prop-types';
import BlogCard from './blogCard'

const BlogPageList = props => {
    const { blogs } = props
    return (
        <section id='blog-page-list-container' className='container'>
            {!props || !blogs ?
                <div className="loading">
                    <div className="spinner-donut large tertiary"></div>
                </div>
                :
                <div className="blog-list">
                    {blogs.map((blog, idx) => {
                        return (
                            <div className='animated fadeIn' key={idx}>
                                <BlogCard
                                    title={blog.title.rendered}
                                    image={blog._embedded['wp:featuredmedia'][0].source_url}
                                    date={new Date(blog.date).toLocaleDateString()}
                                    excerpt={blog.excerpt.rendered.replace(/<p class=\"link-more\">.*/g, '')}
                                    id={blog.id}
                                />
                                {idx + 1 !== blogs.length &&
                                    <hr />
                                }
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    );
};

BlogPageList.propTypes = {
    blogs: PropTypes.array.isRequired
};

export default BlogPageList;