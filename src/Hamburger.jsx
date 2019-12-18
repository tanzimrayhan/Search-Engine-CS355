import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import axios from 'axios';


class Toolbar extends React.Component {
  state = {
    searchWord: '',
  }

  handleChange = event => {
    this.setState({ searchWord: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const body = {
      searchWord: this.state.searchWord
    };

    axios.post(`https://http://localhost:5000/search`, { body })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  
  render(){
    return(

  <header className="hamburger" >


    <Navbar bg="light" expand="lg">

      <Navbar.Brand href="https://venus.cs.qc.cuny.edu/~alta2882/cs355"><img src="https://image.shutterstock.com/image-vector/search-icon-one-set-web-450w-305205731.jpg" alt="LOGO" width="30" height="30" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link ><Link to="/~alta2882/cs355/" style={{ color: "grey" }}>Home </Link></Nav.Link>

          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://learn.zybooks.com/zybook/CUNYCSCI355TeitelmanFall2019">ZyBook</NavDropdown.Item>
            <NavDropdown.Item href="https://app.tophat.com/login/223762?next=%2Fe%2F223762%2Flecture%2F">TopHat</NavDropdown.Item>
            <NavDropdown.Item href="https://drive.google.com/drive/folders/1AsHhIFfQ3yNE_m2z4wswRfKh77K0UH9w">GoogleDrive</NavDropdown.Item>
            <NavDropdown.Item href="https://www.w3schools.com">W3School</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Browser" id="basic-nav-dropdown">
            <NavDropdown.Item >  <Link to="/~alta2882/cs355/browser">Navigator</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/~alta2882/cs355/window">Window</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/~alta2882/cs355/screen">Screen</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/~alta2882/cs355/location"> Location</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><Link to="/~alta2882/cs355/Geolocation">Geo Location</Link></NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="About" id="basic-nav-dropdown" >
            <NavDropdown.Item><Link to="/~alta2882/cs355/contactus">Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/~alta2882/cs355/developers">Developers</Link></NavDropdown.Item>

          </NavDropdown>
          <NavDropdown.Item><Link to="/~alta2882/cs355/searchByFile" style={{ color: "grey" }}>Search By File</Link></NavDropdown.Item>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" onChange={this.handleChange} className="mr-sm-2" />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </header>
    )
}}
export default Toolbar;