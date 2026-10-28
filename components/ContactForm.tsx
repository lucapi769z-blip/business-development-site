"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import type { Dict } from "@/content";
import { pathFor, type Locale } from "@/lib/i18n";
import { Arrow } from "./ui";

type State = "idle" | "sending" | "sent" | "error";
type Errors = Record<string, string>;

export function ContactForm({ locale, dict }: { locale: Locale; dict: Dict }) {
  const c = dict.pages.contact;
  const f = c.form;
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const startedAt = useRef<HTMLInputElement>(null);

  // Records when the form was shown: the server rejects submissions made faster than a person could.
  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  function fieldError(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string {
    const v = el.validity;
    if (v.valueMissing) return c.errors.required;
    if (v.typeMismatch && el.type === "email") return c.errors.email;
    if (v.typeMismatch && el.type === "url") return c.errors.url;
    return el.validationMessage;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const invalid: Errors = {};
    for (const el of Array.from(form.elements)) {
      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
        if (el.name && !el.checkValidity()) invalid[el.name] = fieldError(el);
      }
    }
    setErrors(invalid);
    if (Object.keys(invalid).length) {
      setState("error");
      setMessage(c.errors.form);
      (form.querySelector("[aria-invalid='true']") as HTMLElement | null)?.focus();
      return;
    }
    setState("sending");
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), locale }),
    }).catch(() => null);
    if (res?.ok) {
      setState("sent");
      return;
    }
    const body = (await res?.json().catch(() => null)) as { error?: string; fields?: string[] } | null;
    if (body?.fields?.length) setErrors(Object.fromEntries(body.fields.map((name) => [name, c.errors.required])));
    setState("error");
    setMessage(res?.status === 429 ? c.errors.rate : body?.error === "validation" ? c.errors.form : c.errors.server);
  }

  if (state === "sent") {
    return (
      <section className="section contact" id="form">
        <div className="container">
          <p className="contact-success" role="status">
            {c.success}
          </p>
        </div>
      </section>
    );
  }

  const field = (name: string) => ({
    name,
    id: `f-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `e-${name}` : undefined,
    onInput: () => errors[name] && setErrors(({ [name]: _, ...rest }) => rest),
  });
  // Accept "www.example.com" as typed: the scheme is added before validation.
  const withScheme = (e: { currentTarget: HTMLInputElement }) => {
    const el = e.currentTarget;
    if (el.value.trim() && !/^https?:\/\//i.test(el.value.trim())) el.value = `https://${el.value.trim()}`;
  };
  const error = (name: string) =>
    errors[name] ? (
      <span className="field-error" id={`e-${name}`}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <section className="section contact" id="form">
      <div className="container contact-grid">
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label>
            <span>{f.fullName} *</span>
            <input {...field("fullName")} required maxLength={120} autoComplete="name" />
            {error("fullName")}
          </label>
          <label>
            <span>{f.company} *</span>
            <input {...field("company")} required maxLength={160} autoComplete="organization" />
            {error("company")}
          </label>
          <label>
            <span>{f.email} *</span>
            <input {...field("email")} type="email" required maxLength={160} autoComplete="email" />
            {error("email")}
          </label>
          <label>
            <span>{f.website} *</span>
            <input {...field("website")} type="url" required maxLength={300} placeholder="https://" autoComplete="url" onBlur={withScheme} />
            {error("website")}
          </label>
          <label>
            <span>{f.category} *</span>
            <select {...field("category")} required defaultValue="">
              <option value="" disabled>
                —
              </option>
              {dict.categories.map((cat) => (
                <option key={cat.id}>{cat.name}</option>
              ))}
              <option>{f.other}</option>
            </select>
            {error("category")}
          </label>
          <label>
            <span>{f.productName} *</span>
            <input {...field("productName")} required maxLength={160} />
            {error("productName")}
          </label>
          <label>
            <span>{f.country} *</span>
            <input {...field("country")} required maxLength={80} autoComplete="country-name" />
            {error("country")}
          </label>
          <label>
            <span>{f.objective} *</span>
            <select {...field("objective")} required defaultValue="">
              <option value="" disabled>
                —
              </option>
              {f.objectives.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            {error("objective")}
          </label>
          <label className="full">
            <span>{f.description} *</span>
            <textarea {...field("description")} rows={6} required minLength={20} maxLength={3000} placeholder={f.descriptionHint} />
            {error("description")}
          </label>
          <label className="full">
            <span>{f.productLink}</span>
            <input {...field("productLink")} type="url" maxLength={300} placeholder="https://" onBlur={withScheme} />
            {error("productLink")}
          </label>
          {/* Anti-spam: a field people never see, and the time the form was shown. */}
          <div className="hp" aria-hidden="true">
            <label>
              {f.honeypot}
              <input name="fax" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <input type="hidden" name="startedAt" ref={startedAt} />
          <label className="consent full">
            <input {...field("consent")} type="checkbox" required />
            <span>
              {f.consent} <Link href={pathFor(locale, "privacy")}>{dict.footer.legalLinks.privacy}</Link>
            </span>
          </label>
          {error("consent")}
          <div className="full form-actions">
            <button type="submit" className="button" disabled={state === "sending"}>
              <span>{state === "sending" ? c.sending : c.submit}</span>
              <Arrow />
            </button>
            {state === "error" && (
              <p className="form-error" role="alert">
                {message}
              </p>
            )}
          </div>
          <p className="full form-required">* {f.required}</p>
        </form>
        <aside className="contact-aside">
          {c.aside.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </aside>
      </div>
    </section>
  );
}
