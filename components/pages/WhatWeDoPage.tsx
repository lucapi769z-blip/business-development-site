import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { ArrowLink, contactHref, FinalCta, Label, PageHero, ProcessList } from "../blocks";

export function WhatWeDoPage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const w = dict.whatWeDo;
  const { labels, items } = dict.services;
  const general = items.slice(0, 4);
  const publishing = items.slice(4);

  return (
    <>
      <PageHero label={w.hero.label} title={w.hero.title} body={w.hero.body} />

      <nav className="container page-index" aria-label={w.hero.label}>
        <ol>
          {items.map((service) => (
            <li key={service.id}>
              <a href={`#${service.anchor}`}>
                <span aria-hidden="true">{service.number}</span> {service.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section className="section container" aria-labelledby="group-general">
        <h2 id="group-general" className="group-title">
          {dict.services.groups.general}
        </h2>
        {general.map((service) => (
          <article key={service.id} id={service.anchor} className="service-detail" aria-labelledby={`${service.anchor}-title`}>
            <div className="service-detail-head">
              <span className="service-number" aria-hidden="true">{service.number}</span>
              <h3 id={`${service.anchor}-title`} className="h2">
                {service.name}
              </h3>
              <p className="lead">{service.line}</p>
            </div>
            <div className="service-detail-body">
              <div>
                <h4 className="label">{labels.question}</h4>
                <p className="question">{service.question}</p>
              </div>
              <div>
                <h4 className="label">{labels.involves}</h4>
                <ul className="rule-list">
                  {service.involves.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="label">{labels.situations}</h4>
                <p>{service.situations}</p>
              </div>
              <div>
                <h4 className="label">{labels.excludes}</h4>
                <p>{service.excludes}</p>
                <p className="muted">{service.relation}</p>
              </div>
            </div>
            <p className="service-enquire">
              <ArrowLink href={contactHref(locale, service.id)}>
                {labels.enquire} {service.name}
              </ArrowLink>
            </p>
          </article>
        ))}

        <div className="distinction">
          <table>
            <caption>
              <span className="label">{w.distinction.caption}</span>
              <span className="h3">{w.distinction.title}</span>
            </caption>
            <thead>
              <tr>
                {w.distinction.headers.map((header, index) =>
                  index === 0 ? <td key="empty" /> : <th key={header} scope="col">{header}</th>,
                )}
              </tr>
            </thead>
            <tbody>
              {w.distinction.rows.map(([head, a, b]) => (
                <tr key={head}>
                  <th scope="row">{head}</th>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section publishing-feature" aria-labelledby="group-publishing">
        <div className="container">
          <h2 id="group-publishing" className="group-title">
            {dict.services.groups.publishing}
          </h2>
          <p className="body-text">{w.publishingGroup.intro}</p>
          <div className="publishing-pair">
            {publishing.map((service) => (
              <article key={service.id} id={service.anchor} aria-labelledby={`${service.anchor}-title`}>
                <span className="service-number" aria-hidden="true">{service.number}</span>
                <h3 id={`${service.anchor}-title`} className="h3">
                  {service.name}
                </h3>
                <p>{service.line}</p>
              </article>
            ))}
          </div>
          <ArrowLink href={pathFor(locale, "publishing")}>{w.publishingGroup.link}</ArrowLink>
        </div>
      </section>

      <section id="how-we-work" className="section container" aria-labelledby="how-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{w.how.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="how-title" className="h2">
              {w.how.title}
            </h2>
            <p className="body-text">{w.how.body}</p>
          </div>
        </div>
        <ProcessList dict={dict} detailed />
        <div className="grid-12">
          <div className="col-main">
            <p className="small-print">{dict.process.qualifier}</p>
          </div>
        </div>
      </section>

      <section id="boundaries" className="section band" aria-labelledby="boundaries-title">
        <div className="container grid-12">
          <div className="col-label">
            <Label>{w.boundaries.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="boundaries-title" className="h2">
              {w.boundaries.title}
            </h2>
            <p className="body-text">{w.boundaries.body}</p>
            <ul className="rule-list">
              {w.boundaries.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCta locale={locale} dict={dict} title={w.final.title} body={w.final.body} />
    </>
  );
}
