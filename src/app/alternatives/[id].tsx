import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Disclaimer } from '@/components/Disclaimer';
import { ProductCard } from '@/components/ProductCard';
import { Screen } from '@/components/Screen';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import { getProductById, getProductsByIds } from '@/data/queries';

export default function AlternativesScreen() {
  const router = useRouter();
  const { t, text } = useSettings();
  const { id } = useLocalSearchParams<{ id: string }>();
  const productId = Array.isArray(id) ? id[0] : id;
  const product = productId ? getProductById(productId) : undefined;
  const alternatives = product ? getProductsByIds(product.alternatives) : [];

  if (!product) {
    return (
      <Screen>
        <AppText variant="body">{t('product.notFound')}</AppText>
      </Screen>
    );
  }

  return (
    <Screen>
      <AppText variant="title">{text(product.name)}</AppText>
      <AppText variant="body" color="textSecondary" style={styles.intro}>
        {t('alternatives.intro')}
      </AppText>
      {alternatives.length === 0 ? (
        <AppText variant="body" color="textSecondary">
          {t('alternatives.empty')}
        </AppText>
      ) : (
        <View style={styles.list}>
          {alternatives.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onPress={() => router.push({ pathname: '/product/[id]', params: { id: item.id } })}
            />
          ))}
        </View>
      )}
      <View style={styles.disclaimer}>
        <Disclaimer compact />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: {
    marginVertical: Spacing.three,
  },
  list: {
    gap: Spacing.two,
  },
  disclaimer: {
    marginTop: Spacing.four,
  },
});
