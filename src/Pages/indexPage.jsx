import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class indexPage extends Component {
    render() {

        return (
            <div className="App" style={{ height: '100%' }}>
                <header className="App-header" >
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormControl type="text" placeholder="Site to Search"  className="mr-sm-2" />
                        <button type="submit" variant="outline-success">Index</button>
                    </Form>
                </header>
            </div>
        )
    }
}

export default indexPage;