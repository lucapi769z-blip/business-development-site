export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];

export type PageKey = "home" | "whatWeDo" | "publishing" | "founder" | "contact" | "privacy" | "legal";

const slugs: Record<Locale, Record<Exclude<PageKey, "home">, string>> = {
  en: {
    whatWeDo: "what-we-do",
    publishing: "publishing-rights",
    founder: "founder",
    contact: "contact",
    privacy: "privacy",
    legal: "legal-notice",
  },
  it: {
    whatWeDo: "cosa-facciamo",
    publishing: "editoria-diritti",
    founder: "fondatore",
    contact: "contatti",
    privacy: "privacy",
    legal: "note-legali",
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function pathFor(locale: Locale, page: PageKey): string {
  return page === "home" ? `/${locale}` : `/${locale}/${slugs[locale][page]}`;
}

export function pageForSlug(locale: Locale, slug: string): Exclude<PageKey, "home"> | undefined {
  const entry = Object.entries(slugs[locale]).find(([, value]) => value === slug);
  return entry?.[0] as Exclude<PageKey, "home"> | undefined;
}

export function slugParams() {
  return locales.flatMap((lang) => Object.values(slugs[lang]).map((slug) => ({ lang, slug })));
}

/** The same page in the other language, for the EN / IT switch. */
export function alternatePath(target: Locale, page: PageKey): string {
  return pathFor(target, page);
}
