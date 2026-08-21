import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

function Footer() {  const [hovered, setHovered] = useState(null);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Abdelhadi Bouzani</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">

        
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AbdelhadiBo"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
            

              >
                <AiFillGithub />
              </a>
            </li>
       
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abdelhadi-bouzani-609488254/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#0077b5" }}

              >
                <FaLinkedinIn />
              </a>
            </li>

              <li className="social-icons">
              <a
                href="https://wa.me/+212632010159"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                        
                style={{ color: "#25d366" }}


              >
                
                <FaWhatsapp />
              </a>
            </li>

              
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
