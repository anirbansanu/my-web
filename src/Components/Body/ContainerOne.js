import React from 'react';
//import gif2 from "../../assets/Imgs/1.jpg";

import WebDevPerson from "../../assets/Imgs/dev-per.png";

export const ContainerOne = ()=>{
    
    return(
        <div className="container-fluid ">
            <div className="row border-danger ">
                <div className="col-md-6 border-success p-0 text-start">
                    <div className="container-fluid p-4 text-white">
                        <h1 className="display-1 text-warning"><b>Namaste!</b></h1>
                        <h1 className="display-1"><strong>I'm</strong></h1>
                        <h1 className=" display-4 p-1">
                            <span className="badge border border-success p-2">
                                Anirban <span className="badge bg-success">Mukherjee</span>
                            </span>
                            </h1>
                        <div className="card bg-transparent text-white">
                            <div className="card-text">
                                <h3>I am a full-stack web<span className="badge bg-t-success border border-success">Developer <span className="badge bg-success">NOUN</span></span></h3>
                                <h3>Who can handle both <span className="badge bg-t-pink border border-danger">front and back-end <span className="badge bg-danger">VERB</span></span></h3>
                                <h3>components of <span className="badge bg-t-warning border border-warning">Web Design <span className="badge bg-warning text-dark">SKILL</span></span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6  border-dark p-0">
                    <img className="d-block w-100 vh-85" src={WebDevPerson} alt="Carousel Block" />
                </div>
                
            </div>
        </div>
    )
}