import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const ContactUs = () => {
  return (
      <div className="App" style={{height:'100%'}}>
          <header className="App-header">
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
              <p>Email: tanzim.ali82@qmail.cuny.edu</p>
              <p>Phone: +17174303482</p>
              
              
              
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </header>
    </div>
  );
};

export default ContactUs;