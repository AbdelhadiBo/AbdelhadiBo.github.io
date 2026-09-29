import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiX, FiArrowUpRight } from "react-icons/fi";
import { profile, navLinks, socials, CV_URL } from "../data/portfolio";
import useScrollProgress from "../hooks/useScrollProgress";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
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
            aria-label={`${profile.name} — home`}
          >
            <span className="nav__mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="nav__name">
              {profile.name}
              <small>Full-Stack &amp; Mobile Engineer</small>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Main">
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
            <a
              className="btn btn--ghost btn--icon nav__github"
              href={socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${socials[0].label} profile (opens in a new tab)`}
            >
              <GithubIcon aria-hidden="true" />
            </a>

            <a className="btn btn--primary btn--sm nav__cta" href={CV_URL} download>
              Résumé
            </a>

            <button
              ref={toggleRef}
              type="button"
              className={`nav__burger${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
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
        aria-label="Site menu"
      >
        <button
          type="button"
          className="btn btn--icon drawer__close"
          onClick={() => {
            setOpen(false);
            toggleRef.current?.focus();
          }}
          aria-label="Close menu"
        >
          <FiX aria-hidden="true" />
        </button>

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
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{link.label}</span>
                <FiArrowUpRight aria-hidden="true" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="drawer__foot" style={{ "--i": navLinks.length }}>
          <a
            className="btn btn--ghost btn--block"
            href={CV_URL}
            download
          >
            Download Résumé
          </a>

          <span className="drawer__label">Find me online</span>

          <div className="drawer__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                className="social-btn"
                style={{ "--c": social.color }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (opens in a new tab)`}
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
