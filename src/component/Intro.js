import React from "react";
import Image from 'react-bootstrap/Image'
import ProfilePhoto from "../docs/bran.png"
import Col from 'react-bootstrap/Col'
import "../css/Intro.css"

// profile photo / name and description

const Intro = () => {
  return <>
  <Col xs={4}>
    <Image className="profile-photo" src={ProfilePhoto} rounded/>
  </Col> 
  <Col>
  <h1 className="top-name">Brandon Dupitas</h1>
  <p>Aspiring Developer based in the Los Angeles Area.</p>
  </Col>
   </>;
};

export default Intro
