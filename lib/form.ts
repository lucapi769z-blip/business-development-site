import type { CategoryId } from "@/content";

// Dynamic contact form rules (docs/03 §12–13). Shared by the form and the API route.

export const categoryIds: CategoryId[] = [
  "business-development",
  "market-entry",
  "partner-search",
  "strategic-partnerships",
  "publishing-rights",
  "author-opportunities",
  "other",
];

export function isCategory(value: unknown): value is CategoryId {
  return typeof value === "string" && (categoryIds as string[]).includes(value);
}

export type FieldId =
  | "name"
  | "email"
  | "country"
  | "company"
  | "targetMarket"
  | "workTitle"
  | "genre"
  | "publicationStatus"
  | "existingPublisher"
  | "synopsis"
  | "rights"
  | "objective"
  | "description";

type Rule = "R" | "O";

const permanent: Partial<Record<FieldId, Rule>> = { name: "R", email: "R", country: "R", description: "R" };

// V1 field matrix (docs/03 §12). Fields absent from a category are hidden and never submitted.
export const matrix: Record<CategoryId, Partial<Record<FieldId, Rule>>> = {
  "business-development": { ...permanent, company: "R", targetMarket: "O" },
  "market-entry": { ...permanent, company: "R", targetMarket: "R" },
  "partner-search": { ...permanent, company: "R", targetMarket: "R" },
  "strategic-partnerships": { ...permanent, company: "R", targetMarket: "O" },
  "publishing-rights": { ...permanent, company: "O", targetMarket: "O", rights: "O" },
  "author-opportunities": {
    ...permanent,
    company: "O",
    targetMarket: "O",
    workTitle: "R",
    genre: "R",
    publicationStatus: "R",
    existingPublisher: "O",
    synopsis: "R",
    rights: "O",
    objective: "R",
  },
  other: { ...permanent, company: "O", targetMarket: "O" },
};

// Display order: category-specific fields come directly after the category selection.
export const contextOrder: FieldId[] = [
  "company",
  "targetMarket",
  "workTitle",
  "genre",
  "publicationStatus",
  "existingPublisher",
  "synopsis",
  "rights",
  "objective",
];
export const personalOrder: FieldId[] = ["name", "email", "country"];

// Length limits keep enquiries concise and rule out manuscript-length submissions.
export const limits: Record<FieldId, number> = {
  name: 120,
  email: 160,
  country: 80,
  company: 160,
  targetMarket: 120,
  workTitle: 200,
  genre: 80,
  publicationStatus: 40,
  existingPublisher: 160,
  synopsis: 1200,
  rights: 600,
  objective: 300,
  description: 1500,
};

export const multiline: FieldId[] = ["synopsis", "rights", "description"];

export function rulesFor(category: CategoryId | "") {
  return category ? matrix[category] : permanent;
}

export type FieldError = "required" | "email" | "tooLong";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(
  category: CategoryId | "",
  values: Partial<Record<FieldId, string>>,
): Partial<Record<FieldId | "category", FieldError>> {
  const errors: Partial<Record<FieldId | "category", FieldError>> = {};
  if (!category) errors.category = "required";
  const rules = rulesFor(category);
  for (const [field, rule] of Object.entries(rules) as [FieldId, Rule][]) {
    const value = (values[field] ?? "").trim();
    if (rule === "R" && !value) errors[field] = "required";
    else if (value.length > limits[field]) errors[field] = "tooLong";
    else if (field === "email" && value && !EMAIL.test(value)) errors[field] = "email";
  }
  return errors;
}

// Only the fields relevant to the selected category leave the browser.
export function visibleValues(category: CategoryId, values: Partial<Record<FieldId, string>>) {
  const out: Partial<Record<FieldId, string>> = {};
  for (const field of Object.keys(matrix[category]) as FieldId[]) {
    const value = (values[field] ?? "").trim();
    if (value) out[field] = value;
  }
  return out;
}
