"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getDict, type Dict } from "@/content";
import { pathFor, type Locale, type PageId } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

const navPages: PageId[] = ["home", "whatWeDo", "publishing", "founder", "contact"];

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (page: PageId) => {
    const href = pathFor(locale, page);
    if (page === "home") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const links = navPages.map((page) => (
    <li key={page}>
      <Link href={pathFor(locale, page)} aria-current={isCurrent(page) ? "page" : undefined}>
        {dict.nav[page as keyof Dict["nav"]]}
      </Link>
    </li>
  ));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={pathFor(locale, "home")} className="wordmark" aria-label={dict.a11y.homeLink}>
          {dict.brand}
        </Link>

        <nav className="nav-desktop" aria-label={dict.a11y.primaryNav}>
          <ul>{links}</ul>
        </nav>

        <div className="header-actions">
          <LanguageSwitch locale={locale} />
          <Link href={pathFor(locale, "contact")} className="header-cta">
            {dict.cta}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="visually-hidden">{open ? dict.a11y.closeMenu : dict.a11y.openMenu}</span>
            <span className="menu-icon" aria-hidden="true" data-open={open} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" hidden={!open}>
        <nav aria-label={dict.a11y.primaryNav}>
          <ul>{links}</ul>
        </nav>
        <Link href={pathFor(locale, "contact")} className="button">
          {dict.cta}
        </Link>
      </div>
    </header>
  );
}
