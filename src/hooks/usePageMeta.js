import { useEffect } from "react";

const SITE_NAME = "Abdelhadi Bouzani";

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} — ${SITE_NAME}`
      : `${SITE_NAME} | Full-Stack & Mobile Engineer`;

    if (!description) return;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
}
