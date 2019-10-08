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

    render(){
        document.title="Location Info";
        return(
            <div className="App" style={{height:'100%'}}  >
                <header className="App-header">
                    <p style={{padding:'5rem', }}> 
                        {this.findHref()}
                        <br/>
                        {this.findHostname()}
                    </p>
                </header>
            </div>

        )
    }
}
export default Location;