import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/AppText';
import { Button } from '@/components/Button';
import { DemoBanner } from '@/components/DemoBanner';
import { Screen } from '@/components/Screen';
import { Wordmark } from '@/components/Wordmark';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { t } = useSettings();
  const [query, setQuery] = useState('');

  const submitSearch = () => {
    const q = query.trim();
    router.push({ pathname: '/search', params: { q } });
  };

  return (
    <Screen>
      <View style={[styles.topBar, { paddingTop: Math.max(insets.top, Spacing.three) }]}>
        <View style={styles.brand}>
          <Wordmark />
          <AppText variant="title">{t('appName')}</AppText>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('home.settings')}
          onPress={() => router.push('/settings')}
          style={[styles.settingsBtn, { borderColor: theme.border, backgroundColor: theme.backgroundElement }]}>
          <AppText variant="caption" style={{ color: theme.primary, fontWeight: '600' }}>
            {t('home.settings')}
          </AppText>
        </Pressable>
      </View>

      <AppText variant="body" color="textSecondary" style={styles.tagline}>
        {t('home.tagline')}
      </AppText>

      <Button label={t('home.scanCta')} onPress={() => router.push('/scan')} />

      <View style={styles.searchBlock}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t('home.searchPlaceholder')}
          placeholderTextColor={theme.textSecondary}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          onSubmitEditing={submitSearch}
          accessibilityLabel={t('home.searchPlaceholder')}
          style={[
            styles.input,
            {
              backgroundColor: theme.backgroundElement,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />
        <Button label={t('home.searchCta')} variant="secondary" onPress={submitSearch} />
        <AppText variant="caption" color="textSecondary">
          {t('home.sampleHint')}
        </AppText>
      </View>

      <DemoBanner />

      <AppText variant="caption" color="textSecondary" style={styles.footer}>
        {t('home.footer')}
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.three,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  settingsBtn: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  tagline: {
    marginBottom: Spacing.four,
  },
  searchBlock: {
    gap: Spacing.two,
    marginTop: Spacing.four,
    marginBottom: Spacing.four,
  },
  input: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: Spacing.three,
    paddingVertical: 14,
    fontSize: 16,
  },
  footer: {
    marginTop: Spacing.four,
    textAlign: 'center',
  },
});
