import Link from "next/link";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { Fan } from "./ui";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.footer;
  const products = pathFor(locale, "products");
  const contact = pathFor(locale, "contact");
  const columns = [
    {
      heading: f.company,
      links: [
        { href: pathFor(locale, "about"), label: f.companyLinks.about },
        { href: `${pathFor(locale, "services")}#how-we-work`, label: f.companyLinks.method },
        { href: contact, label: f.companyLinks.contact },
      ],
    },
    {
      heading: f.categories,
      links: f.categoryNames.map((label, i) => ({ href: `${products}#${dict.categories[i].id}`, label })),
    },
    {
      heading: f.manufacturers,
      links: [
        { href: contact, label: f.manufacturerLinks.present },
        { href: `${pathFor(locale, "manufacturers")}#opportunities`, label: f.manufacturerLinks.opportunities },
        { href: `${contact}#form`, label: f.manufacturerLinks.request },
      ],
    },
    {
      heading: f.legal,
      links: [
        { href: pathFor(locale, "privacy"), label: f.legalLinks.privacy },
        { href: pathFor(locale, "cookies"), label: f.legalLinks.cookies },
        { href: pathFor(locale, "legal"), label: f.legalLinks.legal },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <Fan className="footer-fan" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={pathFor(locale, "home")} className="footer-wordmark">
              {dict.brand}
            </Link>
            <p className="footer-tagline">{f.tagline}</p>
            <span className="accent-rule" aria-hidden="true" />
            <p className="footer-founded">{f.founded}</p>
          </div>
          {columns.map((col) => (
            <nav key={col.heading} className="footer-col" aria-label={col.heading}>
              <p className="footer-heading">{col.heading}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <LanguageSwitch label={dict.a11y.language} className="lang-switch--footer" />
          <p className="footer-meta">
            <span>{f.copyright}</span>
            <span>{f.prototype}</span>
          </p>
          <p className="footer-perspective">
            <span className="accent-rule" aria-hidden="true" />
            {f.perspective}
          </p>
        </div>
      </div>
    </footer>
  );
}
