import React from "react";
import { MdCalendarToday, MdLocationOn, MdWorkOutline } from "react-icons/md";
import Reveal from "../Reveal";
import { experience } from "../../data/portfolio";

export default function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experience.map((job, index) => (
        <Reveal
          as="article"
          key={job.id}
          className="tl-item"
          delay={index * 70}
        >
          <span className="tl-dot" aria-hidden="true" />
          <div className="tl-card">
            <h3 className="tl-title">
              {job.role} <em>@ {job.company}</em>
            </h3>

            <div className="meta tl-meta">
              <span className="meta__item">
                <MdCalendarToday aria-hidden="true" />
                {job.duration}
              </span>
              <span className="meta__item">
                <MdLocationOn aria-hidden="true" />
                {job.location}
              </span>
              <span className="meta__item">
                <MdWorkOutline aria-hidden="true" />
                {job.type}
              </span>
            </div>

            <p className="tl-desc">{job.description}</p>

            <ul className="hl-list">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {job.tech?.length ? (
              <ul className="chip-row tl-tech" aria-label="Technologies used">
                {job.tech.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <li key={tech.name} className="chip">
                      {TechIcon ? <TechIcon aria-hidden="true" /> : null}
                      {tech.name}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
