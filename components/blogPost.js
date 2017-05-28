import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = props => {
    const { post } = props
    return (
        <section id='blog-post-container'>
            {!props || !post ?
                    <div className="loading">
                        <div className="spinner-donut large tertiary"></div>
                    </div>
                    :
            <div className='blog-card-container animated fadeIn'>
                <div className="blog-card-img">
                    <img src={post.mediaURL} alt={post.title}/>
                </div>
                <p className="blog-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p className="blog-content" dangerouslySetInnerHTML={{__html: post.content}}></p>
            </div>
            }
        </section>
    );
};

BlogPost.propTypes = {
    post: PropTypes.object.isRequired
};

export default BlogPost;

