import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp, FaArrowDown } from "react-icons/fa";

function Home() {
  const socialLinks = [
    {
      href: "https://github.com/AbdelhadiBo",
      icon: <AiFillGithub />,
      color: "#c084f5",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/abdelhadi-bouzani-609488254/",
      icon: <FaLinkedinIn />,
      color: "#0077b5",
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/+212632010159",
      icon: <FaWhatsapp />,
      color: "#25d366",
      label: "WhatsApp",
    },
  ];

  return (
    <section>
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center" style={{ minHeight: "85vh" }}>
            {/* Left Content */}
            <Col md={7} className="home-header" style={{ paddingLeft: "20px" }}>
              {/* Code-style greeting */}
              <div
                style={{
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  fontSize: "0.9rem",
                  color: "#666",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#c084f5" }}>const</span>
                <span style={{ color: "#e0b0ff" }}>developer</span>
                <span style={{ color: "#fff" }}>=</span>
                <span style={{ color: "#a0d2a0" }}>"Abdelhadi Bouzani"</span>
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "18px",
                    background: "#c084f5",
                    animation: "blink 1s step-end infinite",
                    marginLeft: "4px",
                  }}
                />
              </div>

              <h1
                style={{
                  fontSize: "3.2em",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  marginBottom: "15px",
                  letterSpacing: "-1px",
                }}
              >
                Hi, I'm{" "}
                <span
                  style={{
                    color: "#c084f5",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Abdelhadi
                  <svg
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "0",
                      width: "100%",
                      height: "12px",
                    }}
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8 T200,8"
                      fill="none"
                      stroke="#c084f5"
                      strokeWidth="3"
                      opacity="0.4"
                    />
                  </svg>
                </span>
              </h1>

              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "500",
                  color: "#a0a0a0",
                  marginBottom: "30px",
                  minHeight: "50px",
                }}
              >
                <Type />
              </div>

             
              {/* Social + CTA Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
              

              </div>
            </Col>

            {/* Right Image */}
            <Col
              md={5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Decorative circles */}
              <div
                style={{
                  position: "absolute",
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  border: "1px solid rgba(192, 132, 245, 0.1)",
                  animation: "spin-slow 20s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  border: "1px solid rgba(192, 132, 245, 0.15)",
                  animation: "spin-slow 15s linear infinite reverse",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  animation: "float 5s ease-in-out infinite",
                }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                    maxHeight: "380px",
                    filter: "drop-shadow(0 15px 40px rgba(192, 132, 245, 0.2))",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "bounce 2s infinite",
            cursor: "pointer",
          }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >

          <div
            style={{
              width: "1px",
              height: "30px",
              background:
                "linear-gradient(180deg, #c084f5, transparent)",
            }}
          />
        </div>
      </Container>

      <Home2 />

      {/* Social Section */}
      <Container>
        <Row style={{ paddingTop: "60px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "0.85rem",
                  color: "#666",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  fontWeight: "500",
                }}
              >
                Let's Connect
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "rgba(192, 132, 245, 0.05)",
                      border: "1px solid rgba(192, 132, 245, 0.15)",
                      color: "#b0b0b0",
                      padding: "12px 24px",
                      borderRadius: "10px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${social.color}15`;
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(192, 132, 245, 0.05)";
                      e.currentTarget.style.borderColor =
                        "rgba(192, 132, 245, 0.15)";
                      e.currentTarget.style.color = "#b0a0a0";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ color: social.color, fontSize: "1.1rem" }}>
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </section>
  );
}

export default Home;