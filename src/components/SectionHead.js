import React from "react";
import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  sub,
  id,
  center = false,
  split = false,
  action = null,
  className = "",
}) {
  const classes = [
    "section-head",
    center ? "section-head--center" : "",
    split ? "section-head--split" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const text = (
    <div className="section-head__text">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  );

  return (
    <Reveal className={classes} as="div">
      {split ? (
        <>
          {text}
          {action ? <div className="btn-row">{action}</div> : null}
        </>
      ) : (
        text
      )}
    </Reveal>
  );
}
