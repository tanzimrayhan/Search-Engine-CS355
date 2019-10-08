import React,{Component} from 'react'
import '../App.css'

class Window extends Component{
    //function
    innerMeasurements=()=>{
        var w = window.innerWidth;
        var h = window.innerHeight;
        return document.write= "Inner Width :"+w+"  Inner Height :"+h;
            

        
        
        

    }

    render(){
        document.title="Window Info";
        return(
            <div className="App" style={{height:'100%'}}  >
                <header className="App-header">
                    <p style={{padding:'5rem', }}> 
                        {this.innerMeasurements()}
                    </p>
                </header>
            </div>
        )
    }
}
export default Window;