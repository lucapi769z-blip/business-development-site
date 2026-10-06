import type { Metadata } from "next";
import { getDict } from "@/content";
import { locales, noIndexPages, pathFor, siteUrl, type Locale, type PageId } from "./i18n";

// Canonical per language, hreflang between equivalent pages, English as x-default (docs/03 §3).
export function pageMetadata(locale: Locale, page: PageId | "notFound"): Metadata {
  const dict = getDict(locale);
  const meta = dict.meta[page];
  const isHome = page === "home";

  if (page === "notFound") {
    return { title: meta.title, description: meta.description, robots: { index: false, follow: true } };
  }

  const languages = Object.fromEntries(locales.map((l) => [l, pathFor(l, page)]));
  const noIndex = noIndexPages.includes(page);

  return {
    title: isHome ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: pathFor(locale, page),
      languages: { ...languages, "x-default": pathFor("en", page) },
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: dict.brand,
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}${pathFor(locale, page)}`,
      locale: locale === "it" ? "it_IT" : "en_GB",
      alternateLocale: locale === "it" ? "en_GB" : "it_IT",
    },
  };
}
