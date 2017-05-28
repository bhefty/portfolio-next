import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Slider from 'react-slick'
import Reveal from 'react-reveal'
import ProjectCard from './projectCard'

const ProjectsSection = props => {
    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
                },
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
                },
            ]
        }
        const { projects } = props
    return (
        <section id='projects-section'>
            <Reveal effect='animated fadeInRight'>
            <div className="container projects-container">
                <div className="projects-subhead">
                    <p>
                        Checkout some of my recent projects!
                    </p>
                </div>
                {!props || !projects ?
                    <div className="loading">
                        <div className="spinner-donut large tertiary"></div>
                    </div>
                    :
                    <div className="slider-container">
                    <Slider {...settings}>
                        {projects.map((project, idx) => {
                            return (<div className="project-card" key={idx}>
                                <ProjectCard
                                    name={project.title.rendered}
                                    image={project._embedded['wp:featuredmedia'][0].source_url}
                                    url={project.content.rendered.match(/http.*(?=<)/g)[0]}
                                    description={project.content.rendered.replace(/<br[\s\S]*$/g, '')}
                                />
                            </div>)
                        })}
                    </Slider>
                    </div>
                }
                <Link prefetch href='/projects'><a className='button tertiary projects-button'>View more projects</a></Link>
            </div>
            </Reveal>
        </section>
    );
};

ProjectsSection.propTypes = {
    projects: PropTypes.array.isRequired
};

export default ProjectsSection;