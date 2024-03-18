import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import library from "../../Assets/Projects/library.png";
import yolo from "../../Assets/Projects/yolo.png";
import flight from "../../Assets/Projects/flight.png";
import mern from "../../Assets/Projects/MERN.png";
import rpa from "../../Assets/Projects/rpa.png";





function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yolo}
              isBlog={false}
              title="Automatic number plate recognization using yolov8"
              description="Developed an innovative approach using machine learning, 
              YOLO algorithm and computer vision to detect fake vehicle numbers.
              Conducted research on current methods and developed a solutioncombining image recognition and data analysis to detect fakevehicle numbers in real-time."
              ghLink="https://github.com/monishkumar08/Automatic-number-plate-recognization-using-yolo-v8"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management"
              description="The FrontEnd Library Management System is a dynamic web application developed using React.js, Axios, and local account session management. It offers users a seamless experience for managing library resources, including book search, checkout, and account management functionalities. The project showcases proficiency in frontend development, emphasizing secure authentication and intuitive user interface design. With its focus on practical application and potential for further enhancements"
              ghLink="https://github.com/monishkumar08/FrontEnd-Library-Management-System-using-Reactjs"
              demoLink="https://front-end-library-management-system-using-reactjs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Simple Flight Booking using PHP"              
              description="Implemented a comprehensive web application for an airline reservation system. The client-side interface was developed using Bootstrap for styling, JavaScript/jQuery for dynamic interactions, and Ajax for asynchronous data retrieval. On the server-side, PHP was used for scripting and MySQL for database management. The Apache server was connected via WAMP for seamless hosting."
              ghLink="https://github.com/monishkumar08/Simple-Flight-booking-in-php"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title="MERN-CRUD App with Real Time Updates"              
              description="
              In this project, I implemented a CRUD (Create, Read, Update, Delete) functionality to manage data effectively.💡💻
              Using the MERN (MongoDB, Express.js, React.js, Node.js) stack, 
              I developed a robust system for handling data operations seamlessly. MongoDB serves as the database, 
              Express.js powers the backend server, React.js handles the frontend user interface, and Node.js orchestrates 
              the entire application."
              ghLink="https://github.com/monishkumar08/MERN-CRUD-App-with-Real_Time-Updates"
              demomern="https://drive.google.com/file/d/122YbBqJHj7QPhwgmnKyKDqVZWKexYRiZ/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpa}
              isBlog={false}
              title="EMI-due remainder automation using UIPath Studio"              
              description="The solution involves developing a system that can automate the process of reminding customers 
              about their upcoming EMI payments and help businesses manage and track multiple EMIs efficiently.
              By implementing this solution, businesses can reduce the chances of missed payments or late fees and improve the efficiency of their EMI management process."
              ghLink="https://github.com/monishkumar08/EMI-due-remainder-automation-using-UIPath-Studio"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
