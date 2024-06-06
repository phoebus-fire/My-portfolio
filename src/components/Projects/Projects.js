import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fspg from "../../Assets/Projects/powergen.png";
import portfolio from "../../Assets/Projects/portfolio-project.png";
import cryptox from "../../Assets/Projects/cryptox.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My- Portfolio"
              description="An extensive portfolio showcasing a wide array of web development, design, and coding projects. Emphasizes interactive elements, user-friendly navigation, and a sleek, modern design. Highlights include innovative personal projects, successful collaborations, and professional accomplishments."
              ghLink="https://github.com/mohittguptaa/MI-store"
              demoLink="https://mi-store-one.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fspg}
              isBlog={false}
              title="Foot-step Power Generation"
              description="Our project is a stunningly designed landing page, meticulously crafted to captivate audiences with its beauty. It boasts seamless responsiveness across all devices, ensuring an immersive experience for users on desktops, tablets, and mobile phones. Welcome to a world where aesthetics meet functionality effortlessly."
              ghLink="https://github.com/mohittguptaa/techmyte.git"
              demoLink="https://techmyte.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptox}
              isBlog={false}
              title="TechMyte"
              description="Our crypto app revolutionizes the way users engage with digital currencies. Offering real-time exchange rates and dynamic graphs for all coins, it provides comprehensive insights at your fingertips. With seamless responsiveness across devices, stay informed and make informed decisions in the fast-paced world of cryptocurrency trading."
              ghLink="https://github.com/mohittguptaa/cryptox"
              demoLink="https://cryptox-india.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
