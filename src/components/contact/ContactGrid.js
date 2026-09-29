import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";
import { socials } from "../../data/portfolio";

export default function ContactGrid() {
  return (
    <ul className="contact-grid">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <Reveal as="li" key={social.label} delay={index * 70}>
            <a
              className="contact-card"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--c": social.color }}
            >
              <span className="contact-card__icon" aria-hidden="true">
                <Icon />
              </span>
              <span>
                <span className="contact-card__label">{social.label}</span>
                <span className="contact-card__value">{social.handle}</span>
              </span>
              <FiArrowUpRight className="contact-card__arrow" aria-hidden="true" />
            </a>
          </Reveal>
        );
      })}
    </ul>
  );
}
