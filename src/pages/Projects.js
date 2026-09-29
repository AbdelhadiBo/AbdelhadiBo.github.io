import React from "react";
import SectionHead from "../components/SectionHead";
import ProjectCard from "../components/Projects/ProjectCard";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { projects, socials, profile } from "../data/portfolio";

export default function Projects() {
  usePageMeta(
    "Projects",
    `Projects by ${profile.name} — CRUD web apps, e-commerce platforms and Android utilities built with Spring Boot, PHP, Java and JavaScript.`
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h1 className="page-head__title">
              My recent <span className="grad-text">works</span>
            </h1>
            <p className="page-head__sub">
              {projects.length} projects across Java, PHP and JavaScript — from
              Spring Boot CRUD systems to e-commerce storefronts and Android
              apps. Every one of them lives on GitHub.
            </p>
            <div className="btn-row mt-3">
              <a
                className="btn btn--ghost"
                href={socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                See everything on GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <SectionHead
            center
            eyebrow="All work"
            id="work-title"
            title="Built with care"
            sub="Each card links straight to the repository — code, README and setup instructions included."
          />

          <ul className="pcard__grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                delay={(index % 3) * 70}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
