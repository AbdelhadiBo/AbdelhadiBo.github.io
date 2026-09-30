import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "../Reveal";
import { useLang } from "../../i18n/LanguageContext";

export default function ProjectCard({ project, index = 0, delay = 0 }) {
  const { t } = useLang();
  const monogram = project.title.trim().charAt(0).toUpperCase();
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="li" className="pcard" delay={delay}>
      <div className="pcard__head">
        <span className="pcard__mono" aria-hidden="true">
          {monogram}
        </span>
        <span className="pcard__num" aria-hidden="true">
          {number}
        </span>
      </div>

      <h3 className="pcard__title">{project.title}</h3>
      <p className="pcard__desc">{project.description}</p>

      {project.tags?.length ? (
        <ul className="chip-row">
          {project.tags.map((tag) => (
            <li key={tag} className="chip chip--neutral">
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      <p className="pcard__foot">
        <FiGithub aria-hidden="true" />
        {t.ui.viewOnGithub}
        <FiArrowUpRight aria-hidden="true" />
        <a
          className="pcard__link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} ${t.ui.onGithub} (${t.ui.newTab})`}
        >
          <span className="visually-hidden">
            {project.title} {t.ui.repository}
          </span>
        </a>
      </p>
    </Reveal>
  );
}
