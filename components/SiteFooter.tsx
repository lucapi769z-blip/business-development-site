import Link from "next/link";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { ButtonLink, Fan } from "./ui";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.footer;
  const whatWeDo = pathFor(locale, "whatWeDo");
  const publishing = pathFor(locale, "publishing");
  const exploreLinks = [
    { href: whatWeDo, label: dict.nav.whatWeDo },
    ...dict.services.items.slice(0, 4).map((s) => ({ href: `${whatWeDo}#service-${s.number}`, label: s.name })),
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
          <div className="footer-col">
            <p className="footer-heading">{f.explore}</p>
            <ul>
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-heading">{f.publishing}</p>
            <ul>
              {f.publishingLinks.map((label) => (
                <li key={label}>
                  <Link href={publishing}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <p className="footer-heading">{f.contact}</p>
            <p className="footer-contact-text">
              {f.contactText[0]}
              <br />
              {f.contactText[1]}
            </p>
            <ButtonLink href={pathFor(locale, "contact")} outline className="button--footer">
              {f.contactButton}
            </ButtonLink>
            <LanguageSwitch label={dict.a11y.language} className="lang-switch--footer" />
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-legal">
            <li>
              <Link href={pathFor(locale, "privacy")}>{f.privacy}</Link>
            </li>
            <li>
              <Link href={pathFor(locale, "legal")}>{f.legal}</Link>
            </li>
          </ul>
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
