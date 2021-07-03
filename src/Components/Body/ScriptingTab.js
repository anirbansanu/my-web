import React from 'react';
import { ProjectCardItem } from './ProjectCardItem';


export const ScriptingTab = (props)=>{
    return(
            <div className="row justify-content-center ">
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl="../../assets/Imgs/web.png" tittle="Project1" badges={["c++","html","css","javascript"]} desc="A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo." />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl="../../assets/Imgs/web.png" tittle="Web Project" badges={["c++","html","css","javascript"]} desc="A webapp to visualize Neural Networks based on no. of layers and neurons, calculate" />
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl="../../assets/Imgs/web.png" tittle="Py Project" badges={["c++","html","css","javascript"]}  desc="A webapp to visualize Neural Networks based on no. of layers and neurons, calculate"/>
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl="../../assets/Imgs/web.png" tittle="C++ Project" badges={["c++","html","css","javascript"]}  desc="A python streamlit webapp to automate generating and uploading youtube thumbnails using Youtube v3 API"/>
                </div>
                <div className="col-md-6 col-lg-4 p-3">
                    <ProjectCardItem imgUrl="../../assets/Imgs/web.png" tittle="C++ Project" badges={["c++","html","css","javascript"]}  desc="A python streamlit webapp to automate generating and uploading youtube thumbnails"/>
                </div>
            </div>
    )
}