import React,{Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Button} from 'react-bootstrap';


class Developers extends Component{
    render () {
        document.title="Developers";
        return(
            <div className="App" style={{height:'100%'}}  >
                <header className="App-header">
                <Jumbotron className="App" style={{ color: 'Black' }}>
                    <h1>Hello!</h1>
                    <p>
                        This App has been developed by Tanzim Ali. I am a junior from Queens College majoring in Computer Science. Click the button below to learn more about me and my projects.
                    </p>
                    <p>
                        <Button href="https://github.com/tanzimrayhan" variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>

                </header>
            </div>

        );
    };
}
export default Developers;
