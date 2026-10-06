import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/inter";
import "./globals.css";

// Unmatched URLs outside /en and /it: a calm bilingual 404 with routes back to both Homes.
export const metadata: Metadata = {
  title: "404 · [Brand]",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main id="main" className="page-hero container narrow">
          <p className="wordmark">[Brand]</p>
          <p className="label">404</p>
          <h1>This page could not be found.</h1>
          <p className="body-text">
            <Link href="/en">Go to the English Home</Link>
          </p>
          <p className="body-text" lang="it">
            La pagina non è stata trovata. <Link href="/it">Vai alla Home in italiano</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
