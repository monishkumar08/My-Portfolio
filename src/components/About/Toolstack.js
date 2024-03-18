import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      

      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
        <SiVisualstudiocode />
        <span style={{ fontSize: "0.5em" }}>VScode</span>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
        <SiPostman />
        <span style={{ fontSize: "0.5em" }}>Postman</span>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
        <SiVercel /> <br></br>
        <span style={{ fontSize: "0.5em" }}>vercel</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
