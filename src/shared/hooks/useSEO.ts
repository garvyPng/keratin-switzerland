import { useEffect } from "react";
import { seoMap } from "../seo/seoMap";

export function useSEO(lang: "en" | "de" | "ru") {
  useEffect(() => {
    const seo = seoMap[lang];

    document.title = seo.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", seo.description);
    }

    document.documentElement.lang = lang;
  }, [lang]);
}