export type Locale = 'en' | 'fr';

export const LOCALES: Locale[] = ['en', 'fr'];

export type MemberStateCode = 'FR' | 'DE' | 'BE';

export const MEMBER_STATES: MemberStateCode[] = ['FR', 'DE', 'BE'];

export type LocalizedText = {
  en: string;
  fr: string;
};

export type AuthorisationStatus =
  | 'authorised_amateur'
  | 'restricted_amateur'
  | 'withdrawn'
  | 'not_authorised'
  | 'unknown';

export type BiocideProductType = 'PT18' | 'PT19';

export type PppUse = 'herbicide' | 'fungicide' | 'insecticide' | 'molluscicide';

export type ProductCategory =
  | { kind: 'biocide'; productType: BiocideProductType }
  | { kind: 'ppp'; use: PppUse };

export type ActiveSubstance = {
  id: string;
  name: LocalizedText;
  casNumber?: string;
};

export type ScoreBand = 'green' | 'yellow' | 'orange' | 'red';

export type Product = {
  id: string;
  barcode: string;
  name: LocalizedText;
  brand: LocalizedText;
  category: ProductCategory;
  actives: ActiveSubstance[];
  memberStateStatuses: Record<MemberStateCode, AuthorisationStatus>;
  /** Demonstration score 0–100. Not an official regulatory ranking. */
  score: number;
  scoreReasons: LocalizedText[];
  hazardNotes: LocalizedText[];
  /** IDs of other catalogue products suggested as lower-concern options for a similar amateur use. */
  alternatives: string[];
};

export const DEFAULT_LOCALE: Locale = 'en';
export const DEFAULT_MEMBER_STATE: MemberStateCode = 'FR';
