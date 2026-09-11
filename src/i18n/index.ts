import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';
import type { Locale } from '@/data/types';

type DeepStringify<T> = T extends string
  ? string
  : { [K in keyof T]: DeepStringify<T[K]> };

export type Messages = DeepStringify<typeof en>;
export type MessageKey = NestedKeyOf<typeof en>;

type NestedKeyOf<T> = T extends string
  ? never
  : {
      [K in keyof T & string]: T[K] extends string ? K : `${K}.${NestedKeyOf<T[K]>}`;
    }[keyof T & string];

const dictionaries: Record<Locale, Messages> = { en, fr };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export function translate(
  locale: Locale,
  key: MessageKey,
  vars?: Record<string, string | number>,
): string {
  const raw = lookup(getMessages(locale), key) ?? lookup(en, key) ?? key;
  if (!vars) {
    return raw;
  }
  return raw.replace(/\{\{(\w+)\}\}/g, (_, name: string) => String(vars[name] ?? ''));
}

function lookup(messages: Messages | typeof en, key: string): string | undefined {
  const parts = key.split('.');
  let current: unknown = messages;
  for (const part of parts) {
    if (typeof current !== 'object' || current === null || !(part in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}
