import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Monish Kumar </span>
            from <span className="purple"> Salem, Tamilnadu.</span>
            <br />
            I'm currently in my last year studying IT at Sona College of Technology. 
            I'm really dedicated to getting better at technology, and I'm always eager to learn new things. 
            I've learned a lot about software and web development, as well as data analysis and machine learning.
            <br />
            <br />
            Apart from coding, some other activities that I interest!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym Training
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
