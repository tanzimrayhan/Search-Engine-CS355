import React, {Component} from 'react';
import '../App.css'


class Navigator extends Component{
    
    //functions
    browserAppName=()=> {
        var x ="Browser Name: " + navigator.appName;
        return document.write=x ;  
    }

    browserVersion=()=>{
        var x = "Version Info: " + navigator.appVersion;
        return document.write=x;
    }

    userAgent=()=>{
        var x = "User-agent: " + navigator.userAgent;
        return document.write=x;
    }
    
    platform=()=>{
        var x = "Platform: " + navigator.platform;
        return document.write=x;
    }

    language=()=>{
        var x = "Language of the browser: " + navigator.language;
        return document.write=x;
    }

    render(){
        document.title="Browser Info"
        return(
            
            <div className="App" style={{height:'100%'}}  >
                <header className="App-header">
                    <p style={{padding:'5rem', textAlign:"left"}}> 
                        {this.browserAppName()} 
                        <br/> 
                        {this.browserVersion()}
                        <br/>
                        {this.userAgent()}
                        <br/>
                        {this.platform()}
                        <br/>
                        {this.language()}

                    </p>
                    
                </header>
            </div>

        );

        
    }
}
export default Navigator;