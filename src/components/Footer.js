import React from "react";
import { Link } from "react-router-dom";
import { profile, navLinks, socials, CV_URL } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__title">{profile.name}</p>
            <p className="footer__text">
              Full-stack &amp; mobile engineer building modern, practical and
              user-friendly digital solutions — web applications, CRUD systems
              and database-driven products.
            </p>
            <a
              className="btn btn--ghost btn--sm mt-3"
              href={CV_URL}
              download
            >
              Download Résumé
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="footer__label">Navigate</p>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer__label">Find me online</p>
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
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
          <span>
            Designed &amp; built with React — Based in {profile.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
