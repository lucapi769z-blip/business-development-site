import Link from "next/link";
import { Suspense } from "react";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { Label, PageHero } from "../blocks";
import { ContactForm } from "../ContactForm";

export function ContactPage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const c = dict.contact;
  return (
    <>
      <PageHero label={c.hero.label} title={c.hero.title} body={c.hero.body} />
      <section className="section-tight container contact-layout">
        <aside className="contact-aside" aria-labelledby="include-title">
          <h2 id="include-title" className="label">
            {c.include.title}
          </h2>
          <ul className="rule-list compact">
            {c.include.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="label">{c.direct}</h2>
          <p className="placeholder">{dict.email}</p>
        </aside>
        <Suspense fallback={null}>
          <ContactForm locale={locale} />
        </Suspense>
      </section>
    </>
  );
}

export function ThankYouPage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const t = dict.thankYou;
  return (
    <section className="page-hero container narrow" aria-labelledby="thanks-title">
      <Label>{t.label}</Label>
      <h1 id="thanks-title">{t.title}</h1>
      {t.body.map((paragraph) => (
        <p key={paragraph} className="body-text">
          {paragraph}
        </p>
      ))}
      <nav aria-label={t.back} className="calm-links">
        <p className="label">{t.back}</p>
        <ul>
          <li><Link href={pathFor(locale, "home")}>{t.links.home}</Link></li>
          <li><Link href={pathFor(locale, "whatWeDo")}>{t.links.whatWeDo}</Link></li>
          <li><Link href={pathFor(locale, "founder")}>{t.links.founder}</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export function LegalPage({ dict, page }: { dict: Dict; page: "privacy" | "cookies" | "legal" }) {
  const l = dict.legalPages;
  return (
    <section className="page-hero container narrow" aria-labelledby="legal-title">
      <Label>{l.label}</Label>
      <h1 id="legal-title">{l[page].title}</h1>
      <p className="body-text">{l[page].body}</p>
      <p className="placeholder">{l.placeholder}</p>
    </section>
  );
}

export function NotFoundContent({ locale, dict }: { locale: Locale; dict: Dict }) {
  const n = dict.notFound;
  return (
    <section className="page-hero container narrow" aria-labelledby="nf-title">
      <Label>{n.label}</Label>
      <h1 id="nf-title">{n.title}</h1>
      <p className="body-text">{n.body}</p>
      <ul className="calm-links-list">
        <li><Link href={pathFor(locale, "home")}>{n.links.home}</Link></li>
        <li><Link href={pathFor(locale, "whatWeDo")}>{n.links.whatWeDo}</Link></li>
        <li><Link href={pathFor(locale, "contact")}>{n.links.contact}</Link></li>
      </ul>
    </section>
  );
}
