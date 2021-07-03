import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {ContainerOne} from "./Components/Body/ContainerOne";
import {ContainerTwo} from "./Components/Body/ContainerTwo";
import {ContainerThree} from "./Components/Body/ContainerThree";
import { About } from './Components/Body/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header tittle = "My Web" searchBar={false}/>
        <Switch>
        <Route exact path="/my-web" render={()=>{
            return(
              <>
                <ContainerOne/>
                <ContainerTwo/>
                <ContainerThree/>
              </>
            )
          }}/>

          <Route exact path="/my-web/about" render={()=>{
            return(
              <>
                <ContainerOne/>
                <About/>
              </>
            )
            }}/>

            <Route exact path="/my-web/allprojects" render={()=>{
            return(
              <>
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
