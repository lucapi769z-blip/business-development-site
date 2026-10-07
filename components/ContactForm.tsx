"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/content";
import { Arrow } from "./ui";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm({ dict }: { dict: Dict }) {
  const c = dict.pages.contact;
  const [state, setState] = useState<State>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setState("error");
      form.reportValidity();
      return;
    }
    setState("sending");
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);
    setState(res?.ok ? "sent" : "error");
  }

  if (state === "sent") {
    return (
      <section className="section contact">
        <div className="container">
          <p className="contact-success" role="status">
            {c.success}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact">
      <div className="container contact-grid">
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label>
            <span>{c.fields.name} *</span>
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            <span>{c.fields.email} *</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            <span>{c.fields.organisation}</span>
            <input name="organisation" autoComplete="organization" />
          </label>
          <label>
            <span>{c.fields.type} *</span>
            <select name="type" required defaultValue="">
              <option value="" disabled>
                —
              </option>
              {c.fields.types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="full">
            <span>{c.fields.message} *</span>
            <textarea name="message" rows={7} required maxLength={3000} />
          </label>
          <label className="consent full">
            <input name="consent" type="checkbox" required />
            <span>{c.fields.consent}</span>
          </label>
          <div className="full form-actions">
            <button type="submit" className="button" disabled={state === "sending"}>
              <span>{state === "sending" ? c.sending : c.submit}</span>
              <Arrow />
            </button>
            {state === "error" && (
              <p className="form-error" role="alert">
                {c.error}
              </p>
            )}
          </div>
        </form>
        <aside className="contact-aside">
          <p>{c.authorsNote}</p>
        </aside>
      </div>
    </section>
  );
}
