import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import buildContent from "./content";
import {
  DEFAULT_LANG,
  STORAGE_KEY,
  isSupportedLang,
  readStoredLang,
} from "./languages";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    if (isSupportedLang(next)) setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable (private mode / disabled cookies):
      // the language still works, it is just not persisted.
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, ...buildContent(lang) }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLang() must be used inside <LanguageProvider>.");
  }

  return context;
}

export { DEFAULT_LANG };
