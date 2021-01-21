import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/NavBar.css";

export default function NavBar(props) {
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top navbar-logo"
        />{" "}
        Peter Apps
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/films">
            Films
          </Nav.Link>
          <Nav.Link as={Link} to="/minisites">
            Minisites
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
