import React from 'react';

export const Contact = (props)=>{
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert('Mail Sent');
        
    }
    return(
        <div id="contact" className="contact text-white mt-4 p-2" >
            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="section-title">
                <h2 className="font-monospace text-center">Contact</h2>
                </div>

                <div className="row mt-1">

                <div className="col-lg-4">
                    <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt "></i>
                        <h4> Location:</h4>
                        <p> Andal, Paschim Bardhaman, W.B.</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>anirbanmukherjee602@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>+91 8617476384</p>
                    </div>

                    </div>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0">

                    <form onSubmit={handleSubmit} className="">
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control border border-warning" id="name" placeholder="Your Name" required=""/>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control border border-warning" name="email" id="email" placeholder="Your Email" required=""/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control border border-warning" name="subject" id="subject" placeholder="Subject" required=""/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control border border-warning" name="message" rows="5" placeholder="Message" required=""/>
                    </div>
                    <div className="my-3">
                        <div className="loading"></div>
                        <div className="error-message"></div>
                        <div className="sent-message py-3">{/*Your message has been sent. Thank you!*/}</div>
                    </div>
                    <div className=""><button className="btn btn-outline-warning">Send Message</button></div>
                    </form>

                </div>

                </div>

            </div>
        </div>
       
        )}