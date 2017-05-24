import React from 'react';

const Contact = () => {
    return (
        <section id='contact-section'>
            <div className="container contact-container">
                <div className="row">
                    <div className="col-md-5 hidden-sm">
                        <img src='/static/img/ipad-email.png' alt='iPad Email Render' />
                    </div>
                    <div className="col-md col-md-offset-1 contact-subhead">
                        <p>
                            Feel free to get in touch with me. I'd love to hear from you!
                        </p>
                        <br />
                        <a href='mailto:billhefty@gmail.com' className='button primary'>Email me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;