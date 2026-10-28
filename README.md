# business-development-site

Bilingual website (Italian by default, English) for an independent partner in commercial
intermediation and market development for **products intended for hospitals and clinics**:
medical devices, hospital equipment, diagnostics and monitoring, medical consumables,
clinical department products and healthcare technology.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000 → /it (Italian) and /en (English)
```

## Structure

- `content/it.ts`, `content/en.ts`: all texts, page metadata and SEO keywords. Edit copy here.
- `lib/i18n.ts`: languages, page slugs (`/it/prodotti`, `/en/products`, …) and hreflang.
- `components/sections.tsx`: homepage and inner-page sections.
- `components/ContactForm.tsx` + `app/api/enquiry/route.ts` + `lib/enquiry.ts`: the
  "Presenta un prodotto" form (validation, anti-spam, email delivery).
- `public/images/`: illustrations. Replace a file with a photograph of the same name and
  similar proportions to change an image without touching the code.

Pages: Home, Prodotti, Servizi, Per i produttori, Profilo, Contatti, Privacy, Cookie policy,
Note legali, in both languages. Old URLs of the previous generalist site redirect to their
closest successor (`next.config.ts`).

## Form delivery (to configure before publishing)

The form validates every field on the client and on the server, and protects itself with a
hidden honeypot field, a minimum fill time and a per-address rate limit. Delivery uses
[Resend](https://resend.com) through its HTTP API.

1. Copy `.env.example` to `.env.local`.
2. Create a Resend account and an API key → `RESEND_API_KEY`.
3. Set the address that receives enquiries → `ENQUIRY_TO_EMAIL`.
4. Verify your domain in Resend and set the sender → `ENQUIRY_FROM_EMAIL`.
5. Set the public URL of the site → `NEXT_PUBLIC_SITE_URL` (used by canonical links and the sitemap).

Without these variables, in development (`npm run dev`) enquiries are printed in the
terminal; in production the form answers that sending is temporarily unavailable, so no
enquiry is lost silently.

## Still to complete before publication

- Brand name (currently `[Brand]` in `content/*.ts`).
- Company details for the legal notice and privacy notice (company name, registered office,
  VAT number, contact email), to be checked with a consultant.
