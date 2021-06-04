import React from "react";
import "../css/MainCard.css";
import Section from "./Section";
import Intro from "./Intro";
import Container from "react-bootstrap/Container";

const MainCard = () => {
  return (
    <>
      <Container className="resume-body">
        <Section children={<Intro />} />
      </Container>
    </>
  );
};

export default MainCard;
