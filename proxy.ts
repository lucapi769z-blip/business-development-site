import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, NOT_FOUND_SLUG, pageFromSlug, type Locale } from "@/lib/i18n";

// Root behaviour (docs/03 §3): "/" routes by language preference.
// A language chosen manually (stored by the EN | IT switch) wins over browser detection;
// English is the international fallback.
const COOKIE = "preferred_locale";

function preferredLocale(request: NextRequest): Locale {
  const stored = request.cookies.get(COOKIE)?.value;
  if (stored && isLocale(stored)) return stored;

  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  const match = ranked.find((entry) => isLocale(entry.lang));
  return match ? (match.lang as Locale) : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first, ...rest] = pathname.split("/");
  if (isLocale(first)) {
    if (pageFromSlug(first, rest.filter(Boolean))) return NextResponse.next();
    // Unknown page inside /en or /it: localised 404 rendered inside the site shell.
    const url = request.nextUrl.clone();
    url.pathname = `/${first}/${NOT_FOUND_SLUG}`;
    return NextResponse.rewrite(url, { status: 404 });
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // Skip Next internals, the API, and files with an extension (sitemap.xml, robots.txt, icons).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
