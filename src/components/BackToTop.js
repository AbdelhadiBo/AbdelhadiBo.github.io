import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLang } from "../i18n/LanguageContext";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${visible ? " is-visible" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      aria-label={t.ui.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}
