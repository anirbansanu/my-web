import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';
import {getAllData} from '../../services/ProjectData';

// import hacking from "../../assets/iconImgs/hacking.gif";
// import allinone from "../../assets/iconImgs/htmlcssjavascript.png";
// import reactproject from "../../assets/iconImgs/reactproject.png";
// import htmlcssjsphp from "../../assets/iconImgs/htmlcssjsphpmdb.png";



export class ScriptingTab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            loading: false
        }
    }
    getAll=()=>{
        const d = getAllData();
        this.setState({data: d});
    }
    componentDidMount(){
        this.getAll();
    }
    render()
    {
    return(
            <div className="row justify-content-center ">
                {
                        this.state.data.map((d,i)=>(
                            d.type.find(t=> t==="script")?
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
}