import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

//Importing Pages and components
import Toolbar from './Hamburger'; //NavBar component
import Navigator from './Pages/Navigator' //Navigator Page
import MainPage from './Pages/MainPage'; //Main HomePage
import Window from './Pages/Window' //Window Page
import Location from './Pages/Location' //Location Page
import Screen from './Pages/Screen'
import ContactUs from './Pages/ContactUs'
import Developers from './Pages/Developers';
import GeoLocation from './Pages/GeoLocation';


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
          <Route exact path="/~alta2882/cs355/screen" component={Screen}/>
          <Route exact path="/~alta2882/cs355/contactus" component={ContactUs}/>
          <Route exact path="/~alta2882/cs355/developers" component={Developers}/>
          <Route exact path="/~alta2882/cs355/Geolocation" component={GeoLocation}/>
      </Switch>
      
      
        </div>
      
    </div>
    </Router>
  );
}

export default App;
