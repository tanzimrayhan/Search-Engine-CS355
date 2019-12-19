import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class indexPage extends Component {
    state = {
        word: '',
      }
    
      handleChange = event => {
        this.setState({ word: event.target.value });
        
      }
    
      handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.word);
    
        
    
        
    
        axios.post(`http://localhost:5000/index`, {
          word:this.state.word
        })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render() {

        return (
            <div className="App" style={{ height: '100%' }}>
                <header className="App-header" >
                <Form inline  onSubmit={this.handleSubmit}>
          <FormControl type="text" placeholder="Search" onChange={this.handleChange}  className="mr-sm-2" />
          <button type="submit"  variant="outline-success">Index</button>
        </Form>
                </header>
            </div>
        )
    }
}

export default indexPage;