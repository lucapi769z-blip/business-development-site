import Link from "next/link";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dict }) {
  const year = new Date().getFullYear();
  const { footer, nav } = dict;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="wordmark">{dict.brand}</p>
          <p className="footer-positioning">{footer.positioning}</p>
          <p className="footer-founded">{footer.founded}</p>
        </div>

        <nav aria-label={dict.a11y.footerNav}>
          <h2 className="footer-heading">{footer.navHeading}</h2>
          <ul>
            <li><Link href={pathFor(locale, "home")}>{nav.home}</Link></li>
            <li><Link href={pathFor(locale, "whatWeDo")}>{nav.whatWeDo}</Link></li>
            <li><Link href={pathFor(locale, "publishing")}>{nav.publishing}</Link></li>
            <li><Link href={pathFor(locale, "founder")}>{nav.founder}</Link></li>
            <li><Link href={pathFor(locale, "contact")}>{nav.contact}</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">{footer.contactHeading}</h2>
          <p className="placeholder">{dict.email}</p>
          <p>
            <Link href={pathFor(locale, "contact")}>{dict.cta}</Link>
          </p>
          <div className="footer-lang">
            <LanguageSwitch locale={locale} />
          </div>
        </div>

        <nav aria-label={dict.a11y.legalNav}>
          <h2 className="footer-heading">{footer.legalHeading}</h2>
          <ul>
            <li><Link href={pathFor(locale, "privacy")}>{footer.privacy}</Link></li>
            <li><Link href={pathFor(locale, "cookies")}>{footer.cookies}</Link></li>
            <li><Link href={pathFor(locale, "legal")}>{footer.legal}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container footer-base">
        <p>
          © {year} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
