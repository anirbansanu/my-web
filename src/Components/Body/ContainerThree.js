import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { AllProjects } from './AllProjects';
  import { ProgrammingTab } from './ProgrammingTab';
  import { WebTab } from './WebTab';
  import { ScriptingTab } from './ScriptingTab';

export const ContainerThree = ()=>{
    
    return(
        <Router>
        <div className="card bg-transparent text-center">
            <div className="card-header ">
                <nav>
                <ul className="nav nav-tabs card-header-tabs justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link border-0 nav-warning" activeclassname="active" to="/my-web/allprojects">All</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link border-0 nav-warning" activeclassname="active" to="/my-web/programmingtab">Program</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link border-0 nav-warning" activeclassname="active" to="/my-web/scripting">Scripting</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link border-0 nav-warning" activeclassname="" to="/my-web/webtab">Web</Link>
                </li>
                </ul>
                </nav>
            </div>
            <div className="card-body">
                <h5 className="card-title text-white">Do Something Here</h5>
                
                    <Switch>
                        <Route exact path="/my-web">
                            <AllProjects/>
                        </Route>
                        <Route exact path="/my-web/allprojects">
                            <AllProjects/>
                        </Route>
                        <Route exact path="/my-web/programmingtab">
                            <ProgrammingTab />
                        </Route>
                        <Route exact path="/my-web/scripting">
                            <ScriptingTab />
                        </Route>
                        <Route exact path="/my-web/webtab">
                            <WebTab />
                        </Route>
                        
                    </Switch>
                
            </div>
        </div>
        </Router>
    )
}