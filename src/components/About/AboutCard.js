import React from "react";
import Card from "react-bootstrap/Card";
import { MdWorkOutline, MdLocationOn, MdCalendarToday, MdSchool } from "react-icons/md";
import { FaLaravel } from "react-icons/fa";
import { SiFlutter, SiDart, SiMysql, SiTailwindcss, SiSqlite } from "react-icons/si";

function AboutCard() {
  const etudes = [
    {
      id: 1,
      title: "4ème année — Cycle Ingénieur en Génie Informatique",
      school: "Ecole Nouvelle des Sciences de l'Informatique (ENSI Tanger)",
      duration: "En cours",
      location: "Tanger, Maroc",
      description:
        "Formation d'ingénieur en génie informatique, avec un focus sur l'architecture logicielle, le développement full-stack et les bonnes pratiques d'ingénierie.",
    },
    {
      id: 2,
      title: "3ème année DCA — Génie Informatique",
      school: "ENSA Tanger",
      duration: "2024 – 2025",
      location: "Tanger, Maroc",
      description:
        "DCA (Diplôme de Cycle d'Approfondissement) en Génie Informatique, avec un tronc commun scientifique solide en mathématiques, algorithmique et informatique.",
    },
    {
      id: 3,
      title: "Développement Digital — Option Web Full Stack",
      school: "ISTAG-Meknes",
      duration: "2022 – 2024",
      location: "Bab Tizimi, Meknes",
      description:
        "Diplôme de technicien spécialisé en développement digital, axé sur le développement web full stack, les bases de données et les fondamentaux de la programmation.",
    },
    {
      id: 4,
      title: "Baccalauréat — Sciences Physiques",
      school: "Lycée Almontalak - Meknes",
      duration: "2019 – 2020",
      location: "Meknes, Maroc",
      description:
        "Baccalauréat scientifique avec spécialisation en sciences physiques, base solide en mathématiques et sciences.",
    },
  ];

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
          {/* ===== INTRO ===== */}
          <div className="intro-panel">
         <p style={{ textAlign: "justify", marginBottom: 0 }}> Hello! I’m <span className="purple">Abdelhadi Bouzani</span> from{" "} <span className="purple">Morocco</span>.<br /><br />

            I’m a passionate <span className="purple">Software Developer</span> who enjoys
            building modern, practical, and user-friendly digital solutions. I have a strong
            interest in <span className="purple">web and application development</span>,
            constantly exploring new technologies, tools, and frameworks to improve my skills
            and create better solutions.<br /><br />

            I enjoy turning ideas into functional projects, solving technical problems, and
            learning through real-world challenges. I’m always looking for opportunities to
            grow, experiment with new technologies, and stay up to date with the latest trends
            in software development.<br /><br />

            Outside of coding, I enjoy going to the gym, taking on new challenges, and
            continuously working on both my professional and personal growth.

            </p>
          </div>

          {/* ===== ÉTUDES & PARCOURS ===== */}
          <div className="section-title">
            <span className="section-icon edu-icon">
              <MdSchool />
            </span>
            <h2>
              Études & <span className="purple">Parcours</span>
            </h2>
          </div>

          <div className="timeline">
            {etudes.map((edu, index) => {
              const current = index === 0;
              return (
                <div className="timeline-item" key={edu.id}>
                  <div
                    className={`timeline-dot ${current ? "dot-active" : "dot-edu"}`}
                  />
                  <div className={`timeline-card ${current ? "current" : ""}`}>
                    <h4>
                      {edu.title} <span className="at-school">@ {edu.school}</span>
                    </h4>

                    <div className="meta-row">
                      <span className="meta-chip">
                        <MdCalendarToday /> {edu.duration}
                      </span>
                      <span className="meta-chip">
                        <MdLocationOn /> {edu.location}
                      </span>
                      {current && <span className="status-badge">En cours</span>}
                    </div>

                    <p className="card-desc">{edu.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===== PROFESSIONAL EXPERIENCE ===== */}
          <div className="section-title">
            <span className="section-icon edu-icon">
              <MdWorkOutline />
            </span>
            <h2>
              Professional <span className="purple">Experience</span>
            </h2>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                className="timeline-item"
                key={exp.id}
                style={{
                  marginBottom: index === experiences.length - 1 ? 0 : undefined,
                }}
              >
                <div className="timeline-dot dot-edu" />
                <div className="timeline-card">
                  <h4>
                    {exp.role} <span className="at-school">@ {exp.company}</span>
                  </h4>

                  <div className="meta-row">
                    <span className="meta-chip">
                      <MdCalendarToday /> {exp.duration}
                    </span>
                    <span className="meta-chip">
                      <MdLocationOn /> {exp.location}
                    </span>
                    <span className="type-badge">{exp.type}</span>
                  </div>

                  <p className="card-desc">{exp.description}</p>

                  <ul className="highlight-list">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>
                        <span className="bullet-arrow">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="tech-row">
                    {exp.tech.map((t, i) => (
                      <span className="tech-chip" key={i}>
                        {t.icon && <span className="tech-chip-icon">{t.icon}</span>}
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

      <style>{`
        .quote-card-view {
          background: transparent;
          border: none;
        }

        .intro-panel {
          background: rgba(192, 132, 245, 0.04);
          border: 1px solid rgba(192, 132, 245, 0.15);
          border-radius: 18px;
          padding: 26px 28px;
        }

        /* ===== SECTION TITLES ===== */
        .section-title {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 48px;
          margin-bottom: 28px;
        }

        .section-title h2 {
          color: #fff;
          font-weight: 700;
          font-size: 1.9rem;
          margin: 0;
        }

        .section-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .edu-icon {
          color: #c084f5;
          background: linear-gradient(135deg, rgba(192,132,245,0.18), rgba(98,54,134,0.18));
          border: 1px solid rgba(192, 132, 245, 0.3);
        }

        /* ===== TIMELINE ===== */
        .timeline {
          position: relative;
          padding-left: 4px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 20px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: linear-gradient(180deg, #c084f5, rgba(98, 54, 134, 0.2));
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          padding-left: 55px;
          margin-bottom: 28px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: 11px;
          top: 22px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 4px solid #14121f;
          z-index: 1;
        }

        .dot-edu {
          background: #c084f5;
          box-shadow: 0 0 12px rgba(192, 132, 245, 0.55);
        }

        .dot-active {
          background: #4ade80;
          box-shadow: 0 0 14px rgba(74, 222, 128, 0.65);
        }

        /* ===== CARDS ===== */
        .timeline-card {
          position: relative;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(192, 132, 245, 0.18);
          border-radius: 16px;
          padding: 22px 26px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #c084f5, #623686);
        }

        .timeline-card.current {
          border-color: rgba(74, 222, 128, 0.35);
        }

        .timeline-card.current::before {
          background: linear-gradient(180deg, #4ade80, #16a34a);
        }

        .timeline-card:hover {
          transform: translateX(6px);
          border-color: rgba(192, 132, 245, 0.5);
          box-shadow: 0 10px 30px rgba(192, 132, 245, 0.12);
        }

        .timeline-card h4 {
          color: #fff;
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 10px;
        }

        .at-school {
          color: #c084f5;
          font-weight: 600;
          font-size: 0.95em;
        }

        .meta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .meta-chip {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          color: #a0a0a0;
        }

        .meta-chip svg {
          color: #c084f5;
        }

        .status-badge {
          background: rgba(74, 222, 128, 0.15);
          color: #4ade80;
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .type-badge {
          background: rgba(192, 132, 245, 0.15);
          color: #c084f5;
          padding: 3px 12px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-desc {
          text-align: justify;
          color: #d5d5d5;
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 0;
        }

        /* ===== HIGHLIGHTS ===== */
        .highlight-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 18px;
        }

        .highlight-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: #cfcfcf;
          line-height: 1.55;
        }

        .bullet-arrow {
          color: #c084f5;
          font-size: 1.2rem;
          line-height: 1.2;
          flex-shrink: 0;
        }

        /* ===== TECH CHIPS ===== */
        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }

        .tech-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(192, 132, 245, 0.08);
          border: 1px solid rgba(192, 132, 245, 0.25);
          color: #c084f5;
          padding: 5px 13px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: default;
        }

        .tech-chip:hover {
          background: rgba(192, 132, 245, 0.2);
          transform: translateY(-2px);
        }

        .tech-chip-icon {
          font-size: 0.9rem;
          display: flex;
        }

        @media (max-width: 600px) {
          .section-title h2 {
            font-size: 1.5rem;
          }
          .section-icon {
            width: 40px;
            height: 40px;
            font-size: 1.15rem;
          }
          .timeline::before {
            left: 16px;
          }
          .timeline-item {
            padding-left: 44px;
          }
          .timeline-dot {
            left: 7px;
          }
          .timeline-card {
            padding: 18px 18px;
          }
          .intro-panel {
            padding: 20px;
          }
        }
      `}</style>
    </Card>
  );
}

export default AboutCard;