import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
<p style={{ textAlign: "justify" }}>
  Hello! I’m <span className="purple">Abdelhadi Bouzani</span> from <span className="purple">Morocco</span>.<br />
  I’m currently pursuing a degree in <span className="purple">Software Engineering</span> at <span className="purple">ENSIT</span> after completing a <span className="purple">DCA (Diploma of University Studies)</span> for one year at <span className="purple">ENSA Tanger</span>.<br /><br />
  I hold a diploma as a <span className="purple">Specialized Technician in Digital Development</span> and have gained practical experience through academic projects and a professional internship at <span className="purple">ONEE</span>, where I contributed to real-world software solutions.<br /><br />
  Passionate about technology, I continuously enhance my skills, explore new tools and frameworks, and enjoy staying at the forefront of software development trends. Outside of coding, I like going to the gym and tackling new challenges that help me grow professionally and personally.
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
         
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            
            <li className="about-activity">
              🏋️ Sports & Fitness
            </li>
            
          </ul>
        
            

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
