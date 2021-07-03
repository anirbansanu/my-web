import React from 'react';
import images from "../../assets/Imgs/p.png";

export const ProjectCardItem = (props)=>{
    const colors = ["badge bg-primary","badge bg-secondary","badge bg-success","badge bg-danger","badge bg-warning text-dark", "badge bg-info text-dark"];
    return(
        <div className="card bg-transparent text-white h-100" > 
            <img src={images} className="card-img-top" alt="NoImage"/>
            <div className="card-body">
                <h5 className="card-title">{props.tittle}</h5>
                {props.badges.map((badge) => <span className={"mx-1 "+colors[Math.floor(Math.random()*colors.length)]}>{badge}</span>)}
                <p className="card-text">{props.desc}</p>
                <div className="card-text"></div>
            </div>
        </div>
    )
}