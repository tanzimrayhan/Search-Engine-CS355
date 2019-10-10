import React,{Component} from 'react'
import '../App.css'

class Location extends Component{
    //functions
    findHref=()=>{
        var x = window.location.href;
        return document.write="The href is : "+x;

    }

    findHostname=()=>{
        var x=window.location.hostname;
        return document.write="The hostname is : "+x;
    }

    findPathName=()=>{
        var x=window.location.pathname;
        return document.write="The pathname is : "+x;
    }

    findProtocol=()=>{
        var x=window.location.protocol;
        if(x.includes(":")){
            x=x.replace(":","");
            x=x.toUpperCase();
        }
        return document.write="The protocol is : "+x;
    }

    render(){
        document.title="Location Info";
        return(
            <div className="App" style={{height:'100%' }}  >
                <header className="Location-header">
                    <p style={{ textAlign:"left",  textSizeAdjust:"8" }}> 
                        {this.findHref()}
                        <br/>
                        {this.findHostname()}
                        <br/>
                        {this.findPathName()}
                        <br/>
                        {this.findProtocol()}
                    </p>
                </header>
            </div>

        )
    }
}
export default Location;