import { useEffect } from "react";
import { profile } from "../data/portfolio";

export default function usePageMeta(title, description, defaultTitle) {
  useEffect(() => {
    document.title = title ? `${title} — ${profile.name}` : defaultTitle;

    if (!description) return;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description, defaultTitle]);
}
