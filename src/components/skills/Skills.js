import React from "react";
import Reveal from "../Reveal";
import { skills } from "../../data/portfolio";

export default function Skills() {
  return (
    <ul className="skill-grid">
      {skills.map((group, index) => {
        const Icon = group.icon;
        return (
          <Reveal
            as="li"
            key={group.id}
            className="skill-card"
            delay={index * 60}
          >
            <div className="skill-card__head">
              <span className="skill-card__icon" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="skill-card__title">{group.title}</h3>
              <span className="skill-card__count" aria-hidden="true">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="chip-row">
              {group.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li key={item.name} className="chip">
                    {ItemIcon ? <ItemIcon aria-hidden="true" /> : null}
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        );
      })}
    </ul>
  );
}
