import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';
import reactproject from "../../assets/iconImgs/reactproject.png";
import htmlcssjavascript from "../../assets/iconImgs/htmlcssjavascript.png";
import htmlcssjsphp from "../../assets/iconImgs/htmlcssjsphpmdb.png";



export const WebTab = (props)=>{
    return(
            <div className="row justify-content-center ">
                
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={reactproject} tittle="C19 Tracker" 
                        badges={["ReactJS","SETU API's"]} 
                        projectLink="https://anirbansanu.github.io/c19-tracker/" 
                        githubLink="https://github.com/anirbansanu/c19-tracker" 
                        desc="C19-tracker is COVID Tracking Project collects and publishes the most complete Active, Affected, Testing and Vaccinated data available for India states and territories. "
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={reactproject} tittle="Card Library" 
                        badges={["ReactJS","bootstrap"]} 
                        projectLink="https://anirbansanu.github.io/card/" 
                        githubLink="https://github.com/anirbansanu/card" 
                        desc="This is a library that allows your user to minimize, maximize and close your HTML elements. You can choose which of the previous interactions are allowed."
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={htmlcssjavascript} 
                        tittle="Btn-Eff" 
                        badges={["css"]} 
                        projectLink="https://anitechtime.000webhostapp.com/css-libs/btn-eff/index.html" 
                        githubLink="https://github.com/anirbansanu/btn-eff" 
                        desc="This is mail system which is based on web , it's allow user to send mail for communication." 
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={htmlcssjsphp} 
                        tittle="LMail" 
                        badges={["html","css","javascript","php"]} 
                        projectLink="https://anitechtime.000webhostapp.com/lock-mail/mail/user/log-in.php" 
                        githubLink="https://anitechtime.000webhostapp.com/lock-mail/mail/user/log-in.php" 
                        desc="This is mail system which is based on web , it's allow user to send mail for communication." 
                    />
                </div>
                
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={reactproject} 
                        tittle="ToDo" 
                        badges={["html","css","javascript","react"]} 
                        projectLink="https://anirbansanu.github.io/Todo/" 
                        githubLink="https://github.com/anirbansanu/Todo" 
                        desc="Use Todo when you have a deadline, NEED to focus, prioritize and get things done quickly–from home or school projects, to dozens of work tasks–with sub-tasks and projects." 
                    />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem 
                        imgUrl={htmlcssjavascript} 
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