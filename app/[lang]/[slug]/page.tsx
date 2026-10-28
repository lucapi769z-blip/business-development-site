import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDict } from "@/content";
import { alternates, isLocale, pageForSlug, slugParams, type Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import {
  Categories,
  Focus,
  LegalText,
  LetsTalk,
  Manufacturers,
  NumberedList,
  PageIntro,
  Perspective,
  Process,
  Profile,
  Services,
} from "@/components/sections";

export function generateStaticParams() {
  return slugParams();
}

export const dynamicParams = false;

async function resolve(params: PageProps<"/[lang]/[slug]">["params"]) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const page = pageForSlug(lang, slug);
  if (!page) notFound();
  return { locale: lang as Locale, page, dict: getDict(lang) };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { locale, page, dict } = await resolve(params);
  const { title, description } = dict.meta[page];
  return { title, description, alternates: alternates(locale, page), openGraph: { title, description } };
}

export default async function InnerPage({ params }: PageProps<"/[lang]/[slug]">) {
  const { locale, page, dict } = await resolve(params);
  const props = { locale, dict };

  switch (page) {
    case "products":
      return (
        <>
          <PageIntro {...dict.pages.products} />
          <Categories {...props} detailed />
          <LetsTalk {...props} />
        </>
      );
    case "services":
      return (
        <>
          <PageIntro {...dict.pages.services} />
          <Services {...props} intro={false} />
          <Process {...props} />
          <LetsTalk {...props} />
        </>
      );
    case "manufacturers": {
      const m = dict.pages.manufacturers;
      return (
        <>
          <PageIntro {...m} />
          <NumberedList {...m.who} />
          <Manufacturers {...props} withLink={false} />
          <NumberedList {...m.prepare} />
          <Perspective {...props} id="opportunities" />
          <LetsTalk {...props} />
        </>
      );
    }
    case "about":
      return (
        <>
          <Profile {...props} withLink={false} />
          <Focus {...props} />
          <LetsTalk {...props} />
        </>
      );
    case "contact":
      return (
        <>
          <PageIntro {...dict.pages.contact} />
          <ContactForm locale={locale} dict={dict} />
        </>
      );
    default: {
      const legal = dict.pages[page];
      return (
        <>
          <PageIntro {...legal} />
          <LegalText sections={legal.sections} />
        </>
      );
    }
  }
}
