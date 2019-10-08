import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {Link } from "react-router-dom"

 



const Toolbar=props=>(   
    
  <header className="hamburger" >
    
        
            
     <Navbar bg="light" expand="lg">

  <Navbar.Brand href="https://venus.cs.qc.cuny.edu/~alta2882/cs355">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link ><Link to="/~alta2882/cs355/">Home </Link></Nav.Link>
      
      
      
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
        <NavDropdown.Item href="#action/3.4">Geo Location</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    
         
    </header>
);
export default Toolbar;