import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import { UserAuth } from "../auth/auth";

function NavigationBar() {
  const { auth, setAuth } = useContext(UserAuth);

  return (
    <>
      <Navbar style={{ backgroundColor: "rgb(28, 142, 241)" }} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Insight</Navbar.Brand>
          <Nav className="me-auto">
            {auth === 1 && (
              <>
                <Nav.Link as={Link} to="/add-user">
                  Add User
                </Nav.Link>
                <Nav.Link as={Link} to="/get-users">
                  Get Users
                </Nav.Link>
                <Nav.Link as={Link} to="/add-role">
                  Add Role
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
