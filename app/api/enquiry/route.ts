import { deliver, deliveryConfigured, formatEnquiry, looksLikeSpam, rateLimited, validate } from "@/lib/enquiry";

// Receives the "Present a product" form. Without email credentials (see .env.example) the
// enquiry is printed in the terminal during development and refused in production, so no
// enquiry is ever silently lost.
export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";

  if (rateLimited(ip)) return Response.json({ ok: false, error: "rate" }, { status: 429 });
  // Bots get a normal-looking answer, so they do not learn what stopped them.
  if (looksLikeSpam(data)) return Response.json({ ok: true });

  const result = validate(data);
  if ("invalid" in result) return Response.json({ ok: false, error: "validation", fields: result.invalid }, { status: 400 });

  if (!deliveryConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[enquiry] email delivery not configured; enquiry received:\n${formatEnquiry(result.enquiry)}`);
      return Response.json({ ok: true, delivered: false });
    }
    console.error("[enquiry] RESEND_API_KEY / ENQUIRY_TO_EMAIL missing: enquiry not delivered");
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  try {
    await deliver(result.enquiry);
    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return Response.json({ ok: false, error: "unavailable" }, { status: 502 });
  }
}
