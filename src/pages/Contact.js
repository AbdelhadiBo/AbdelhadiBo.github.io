import React from "react";
import { Link } from "react-router-dom";
import SectionHead from "../components/SectionHead";
import ContactGrid from "../components/contact/ContactGrid";
import ContactForm from "../components/ContactForm";
import CvDownload from "../components/CvDownload";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { useLang } from "../i18n/LanguageContext";

export default function Contact() {
  const { profile, t } = useLang();

  usePageMeta(
    t.contactPage.title,
    t.meta.contactDescription(
      profile.name,
      profile.metaRole,
      profile.city
    ),
    t.meta.defaultTitle
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.contactPage.eyebrow}</span>
            <h1 className="page-head__title">
              {t.contactPage.titleBefore}{" "}
              <span className="grad-text">{t.contactPage.titleAccent}</span>
            </h1>
            <p className="page-head__sub">{t.contactPage.sub(profile.city)}</p>
            <div className="btn-row mt-4">
              <a
                className="btn btn--primary"
                href="https://wa.me/+212632010159"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contactPage.whatsappCta}
              </a>
              <CvDownload className="btn--ghost" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="channels-title">
        <div className="container">
          <SectionHead
            center
            eyebrow={t.contactPage.sectionEyebrow}
            id="channels-title"
            title={t.contactPage.sectionTitle}
            sub={t.contactPage.sectionSub}
          />
          <ContactGrid />
        </div>
      </section>

      <section className="section" aria-labelledby="contact-form-title">
        <div className="container container--narrow">
          <ContactForm />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <Reveal className="cta-band">
            <span className="eyebrow">{t.contactPage.ctaEyebrow}</span>
            <h2 className="cta-band__title">{t.contactPage.ctaTitle}</h2>
            <p className="cta-band__text">{t.contactPage.ctaText}</p>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" to="/projects">
                {t.contactPage.ctaProjects}
              </Link>
              <Link className="btn btn--ghost" to="/about">
                {t.contactPage.ctaAbout}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
