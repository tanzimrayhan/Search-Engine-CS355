import React from 'react';

import './App.css';
import Toolbar from './Hamburger';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navigator from './Pages/Navigator'
import MainPage from './Pages/MainPage';

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
        
      </Switch>
      
      
        </div>
      
    </div>
    </Router>
  );
}

export default App;
