import React,{Component} from 'react'
import logo from '../logo.svg';
import '../App.css';


class MainPage extends Component{
  render(){
      
      return(
    
        document.title="CS355 PROJECT",
    <div className="App" style={{height:'100%'}}>
      
      
      
        <header className="App-header" >

      
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome! <code>LOVE FOR Tanzim</code> </p>
        <a className="App-link"
          href="https://github.com/tanzimrayhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Developers
        </a>
      </header>
    </div>
    );
};
}

export default MainPage;
