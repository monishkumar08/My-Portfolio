import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        <p>
              <h3>Developed by <span className="purple">Monish Kumar </span></h3>
            </p>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© 2024 <span className="purple">Mk </span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/monishkumar08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/R-Monish-Kumar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
          </ul>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
