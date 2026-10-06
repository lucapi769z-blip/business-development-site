"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { getDict, type CategoryId } from "@/content";
import {
  contextOrder,
  isCategory,
  limits,
  multiline,
  personalOrder,
  rulesFor,
  validate,
  visibleValues,
  type FieldError,
  type FieldId,
} from "@/lib/form";
import { pathFor, type Locale } from "@/lib/i18n";

type Errors = Partial<Record<FieldId | "category", FieldError>>;

export function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const f = dict.form;
  const router = useRouter();
  const params = useSearchParams();

  const preset = params.get("category");
  const [category, setCategory] = useState<CategoryId | "">(isCategory(preset) ? preset : "");
  // Values of hidden fields are kept in the interface only, so switching back does not lose input.
  const [values, setValues] = useState<Partial<Record<FieldId, string>>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "failed">("idle");
  const [announcement, setAnnouncement] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);
  const failureRef = useRef<HTMLParagraphElement>(null);
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const rules = rulesFor(category);
  const isAuthor = category === "author-opportunities";
  const categoryLabel = f.categories.find((c) => c.id === category)?.label ?? "";

  const labelOf = (field: FieldId | "category") => {
    if (field === "category") return f.fields.category.label;
    if (field === "description" && isAuthor) return f.fields.descriptionAuthor.label;
    return f.fields[field].label;
  };

  const messageOf = (field: FieldId | "category", error: FieldError) => {
    if (error === "required") return f.errors.required(labelOf(field));
    if (error === "email") return f.errors.email;
    return f.errors.tooLong(labelOf(field), limits[field as FieldId]);
  };

  const onCategoryChange = (next: string) => {
    const value = isCategory(next) ? next : "";
    setCategory(value);
    setErrors((current) => {
      const { category: _ignored, ...rest } = current;
      return rest;
    });
    if (value) setAnnouncement(f.revealed(f.categories.find((c) => c.id === value)?.label ?? ""));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(category, values);
    setErrors(found);
    if (Object.keys(found).length > 0 || !category) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("sending");
    const honeypot = (event.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          category,
          fields: visibleValues(category, values),
          website: honeypot,
          elapsed: Date.now() - startedAt.current,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      router.push(pathFor(locale, "thankYou"));
    } catch {
      setStatus("failed");
      requestAnimationFrame(() => failureRef.current?.focus());
    }
  };

  const renderField = (field: FieldId) => {
    const rule = rules[field];
    if (!rule) return null;
    const id = `field-${field}`;
    const hint = field === "description" && isAuthor ? f.fields.descriptionAuthor.hint : f.fields[field].hint;
    const error = errors[field];
    const describedBy = [hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;
    const value = values[field] ?? "";
    const common = {
      id,
      name: field,
      value,
      required: rule === "R",
      "aria-invalid": error ? true : undefined,
      "aria-describedby": describedBy,
      maxLength: limits[field],
      onChange: (e: { target: { value: string } }) => setValues((v) => ({ ...v, [field]: e.target.value })),
    };

    let control;
    if (field === "publicationStatus") {
      control = (
        <select {...common}>
          <option value="">—</option>
          {f.publicationStatuses.map((option) => (
            <option key={option.id} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      );
    } else if (multiline.includes(field)) {
      control = <textarea {...common} rows={field === "description" && !isAuthor ? 7 : 5} />;
    } else {
      control = (
        <input
          {...common}
          type={field === "email" ? "email" : "text"}
          autoComplete={
            field === "name" ? "name" : field === "email" ? "email" : field === "country" ? "country-name" : field === "company" ? "organization" : "off"
          }
        />
      );
    }

    return (
      <div className="field" key={field}>
        <label htmlFor={id}>
          {labelOf(field)} <span className="field-rule">({rule === "R" ? f.required : f.optional})</span>
        </label>
        {hint && (
          <p className="field-hint" id={`${id}-hint`}>
            {hint}
          </p>
        )}
        {control}
        {multiline.includes(field) && (
          <p className="field-counter" aria-hidden="true">
            {f.counter(value.length, limits[field])}
          </p>
        )}
        {error && (
          <p className="field-error" id={`${id}-error`}>
            {messageOf(field, error)}
          </p>
        )}
      </div>
    );
  };

  const errorList = Object.entries(errors) as [FieldId | "category", FieldError][];

  return (
    <form className="enquiry-form" noValidate onSubmit={onSubmit} aria-labelledby="form-title">
      <h2 id="form-title" className="h3">
        {f.title}
      </h2>
      <p className="field-hint">{f.requiredNote}</p>

      {errorList.length > 0 && (
        <div className="error-summary" ref={summaryRef} tabIndex={-1} role="alert">
          <p>{f.errors.summary}</p>
          <ul>
            {errorList.map(([field, error]) => (
              <li key={field}>
                <a href={`#field-${field}`}>{messageOf(field, error)}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="field">
        <label htmlFor="field-category">
          {f.fields.category.label} <span className="field-rule">({f.required})</span>
        </label>
        <select
          id="field-category"
          name="category"
          value={category}
          required
          aria-invalid={errors.category ? true : undefined}
          aria-describedby={errors.category ? "field-category-error" : undefined}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">{f.categoryPlaceholder}</option>
          {f.categories.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="field-error" id="field-category-error">
            {messageOf("category", errors.category)}
          </p>
        )}
      </div>

      <p className="visually-hidden" aria-live="polite">
        {announcement}
      </p>

      {category && (
        <fieldset className="field-group" aria-label={categoryLabel}>
          {contextOrder.map(renderField)}
        </fieldset>
      )}

      {renderField("description")}
      {personalOrder.map(renderField)}

      {/* Spam protection without barriers: a honeypot hidden from people and assistive technologies. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="field-website">{f.honeypot}</label>
        <input id="field-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-submit">
        <p className="privacy-note">
          {f.privacy.before}
          <Link href={pathFor(locale, "privacy")}>{f.privacy.link}</Link>
          {f.privacy.after}
        </p>
        {status === "failed" && (
          <p className="form-failure" role="alert" tabIndex={-1} ref={failureRef}>
            {f.errors.submit}
          </p>
        )}
        <button type="submit" className="button" disabled={status === "sending"}>
          {status === "sending" ? f.sending : f.submit}
        </button>
      </div>
    </form>
  );
}
