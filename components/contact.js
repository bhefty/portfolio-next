import React from 'react';
import Reveal from 'react-reveal'

const Contact = () => {
    return (
        <section id='contact-section'>
            <div className="container contact-container">
                <div className="row">
                    <div className="col-md-5 hidden-sm">
                        <Reveal effect='animated slideInLeft'>
                            <img src='/static/img/ipad-email.png' alt='iPad Email Render' />
                        </Reveal>
                    </div>
                    <div className="col-md col-md-offset-1 contact-subhead">
                        <Reveal effect='animated fadeIn'>
                            <p>
                                Feel free to get in touch with me. I'd love to hear from you!
                            </p>
                            <br />
                            <a href='mailto:billhefty@gmail.com' className='button primary'>Email me</a>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;