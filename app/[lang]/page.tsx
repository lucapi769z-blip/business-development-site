import type { Metadata } from "next";
import { getDict } from "@/content";
import { alternates, isLocale, type Locale } from "@/lib/i18n";
import { Categories, Focus, Hero, LetsTalk, Manufacturers, Perspective, Process, Profile, Services } from "@/components/sections";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "it";
  return { alternates: alternates(locale, "home") };
}

// Home sequence: Hero, Our Focus, From Product to Market, Product categories, Services,
// Process, For Manufacturers (dark), Profile, final call to action.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "it";
  const dict = getDict(locale);
  const props = { locale, dict };

  return (
    <>
      <Hero {...props} />
      <Focus {...props} />
      <Perspective {...props} />
      <Categories {...props} />
      <Services {...props} />
      <Process {...props} />
      <Manufacturers {...props} />
      <Profile {...props} />
      <LetsTalk {...props} />
    </>
  );
}
