import type { MetadataRoute } from "next";
import { locales, pageKeys, pathFor, siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((page) => ({
      url: `${siteUrl}${pathFor(locale, page)}`,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : ["privacy", "cookies", "legal"].includes(page) ? 0.2 : 0.8,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${pathFor(l, page)}`])) },
    })),
  );
}
