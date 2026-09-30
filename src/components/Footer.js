import React from "react";
import { Link } from "react-router-dom";
import CvDownload from "./CvDownload";
import { socials } from "../data/portfolio";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { navLinks, profile, t } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__title">{profile.name}</p>
            <p className="footer__text">{t.footer.text}</p>
            <CvDownload className="btn--ghost btn--sm mt-3" />
          </div>

          <nav aria-label={t.ui.footerNavigation}>
            <p className="footer__label">{t.footer.navigate}</p>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer__label">{t.footer.findMeOnline}</p>
            <ul className="footer__links">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        aria-hidden="true"
                        className="footer__icon"
                        style={{ color: social.color }}
                      />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t.footer.rights(year, profile.name)}</span>
          <span>{t.footer.credit(profile.city)}</span>
        </div>
      </div>
    </footer>
  );
}
