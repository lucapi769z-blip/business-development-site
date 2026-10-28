// Validation and delivery of the "Present a product" enquiries.
// Delivery uses the Resend email API (https://resend.com) through plain fetch, so no extra
// dependency is needed. Configure it with the variables documented in .env.example.

export const fields = [
  { name: "fullName", max: 120, required: true },
  { name: "company", max: 160, required: true },
  { name: "email", max: 160, required: true },
  { name: "website", max: 300, required: true },
  { name: "category", max: 120, required: true },
  { name: "productName", max: 160, required: true },
  { name: "country", max: 80, required: true },
  { name: "description", max: 3000, required: true },
  { name: "objective", max: 160, required: true },
  { name: "productLink", max: 300, required: false },
] as const;

export type Enquiry = Record<(typeof fields)[number]["name"], string> & { locale: string };

const labels: Record<keyof Omit<Enquiry, "locale">, string> = {
  fullName: "Nome e cognome",
  company: "Azienda produttrice",
  email: "Email professionale",
  website: "Sito web",
  category: "Categoria di prodotto",
  productName: "Nome del prodotto",
  country: "Paese di origine",
  description: "Descrizione sintetica",
  objective: "Obiettivo commerciale",
  productLink: "Scheda prodotto",
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const isUrl = (v: string) => {
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
};

/** Returns the cleaned enquiry, or the names of the invalid fields. */
export function validate(data: Record<string, unknown> | null): { enquiry: Enquiry } | { invalid: string[] } {
  const str = (key: string) => (typeof data?.[key] === "string" ? (data[key] as string).trim() : "");
  const invalid: string[] = [];
  const out: Record<string, string> = {};
  for (const f of fields) {
    const v = str(f.name);
    if ((f.required && !v) || v.length > f.max) invalid.push(f.name);
    out[f.name] = v;
  }
  if (out.email && !isEmail(out.email)) invalid.push("email");
  if (out.website && !isUrl(out.website)) invalid.push("website");
  if (out.productLink && !isUrl(out.productLink)) invalid.push("productLink");
  if (out.description && out.description.length < 20) invalid.push("description");
  if (!data?.consent) invalid.push("consent");
  if (invalid.length) return { invalid: [...new Set(invalid)] };
  return { enquiry: { ...(out as Omit<Enquiry, "locale">), locale: str("locale") === "en" ? "en" : "it" } };
}

/** Anti-spam: the hidden field must be empty and the form must have been open for a few seconds. */
export function looksLikeSpam(data: Record<string, unknown> | null): boolean {
  if (typeof data?.fax === "string" && data.fax.trim() !== "") return true;
  const started = Number(data?.startedAt);
  if (!Number.isFinite(started) || started <= 0) return true;
  const elapsed = Date.now() - started;
  return elapsed < 3000 || elapsed > 1000 * 60 * 60 * 24;
}

// Simple per-address limit, kept in memory: enough for a single server instance.
const hits = new Map<string, number[]>();
export function rateLimited(ip: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > limit;
}

export function deliveryConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL);
}

function asText(e: Enquiry): string {
  return [
    "Nuova richiesta dal modulo \"Presenta un prodotto\"",
    "",
    ...(Object.keys(labels) as (keyof typeof labels)[]).map((k) => `${labels[k]}: ${e[k] || "—"}`),
    `Lingua del sito: ${e.locale}`,
  ].join("\n");
}

/** Sends the enquiry by email. Throws if the provider rejects it. */
export async function deliver(e: Enquiry): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL || "Sito web <onboarding@resend.dev>",
      to: process.env.ENQUIRY_TO_EMAIL!.split(",").map((s) => s.trim()),
      reply_to: e.email,
      subject: `Nuovo prodotto proposto: ${e.productName} (${e.company})`,
      text: asText(e),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export { asText as formatEnquiry };
