import React,{Component} from 'react'
import '../App.css'

class Window extends Component{
    //functions
    innerWidth=()=>{
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        return document.wrtie="Inner Width :"+w;
    }

    innerHeight=()=>{
        var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
        return document.write= "Inner Height :"+h;
    }

    render(){
        document.title="Window Info";
        return(
            <div className="App" style={{height:'100%'}}  >
                <header className="App-header">
                    <p style={{padding:'5rem', textAlign:"left" }}> 
                        {this.innerWidth()}
                        <br/>
                        {this.innerHeight()}
                    </p>
                </header>
            </div>
        )
    }
}
export default Window;