import React from "react";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import ExperienceTimeline from "../components/timeline/ExperienceTimeline";
import EducationTimeline from "../components/timeline/EducationTimeline";
import usePageMeta from "../hooks/usePageMeta";
import { useLang } from "../i18n/LanguageContext";

export default function About() {
  const { about, profile, t } = useLang();

  usePageMeta(
    t.nav.about,
    t.meta.aboutDescription(profile.name),
    t.meta.defaultTitle
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.aboutPage.eyebrow}</span>
            <h1 className="page-head__title">{t.aboutPage.title}</h1>
            <p className="page-head__sub">{about.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="about-grid">
            <Reveal className="prose">
              {about.paragraphs.slice(1).map((paragraph, index) => (
                <p key={index} className="lead">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal as="div" delay={80}>
              <p className="fact-block__label">{t.aboutPage.languagesLabel}</p>
              <ul className="chip-row mt-2">
                {about.languages.map((language) => (
                  <li key={language} className="chip">
                    {language}
                  </li>
                ))}
              </ul>

              <p className="fact-block__label mt-4">
                {t.aboutPage.frameworksLabel}
              </p>
              <ul className="chip-row mt-2">
                {about.frameworks.map((framework) => (
                  <li key={framework} className="chip">
                    {framework}
                  </li>
                ))}
              </ul>

              <p className="fact-block__label mt-4">
                {t.aboutPage.basedInLabel}
              </p>
              <p className="tl-desc mt-1">{profile.city}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="container container--narrow">
          <SectionHead
            center
            eyebrow={t.aboutPage.experienceEyebrow}
            id="experience-title"
            title={t.aboutPage.experienceTitle}
            sub={t.aboutPage.experienceSub}
          />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="section" id="education" aria-labelledby="education-title">
        <div className="container container--narrow">
          <SectionHead
            center
            eyebrow={t.aboutPage.educationEyebrow}
            id="education-title"
            title={t.aboutPage.educationTitle}
            sub={t.aboutPage.educationSub}
          />
          <EducationTimeline />
        </div>
      </section>
    </>
  );
}
