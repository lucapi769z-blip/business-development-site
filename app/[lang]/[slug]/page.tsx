import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDict } from "@/content";
import { isLocale, pageForSlug, slugParams, type Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import { Areas, Founder, LetsTalk, PageIntro, Process, Publishing, Services } from "@/components/sections";

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
  const { page, dict } = await resolve(params);
  return { title: dict.meta[page].title, description: dict.meta[page].description };
}

export default async function InnerPage({ params }: PageProps<"/[lang]/[slug]">) {
  const { locale, page, dict } = await resolve(params);
  const props = { locale, dict };
  const intro = dict.pages[page];

  switch (page) {
    case "whatWeDo":
      return (
        <>
          <PageIntro {...intro} />
          <Services {...props} intro={false} />
          <Process {...props} />
          <Areas {...props} />
          <LetsTalk {...props} />
        </>
      );
    case "publishing":
      return (
        <>
          <PageIntro {...intro} />
          <Publishing {...props} withLink={false} />
          <LetsTalk {...props} />
        </>
      );
    case "founder":
      return (
        <>
          <Founder {...props} withLink={false} />
          <LetsTalk {...props} />
        </>
      );
    case "contact":
      return (
        <>
          <PageIntro {...intro} />
          <ContactForm dict={dict} />
        </>
      );
    default:
      return <PageIntro {...intro} />;
  }
}
