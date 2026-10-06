"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDict } from "@/content";
import { equivalentPath, locales, type Locale } from "@/lib/i18n";

// EN | IT switch: leads to the equivalent page, and remembers the manual choice (docs/03 §3).
export function LanguageSwitch({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const pathname = usePathname();

  const remember = (target: Locale) => {
    document.cookie = `preferred_locale=${target}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <ul className="lang-switch" aria-label={dict.a11y.language}>
      {locales.map((target, index) => (
        <li key={target}>
          {index > 0 && <span aria-hidden="true" className="lang-sep">|</span>}
          {target === locale ? (
            <span aria-current="true" className="lang-current" lang={target}>
              <abbr title={target === "en" ? "English" : "Italiano"}>{target.toUpperCase()}</abbr>
            </span>
          ) : (
            <Link
              href={equivalentPath(pathname, target)}
              hrefLang={target}
              lang={target}
              onClick={() => remember(target)}
              title={getDict(target).a11y.switchTo}
            >
              {target.toUpperCase()}
              <span className="visually-hidden"> {target === "en" ? "English" : "Italiano"}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
