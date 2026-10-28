import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-mono/400.css";
import "../globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDict } from "@/content";
import { alternates, isLocale, locales, siteUrl } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "it";
  const dict = getDict(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { template: `%s · ${dict.brand}`, default: dict.meta.home.title },
    description: dict.meta.home.description,
    keywords: [...dict.meta.keywords, ...getDict(locale === "it" ? "en" : "it").meta.keywords],
    alternates: alternates(locale, "home"),
    openGraph: {
      type: "website",
      siteName: dict.brand,
      locale: locale === "it" ? "it_IT" : "en_GB",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: [{ url: "/images/hero-hospital-corridor.jpg", width: 1306, height: 968 }],
    },
  };
}

export const viewport: Viewport = { themeColor: "#f7f5f0" };

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDict(lang);

  return (
    <html lang={lang}>
      <body>
        <a className="skip-link" href="#main">
          {dict.a11y.skip}
        </a>
        <SiteHeader locale={lang} dict={dict} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter locale={lang} dict={dict} />
      </body>
    </html>
  );
}
