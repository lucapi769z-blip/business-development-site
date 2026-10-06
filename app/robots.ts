import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/i18n";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/en/contact/thank-you", "/it/contatti/grazie"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
