import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Crypto Konnect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><Button variant="outline-secondary">Home</Button></Nav.Link>
                <Nav.Link href="#wallet"><Button variant="outline-secondary">Wallet</Button></Nav.Link>
                <Nav.Link href="#dashboard"><Button variant="outline-secondary">Dashboard</Button></Nav.Link>
                <Nav.Link href="#compare"><Button variant="outline-secondary">Compare</Button></Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="#getPremium"><Button variant="outline-danger">Get Premium</Button></Nav.Link>
                <Nav.Link href="#account"><Button variant="outline-secondary">Account</Button></Nav.Link>
                <Nav.Link href="#singIn"><Button variant="outline-light">Sing in</Button></Nav.Link>
                <Nav.Link href="#singUp"><Button variant="outline-primary">Sing Up</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
