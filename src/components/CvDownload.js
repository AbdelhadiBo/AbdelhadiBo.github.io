import React from "react";
import { FiDownload } from "react-icons/fi";
import { LANGUAGES } from "../i18n/languages";
import { useLang } from "../i18n/LanguageContext";
import { CV_FILES } from "../data/portfolio";

/**
 * Download button for the resume, driven by the language switcher.
 *
 * One button per language is rendered and only the one matching the active
 * language stays visible; the other is `hidden`, which also drops it from the
 * accessibility tree and the tab order. Keeping both in the DOM means
 * switching language only toggles visibility rather than remounting a link.
 *
 * @param {string}  className  classes forwarded to each button
 * @param {boolean} showIcon   download icon
 * @param {boolean} showBadge  FR / EN language pill
 * @param {boolean} block      full width
 */
export default function CvDownload({
  className = "",
  showIcon = true,
  showBadge = true,
  block = false,
}) {
  const { lang, t } = useLang();

  const classes = ["btn", block ? "btn--block" : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`cv-switch${block ? " cv-switch--block" : ""}`}
      key={lang}
    >
      {LANGUAGES.map((language) => {
        const file = CV_FILES[language.code];
        const isActive = language.code === lang;
        const label =
          language.code === "fr" ? t.cv.frenchLabel : t.cv.englishLabel;

        return (
          <a
            key={language.code}
            className={classes}
            href={file.url}
            download={file.file}
            lang={language.code}
            title={`${t.cv.download} — ${label}`}
            aria-label={`${t.cv.download} — ${label}`}
            aria-hidden={isActive ? undefined : true}
            tabIndex={isActive ? undefined : -1}
            hidden={!isActive}
          >
            {showIcon ? <FiDownload aria-hidden="true" /> : null}
            <span>{t.cv.download}</span>
            {showBadge ? (
              <span className="cv-switch__badge" aria-hidden="true">
                {language.label}
              </span>
            ) : null}
          </a>
        );
      })}
    </div>
  );
}
