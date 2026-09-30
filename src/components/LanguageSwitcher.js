import React from "react";
import { LANGUAGES } from "../i18n/languages";
import { useLang } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();

  const activeIndex = Math.max(
    0,
    LANGUAGES.findIndex((language) => language.code === lang)
  );

  return (
    <div
      className="langswitch"
      role="group"
      aria-label={`${t.ui.language} — ${t.ui.languageShort}`}
      style={{ "--i": activeIndex }}
    >
      <span className="langswitch__thumb" aria-hidden="true" />

      {LANGUAGES.map((language) => {
        const isActive = language.code === lang;

        return (
          <button
            key={language.code}
            type="button"
            className={`langswitch__btn${isActive ? " is-active" : ""}`}
            aria-pressed={isActive}
            lang={language.code}
            title={language.name}
            onClick={() => setLang(language.code)}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
