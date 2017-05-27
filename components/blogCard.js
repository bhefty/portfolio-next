import React from 'react';
import PropTypes from 'prop-types';

const BlogCard = props => {
    return (
        <div className='container blog-card-container'>
            <div className="blog-card-img">
                <img src={props.image} alt={props.title}/>
            </div>
            <p className="blog-date">{props.date}</p>
            <h3>{props.title}</h3>
            <p className="blog-excerpt" dangerouslySetInnerHTML={{__html: props.excerpt}}></p>
            <a href='/' className='button primary'>Continue reading...</a>
        </div>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired
};

export default BlogCard;