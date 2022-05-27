import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add-user">
              Add User
            </Nav.Link>
            <Nav.Link as={Link} to="/get-users">
              Get Users
            </Nav.Link>
            <Nav.Link as={Link} to="/add-role">
              Add Roles
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
