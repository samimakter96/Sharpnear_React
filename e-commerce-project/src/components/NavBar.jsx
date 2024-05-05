import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav>
          <button className="btn border-info">
            Cart <span>0</span>
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
