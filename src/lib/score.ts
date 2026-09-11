import type { ScoreBand } from '@/data/types';

export function scoreBand(score: number): ScoreBand {
  if (score >= 75) return 'green';
  if (score >= 50) return 'yellow';
  if (score >= 25) return 'orange';
  return 'red';
}

export function isPoorScore(score: number): boolean {
  return score < 50;
}

export function clampScore(score: number): number {
  return Math.max(0, Math.min(100, Math.round(score)));
}
