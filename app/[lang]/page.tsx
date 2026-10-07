import { getDict } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { Approach, Areas, Direction, Founder, Hero, LetsTalk, Process, Publishing, Services } from "@/components/sections";

// Home sequence as in the approved screenshots: Hero + Direction, Approach, What We Do,
// Process, Areas of Interest, Publishing & Rights (dark), Founder, Let's Talk.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const dict = getDict(locale);
  const props = { locale, dict };

  return (
    <>
      <Hero {...props} />
      <Direction {...props} />
      <Approach {...props} />
      <Services {...props} />
      <Process {...props} />
      <Areas {...props} />
      <Publishing {...props} />
      <Founder {...props} />
      <LetsTalk {...props} />
    </>
  );
}
