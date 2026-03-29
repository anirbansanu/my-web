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
  Routes,
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
        <Routes>
        <Route path="/my-web" element={
              <>
                <ContainerOne/>
                <ContainerTwo/>
                <Resume tittle="Project"/>
                <ContainerThree tittle="Project"/>
                
              </>
          }/>

          <Route path="/my-web/contact" element={
              <>
                <ContainerOne/>
                <Contact/>
              </>
            }/>

            <Route path="/my-web/allprojects" element={
              <>
                <ContainerThree tittle="Project"/>
                
              </>
            }/>
            <Route path="/my-web/resume" element={
              <>
                <Resume tittle="Resume1"/>
              </>
            }/>  
            <Route path="*" element={
              <>
                <ContainerOne/>
                <ContainerTwo/>
                <ContainerThree/>
              </>
            }/>  
            
        </Routes>
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
