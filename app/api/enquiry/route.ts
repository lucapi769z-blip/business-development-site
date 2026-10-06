import { NextResponse } from "next/server";
import { isCategory, validate, visibleValues, type FieldId } from "@/lib/form";

// Enquiry endpoint. The delivery channel (email, CRM, storage and retention) is an open
// implementation decision (docs/03 §25): set ENQUIRY_WEBHOOK_URL to forward enquiries.
// Without it, enquiries are accepted only in development, so none is silently lost in production.

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot or implausibly fast submission: answer as accepted, keep nothing.
  if ((typeof body.website === "string" && body.website) || (typeof body.elapsed === "number" && body.elapsed < 2500)) {
    return NextResponse.json({ ok: true });
  }

  const category = body.category;
  if (!isCategory(category) || typeof body.fields !== "object" || body.fields === null) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const raw = body.fields as Partial<Record<FieldId, unknown>>;
  const values = Object.fromEntries(
    Object.entries(raw).filter(([, v]) => typeof v === "string"),
  ) as Partial<Record<FieldId, string>>;

  const errors = validate(category, values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Fields not relevant to the category are discarded (docs/03 §12).
  const enquiry = {
    receivedAt: new Date().toISOString(),
    locale: body.locale === "it" ? "it" : "en",
    category,
    fields: visibleValues(category, values),
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
    }).catch(() => null);
    if (!forwarded?.ok) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true });
  }

  if (process.env.NODE_ENV !== "production") {
    console.info(`[enquiry] ${enquiry.category} (${enquiry.locale}) received; no delivery channel configured.`);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false }, { status: 503 });
}
