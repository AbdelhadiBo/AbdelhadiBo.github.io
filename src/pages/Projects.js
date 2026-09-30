import React from "react";
import SectionHead from "../components/SectionHead";
import ProjectCard from "../components/Projects/ProjectCard";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { socials } from "../data/portfolio";
import { useLang } from "../i18n/LanguageContext";

export default function Projects() {
  const { profile, projects, t } = useLang();

  usePageMeta(
    t.projectsPage.title,
    t.meta.projectsDescription(profile.name),
    t.meta.defaultTitle
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.projectsPage.eyebrow}</span>
            <h1 className="page-head__title">
              {t.projectsPage.titleBefore}{" "}
              <span className="grad-text">{t.projectsPage.titleAccent}</span>
            </h1>
            <p className="page-head__sub">{t.projectsPage.sub(projects.length)}</p>
            <div className="btn-row mt-3">
              <a
                className="btn btn--ghost"
                href={socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.projectsPage.githubCta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <SectionHead
            center
            eyebrow={t.projectsPage.sectionEyebrow}
            id="work-title"
            title={t.projectsPage.sectionTitle}
            sub={t.projectsPage.sectionSub}
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
