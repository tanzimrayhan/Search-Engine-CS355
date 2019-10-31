import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import {isAndroid,isMobile,isIOS, osName, osVersion,mobileModel} from 'react-device-detect';


class MainPage extends Component{
  checkIfMobile=()=>{
    if(isMobile && isAndroid){
        return document.write="You are visiting it from your android phone. ";

    }
    else if(isMobile && isIOS){
      return document.write="Thanks for visiting from your iPhone"
    }
    else {
      return document.write="You are visiting from a desktop. ";
    }
  }

  getModelName=()=>{
    if(mobileModel!=="none"){
    var x ="Your phone model is : "+mobileModel;
    return x;
    }
    else return ;
  }

  getOsName=()=>{
      var x="Your OS is: "+osName;
      return x;
  }

  getOsVersion=()=>{
    var x="OS version : "+osVersion;
    return x;
  }
  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files,
      loaded: 0,
    })
    console.log(event.target.files)

  }
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
  }
  
  onClickHandler = () => {
    const data = new FormData() 
    for(var x = 0; x<this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x])
    }
    axios.post("http://localhost:8000/upload", data, { 
      // receive two    parameter endpoint url ,form data
  }).then(res=>{
    console.log(res.statusText+"  File uploaded")
  })
  }

  render(){
      
      return(
    
        document.title="CS355 PROJECT",
        <div className="App" style={{height:'100%'}}>
          <header className="App-header" >
            <div className="Container">
              <div className="Row">
                <div className="offset-md-3 col-md-6">
                  <div className="form-group files">
                    <label>Upload your file</label>
                    <input type="file" name="file" multiple onChange={this.onChangeHandler}/>
                    <div>
                      <br/>
                    <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>

            <p>Welcome to <code>Search and Reporting Application</code> </p>
            <p>
              <code> {this.checkIfMobile()} </code>
              <br/>
              {this.getModelName()}
              <br/>

              {this.getOsName()}
              <br/>
              {this.getOsVersion()}
            </p>
            <Link to="/~alta2882/cs355/developers" className="App-link"
              
              >Learn About Developers</Link>
            
          </header>
        </div>
      );
  };
}

export default MainPage;
