import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';
import {getAllData} from '../../services/ProjectData';

// import cpp from "../../assets/iconImgs/cppdatabase.gif";
// import arduino from "../../assets/iconImgs/arduino.gif";
// import esp8266 from "../../assets/iconImgs/8266.gif";

export class ProgrammingTab extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: []
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
                                d.type.find(t=> t==="program")?
                                
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