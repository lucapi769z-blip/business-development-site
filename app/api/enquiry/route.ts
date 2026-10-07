// Validates enquiries. Delivery (email or CRM) is not configured yet, so accepted
// enquiries are only logged on the server.
export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const str = (key: string) => (typeof data?.[key] === "string" ? (data[key] as string).trim() : "");
  const email = str("email");
  if (!str("name") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !str("type") || !str("message") || !data?.consent) {
    return Response.json({ ok: false }, { status: 400 });
  }
  console.info("[enquiry]", { name: str("name"), email, type: str("type") });
  return Response.json({ ok: true });
}
