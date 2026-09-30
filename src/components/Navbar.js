import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import CvDownload from "./CvDownload";
import { socials } from "../data/portfolio";
import useScrollProgress from "../hooks/useScrollProgress";
import { useLang } from "../i18n/LanguageContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
  const { navLinks, profile, t } = useLang();
  const GithubIcon = socials[0].icon;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.body.classList.add("is-locked");
    document.addEventListener("keydown", onKeyDown);
    drawerRef.current?.querySelector("a")?.focus();

    return () => {
      document.body.classList.remove("is-locked");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav__inner">
          <Link
            to="/"
            className="nav__brand"
            aria-label={`${profile.name} — ${t.nav.home.toLowerCase()}`}
          >
            <span className="nav__name">
              {profile.name}
              <small>{t.ui.roleTagline}</small>
            </span>
          </Link>

          <nav className="nav__links" aria-label={t.ui.mainNavigation}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `nav__link${isActive ? " is-active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <LanguageSwitcher />

            <a
              className="btn btn--ghost btn--icon nav__github"
              href={socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.ui.githubProfile} (${t.ui.newTab})`}
            >
              <GithubIcon aria-hidden="true" />
            </a>

            <CvDownload
              className="btn--primary btn--sm nav__cta"
              showIcon={false}
            />

            <button
              ref={toggleRef}
              type="button"
              className={`nav__burger${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="nav__progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      <div
        id="mobile-menu"
        ref={drawerRef}
        className={`drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.ui.siteMenu}
      >
        <ul className="drawer__list">
          {navLinks.map((link, index) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                style={{ "--i": index }}
                className={({ isActive }) =>
                  `drawer__link${isActive ? " is-active" : ""}`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="drawer__foot" style={{ "--i": navLinks.length }}>
          <div className="drawer__lang">
            <span className="drawer__label">{t.ui.language}</span>
            <LanguageSwitcher />
          </div>

          <CvDownload className="btn--ghost" block />

          <span className="drawer__label">{t.ui.findMeOnline}</span>

          <div className="drawer__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                className="social-btn"
                style={{ "--c": social.color }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (${t.ui.newTab})`}
              >
                <span className="social-btn__icon" aria-hidden="true">
                  <social.icon />
                </span>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
