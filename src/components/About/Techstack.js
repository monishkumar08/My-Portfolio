import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiPython, DiJava, DiCss3, DiHtml5 } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "60px" }}>
      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
          <DiJava /> <br />
          <span style={{ fontSize: "0.5em" }}>Java</span>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
          <DiPython /> <br />
          <span style={{ fontSize: "0.5em" }}>Python</span>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
          <DiReact /> <br />
          <span style={{ fontSize: "0.5em" }}>React</span>
        </div>
      </Col>
<span></span>
      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
          <DiHtml5 /> <br />
          <span style={{ fontSize: "0.5em" }}>HTMl</span>
        </div>
      </Col>


      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px", width:"3em"}}>
        <div style={{ textAlign: "center" }}>
          <DiCss3 /> <br />
          <span style={{ fontSize: "0.5em" }}>CSS</span>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons" style={{ height: "120px" , width:"3em"}}>
        <div style={{ textAlign: "center" }}>
          <DiJavascript1 /> <br />
          <span style={{ fontSize: "0.5em" }}>JavaScript</span>
        </div>
      </Col>

    </Row>
  );
}

export default Techstack;
