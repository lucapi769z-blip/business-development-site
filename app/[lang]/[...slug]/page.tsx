import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FounderPage } from "@/components/pages/FounderPage";
import { PublishingPage } from "@/components/pages/PublishingPage";
import { ContactPage, LegalPage, NotFoundContent, ThankYouPage } from "@/components/pages/SimplePages";
import { WhatWeDoPage } from "@/components/pages/WhatWeDoPage";
import { getDict } from "@/content";
import { allSlugParams, isLocale, NOT_FOUND_SLUG, pageFromSlug, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

// Localised slugs (/en/what-we-do ↔ /it/cosa-facciamo) resolved from one route table in lib/i18n.
export function generateStaticParams() {
  return [...allSlugParams(), { lang: "en", slug: [NOT_FOUND_SLUG] }, { lang: "it", slug: [NOT_FOUND_SLUG] }];
}

async function isNotFoundSlug(params: PageProps<"/[lang]/[...slug]">["params"]) {
  const { slug } = await params;
  return slug.length === 1 && slug[0] === NOT_FOUND_SLUG;
}

async function resolve(params: PageProps<"/[lang]/[...slug]">["params"]) {
  const { lang, slug } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  return { locale, page: pageFromSlug(locale, slug) };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[...slug]">): Promise<Metadata> {
  const { locale, page } = await resolve(params);
  return pageMetadata(locale, page ?? "notFound");
}

export default async function Page({ params }: PageProps<"/[lang]/[...slug]">) {
  const { locale, page } = await resolve(params);
  const dict = getDict(locale);

  switch (page) {
    case "whatWeDo":
      return <WhatWeDoPage locale={locale} dict={dict} />;
    case "publishing":
      return <PublishingPage locale={locale} dict={dict} />;
    case "founder":
      return <FounderPage locale={locale} dict={dict} />;
    case "contact":
      return <ContactPage locale={locale} dict={dict} />;
    case "thankYou":
      return <ThankYouPage locale={locale} dict={dict} />;
    case "privacy":
    case "cookies":
    case "legal":
      return <LegalPage dict={dict} page={page} />;
    default:
      // The proxy rewrites unknown URLs here with a 404 status.
      if (await isNotFoundSlug(params)) return <NotFoundContent locale={locale} dict={dict} />;
      notFound();
  }
}
