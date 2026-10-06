import type { Dict } from "@/content";
import type { Locale } from "@/lib/i18n";
import { FinalCta, Label, PortraitSlot } from "../blocks";

export function FounderPage({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.founder;

  return (
    <>
      <section className="page-hero container founder-hero" aria-labelledby="founder-name">
        <div>
          <Label>{f.hero.label}</Label>
          <h1 id="founder-name">
            {f.hero.name}
            <span className="founder-role">{f.hero.role}</span>
          </h1>
          <p className="lead">{f.hero.body}</p>
          <p className="label">{f.hero.roleLabel}</p>
          <ul className="inline-list">
            {f.hero.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <PortraitSlot dict={dict} />
      </section>

      <section className="section container" aria-labelledby="chapters-title">
        <div className="grid-12">
          <div className="col-label">
            <Label>{f.chapters.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="chapters-title" className="h2">
              {f.chapters.title}
            </h2>
          </div>
        </div>
        <ol className="chapters">
          {f.chapters.items.map((chapter) => (
            <li key={chapter.number}>
              <span className="service-number" aria-hidden="true">{chapter.number}</span>
              <h3 className="h3">{chapter.name}</h3>
              <p>{chapter.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reserved: "Selected Professional Background" (docs/03 §10.3) is added only with verified facts. */}

      <section className="section band" aria-labelledby="specialists-title">
        <div className="container grid-12">
          <div className="col-label">
            <Label>{f.specialists.label}</Label>
          </div>
          <div className="col-main">
            <h2 id="specialists-title" className="h2">
              {f.specialists.title}
            </h2>
            <p className="body-text">{f.specialists.body}</p>
          </div>
        </div>
      </section>

      <FinalCta locale={locale} dict={dict} title={f.final.title} body={f.final.body} />
    </>
  );
}
