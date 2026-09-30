import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Hero from "../components/Hero";
import SectionHead from "../components/SectionHead";
import Skills from "../components/skills/Skills";
import ProjectCard from "../components/Projects/ProjectCard";
import ContactGrid from "../components/contact/ContactGrid";
import CvDownload from "../components/CvDownload";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { useLang } from "../i18n/LanguageContext";

export default function Home() {
  const { about, profile, projects, t } = useLang();
  const featured = projects.slice(0, 3);

  usePageMeta(
    undefined,
    t.meta.homeDescription(profile.name, profile.city),
    t.meta.defaultTitle
  );

  return (
    <>
      <Hero />

      <section className="section section--tight" id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal className="prose">
              <span className="eyebrow">{t.home.aboutEyebrow}</span>
              <h2 className="section-title">{t.home.aboutTitle}</h2>
              <p className="lead mt-2">{about.lead}</p>
              <p className="lead mt-2">{about.paragraphs[1]}</p>
              <div className="btn-row mt-3">
                <Link className="btn btn--ghost" to="/about">
                  {t.home.readFullStory}
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80} as="div">
              <div className="quote-card">
                <p className="quote-card__label">{t.home.languagesLabel}</p>
                <p className="quote-card__text">{t.home.languagesText}</p>
              </div>
              <div className="quote-card">
                <p className="quote-card__label">{t.home.interestsLabel}</p>
                <ul className="chip-row mt-2">
                  {about.interests.map((interest) => (
                    <li key={interest} className="chip">
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="quote-card">
                <p className="quote-card__label">{t.home.roleLabel}</p>
                <p className="quote-card__text">
                  {t.home.roleText(profile.roles[0], profile.city)}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <SectionHead
            eyebrow={t.home.skillsEyebrow}
            id="skills-title"
            title={
              t.home.skillsTitleAccent ? (
                <>
                  {t.home.skillsTitleBefore}{" "}
                  <span className="grad-text">{t.home.skillsTitleAccent}</span>
                </>
              ) : (
                t.home.skillsTitleBefore
              )
            }
            sub={t.home.skillsSub}
          />
          <Skills />
        </div>
      </section>

      <section className="section" id="projects" aria-labelledby="projects-title">
        <div className="container">
          <SectionHead
            split
            eyebrow={t.home.projectsEyebrow}
            id="projects-title"
            title={t.home.projectsTitle}
            sub={t.home.projectsSub}
            action={
              <Link className="btn btn--ghost" to="/projects">
                {t.home.allProjects}
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
            <span className="eyebrow">{t.home.contactEyebrow}</span>
            <h2 className="cta-band__title">{t.home.contactTitle}</h2>
            <p className="cta-band__text">{t.home.contactText(profile.city)}</p>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" to="/contact">
                {t.home.contactCta}
                <FiArrowRight aria-hidden="true" />
              </Link>
              <CvDownload className="btn--ghost" />
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
