import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { ScoreBadge, ScoreDot } from '@/components/ScoreBadge';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import type { Product } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';
import { kindKey, productTypeKey, scoreBandKey } from '@/lib/labels';
import { scoreBand } from '@/lib/score';

type Props = {
  product: Product;
  onPress: () => void;
};

export function ProductCard({ product, onPress }: Props) {
  const theme = useTheme();
  const { t, text } = useSettings();
  const band = scoreBand(product.score);
  const categoryLabel = `${t(kindKey(product))} · ${t(productTypeKey(product))}`;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.backgroundElement,
          borderColor: theme.border,
          opacity: pressed ? 0.92 : 1,
        },
      ]}>
      <ScoreBadge score={product.score} />
      <View style={styles.body}>
        <AppText variant="label" color="textSecondary">
          {text(product.brand)}
        </AppText>
        <AppText variant="subtitle">{text(product.name)}</AppText>
        <AppText variant="caption" color="textSecondary" numberOfLines={2}>
          {categoryLabel}
        </AppText>
        <View style={styles.row}>
          <ScoreDot score={product.score} />
          <AppText variant="caption" color="textSecondary">
            {t(scoreBandKey(band))}
          </AppText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
});
