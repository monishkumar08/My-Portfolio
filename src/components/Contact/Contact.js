import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function Contact() {
  return (
    
   <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em" ,position:"relative", marginBottom:"465px"}}>
            <strong className="purple">Contact</strong>
            </h1>
            
          </Col>
        </Row>
      </Container>
    </Container> 
  );
}

export default Contact;
