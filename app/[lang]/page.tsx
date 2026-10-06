import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getDict } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata(isLocale(lang) ? lang : "en", "home");
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  return <HomePage locale={locale} dict={getDict(locale)} />;
}
