import type { MetadataRoute } from "next";
import { locales, noIndexPages, pageIds, pathFor, siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageIds
    .filter((page) => !noIndexPages.includes(page))
    .flatMap((page) =>
      locales.map((locale) => ({
        url: `${siteUrl}${pathFor(locale, page)}`,
        changeFrequency: "monthly" as const,
        priority: page === "home" ? 1 : ["privacy", "cookies", "legal"].includes(page) ? 0.2 : 0.8,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${pathFor(l, page)}`])),
        },
      })),
    );
}
