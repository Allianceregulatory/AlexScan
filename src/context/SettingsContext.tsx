import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { translate, type MessageKey } from '@/i18n';
import {
  DEFAULT_LOCALE,
  DEFAULT_MEMBER_STATE,
  LOCALES,
  MEMBER_STATES,
  type Locale,
  type LocalizedText,
  type MemberStateCode,
} from '@/data/types';

const LOCALE_KEY = 'alexscan.locale';
const MEMBER_STATE_KEY = 'alexscan.memberState';

type Translator = (key: MessageKey, vars?: Record<string, string | number>) => string;

type SettingsContextValue = {
  locale: Locale;
  memberState: MemberStateCode;
  setLocale: (locale: Locale) => void;
  setMemberState: (memberState: MemberStateCode) => void;
  t: Translator;
  text: (value: LocalizedText) => string;
  ready: boolean;
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as string[]).includes(value);
}

function isMemberState(value: string | null): value is MemberStateCode {
  return value !== null && (MEMBER_STATES as string[]).includes(value);
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [memberState, setMemberStateState] = useState<MemberStateCode>(DEFAULT_MEMBER_STATE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [storedLocale, storedMemberState] = await Promise.all([
          AsyncStorage.getItem(LOCALE_KEY),
          AsyncStorage.getItem(MEMBER_STATE_KEY),
        ]);
        if (cancelled) return;
        if (isLocale(storedLocale)) {
          setLocaleState(storedLocale);
        }
        if (isMemberState(storedMemberState)) {
          setMemberStateState(storedMemberState);
        }
      } catch {
        // Keep defaults if storage is unavailable (e.g. first web render).
      } finally {
        if (!cancelled) {
          setReady(true);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    void AsyncStorage.setItem(LOCALE_KEY, next).catch(() => undefined);
  }, []);

  const setMemberState = useCallback((next: MemberStateCode) => {
    setMemberStateState(next);
    void AsyncStorage.setItem(MEMBER_STATE_KEY, next).catch(() => undefined);
  }, []);

  const t = useCallback<Translator>(
    (key, vars) => translate(locale, key, vars),
    [locale],
  );

  const text = useCallback((value: LocalizedText) => value[locale], [locale]);

  const value = useMemo(
    () => ({
      locale,
      memberState,
      setLocale,
      setMemberState,
      t,
      text,
      ready,
    }),
    [locale, memberState, setLocale, setMemberState, t, text, ready],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsContextValue {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
}
