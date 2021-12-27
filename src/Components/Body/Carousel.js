import React from 'react';
import Crsl from "../../assets/Imgs/1.jpg";

export const Carousel = ()=>{
    return(
            
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="200">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex align-items-center justify-content-center vh-90 bg-primary" >
                            <img className="d-block vh-90 w-100" src={Crsl} alt="Carousel Block" />
                        </div>
                        <div className="carousel-caption pb-4 d-md-block bg-dark">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}