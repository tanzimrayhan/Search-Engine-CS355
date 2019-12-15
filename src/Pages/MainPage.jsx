import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import axios from 'axios';
import {isAndroid,isMobile,isIOS, osName, osVersion,mobileModel} from 'react-device-detect';



class MainPage extends Component{
  checkIfMobile=()=>{
    if(isMobile && isAndroid){
        return document.write="You are visiting it from your android phone. ";

    }
    else if (isMobile && isIOS) {
      return document.write = "Thanks for visiting from your iPhone"
    }
    else {
      return document.write = "You are visiting from a desktop. ";
    }
  }

  getModelName = () => {
    if (mobileModel !== "none") {
      var x = "Your phone model is : " + mobileModel;
      return x;
    }
    else return;
  }

  getOsName = () => {
    var x = "Your OS is: " + osName;
    return x;
  }

  getOsVersion = () => {
    var x = "OS version : " + osVersion;
    return x;
  }

    
        
  
  constructor(props) {
    super(props);
      this.state = {
        jsonFile:{},
        selectedFile: null,
        loaded:0
      }
  }
  
  onClickHandler = () => {
    if(this.state.selectedFile[0].name.includes(".json")){
    var reader=new FileReader();
    reader.onload = async (e) => { 
      const json = JSON.parse(e.target.result)
      

      for (var i=0;i<json.Result.length;i++){
        var title=json.Result[i].title;
        var url=json.Result[i].url;
        console.log(title );
        document.getElementById("results").innerHTML+="<p>This is the title "+title+"</p> <a href="+url+"> "+url+"</a>";

      }      
    }
    reader.readAsText(this.state.selectedFile[0])
  }
  else {alert("Not a json file. Please upload a json file")}
    
  }

  render() {

    return (

      document.title = "CS355 PROJECT",
      <div className="App" style={{ height: '100%' }}>
        <header className="App-header" >

          <br />

          <p>Welcome to <code>Search and Reporting Application</code> </p>
          <p>
            <code> {this.checkIfMobile()} </code>
            <br />
            {this.getModelName()}
            <br />

            {this.getOsName()}
            <br />
            {this.getOsVersion()}
          </p>
          <Link to="/~alta2882/cs355/developers" className="App-link"

          >Learn About Developers</Link>

        </header>
      </div>
    );
    }
  }


export default MainPage;