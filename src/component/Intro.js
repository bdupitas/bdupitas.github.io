import React from "react";
import Image from 'react-bootstrap/Image'
import ProfilePhoto from "../docs/bran.png"
import Col from 'react-bootstrap/Col'
import "../css/Intro.css"

const Intro = () => {
  return <>
  <Col xs={6}>
    <Image className="profile-photo" src={ProfilePhoto} rounded/>
  </Col> 
   </>;
};

export default Intro
