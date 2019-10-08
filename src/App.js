import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

//Importing Pages and components
import Toolbar from './Hamburger'; //NavBar component
import Navigator from './Pages/Navigator' //Navigator Page
import MainPage from './Pages/MainPage'; //Main HomePage
import Window from './Pages/Window' //Window Page
import Location from './Pages/Location' //Location Page

function App() {
  return (
    document.title="CS355 PROJECT",
    
      
      
      <Router>
      <Toolbar />
        <div>
        
    <div className="App" style={{height:'100%'}}>
      <Switch>
          <Route exact path="/~alta2882/cs355/" component={MainPage}/>
          <Route exact path="/~alta2882/cs355/browser" component={Navigator}/>
          <Route exact path="/~alta2882/cs355/window" component={Window}/>
          <Route exact path="/~alta2882/cs355/location" component={Location}/>
      </Switch>
      
      
        </div>
      
    </div>
    </Router>
  );
}

export default App;
