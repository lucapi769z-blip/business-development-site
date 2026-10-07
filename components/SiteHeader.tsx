"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dict }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: pathFor(locale, "whatWeDo"), label: dict.nav.whatWeDo },
    { href: pathFor(locale, "publishing"), label: dict.nav.publishing },
    { href: pathFor(locale, "founder"), label: dict.nav.founder },
    { href: pathFor(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <div className="container header-inner">
        <Link href={pathFor(locale, "home")} className="wordmark">
          {dict.brand}
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? dict.a11y.close : dict.a11y.menu}</span>
          <span className="menu-bars" aria-hidden="true" />
        </button>
        <div className="header-nav" id="site-nav">
          <nav aria-label="Main">
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitch label={dict.a11y.language} />
          <Link href={pathFor(locale, "contact")} className="button button--small">
            {dict.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
