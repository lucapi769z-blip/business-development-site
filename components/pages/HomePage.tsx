import Link from "next/link";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { ArrowLink, DirectionMark, FinalCta, Label, PortraitSlot, PrimaryCta, ProcessList } from "../blocks";

// Home sequence fixed by docs/03 §7: Hero, International, Manifesto, What We Do, Process,
// Areas of Interest, Publishing, Founder, Qualified Opportunities, Final CTA.
export function HomePage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const h = dict.home;
  const general = dict.services.items.slice(0, 4);
  const publishing = dict.services.items.slice(4);
  const whatWeDo = pathFor(locale, "whatWeDo");
  const marketEntry = dict.services.items[1];

  return (
    <>
      {/* 1. Hero */}
      <section className="hero container" aria-labelledby="hero-title">
        <Label>{h.hero.kicker}</Label>
        <h1 id="hero-title" className="display">
          {h.hero.title}
        </h1>
        <div className="hero-foot">
          <p className="lead">{h.hero.body}</p>
          <div className="hero-actions">
            <PrimaryCta locale={locale} dict={dict} />
            <ArrowLink href={whatWeDo}>{h.hero.secondary}</ArrowLink>
          </div>
        </div>
      </section>

      {/* 2. International / Market Entry positioning */}
      <section className="section container" aria-labelledby="intl-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{h.international.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="intl-title" className="statement">
              {h.international.title}
            </h2>
          </div>
        </div>
        <div className="directions">
          <article className="direction-card is-primary">
            <p className="tag">{h.international.primary.tag}</p>
            <DirectionMark from={h.international.primary.from} to={h.international.primary.to} primary />
            <h3>{h.international.primary.title}</h3>
            <p>{h.international.primary.body}</p>
            <ArrowLink href={`${whatWeDo}#${marketEntry.anchor}`}>{h.international.link}</ArrowLink>
          </article>
          <article className="direction-card">
            <p className="tag">{h.international.secondary.tag}</p>
            <DirectionMark from={h.international.secondary.from} to={h.international.secondary.to} />
            <h3>{h.international.secondary.title}</h3>
            <p>{h.international.secondary.body}</p>
          </article>
        </div>
      </section>

      {/* 3. Manifesto */}
      <section className="section manifesto" aria-labelledby="manifesto-title">
        <div className="container grid-12">
          <div className="col-label">
            <Label>{h.manifesto.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="manifesto-title" className="quote">
              {h.manifesto.statement}
            </h2>
            <p className="body-text">{h.manifesto.body}</p>
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="section container" aria-labelledby="services-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{h.services.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="services-title" className="h2">
              {h.services.title}
            </h2>
            <p className="body-text">{h.services.intro}</p>
          </div>
        </div>

        <div className="service-groups">
          <div className="service-group">
            <h3 className="group-title">{dict.services.groups.general}</h3>
            <ol className="service-index">
              {general.map((service) => (
                <li key={service.id} className={service.id === "market-entry" ? "is-emphasis" : undefined}>
                  <span className="service-number" aria-hidden="true">{service.number}</span>
                  <div>
                    <h4>
                      <Link href={`${whatWeDo}#${service.anchor}`}>{service.name}</Link>
                    </h4>
                    <p>{service.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="service-group is-publishing">
            <h3 className="group-title">{dict.services.groups.publishing}</h3>
            <ol className="service-index" start={5}>
              {publishing.map((service) => (
                <li key={service.id}>
                  <span className="service-number" aria-hidden="true">{service.number}</span>
                  <div>
                    <h4>
                      <Link href={pathFor(locale, "publishing")}>{service.name}</Link>
                    </h4>
                    <p>{service.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="section-link">
          <ArrowLink href={whatWeDo}>{h.services.link}</ArrowLink>
        </p>
      </section>

      {/* 5. How an opportunity develops */}
      <section className="section band" aria-labelledby="process-title">
        <div className="container">
          <div className="grid-12">
            <div className="col-label">
              <Label>{h.process.label}</Label>
            </div>
            <div className="col-main">
              <h2 id="process-title" className="h2">
                {h.process.title}
              </h2>
            </div>
          </div>
          <ProcessList dict={dict} />
          <div className="grid-12">
            <div className="col-main">
              <p className="small-print">{dict.process.qualifier}</p>
              <p>
                <ArrowLink href={`${whatWeDo}#how-we-work`}>{h.process.link}</ArrowLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Areas of interest */}
      <section className="section container" aria-labelledby="areas-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{h.areas.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="areas-title" className="h2">
              {h.areas.title}
            </h2>
          </div>
        </div>
        <ul className="areas">
          {h.areas.items.map((area) => (
            <li key={area.name}>
              <h3>{area.name}</h3>
              <p>{area.text}</p>
            </li>
          ))}
        </ul>
        <div className="grid-12">
          <div className="col-main">
            <p className="body-text">{h.areas.note}</p>
            <p className="body-text muted">
              {h.areas.publishingNote}{" "}
              <ArrowLink href={pathFor(locale, "publishing")}>{h.areas.publishingLink}</ArrowLink>
            </p>
          </div>
        </div>
      </section>

      {/* 7. Publishing & Rights feature */}
      <section className="section publishing-feature" aria-labelledby="publishing-title">
        <div className="container grid-12">
          <div className="col-label">
            <Label>{h.publishing.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="publishing-title" className="h2">
              {h.publishing.title}
            </h2>
            <p className="body-text">{h.publishing.body}</p>
            <dl className="pairs">
              {h.publishing.sides.map((side) => (
                <div key={side.name}>
                  <dt>{side.name}</dt>
                  <dd>{side.text}</dd>
                </div>
              ))}
            </dl>
            <ArrowLink href={pathFor(locale, "publishing")}>{h.publishing.link}</ArrowLink>
          </div>
        </div>
      </section>

      {/* 8. Founder */}
      <section className="section container" aria-labelledby="founder-title">
        <div className="founder-feature">
          <PortraitSlot dict={dict} />
          <div>
            <Label>{h.founder.label}</Label>
            <h2 id="founder-title" className="h2">
              {h.founder.name}
              <span className="founder-role">{h.founder.role}</span>
            </h2>
            <p className="body-text">{h.founder.body}</p>
            <p className="label">{h.founder.pathLabel}</p>
            <ol className="path">
              {h.founder.path.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <ArrowLink href={pathFor(locale, "founder")}>{h.founder.link}</ArrowLink>
          </div>
        </div>
      </section>

      {/* 9. Qualified opportunities */}
      <section className="section container" aria-labelledby="qualified-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{h.qualified.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="qualified-title" className="quote">
              {h.qualified.title}
            </h2>
            <p className="body-text">{h.qualified.body}</p>
            <ul className="rule-list">
              {h.qualified.criteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="body-text muted">{h.qualified.note}</p>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <FinalCta locale={locale} dict={dict} title={h.final.title} body={h.final.body} />
    </>
  );
}
