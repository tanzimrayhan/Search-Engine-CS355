import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../App.css';


class MainPage extends Component{
  render(){
      
      return(
    
        document.title="CS355 PROJECT",
        <div className="App" style={{height:'100%'}}>
          <header className="App-header" >
            
            <p>Welcome to <code>Search and Reporting Application</code> </p>
            <Link to="/~alta2882/cs355/developers" className="App-link"
              
              >Learn About Developers</Link>
            
          </header>
        </div>
      );
  };
}

export default MainPage;
