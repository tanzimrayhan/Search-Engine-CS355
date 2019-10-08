import React,{Component} from "react";
import '../App.css';

class Screen extends Component{
    getScreenWidth=()=>{
        var x=window.screen.width;
        return document.write="Screen Width : "+x;
    }

    getScreenHeight=()=>{
        var x=window.screen.height;
        return document.write="Screen Height : "+x;
    }
    getAvailWidth=()=>{
        var x=window.screen.availWidth;
        return document.write="Available Width : "+x;
    }

    getAvailHeight=()=>{
        var x=window.screen.availHeight;
        return document.write="Available Height : "+x;
    }

    getColorDepth=()=>{
        var x=window.screen.colorDepth;
        return document.write="Color Depth : "+x;
    }

    getPixelDepth=()=>{
        var x=window.screen.pixelDepth;
        return document.write="Pixel Depth : "+x
    }

    render(){
        document.title="Screen Info";
        return (
            <div className="App" style={{height:'100%'}}  >
                <header className="App-header">
                    <p style={{padding:'5rem', textAlign:"left" }}> 
                        {this.getScreenWidth()}
                        <br/>
                        {this.getScreenHeight()}
                        <br/>
                        {this.getAvailWidth()}
                        <br/>
                        {this.getAvailHeight()}
                        <br/>
                        {this.getColorDepth()}
                        <br/>
                        {this.getPixelDepth()}
                    </p>
                </header>
            </div>
        )
    }
}
export default Screen;