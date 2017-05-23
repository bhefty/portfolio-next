import React from 'react';
import ProjectCard from './projectCard'

const ProjectsSection = () => {
    return (
        <section id='projects-section'>
            <div className="container projects-container">
                <div className="projects-subhead">
                    <p>
                        Checkout some of my recent projects!
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4 project-card">
                        <ProjectCard
                            name='Nightlife Activity'
                            image='/static/img/project-nightlife-activity.png'
                            url='https://github.com/bhefty/nightlife-app'
                            description={
                                `View local bars and hangouts in your area and see how many other people are also going! Sign up for an account to flag a location that you will be attending.`
                            }
                        />
                    </div>
                    <div className="col-md-4 col-md-offse2t-1 project-card">
                        <ProjectCard
                            name='Reactive Voting'
                            image='/static/img/project-voting.png'
                            url='https://github.com/bhefty/reactive-voting'
                            description={
                                `A voting app built with MongoDB, Express, React, and Node. Complete with user authentication!`
                            }
                        />
                    </div>
                    <div className="col-md-4 col-md-offse2t-1 project-card">
                        <ProjectCard
                            name='Recipe Box'
                            image='/static/img/project-recipe-box.png'
                            url='https://agile-island-30911.herokuapp.com/'
                            description={
                                `A digital recipe box built with React that utilizes the browser's local storage to save state. Part of a FreeCodeCamp project.`
                            }
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 project-card">
                        <ProjectCard
                            name='Find-My-Rep'
                            image='/static/img/project-find-my-rep.png'
                            url='https://github.com/bhefty/project_what_have_you_done'
                            description={
                                `This project centered around the Sunlight Foundation API to retrieve information for your local congressmen and women.`
                            }
                        />
                    </div>
                    <div className="col-md-4 col-md-offse2t-1 project-card">
                        <ProjectCard
                            name='Markdown Previewer'
                            image='/static/img/project-markdown-previewer.png'
                            url='http://codepen.io/bhefty/full/MbawLa/'
                            description={
                                `This app was created using ReactJS to showcase the benefits of the Virtual DOM. Enter your markdown text on the left and see it instantly compiled on the right.`
                            }
                        />
                    </div>
                    <div className="col-md-4 col-md-offse2t-1 project-card">
                        <ProjectCard
                            name='Githuh?'
                            image='/static/img/project-githuh.png'
                            url='https://github.com/bhefty/assignment_githuh'
                            description={
                                `CLI for retreiving information on Github user accounts. Part of the Viking Code School projects.`
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;