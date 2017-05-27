import React, { Component } from 'react';
import ProjectCard from './projectCard'

class ProjectPageList extends Component {
    async componentDidMount() {
        const res = await fetch(`${API_URL}?orderBy=date&order=desc&_embed&categories=4`)
        const json = await res.json()
        this.setState({ projects: json })
    }

    render() {
        return (
            <section id='project-page-list-container' className='container'>
                {!this.state || !this.state.projects ?
                    <div className="loading">
                        <div className="spinner-donut large tertiary"></div>
                    </div>
                    :
                    <div className="project-list animated fadeIn">
                        {this.state.projects.map((project, idx) => {
                            return (
                                <div key={idx}>
                                    <ProjectCard
                                        name={project.title.rendered}
                                        image={project._embedded['wp:featuredmedia'][0].source_url}
                                        url={project.content.rendered.match(/http.*(?=<)/g)[0]}
                                        description={project.content.rendered.replace(/<br[\s\S]*$/g, '')}

                                    />
                                    {idx + 1 !== this.state.projects.length &&
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

export default ProjectPageList;