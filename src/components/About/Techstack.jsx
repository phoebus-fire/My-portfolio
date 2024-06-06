import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
        <h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3 />
        <h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React.js</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaJava />
        <h6>JAVA</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
        <h6>Bootstrap</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
