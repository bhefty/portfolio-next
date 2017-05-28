import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Reveal from 'react-reveal'

const BlogSection = props => {
    const { post } = props
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
};

BlogSection.propTypes = {
    post: PropTypes.object.isRequired
};

export default BlogSection;