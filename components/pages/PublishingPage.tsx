import type { Dict } from "@/content";
import type { Locale } from "@/lib/i18n";
import { ArrowLink, contactHref, FinalCta, Label, PageHero } from "../blocks";

export function PublishingPage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const p = dict.publishing;

  return (
    <>
      <PageHero label={p.hero.label} title={p.hero.title} body={p.hero.body} />

      <section id="publishers" className="section container" aria-labelledby="publishers-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{p.publishers.label}</Label>
            <p className="service-tag">{p.publishers.service}</p>
          </div>
          <div className="col-main">
            <h2 id="publishers-title" className="h2">
              {p.publishers.title}
            </h2>
            <p className="body-text">{p.publishers.body}</p>
            <dl className="pairs">
              {p.publishers.themes.map((theme) => (
                <div key={theme.name}>
                  <dt>{theme.name}</dt>
                  <dd>{theme.text}</dd>
                </div>
              ))}
            </dl>
            <h3 className="label">{p.publishers.involvesLabel}</h3>
            <ul className="rule-list">
              {p.publishers.involves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ArrowLink href={contactHref(locale, "publishing-rights")}>{p.publishers.cta}</ArrowLink>
          </div>
        </div>
      </section>

      <section id="authors" className="section container" aria-labelledby="authors-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{p.authors.label}</Label>
            <p className="service-tag">{p.authors.service}</p>
          </div>
          <div className="col-main">
            <h2 id="authors-title" className="h2">
              {p.authors.title}
            </h2>
            <p className="body-text">{p.authors.body}</p>
            <h3 className="label">{p.authors.involvesLabel}</h3>
            <ol className="rule-list numbered">
              {p.authors.involves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="body-text muted">{p.authors.excludes}</p>
            <ArrowLink href={contactHref(locale, "author-opportunities")}>{p.authors.cta}</ArrowLink>
          </div>
        </div>
      </section>

      <section id="works" className="section container" aria-labelledby="works-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{p.works.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="works-title" className="h2">
              {p.works.title}
            </h2>
            <p className="body-text">{p.works.body}</p>
          </div>
        </div>
      </section>

      <section id="evaluation" className="section band" aria-labelledby="evaluation-title">
        <div className="container grid-12">
          <div className="col-label">
            <Label>{p.evaluation.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="evaluation-title" className="h2">
              {p.evaluation.title}
            </h2>
            <p className="body-text">{p.evaluation.body}</p>
            <ul className="rule-list">
              {p.evaluation.criteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="body-text muted">{p.evaluation.decline}</p>
          </div>
        </div>
      </section>

      <section id="author-enquiries" className="section container" aria-labelledby="rules-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{p.rules.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="rules-title" className="h2">
              {p.rules.title}
            </h2>
            <ol className="rule-list numbered">
              {p.rules.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FinalCta
        locale={locale}
        dict={dict}
        title={p.final.title}
        body={p.final.body}
        category="publishing-rights"
      />
    </>
  );
}
