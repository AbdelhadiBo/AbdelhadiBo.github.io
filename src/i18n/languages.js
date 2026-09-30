export const LANGUAGES = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
];

export const DEFAULT_LANG = "fr";

export const STORAGE_KEY = "portfolio-lang";

export const isSupportedLang = (code) =>
  LANGUAGES.some((language) => language.code === code);

export function readStoredLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLang(stored) ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}
