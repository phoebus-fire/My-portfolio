import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shiva Shukla </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I am currently doing Btech in Electrical and Electronics Engineering From 
            <br />
            Banasthali Vidyapith, Rajasthan
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Empty your mind. Be formless, shapeless like water."{" "}
          </p>
          <footer className="blockquote-footer">Bruce Lee </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
