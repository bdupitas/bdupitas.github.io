import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../css/NavBar.css";
import resume from "../docs/brandon-website-resume.pdf"

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <span className="brand-text">
          {">"} bdupitas&nbsp;
          <span className="animate-cursor">
            <span> &nbsp;</span>
          </span>
        </span>
      </Navbar.Brand>
      <Nav className="justify-content-end ml-auto" >
        <Nav.Item>
          <Nav.Link eventKey="1" title="linkedin" target="_blank" href="https://www.linkedin.com/in/bdupitas/" >
            LinkedIn
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="github" target="_blank" href= "https://github.com/bdupitas">
            GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" title="resume" target="_blank" href={resume}>
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
