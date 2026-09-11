import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import type { ScoreBand } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';
import { scoreBandKey } from '@/lib/labels';
import { clampScore, scoreBand } from '@/lib/score';

function bandColor(band: ScoreBand, theme: ReturnType<typeof useTheme>): string {
  switch (band) {
    case 'green':
      return theme.scoreGreen;
    case 'yellow':
      return theme.scoreYellow;
    case 'orange':
      return theme.scoreOrange;
    case 'red':
      return theme.scoreRed;
  }
}

type Props = {
  score: number;
  size?: 'sm' | 'lg';
};

export function ScoreBadge({ score, size = 'sm' }: Props) {
  const theme = useTheme();
  const { t } = useSettings();
  const value = clampScore(score);
  const band = scoreBand(value);
  const color = bandColor(band, theme);
  const dimension = size === 'lg' ? 132 : 56;

  return (
    <View style={styles.wrap}>
      <View
        style={[
          styles.circle,
          {
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            borderColor: color,
            backgroundColor: theme.backgroundElement,
          },
        ]}>
        <AppText
          variant={size === 'lg' ? 'display' : 'subtitle'}
          style={{ color, fontWeight: '800' }}>
          {value}
        </AppText>
      </View>
      {size === 'lg' ? (
        <View style={styles.meta}>
          <AppText variant="label" style={{ color }}>
            {t(scoreBandKey(band))}
          </AppText>
          <AppText variant="caption" color="textSecondary">
            {t('product.demoScore')}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}

export function ScoreDot({ score }: { score: number }) {
  const theme = useTheme();
  const band = scoreBand(clampScore(score));
  return (
    <View
      style={[
        styles.dot,
        { backgroundColor: bandColor(band, theme) },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  circle: {
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meta: {
    alignItems: 'center',
    gap: 2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
