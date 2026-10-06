import Link from "next/link";
import type { ReactNode } from "react";
import type { CategoryId, Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";

export function Label({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p className="label" id={id}>
      {children}
    </p>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-link">
      {children}
      <span aria-hidden="true" className="arrow">→</span>
    </Link>
  );
}

export function contactHref(locale: Locale, category?: CategoryId) {
  const base = pathFor(locale, "contact");
  return category ? `${base}?category=${category}` : base;
}

export function PrimaryCta({ locale, dict, category }: { locale: Locale; dict: Dict; category?: CategoryId }) {
  return (
    <Link href={contactHref(locale, category)} className="button">
      {dict.cta}
    </Link>
  );
}

export function PageHero({ label, title, body }: { label: string; title: string; body?: string }) {
  return (
    <section className="page-hero container">
      <Label>{label}</Label>
      <h1>{title}</h1>
      {body && <p className="lead">{body}</p>}
    </section>
  );
}

// Closing invitation: one action only (docs/03 §7.10, §19).
export function FinalCta({
  locale,
  dict,
  title,
  body,
  category,
}: {
  locale: Locale;
  dict: Dict;
  title: string;
  body: string;
  category?: CategoryId;
}) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta-inner">
        <h2 id="final-cta-title">{title}</h2>
        <p>{body}</p>
        <PrimaryCta locale={locale} dict={dict} category={category} />
      </div>
    </section>
  );
}

// Canonical process (docs/03 §15) as an ordered list, with the Scope & Engagement boundary marked.
export function ProcessList({ dict, detailed = false }: { dict: Dict; detailed?: boolean }) {
  const { steps, boundary } = dict.process;
  return (
    <ol className={`process ${detailed ? "process-detailed" : ""}`} aria-label={dict.a11y.processList}>
      {steps.map((step, index) => (
        <li key={step.name} className={index === 2 ? "process-step is-boundary" : "process-step"}>
          {index === 2 && <p className="process-boundary">{boundary}</p>}
          <span className="process-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{step.name}</h3>
          <p>{detailed ? step.detail : step.short}</p>
        </li>
      ))}
    </ol>
  );
}

// Abstract, non-geographic graphic for the two directions: two lines and a direction mark.
export function DirectionMark({ from, to, primary }: { from: string; to: string; primary?: boolean }) {
  return (
    <p className={`direction ${primary ? "is-primary" : ""}`}>
      <span>{from}</span>
      <span className="direction-line" aria-hidden="true" />
      <span className="visually-hidden">→</span>
      <span>{to}</span>
    </p>
  );
}

// Reserved place for the Founder portrait (docs/03 §21): works without the photograph.
export function PortraitSlot({ dict }: { dict: Dict }) {
  return (
    <div className="portrait" role="img" aria-label={dict.a11y.portrait}>
      <span aria-hidden="true">LP</span>
    </div>
  );
}
