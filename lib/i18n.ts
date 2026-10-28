export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];

/** Italian is the default language: the site addresses the Italian hospital market. */
export const defaultLocale: Locale = "it";

export type PageKey = "home" | "products" | "services" | "manufacturers" | "about" | "contact" | "privacy" | "cookies" | "legal";

const slugs: Record<Locale, Record<Exclude<PageKey, "home">, string>> = {
  en: {
    products: "products",
    services: "services",
    manufacturers: "for-manufacturers",
    about: "about",
    contact: "contact",
    privacy: "privacy",
    cookies: "cookie-policy",
    legal: "legal-notice",
  },
  it: {
    products: "prodotti",
    services: "servizi",
    manufacturers: "per-i-produttori",
    about: "profilo",
    contact: "contatti",
    privacy: "privacy",
    cookies: "cookie-policy",
    legal: "note-legali",
  },
};

export const pageKeys = ["home", ...(Object.keys(slugs.it) as Exclude<PageKey, "home">[])] as PageKey[];

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

/** Absolute site URL, used for canonical links, hreflang alternates and the sitemap. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

/** hreflang alternates for one page, in every language. */
export function alternates(locale: Locale, page: PageKey) {
  return {
    canonical: pathFor(locale, page),
    languages: Object.fromEntries([...locales.map((l) => [l, pathFor(l, page)]), ["x-default", pathFor(defaultLocale, page)]]),
  };
}
