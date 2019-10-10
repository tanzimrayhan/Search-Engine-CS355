import React, {Component} from 'react';
import '../App.css'
import {isChrome,isFirefox,isSafari,isOpera,isIE,isEdge} from 'react-device-detect';


class Navigator extends Component{
    
    //functions
    browserAppName=()=> {
        var x="Browser Name : "
        if(isChrome){
         x +="Chrome";
        }
        else if(isSafari){
             x+= "Safari";
        }
        else if(isFirefox){
            x+= "Firefox";
        }
        else if(isOpera){
        x+= "Opera";
        }
        else if(isIE){
            x+= "Internet Explorer";
        }
        else if(isEdge){
            x+= "Edge";
        }

        else {x+=navigator.appName}
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
                    <p style={{padding:'5rem', textAlign:'left' }}> 
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