import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
    return (
        <div className='container'>
           <div className='project-card-img'>
               <img src={props.image} alt={props.name} />
            </div>
           <a href={props.url} target='_blank' className='project-card-link'>View the project</a>
           <h3>{props.name}</h3>
           <p>{props.description}</p>
        </div>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProjectCard;