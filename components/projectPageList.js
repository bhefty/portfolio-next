import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './projectCard'

const ProjectPageList = props => {
    const { projects } = props
    return (
        <section id='project-page-list-container' className='container'>
            {!props || !projects ?
                <div className="loading">
                    <div className="spinner-donut large tertiary"></div>
                </div>
                :
                <div className="project-list animated fadeIn">
                    {projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <ProjectCard
                                    name={project.title.rendered}
                                    image={project._embedded['wp:featuredmedia'][0].source_url}
                                    url={project.content.rendered.match(/http.*(?=<)/g)[0]}
                                    description={project.content.rendered.replace(/<br[\s\S]*$/g, '')}

                                />
                                {idx + 1 !== projects.length &&
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

ProjectPageList.propTypes = {
    projects: PropTypes.array.isRequired
};

export default ProjectPageList;