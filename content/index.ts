import type { Locale } from "@/lib/i18n";
import { en, type Dict } from "./en";
import { it } from "./it";

export type { Dict, ServiceId, CategoryId } from "./en";

const dictionaries: Record<Locale, Dict> = { en, it };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
