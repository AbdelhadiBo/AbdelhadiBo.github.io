import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "../Reveal";

export default function ProjectCard({ project, index = 0, delay = 0 }) {
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
        View on GitHub
        <FiArrowUpRight aria-hidden="true" />
        <a
          className="pcard__link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub (opens in a new tab)`}
        >
          <span className="visually-hidden">{project.title} repository</span>
        </a>
      </p>
    </Reveal>
  );
}
