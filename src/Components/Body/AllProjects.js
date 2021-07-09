import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';
import cpp from "../../assets/iconImgs/cppdatabase.gif";
import arduino from "../../assets/iconImgs/arduino.gif";
import esp8266 from "../../assets/iconImgs/8266.gif";
import hacking from "../../assets/iconImgs/hacking.gif";
import allinone from "../../assets/iconImgs/htmlcssjavascript.png";
import reactproject from "../../assets/iconImgs/reactproject.png";
import htmlcssjsphp from "../../assets/iconImgs/htmlcssjsphpmdb.png";

export const AllProjects = (props)=>{
    return(
            <div className="row justify-content-center ">
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={reactproject} 
                        tittle="ToDo" 
                        badges={["html","css","javascript","React"]} 
                        projectLink="https://anirbansanu.github.io/Todo/" 
                        githubLink="https://github.com/anirbansanu/Todo" 
                        desc="use Todo when you have a deadline, NEED to focus, prioritize and get things done quickly–from home or school projects, to dozens of work tasks–with sub-tasks and projects." 
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl={hacking} 
                        tittle="Backdoor" 
                        badges={["python","pycharm"]}  
                        projectLink="https://github.com/anirbansanu/Hacking" 
                        githubLink="https://github.com/anirbansanu/Hacking" 
                        desc="Backdoor is windows app that provides hidden method for obtaining remote access to a computer or other system."
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem
                        imgUrl={htmlcssjsphp} 
                        tittle="LMail" 
                        badges={["html","css","javascript","php","mariaDB"]} 
                        projectLink="https://anitechtime.000webhostapp.com/lock-mail/mail/user/log-in.php" 
                        githubLink="https://anitechtime.000webhostapp.com/lock-mail/mail/user/log-in.php" 
                        desc="This is mail system which is based on web , it's allow user to send mail for communication." 
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={esp8266} tittle="Automation " 
                        badges={["ESP8266","Arduino","java","firebase"]} 
                        projectLink="" 
                        githubLink="" 
                        desc="This is module based Automation project that provides control with wifi and internet enabled devices "
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl={cpp} tittle="DBLite" badges={["c++","vscode"]} projectLink="https://github.com/anirbansanu/DBLite" githubLink="https://github.com/anirbansanu/DBLite" desc="DBLite is a C++ language library that provides a lightweight disk-based database that doesn't require a separate server process"/>
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl={arduino} tittle="Home Automation" badges={["Arduino","java","Android"]} projectLink="" githubLink="" desc="Home Automation project demonstrates a simple system that allows the user to control it with bluetooth enabled wireless device "/>
                </div>
                
                
                
                
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl={allinone} 
                        tittle="Heart"
                        badges={["html","css","javascript"]} 
                        projectLink="https://anitechtime.000webhostapp.com/heart.html" 
                        githubLink="https://anitechtime.000webhostapp.com/heart.html" 
                        desc="A Simple animated reaction web app called heart, who react based on input text." 
                    />
                </div>
            </div>
    )
}