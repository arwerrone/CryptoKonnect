import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to='/'>Crypto Konnect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'><Button variant="outline-secondary">Home</Button></Nav.Link>
                <Nav.Link as={Link} to='/wallet'><Button variant="outline-secondary">Wallet</Button></Nav.Link>
                <Nav.Link as={Link} to='/dashboard'><Button variant="outline-secondary">Dashboard</Button></Nav.Link>
                <Nav.Link as={Link} to='/compare'><Button variant="outline-secondary">Compare</Button></Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link  as={Link} to='/getpremium'><Button variant="outline-danger">Get Premium</Button></Nav.Link>
                <Nav.Link as={Link} to='/account'><Button variant="outline-secondary">Account</Button></Nav.Link>
                <Nav.Link as={Link} to='/signin'><Button variant="outline-light">Sign in</Button></Nav.Link>
                <Nav.Link as={Link} to='/signup'><Button variant="outline-primary">Sign Up</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
