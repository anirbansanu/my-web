import React from 'react';
import ExLink24 from "../../assets/iconImgs/ExLink24.png";
import github from "../../assets/iconImgs/github.png";


export const ProjectCardItem = (props)=>{
    const colors = ["badge bg-primary","badge bg-danger","badge bg-light-info","badge bg-light-danger","badge bg-success","badge bg-pink","badge bg-warning text-dark", "badge bg-info text-dark"];
    return(
        <div className="card bg-transparent text-white h-100" > 
            <img src={props.imgUrl} className="card-img-top h-50" alt="NoImage"/>
            <div className="card-body">
                <h5 className="card-title"><b>{props.tittle}</b>
                    
                        {
                            props.projectLink?<span className="p-1"><a href={props.projectLink}><img src={ExLink24} alt="Link"/></a>
                            <a href={props.githubLink}><img src={github} alt="Link"/></a></span>
                            :<span></span>
                            
                        }
                        
                    </h5>
                {props.badges.map((badge) => <span className={"mx-1 "+colors[Math.floor(Math.random()*colors.length)]}>{badge}</span>)}
                <p className="card-text">{props.desc}</p>
                <div className="card-text"></div>
            </div>
        </div>
    )
}