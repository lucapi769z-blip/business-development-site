import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { Arrow, ArrowLink, Bars, ButtonLink, Fan, Label, Lines, ManufacturerIcon, Rays } from "./ui";

type Props = { locale: Locale; dict: Dict };

export function Hero({ locale, dict }: Props) {
  const h = dict.home.hero;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <Label mono>{h.kicker}</Label>
            <h1 id="hero-title" className="hero-title">
              <Lines lines={h.title} />
            </h1>
            <p className="hero-body">{h.body}</p>
            <div className="actions">
              <ButtonLink href={pathFor(locale, "contact")}>{h.primary}</ButtonLink>
              <ArrowLink href={`${pathFor(locale, "services")}#how-we-work`}>{h.secondary}</ArrowLink>
            </div>
          </div>
          <figure className="hero-media">
            <Image src="/images/hero-hospital-corridor.jpg" alt={h.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 46vw" />
            <figcaption className="hero-caption">
              {h.caption.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span className="accent-rule" aria-hidden="true" />
            </figcaption>
          </figure>
        </div>
        <ul className="hero-facts">
          {h.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Our Focus: vertical image beside the statement, as in the original Approach section. */
export function Focus({ dict }: Props) {
  const a = dict.home.focus;
  return (
    <section className="approach section" aria-labelledby="focus-title">
      <div className="container approach-grid">
        <ul className="approach-attributes">
          {a.attributes.map((attr) => (
            <li key={attr}>{attr}</li>
          ))}
        </ul>
        <div className="approach-text">
          <Label className="label--hang">{a.label}</Label>
          <h2 id="focus-title" className="approach-statement">
            {a.title}
          </h2>
          <p className="approach-body">{a.body}</p>
          <p className="approach-body approach-body--ruled">{a.dual}</p>
        </div>
        <figure className="approach-media">
          <Image src="/images/focus-patient-monitor.jpg" alt={a.imageAlt} fill sizes="(max-width: 900px) 100vw, 34vw" />
        </figure>
      </div>
    </section>
  );
}

/** From Product to Market: manufacturers on one side, hospitals and clinics on the other. */
export function Perspective({ dict, id }: Props & { id?: string }) {
  const d = dict.home.perspective;
  return (
    <section className="direction section" id={id} aria-labelledby="perspective-title">
      <div className="container direction-grid">
        <div>
          <Label>{d.label}</Label>
          <h2 id="perspective-title" className="statement">
            {d.title}
          </h2>
        </div>
        <div className="direction-rows">
          {d.rows.map((row, i) => (
            <article key={row.from} className={`direction-row${i === 0 ? " is-primary" : ""}`}>
              <p className="direction-tag">
                {row.tag[0]} <br />
                {row.tag[1]}
              </p>
              <div>
                <p className="direction-route">
                  <span className="route-from">{row.from}</span>
                  <Rays converge={i === 0 ? "right" : "left"} className={i === 0 ? "rays--accent" : ""} />
                  <span className="route-to">{row.to}</span>
                </p>
                <p className="direction-body">{row.body}</p>
              </div>
            </article>
          ))}
          <p className="direction-note">{d.note}</p>
        </div>
      </div>
    </section>
  );
}

/** Six product categories, as numbered editorial rows with an image each. */
export function Categories({ locale, dict, detailed = false }: Props & { detailed?: boolean }) {
  const a = dict.home.products;
  const products = pathFor(locale, "products");
  const contact = pathFor(locale, "contact");
  return (
    <section className="areas section" aria-labelledby={detailed ? undefined : "products-title"} aria-label={detailed ? a.label : undefined}>
      <div className={`container areas-grid${detailed ? " areas-grid--full" : ""}`}>
        {!detailed && (
          <div className="areas-intro">
            <Label>{a.label}</Label>
            <h2 id="products-title" className="h-medium">
              <Lines lines={a.title} />
            </h2>
            <p className="lead lead--muted">{a.body}</p>
            <ArrowLink href={products} variant="caps">
              {a.link}
            </ArrowLink>
          </div>
        )}
        <div className="areas-list">
          <ol className={`area-rows${detailed ? " area-rows--large" : ""}`}>
            {dict.categories.map((item) => (
              <li key={item.id} id={item.id}>
                <span className="num">{item.number}</span>
                <div className="area-thumb">
                  <Image src={item.image} alt={item.alt} fill sizes={detailed ? "300px" : "240px"} />
                </div>
                <div className="area-main">
                  <h3 className="area-name">{detailed ? item.name : <Link href={`${products}#${item.id}`}>{item.name}</Link>}</h3>
                  <p className="area-line">{item.text}</p>
                </div>
                <div className="area-text">
                  {detailed && <p>{item.detail}</p>}
                  <Link href={contact} className="strong-link">
                    {a.present} <Arrow />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <div className="areas-note">
            <p>{a.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services({ locale, dict, intro = true }: Props & { intro?: boolean }) {
  const s = dict.home.services;
  const services = pathFor(locale, "services");
  return (
    <section className="services section" aria-labelledby={intro ? "services-title" : undefined} aria-label={intro ? undefined : s.label}>
      <div className={`container services-grid${intro ? "" : " services-grid--full"}`}>
        {intro && (
          <div className="services-intro">
            <Label>{s.label}</Label>
            <h2 id="services-title" className="h-display h-display--long">
              <Lines lines={s.title} />
            </h2>
            <p className="lead">{s.body}</p>
            <ArrowLink href={`${services}#how-we-work`} className="arrow-link--accent-rule">
              {s.link}
            </ArrowLink>
          </div>
        )}
        <div className="services-list">
          <h3 className="group-title">{s.group}</h3>
          <ol className="service-rows">
            {dict.services.map((item) => (
              <li key={item.number} id={`service-${item.number}`}>
                <span className="num">{item.number}</span>
                <h4 className="service-name">{intro ? <Link href={`${services}#service-${item.number}`}>{item.name}</Link> : item.name}</h4>
                <p className="service-text">{item.text}</p>
              </li>
            ))}
          </ol>
          <p className="services-disclaimer">{s.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

function Step({ number, name, text }: { number: string; name: string; text: string }) {
  return (
    <>
      <span className="step-num">{number}</span>
      <h4 className="step-name">{name}</h4>
      <p className="step-text">{text}</p>
    </>
  );
}

export function Process({ locale, dict }: Props) {
  const p = dict.home.process;
  const services = pathFor(locale, "services");
  return (
    <section className="process section" id="how-we-work" aria-labelledby="process-title">
      <div className="container">
        <div className="process-grid">
          <div className="process-intro">
            <Label>{p.label}</Label>
            <h2 id="process-title" className="h-large">
              <Lines lines={p.title} />
            </h2>
            <p className="lead">{p.body}</p>
            <ArrowLink href={`${services}#how-we-work`} variant="caps" className="arrow-link--overline">
              {p.link}
            </ArrowLink>
          </div>
          <div className="process-initial">
            <p className="phase-title">{p.initial}</p>
            <ol className="initial-steps">
              {dict.process.initial.map((step) => (
                <li key={step.number}>
                  <Step {...step} />
                </li>
              ))}
            </ol>
          </div>
          <div className="process-agreed">
            <p className="phase-title phase-title--ruled">{p.agreed}</p>
            <p className="agreed-note">
              <strong>{p.agreedNote.strong}</strong>
              {p.agreedNote.rest}
            </p>
            <ol className="agreed-steps">
              {dict.process.agreed.map((step) => (
                <li key={step.number}>
                  <Step {...step} />
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="process-foot">
          <p>{p.disclaimer}</p>
          <ArrowLink href={pathFor(locale, "contact")} variant="small">
            {p.cta}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

/** For Manufacturers: the dark band, one of the site's main calls to action. */
export function Manufacturers({ locale, dict, withLink = true }: Props & { withLink?: boolean }) {
  const p = dict.home.manufacturers;
  return (
    <section className="publishing section" aria-labelledby="manufacturers-title">
      <div className="container">
        <div className="publishing-top">
          <div className="publishing-intro">
            <Label>{p.label}</Label>
            <h2 id="manufacturers-title" className="publishing-title">
              <Lines lines={p.title} />
            </h2>
            <p className="publishing-body">{p.body}</p>
          </div>
          <div className="publishing-right">
            <div className="publishing-visual">
              <figure className="publishing-media">
                <Image src="/images/manufacturers-equipment.jpg" alt={p.imageAlt} fill sizes="(max-width: 900px) 100vw, 46vw" />
              </figure>
              <div className="publishing-aside">
                <Bars />
                <ul className="publishing-keywords">
                  {p.keywords.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="publishing-sides">
              {p.sides.map((side) => (
                <li key={side.name}>
                  <ManufacturerIcon name={side.icon} />
                  <h3>{side.name}</h3>
                  <p>{side.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="publishing-foot">
          <p>{p.note}</p>
          <div className="actions">
            {withLink && (
              <ArrowLink href={pathFor(locale, "manufacturers")} className="arrow-link--on-dark">
                {p.link}
              </ArrowLink>
            )}
            <ButtonLink href={pathFor(locale, "contact")} className="button--copper">
              {p.button}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Company profile. Institutional and neutral: no experience, clients or results are claimed. */
export function Profile({ locale, dict, withLink = true }: Props & { withLink?: boolean }) {
  const f = dict.home.profile;
  // On the About page the profile opens the page, so its name is the page's h1.
  const Name = withLink ? "h2" : "h1";
  return (
    <section className="founder section" aria-labelledby="profile-title">
      <div className="container founder-grid">
        <div className="founder-side">
          <div>
            <span className="accent-rule" aria-hidden="true" />
            <p className="founder-role">
              {f.side.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <blockquote className="founder-quote">
            <p>{f.quote}</p>
            <span className="accent-rule accent-rule--light" aria-hidden="true" />
          </blockquote>
        </div>
        <figure className="founder-media">
          <Image src="/images/profile-clinic-architecture.jpg" alt={f.imageAlt} fill sizes="(max-width: 900px) 100vw, 27vw" />
        </figure>
        <div className="founder-text">
          <Label className="label--small">{f.label}</Label>
          <Name id="profile-title" className="founder-name">
            {f.name}
          </Name>
          <p className="founder-body">{f.body}</p>
          <h3 className="group-title">{f.approachLabel}</h3>
          <ol className="expertise-rows">
            {f.approach.map((item, i) => (
              <li key={item.name} className={i === f.approach.length - 1 ? "is-accent" : undefined}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="expertise-name">{item.name}</span>
                <span className="expertise-text">{item.text}</span>
                <Arrow />
              </li>
            ))}
          </ol>
          {withLink && (
            <ArrowLink href={pathFor(locale, "about")} variant="small">
              {f.link}
            </ArrowLink>
          )}
        </div>
      </div>
    </section>
  );
}

export function LetsTalk({ locale, dict }: Props) {
  const c = dict.home.cta;
  return (
    <section className="lets-talk" aria-labelledby="cta-title">
      <Fan className="cta-fan" />
      <div className="lets-talk-band">
        <figure className="cta-media">
          <Image src="/images/cta-light-fins.jpg" alt="" fill sizes="18vw" />
        </figure>
        <div className="container lets-talk-grid">
          <div>
            <Label>{c.label}</Label>
            <h2 id="cta-title" className="cta-title">
              <Lines lines={c.title} />
            </h2>
          </div>
          <div className="cta-side">
            <p className="cta-body">{c.body}</p>
            <div className="actions">
              <ButtonLink href={pathFor(locale, "contact")}>{c.button}</ButtonLink>
              <ArrowLink href={pathFor(locale, "manufacturers")}>{c.secondary}</ArrowLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cta-strip">
          <span className="cta-index">{c.index}</span>
          <ul className="cta-words">
            {c.strip.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <p className="cta-perspective">
            {c.perspective}
            <span className="rule-tail" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  );
}

/** Intro column beside a numbered list, in the layout of the services section. */
export function NumberedList({
  label,
  title,
  body,
  items,
  id,
}: {
  label: string;
  title: string[];
  body: string;
  items: { name: string; text: string }[];
  id?: string;
}) {
  return (
    <section className="services section" id={id} aria-label={label}>
      <div className="container services-grid">
        <div className="services-intro">
          <Label>{label}</Label>
          <h2 className="h-display h-display--long">
            <Lines lines={title} />
          </h2>
          <p className="lead">{body}</p>
        </div>
        <div className="services-list">
          <ol className="service-rows">
            {items.map((item, i) => (
              <li key={item.name}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="service-name">{item.name}</h3>
                <p className="service-text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function LegalText({ sections }: { sections: { title: string; body: string[] }[] }) {
  return (
    <section className="section legal">
      <div className="container">
        <div className="legal-text">
          {sections.map((s, i) => (
            <article key={s.title}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2>{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageIntro({ label, title, intro }: { label: string; title: string; intro: string }) {
  return (
    <section className="page-intro">
      <div className="container">
        <Label>{label}</Label>
        <h1 className="h-large page-title">{title}</h1>
        <p className="lead page-lead">{intro}</p>
      </div>
    </section>
  );
}
