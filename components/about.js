import React from 'react';

const About = () => {
    return (
        <section id='about'>
            <div className="container about-container">
                <div className="row">
                    <div className="col-md-4 hidden-sm responsive-padding">
                        <img src="/static/img/bill-profile-pic.jpg" alt="Bill Hefty Picture" id="profile-pic"/>
                    </div>
                    <div className="col-md col-md-offset-1 responsive-padding">
                        <h2 className="about-head">About me</h2>
                        <p className="about-subhead">
                            My name is Bill Hefty and I'm a Web Developer. I've had upwards of 5 years experience as an IT professional dealing in all aspects between desktop tech support to video network solutions. This portfolio page aims at keeping track of my progress as I continue my track on web development. Have a look around and feel free to contact me!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;