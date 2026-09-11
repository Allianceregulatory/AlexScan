import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { ProductCard } from '@/components/ProductCard';
import { Screen } from '@/components/Screen';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import { searchProducts } from '@/data/queries';

export default function SearchScreen() {
  const router = useRouter();
  const { t } = useSettings();
  const { q } = useLocalSearchParams<{ q?: string | string[] }>();
  const query = Array.isArray(q) ? q[0] ?? '' : q ?? '';
  const results = searchProducts(query);

  return (
    <Screen>
      <View style={styles.header}>
        <AppText variant="title">{query ? `“${query}”` : t('search.allTitle')}</AppText>
        <AppText variant="caption" color="textSecondary">
          {t('search.count', { count: results.length })}
        </AppText>
      </View>
      {results.length === 0 ? (
        <AppText variant="body" color="textSecondary">
          {t('search.empty', { query })}
        </AppText>
      ) : (
        <View style={styles.list}>
          {results.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => router.push({ pathname: '/product/[id]', params: { id: product.id } })}
            />
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: Spacing.three,
    gap: 4,
  },
  list: {
    gap: Spacing.two,
  },
});
