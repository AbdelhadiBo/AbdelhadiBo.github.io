import React from "react";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import ExperienceTimeline from "../components/timeline/ExperienceTimeline";
import EducationTimeline from "../components/timeline/EducationTimeline";
import usePageMeta from "../hooks/usePageMeta";
import { about, profile } from "../data/portfolio";

export default function About() {
  usePageMeta(
    "About",
    `About ${profile.name} — a full-stack and mobile engineer from ${profile.location} working with Laravel, Flutter, React, Java and PHP. Education, experience and stack.`
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About me</span>
            <h1 className="page-head__title">Know who I am</h1>
            <p className="page-head__sub">{about.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="about-grid">
            <Reveal className="prose">
              {about.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph} className="lead">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal as="div" delay={80}>
              <p className="fact-block__label">Languages</p>
              <ul className="chip-row mt-2">
                {about.languages.map((language) => (
                  <li key={language} className="chip">
                    {language}
                  </li>
                ))}
              </ul>

              <p className="fact-block__label mt-4">Frameworks</p>
              <ul className="chip-row mt-2">
                {about.frameworks.map((framework) => (
                  <li key={framework} className="chip">
                    {framework}
                  </li>
                ))}
              </ul>

              <p className="fact-block__label mt-4">Based in</p>
              <p className="tl-desc mt-1">{profile.city}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="container container--narrow">
          <SectionHead
            center
            eyebrow="Experience"
            id="experience-title"
            title="Professional experience"
            sub="Two internships building production software for real businesses."
          />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="section" id="education" aria-labelledby="education-title">
        <div className="container container--narrow">
          <SectionHead
            center
            eyebrow="Education"
            id="education-title"
            title="Academic journey"
            sub="A continuous path through computer engineering and full-stack web development."
          />
          <EducationTimeline />
        </div>
      </section>
    </>
  );
}
