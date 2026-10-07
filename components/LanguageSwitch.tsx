"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, pageForSlug, pathFor, type Locale, type PageKey } from "@/lib/i18n";

function currentPage(pathname: string): { locale: Locale; page: PageKey } {
  const [, lang = "en", slug] = pathname.split("/");
  const locale: Locale = isLocale(lang) ? lang : "en";
  return { locale, page: slug ? (pageForSlug(locale, slug) ?? "home") : "home" };
}

export function LanguageSwitch({ label, className = "" }: { label: string; className?: string }) {
  const { locale, page } = currentPage(usePathname());
  return (
    <nav className={`lang-switch ${className}`.trim()} aria-label={label}>
      {(["en", "it"] as const).map((target, i) => (
        <span key={target}>
          {i > 0 && <span className="lang-sep" aria-hidden="true">/</span>}
          <Link
            href={pathFor(target, page)}
            hrefLang={target}
            lang={target}
            aria-current={target === locale ? "true" : undefined}
            className={target === locale ? "is-active" : undefined}
          >
            {target.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  );
}
