import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1A241F',
    textSecondary: '#5C665F',
    background: '#F4F6F4',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#E4EEE9',
    border: '#D5DDD8',
    primary: '#1B5E4A',
    primaryText: '#FFFFFF',
    primarySoft: '#E7F2ED',
    scoreGreen: '#2E7D4F',
    scoreYellow: '#B8860B',
    scoreOrange: '#C05621',
    scoreRed: '#B42318',
    demo: '#6B5A1A',
    demoSoft: '#F6F0D8',
    dangerSoft: '#F8E8E6',
  },
  dark: {
    text: '#F2F5F3',
    textSecondary: '#A7B0AB',
    background: '#101613',
    backgroundElement: '#1A221E',
    backgroundSelected: '#24332C',
    border: '#2C3A34',
    primary: '#7CB9A4',
    primaryText: '#102019',
    primarySoft: '#1C2E28',
    scoreGreen: '#5FBF86',
    scoreYellow: '#E0B84A',
    scoreOrange: '#E0894A',
    scoreRed: '#E07068',
    demo: '#E6D48A',
    demoSoft: '#2C2818',
    dangerSoft: '#2A1A18',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const MaxContentWidth = 720;
