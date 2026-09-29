import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Hero from "../components/Hero";
import SectionHead from "../components/SectionHead";
import Skills from "../components/skills/Skills";
import ProjectCard from "../components/Projects/ProjectCard";
import ContactGrid from "../components/contact/ContactGrid";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { about, projects, profile, CV_URL } from "../data/portfolio";

const featured = projects.slice(0, 3);

export default function Home() {
  usePageMeta(
    undefined,
    `${profile.name} — Full-Stack & Mobile Engineer from ${profile.location}. Building modern web applications, mobile apps and database-driven solutions with Laravel, Flutter and React.`
  );

  return (
    <>
      <Hero />

      <section className="section section--tight" id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal className="prose">
              <span className="eyebrow">About me</span>
              <h2 className="section-title">A developer who ships real products</h2>
              <p className="lead mt-2">
                {about.lead}
              </p>
              <p className="lead mt-2">
                {about.paragraphs[1]}
              </p>
              <div className="btn-row mt-3">
                <Link className="btn btn--ghost" to="/about">
                  Read the full story
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80} as="div">
              <div className="quote-card">
                <p className="quote-card__label">Languages</p>
                <p className="quote-card__text">
                  Proficient in JavaScript, PHP, Java, C++ and SQL.
                </p>
              </div>
              <div className="quote-card">
                <p className="quote-card__label">Interests</p>
                <ul className="chip-row mt-2">
                  {about.interests.map((interest) => (
                    <li key={interest} className="chip">
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="quote-card">
                <p className="quote-card__label">Role</p>
                <p className="quote-card__text">
                  {profile.roles[0]}, based in {profile.city}.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <SectionHead
            eyebrow="Skillset"
            id="skills-title"
            title={
              <>
                Technologies I build <span className="grad-text">with</span>
              </>
            }
            sub="A pragmatic stack across frontend, backend, mobile, data and tooling — used on real client and academic projects."
          />
          <Skills />
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <SectionHead
            split
            eyebrow="Selected work"
            id="projects-title"
            title="Recent projects"
            sub="A few things I have designed, built and shipped — from Spring Boot CRUD apps to PHP storefronts and Android utilities."
            action={
              <Link className="btn btn--ghost" to="/projects">
                All projects
                <FiArrowRight aria-hidden="true" />
              </Link>
            }
          />

          <ul className="pcard__grid">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                delay={index * 70}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" id="contact">
        <div className="container">
          <Reveal className="cta-band">
            <span className="eyebrow">Contact</span>
            <h2 className="cta-band__title">
              Let&apos;s build something together
            </h2>
            <p className="cta-band__text">
              Based in {profile.city}. The fastest way to reach me is WhatsApp or
              LinkedIn.
            </p>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" to="/contact">
                Contact me
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a className="btn btn--ghost" href={CV_URL} download>
                Résumé
              </a>
            </div>

            <div className="mt-4">
              <ContactGrid />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
