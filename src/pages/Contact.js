import React from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionHead from "../components/SectionHead";
import ContactGrid from "../components/contact/ContactGrid";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { profile, CV_URL } from "../data/portfolio";

export default function Contact() {
  usePageMeta(
    "Contact",
    `Contact ${profile.name} — ${profile.roles[0].toLowerCase()} based in ${profile.city}. Reach me on WhatsApp, LinkedIn or GitHub.`
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="page-head__title">
              Let&apos;s talk about <span className="grad-text">your project</span>
            </h1>
            <p className="page-head__sub">
              I&apos;m based in {profile.city} and build web applications,
              mobile and desktop apps. Pick the channel you prefer.
            </p>
            <div className="btn-row mt-4">
              <a
                className="btn btn--primary"
                href="https://wa.me/+212632010159"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message me on WhatsApp
              </a>
              <a className="btn btn--ghost" href={CV_URL} download>
                <FiDownload aria-hidden="true" />
                Résumé
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="channels-title">
        <div className="container">
          <SectionHead
            center
            eyebrow="Channels"
            id="channels-title"
            title="Where to find me"
            sub="Fastest replies usually come from WhatsApp, but I read everything."
          />
          <ContactGrid />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <Reveal className="cta-band">
            <span className="eyebrow">Next step</span>
            <h2 className="cta-band__title">Prefer to browse the work first?</h2>
            <p className="cta-band__text">
              Every project is public on GitHub, with the code and setup notes.
            </p>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" to="/projects">
                See the projects
              </Link>
              <Link className="btn btn--ghost" to="/about">
                Read about me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
