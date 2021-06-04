import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <span>
          {">"} bdupitas&nbsp;
          <span className="animate-cursor">
            <span> &nbsp;</span>
          </span>
        </span>
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            NavLink 1 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            NavLink 2 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            NavLink 3 content
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
