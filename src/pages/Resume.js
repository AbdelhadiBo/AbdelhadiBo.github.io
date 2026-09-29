import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { profile, CV_URL } from "../data/portfolio";

export default function Resume() {
  usePageMeta(
    "Resume",
    `Résumé of ${profile.name} — ${profile.roles[0].toLowerCase()} based in ${profile.city}. Download the PDF or read it online.`
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Résumé</span>
            <h1 className="page-head__title">Curriculum vitae</h1>
            <p className="page-head__sub">
              Education, professional experience and technical skills in one
              document — {profile.name}, {profile.roles[0].toLowerCase()}.
            </p>
            <div className="resume-actions mt-4">
              <a className="btn btn--primary" href={CV_URL} download>
                <FiDownload aria-hidden="true" />
                Download CV
              </a>
              <a
                className="btn btn--ghost"
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink aria-hidden="true" />
                Open in new tab
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Reveal className="resume-frame">
            <object
              data={`${CV_URL}#view=FitH`}
              type="application/pdf"
              aria-label={`Résumé of ${profile.name} (PDF)`}
            >
              <p className="resume-note">
                Your browser can&apos;t display the PDF inline.{" "}
                <a className="grad-text" href={CV_URL}>
                  Download the CV instead
                </a>
                .
              </p>
            </object>
          </Reveal>
          <p className="resume-note">
            If the preview does not load, use the download button above.
          </p>
        </div>
      </section>
    </>
  );
}
