import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { MdLocationOn, MdSchool } from "react-icons/md";
import Reveal from "./Reveal";
import { profile, CV_URL } from "../data/portfolio";

function RoleRotator({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % items.length),
      2800
    );

    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <span className="hero__role-swap" aria-hidden="true">
      {items[index]}
      <span className="hero__caret" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-name">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <Reveal as="h1" className="hero__title" id="hero-name">
              <small>Hi, I&apos;m</small>
              {profile.name}
              <span className="grad-text">.</span>
            </Reveal>

            <Reveal as="p" className="hero__role" delay={120}>
              <span className="hero__role-key" aria-hidden="true">
                &gt;
              </span>
              <span className="visually-hidden">
                {profile.roles.join(", ")}.
              </span>
              <RoleRotator items={profile.roles} />
            </Reveal>

            <Reveal as="p" className="hero__text" delay={180}>
              {profile.headline}
            </Reveal>

            <Reveal className="btn-row hero__actions" delay={240}>
              <Link className="btn btn--primary" to="/projects">
                View projects
                <FiArrowRight aria-hidden="true" />
              </Link>
              <a className="btn btn--ghost" href={CV_URL} download>
                <FiDownload aria-hidden="true" />
                Résumé
              </a>
            </Reveal>

            <Reveal className="hero__meta" delay={300}>
              <span className="hero__meta-item">
                <MdLocationOn aria-hidden="true" />
                Based in {profile.location}
              </span>
              <span className="hero__meta-item">
                <MdSchool aria-hidden="true" />
                {profile.facts[2].value}
              </span>
            </Reveal>

            <Reveal
              as="ul"
              className="facts"
              delay={340}
              aria-label="Quick facts"
            >
              {profile.facts.map((fact) => (
                <li key={fact.label} className="fact">
                  <span className="fact__label">{fact.label}</span>
                  <span className="fact__value">{fact.value}</span>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal className="hero__card" delay={140}>
            <div className="hero__photo">
              <img
                src={profile.photo}
                alt={`${profile.name}, full-stack and mobile engineer`}
                width="330"
                height="395"
                fetchPriority="high"
              />
            </div>

            <div className="hero__code">
              <div className="hero__code-bar">
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <span>profile.json</span>
              </div>
              <pre>
                <code>
                  <span className="k">{"{"}</span>
                  {"\n  "}
                  <span className="k">"role"</span>
                  {": "}
                  <span className="s">"{profile.roles[0]}"</span>
                  {",\n  "}
                  <span className="k">"basedIn"</span>
                  {": "}
                  <span className="s">"{profile.city}"</span>
                  {",\n  "}
                  <span className="k">"stack"</span>
                  {": ["}
                  {profile.stack.map((item, i) => (
                    <React.Fragment key={item}>
                      {i ? ", " : ""}
                      <span className="s">"{item}"</span>
                    </React.Fragment>
                  ))}
                  {"]\n"}
                  <span className="k">{"}"}</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
