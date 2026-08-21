import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { MdWorkOutline, MdLocationOn, MdCalendarToday } from "react-icons/md";
import { FaLaravel } from "react-icons/fa";
import { SiFlutter, SiDart, SiMysql, SiTailwindcss, SiSqlite } from "react-icons/si";

function AboutCard() {
  const experiences = [
    {
      id: 1,
      role: "Web Developer",
      company: "Atlas Nova Solutions",
      type: "Internship",
      duration: "Jun 2026 – Aug 2026 · 3 mos",
      location: "Remote",
      description:
        "Development of a cross-platform POS (Point of Sale) system for sales and business operations management.",
      highlights: [
        "Built the application with Flutter and Dart for Desktop and Mobile.",
        "Developed the backend with Laravel and integrated REST APIs.",
        "Implemented an Offline-First architecture with SQLite and server synchronization.",
        "Developed modules: sales, purchases, products, categories, inventory, cash registers, promotions, and reports.",
        "Managed cash register sessions and automatic stock updates.",
        "Built Excel data export functionality.",
        "Designed a responsive and modern UI.",
      ],
      tech: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "REST API", icon: null },
        { name: "Excel Export", icon: null },
      ],
    },
    {
      id: 2,
      role: "Web Developer",
      company: "ONEE — Branche Eau",
      type: "Internship",
      duration: "Mar 2024 – Apr 2024 · 2 mos",
      location: "Meknes, Morocco · On-site",
      description:
        "Development of a problem management application for internal operations. Participated in full project lifecycle including needs analysis, database design, UI/UX design, and feature implementation.",
      highlights: [
        "Designed and implemented the backend with Laravel (MVC architecture, Eloquent ORM, middleware).",
        "Built a responsive and modern frontend using Tailwind CSS with reusable components.",
        "Designed and managed the MySQL database schema, relationships, and optimized queries.",
        "Implemented user authentication, role-based access control, and problem ticket workflows.",
        "Created dashboards and reporting features for tracking issues and resolutions.",
      ],
      tech: [
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PHP", icon: null },
        { name: "JavaScript", icon: null },
      ],
    },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Abdelhadi Bouzani</span> from <span className="purple">Morocco</span>.<br />
            I’m currently pursuing a degree in <span className="purple">Software Engineering</span> at <span className="purple">ENSIT</span> after completing a <span className="purple">DCA (Diploma of University Studies)</span> for one year at <span className="purple">ENSA Tanger</span>.<br /><br />
            I hold a diploma as a <span className="purple">Specialized Technician in Digital Development</span> and have gained practical experience through academic projects and professional internships, where I contributed to real-world software solutions.<br /><br />
            Passionate about technology, I continuously enhance my skills, explore new tools and frameworks, and enjoy staying at the forefront of software development trends. Outside of coding, I like going to the gym and tackling new challenges that help me grow professionally and personally.
          </p>

          <h2
            style={{
              marginTop: "40px",
              marginBottom: "30px",
              color: "#c084f5",
              fontWeight: "bold",
              fontSize: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MdWorkOutline /> Professional Experience
          </h2>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "0",
                bottom: "0",
                width: "2px",
                background: "linear-gradient(180deg, #c084f5, #623686)",
                borderRadius: "2px",
              }}
            />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                style={{
                  position: "relative",
                  paddingLeft: "55px",
                  marginBottom: index === experiences.length - 1 ? "0" : "40px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "11px",
                    top: "8px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#c084f5",
                    border: "4px solid #1a1a2e",
                    boxShadow: "0 0 10px rgba(192, 132, 245, 0.5)",
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    background: "rgba(192, 132, 245, 0.05)",
                    border: "1px solid rgba(192, 132, 245, 0.2)",
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(192, 132, 245, 0.5)";
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(192, 132, 245, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(192, 132, 245, 0.2)";
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ marginBottom: "12px" }}>
                    <h4
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.role}{" "}
                      <span style={{ color: "#c084f5", fontWeight: "600" }}>
                        @ {exp.company}
                      </span>
                    </h4>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "16px",
                        fontSize: "0.85rem",
                        color: "#a0a0a0",
                        marginTop: "6px",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <MdCalendarToday style={{ color: "#c084f5" }} /> {exp.duration}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <MdLocationOn style={{ color: "#c084f5" }} /> {exp.location}
                      </span>
                      <span
                        style={{
                          background: "rgba(192, 132, 245, 0.15)",
                          color: "#c084f5",
                          padding: "2px 10px",
                          borderRadius: "12px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      textAlign: "justify",
                      color: "#e0e0e0",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "14px",
                    }}
                  >
                    {exp.description}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0" }}>
                    {exp.highlights.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          marginBottom: "8px",
                          fontSize: "0.9rem",
                          color: "#d0d0d0",
                          lineHeight: "1.5",
                        }}
                      >
                        <span style={{ color: "#c084f5", fontSize: "1.2rem", lineHeight: "1.2", flexShrink: 0 }}>
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          background: "rgba(192, 132, 245, 0.1)",
                          border: "1px solid rgba(192, 132, 245, 0.25)",
                          color: "#c084f5",
                          padding: "5px 12px",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          transition: "all 0.2s ease",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(192, 132, 245, 0.25)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(192, 132, 245, 0.1)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {t.icon && <span style={{ fontSize: "0.9rem" }}>{t.icon}</span>}
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;