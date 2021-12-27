import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';

import cpp from "../../assets/iconImgs/cppdatabase.gif";
import arduino from "../../assets/iconImgs/arduino.gif";
import esp8266 from "../../assets/iconImgs/8266.gif";

export const ProgrammingTab = (props)=>{
    return(
            <div className="row justify-content-center ">
                
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                    imgUrl={esp8266} tittle="Automation " 
                    badges={["ESP8266","Arduino","java","firebase"]} 
                    projectLink="" 
                    githubLink="" 
                    desc="This is module based Automation project that provides control with wifi and internet enabled devices "/>
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl={cpp} tittle="DBLite" badges={["c++","vscode"]} projectLink="https://github.com/anirbansanu/DBLite" githubLink="https://github.com/anirbansanu/DBLite" desc="DBLite is a C++ language library that provides a lightweight disk-based database that doesn't require a separate server process"/>
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl={arduino} tittle="Home Automation" badges={["Arduino","java","Android"]} projectLink="" githubLink="" desc="Home Automation project demonstrates a simple system that allows the user to control it with bluetooth enabled wireless device "/>
                </div>
            </div>
    )
}