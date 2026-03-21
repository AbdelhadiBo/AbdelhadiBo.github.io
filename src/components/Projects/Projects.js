import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Gestion‑d‑Articles"
              description="Simple CRUD web application to manage articles built with Spring Boot and Thymeleaf."
              ghLink="https://github.com/AbdelhadiBo/Gestion-d-Articles---Spring-Boot-Thymeleaf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="EcommercePHP"
              description="E-commerce website built with PHP showcasing product listings and basic shop functionality."
              ghLink="https://github.com/AbdelhadiBo/EcommercePHP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="android-calculator"
              description="A basic calculator app for Android written in Java with standard arithmetic operations."
              ghLink="https://github.com/AbdelhadiBo/android-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="quiz-app"
              description="Quiz application built for learning and testing basic programming and development concepts."
              ghLink="https://github.com/AbdelhadiBo/quiz-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="add-produits-spring"
              description="Spring Boot project for adding and managing products, ideal for learning CRUD operations with Spring."
              ghLink="https://github.com/AbdelhadiBo/add-produits-spring"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="boutique"
              description="Simple PHP project for a boutique website, demonstrating foundational PHP and web development skills."
              ghLink="https://github.com/AbdelhadiBo/boutique"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;