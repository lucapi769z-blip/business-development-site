// Symmetric bilingual architecture (docs/03 §3): every page lives under /en or /it,
// and each page has a localised slug. Switching language leads to the equivalent page.

export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const pageIds = [
  "home",
  "whatWeDo",
  "publishing",
  "founder",
  "contact",
  "thankYou",
  "privacy",
  "cookies",
  "legal",
] as const;
export type PageId = (typeof pageIds)[number];

// Utility-page slugs are provisional (docs/03 §16) until document 08 (SEO) confirms them.
const slugs: Record<PageId, Record<Locale, string>> = {
  home: { en: "", it: "" },
  whatWeDo: { en: "what-we-do", it: "cosa-facciamo" },
  publishing: { en: "publishing-rights", it: "editoria-diritti" },
  founder: { en: "founder", it: "fondatore" },
  contact: { en: "contact", it: "contatti" },
  thankYou: { en: "contact/thank-you", it: "contatti/grazie" },
  privacy: { en: "privacy", it: "privacy" },
  cookies: { en: "cookies", it: "cookie" },
  legal: { en: "legal-notice", it: "note-legali" },
};

// Internal target of the proxy rewrite for unknown localised URLs.
export const NOT_FOUND_SLUG = "404";

// Pages excluded from search engines and from the sitemap.
export const noIndexPages: PageId[] = ["thankYou"];

export function pathFor(locale: Locale, page: PageId, hash?: string): string {
  const slug = slugs[page][locale];
  const base = slug ? `/${locale}/${slug}` : `/${locale}`;
  return hash ? `${base}#${hash}` : base;
}

export function pageFromSlug(locale: Locale, segments: string[] = []): PageId | null {
  const slug = segments.join("/");
  const match = pageIds.find((id) => slugs[id][locale] === slug);
  return match ?? null;
}

export function allSlugParams(): { lang: Locale; slug: string[] }[] {
  return locales.flatMap((lang) =>
    pageIds
      .filter((id) => id !== "home")
      .map((id) => ({ lang, slug: slugs[id][lang].split("/") })),
  );
}

// Resolve the equivalent path in the other language for any localised pathname.
export function equivalentPath(pathname: string, target: Locale): string {
  const [, current, ...rest] = pathname.split("/");
  if (!current || !isLocale(current)) return `/${target}`;
  const page = pageFromSlug(current, rest.filter(Boolean));
  return page ? pathFor(target, page) : `/${target}`;
}

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");
