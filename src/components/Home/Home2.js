import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AbdelhadiBouzani.png";
import Tilt from "react-parallax-tilt";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
<p className="home-about-body">
  I’m a Software Engineering student passionate about building modern,
  efficient, and user-friendly web applications. I enjoy transforming
  ideas into real-world digital solutions while continuously improving
  my technical skills.
  <br />
  <br />
  I hold a diploma as a Specialized Technician in Digital Development,
  and I am currently pursuing my studies in Computer Engineering. I have
  hands-on experience through academic projects and a professional
  internship where I worked on real-world applications.
  <br />
  <br />
  I’m proficient in
  <i>
    <b className="purple">
      {" "}
      JavaScript, PHP, Java, C++, and SQL{" "}
    </b>
  </i>
  — and I enjoy working on both frontend and backend development.
  <br />
  <br />
  My main interests include developing
  <i>
    <b className="purple">
      {" "}
      Web Applications, CRUD Systems, and Database-Driven Solutions{" "}
    </b>
  </i>
  with a focus on clean design and performance.
  <br />
  <br />
  Whenever possible, I love building projects using
  <b className="purple"> Vue.js </b>,{" "}
  <b className="purple"> Laravel </b>, and{" "}
  <i>
    <b className="purple"> Java (JSP/Servlets)</b>
  </i>
    to create scalable and maintainable applications.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img 
    src={myImg} 
    alt="avatar"
    style={{
      width: "270px",
      height: "290px",
      objectFit: "cover",
      borderRadius: "60px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      border: "4px solid rgba(255,255,255,0.1)",
      transition: "0.3s"
    }}
    onMouseOver={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 15px 40px rgba(138,43,226,0.6)";
    }}
    onMouseOut={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    }}
  />
</div>

          </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
