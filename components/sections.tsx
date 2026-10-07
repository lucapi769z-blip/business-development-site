import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { Arrow, ArrowLink, Bars, ButtonLink, Fan, Label, Lines, PublishingIcon, Rays } from "./ui";

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
              <ButtonLink href={pathFor(locale, "contact")}>{dict.nav.cta}</ButtonLink>
              <ArrowLink href={pathFor(locale, "whatWeDo")}>{h.secondary}</ArrowLink>
            </div>
          </div>
          <figure className="hero-media">
            <Image src="/images/hero-rome.jpg" alt={h.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 46vw" />
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

export function Direction({ dict }: Props) {
  const d = dict.home.direction;
  const rows = [
    { ...d.primary, primary: true },
    { ...d.secondary, primary: false },
  ];
  return (
    <section className="direction section" aria-labelledby="direction-title">
      <div className="container direction-grid">
        <div>
          <Label>{d.label}</Label>
          <h2 id="direction-title" className="statement">
            {d.title}
          </h2>
        </div>
        <div className="direction-rows">
          {rows.map((row) => (
            <article key={row.from} className={`direction-row${row.primary ? " is-primary" : ""}`}>
              <p className="direction-tag">
                {row.tag[0]}{" "}
                <br />
                {row.tag[1]}
              </p>
              <div>
                <p className="direction-route">
                  <span className="route-from">{row.from}</span>
                  <Rays converge={row.primary ? "right" : "left"} className={row.primary ? "rays--accent" : ""} />
                  <span className="route-to">{row.to}</span>
                </p>
                <p className="direction-body">{row.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach({ dict }: Props) {
  const a = dict.home.approach;
  return (
    <section className="approach section" aria-labelledby="approach-title">
      <div className="container approach-grid">
        <ul className="approach-attributes">
          {a.attributes.map((attr) => (
            <li key={attr}>{attr}</li>
          ))}
        </ul>
        <div className="approach-text">
          <Label className="label--hang">{a.label}</Label>
          <h2 id="approach-title" className="approach-statement">
            {a.statement}
          </h2>
          <p className="approach-body">{a.body}</p>
        </div>
        <figure className="approach-media">
          <Image src="/images/approach-arcade.jpg" alt={a.imageAlt} fill sizes="(max-width: 900px) 100vw, 34vw" />
        </figure>
      </div>
    </section>
  );
}

export function Services({ locale, dict, intro = true }: Props & { intro?: boolean }) {
  const s = dict.home.services;
  const whatWeDo = pathFor(locale, "whatWeDo");
  const general = dict.services.items.slice(0, 4);
  const publishing = dict.services.items.slice(4);
  return (
    <section className="services section" aria-labelledby={intro ? "services-title" : undefined} aria-label={intro ? undefined : s.label}>
      <div className={`container services-grid${intro ? "" : " services-grid--full"}`}>
        {intro && (
          <div className="services-intro">
            <Label>{s.label}</Label>
            <h2 id="services-title" className="h-display">
              <Lines lines={s.title} />
            </h2>
            <p className="lead">{s.body}</p>
            <ArrowLink href={whatWeDo} className="arrow-link--accent-rule">
              {s.link}
            </ArrowLink>
          </div>
        )}
        <div className="services-list">
          <h3 className="group-title">{dict.services.groups.general}</h3>
          <ol className="service-rows">
            {general.map((item) => (
              <li key={item.number} id={`service-${item.number}`}>
                <span className="num">{item.number}</span>
                <h4 className="service-name">
                  <Link href={`${whatWeDo}#service-${item.number}`}>{item.name}</Link>
                </h4>
                <p className="service-text">{item.text}</p>
              </li>
            ))}
          </ol>
          <h3 className="group-title">{dict.services.groups.publishing}</h3>
          <ol className="service-pair">
            {publishing.map((item) => (
              <li key={item.number} id={`service-${item.number}`}>
                <span className="num">{item.number}</span>
                <div>
                  <h4 className="service-name service-name--small">
                    <Link href={pathFor(locale, "publishing")}>{item.name}</Link>
                  </h4>
                  <p className="service-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
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
  const whatWeDo = pathFor(locale, "whatWeDo");
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
            <ArrowLink href={`${whatWeDo}#how-we-work`} variant="caps" className="arrow-link--overline">
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
          <ArrowLink href={`${whatWeDo}#how-we-work`} variant="small">
            {p.howWeWork}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

export function Areas({ locale, dict }: Props) {
  const a = dict.home.areas;
  return (
    <section className="areas section" aria-labelledby="areas-title">
      <div className="container areas-grid">
        <div className="areas-intro">
          <Label>{a.label}</Label>
          <h2 id="areas-title" className="h-medium">
            <Lines lines={a.title} />
          </h2>
          <p className="lead lead--muted">{a.body}</p>
          <ArrowLink href={pathFor(locale, "whatWeDo")} variant="caps">
            {a.link}
          </ArrowLink>
        </div>
        <div className="areas-list">
          <ol className="area-rows">
            {a.items.map((item, i) => (
              <li key={item.name}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div className="area-thumb">
                  <Image src={item.image} alt={item.alt} fill sizes="240px" />
                </div>
                <div className="area-main">
                  <h3 className="area-name">{item.name}</h3>
                  <p className="area-line">{item.line}</p>
                </div>
                <p className="area-text">{item.text}</p>
              </li>
            ))}
            <li className="area-row--last">
              <span className="num">05</span>
              <div className="area-main">
                <h3 className="area-name">{a.last.name}</h3>
                <p className="area-line">{a.last.line}</p>
              </div>
            </li>
          </ol>
          <div className="areas-note">
            <p>{a.note}</p>
            <Link href={pathFor(locale, "publishing")} className="strong-link">
              {a.publishingLink} <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Publishing({ locale, dict, withLink = true }: Props & { withLink?: boolean }) {
  const p = dict.home.publishing;
  return (
    <section className="publishing section" aria-labelledby="publishing-title">
      <div className="container">
        <div className="publishing-top">
          <div className="publishing-intro">
            <Label>{p.label}</Label>
            <h2 id="publishing-title" className="publishing-title">
              <Lines lines={p.title} />
            </h2>
            <p className="publishing-body">{p.body}</p>
          </div>
          <div className="publishing-right">
            <div className="publishing-visual">
              <figure className="publishing-media">
                <Image src="/images/publishing-book.jpg" alt={p.imageAlt} fill sizes="(max-width: 900px) 100vw, 46vw" />
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
                  <PublishingIcon name={side.icon} />
                  <h3>{side.name}</h3>
                  <p>{side.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="publishing-foot">
          <p>{p.note}</p>
          {withLink ? (
            <ButtonLink href={pathFor(locale, "publishing")} outline className="button--on-dark">
              {p.link}
            </ButtonLink>
          ) : (
            <ButtonLink href={pathFor(locale, "contact")} outline className="button--on-dark">
              {dict.nav.cta}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}

export function Founder({ locale, dict, withLink = true }: Props & { withLink?: boolean }) {
  const f = dict.home.founder;
  return (
    <section className="founder section" aria-labelledby="founder-title">
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
          <Image src="/images/founder-portrait.jpg" alt={f.imageAlt} fill sizes="(max-width: 900px) 100vw, 27vw" />
        </figure>
        <div className="founder-text">
          <Label className="label--small">{f.label}</Label>
          <h2 id="founder-title" className="founder-name">
            {f.name}
          </h2>
          <p className="founder-body">{f.body}</p>
          <h3 className="group-title">{f.expertiseLabel}</h3>
          <ol className="expertise-rows">
            {f.expertise.map((item, i) => (
              <li key={item.name} className={i === f.expertise.length - 1 ? "is-accent" : undefined}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="expertise-name">{item.name}</span>
                <span className="expertise-text">{item.text}</span>
                <Arrow />
              </li>
            ))}
          </ol>
          {withLink && (
            <ArrowLink href={pathFor(locale, "founder")} variant="small">
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
  const contact = pathFor(locale, "contact");
  return (
    <section className="lets-talk" aria-labelledby="cta-title">
      <Fan className="cta-fan" />
      <div className="lets-talk-band">
        <figure className="cta-media">
          <Image src="/images/cta-stone.jpg" alt="" fill sizes="18vw" />
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
              <ButtonLink href={contact}>{dict.nav.cta}</ButtonLink>
              <ArrowLink href={contact}>{c.secondary}</ArrowLink>
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
