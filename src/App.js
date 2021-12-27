import './style.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {ContainerOne} from "./Components/Body/ContainerOne";
import {ContainerTwo} from "./Components/Body/ContainerTwo";
import {ContainerThree} from "./Components/Body/ContainerThree";
import { Contact } from './Components/Body/ContactContainer';
import { Resume } from './Components/Body/ResumeContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AOS from "aos";

import "aos/dist/aos.css";
AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });


function App() {
  return (
    <Router>
      <div className="App" id="app">
      
        <Header tittle = "My Web" searchBar={false}/>
        <Switch>
        <Route exact path="/my-web" render={()=>{
            return(
              <>
                <ContainerOne/>
                <ContainerTwo/>
                <Resume tittle="Project"/>
                <ContainerThree tittle="Project"/>
                
              </>
            )
          }}/>

          <Route exact path="/my-web/contact" render={()=>{
            return(
              <>
                <ContainerOne/>
                <Contact/>
              </>
            )
            }}/>

            <Route exact path="/my-web/allprojects" render={()=>{
            return(
              <>
                <ContainerThree tittle="Project"/>
                
              </>
            )
            }}/>
            <Route exact path="/my-web/resume" render={()=>{
            return(
              <>
                <Resume tittle="Resume1"/>
              </>
            )
            }}/>  
            <Route render={()=>{
            return(
              <>
                <ContainerOne/>
                <ContainerTwo/>
                <ContainerThree/>
              </>
            )
            }}/>  
            
        </Switch>
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
