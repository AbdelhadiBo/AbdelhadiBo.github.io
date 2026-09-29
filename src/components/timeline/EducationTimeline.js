import React from "react";
import { MdLocationOn, MdSchool } from "react-icons/md";
import Reveal from "../Reveal";
import { education } from "../../data/portfolio";

export default function EducationTimeline() {
  return (
    <div className="timeline">
      {education.map((item, index) => (
        <Reveal
          as="article"
          key={item.id}
          className="tl-item"
          delay={index * 70}
        >
          <span
            className={`tl-dot${item.current ? " tl-dot--success" : ""}`}
            aria-hidden="true"
          />
          <div className={`tl-card${item.current ? " tl-card--success" : ""}`}>
            <h3 className={`tl-title${item.current ? " tl-title--success" : ""}`}>
              {item.title} <em>@ {item.school}</em>
            </h3>

            <div className="meta tl-meta">
              <span className="meta__item">
                <MdSchool aria-hidden="true" />
                {item.duration}
              </span>
              <span className="meta__item">
                <MdLocationOn aria-hidden="true" />
                {item.location}
              </span>
              {item.current ? (
                <span className="chip chip--success">In progress</span>
              ) : null}
            </div>

            <p className="tl-desc">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
