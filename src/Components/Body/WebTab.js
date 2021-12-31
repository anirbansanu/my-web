import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';
// import reactproject from "../../assets/iconImgs/reactproject.png";
// import htmlcssjavascript from "../../assets/iconImgs/htmlcssjavascript.png";
// import htmlcssjsphp from "../../assets/iconImgs/htmlcssjsphpmdb.png";
import {data} from '../../services/ProjectData';



export const WebTab = (props)=>{
    return(
            <div className="row justify-content-center ">
                
                {
                        data.map((d,i)=>(
                            d.type.find(t=> t==="web")?
                            <div className="col-md-6 col-lg-4 p-3" key={i}>
                                <ProjectCardItem 
                                    imgUrl={d.imgPath} tittle={d.tittle} 
                                    badges={d.badges} 
                                    projectLink={d.projectLink} 
                                    githubLink={d.githubLink} 
                                    desc={d.desc}
                                />
                            </div>:""
                        ))
                    }
                
            </div>
    )
}