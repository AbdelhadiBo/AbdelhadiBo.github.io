import React from "react";
import { FiExternalLink } from "react-icons/fi";
import CvDownload from "../components/CvDownload";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { useLang } from "../i18n/LanguageContext";

export default function Resume() {
  const { cv, lang, profile, t } = useLang();

  usePageMeta(
    t.resumePage.title,
    t.meta.resumeDescription(profile.name, profile.metaRole, profile.city),
    t.meta.defaultTitle
  );

  const pdfLabel =
    lang === "fr" ? t.cv.frenchLabel : t.cv.englishLabel;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.resumePage.eyebrow}</span>
            <h1 className="page-head__title">{t.resumePage.heading}</h1>
            <p className="page-head__sub">
              {t.resumePage.sub(profile.name, profile.metaRole)}
            </p>
            <div className="resume-actions mt-4">
              <CvDownload className="btn--primary" />
              <a
                className="btn btn--ghost"
                href={cv.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink aria-hidden="true" />
                {t.cv.openNewTab}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Reveal className="resume-frame" key={cv.url}>
            <object
              data={`${cv.url}#view=FitH`}
              type="application/pdf"
              aria-label={`${pdfLabel} — ${profile.name} (PDF)`}
            >
              <p className="resume-note">
                {t.resumePage.fallback}{" "}
                <a className="grad-text" href={cv.url}>
                  {t.resumePage.fallbackLink}
                </a>
                .
              </p>
            </object>
          </Reveal>
          <p className="resume-note">{t.resumePage.fallbackHint}</p>
        </div>
      </section>
    </>
  );
}
