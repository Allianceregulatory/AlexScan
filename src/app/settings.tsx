import Constants from 'expo-constants';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Disclaimer } from '@/components/Disclaimer';
import { MemberStatePicker } from '@/components/MemberStatePicker';
import { Screen } from '@/components/Screen';
import { Wordmark } from '@/components/Wordmark';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import type { Locale } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';

export default function SettingsScreen() {
  const theme = useTheme();
  const { t, locale, setLocale, memberState, setMemberState } = useSettings();
  const version = Constants.expoConfig?.version ?? '1.0.0';

  return (
    <Screen>
      <View style={styles.block}>
        <AppText variant="label" color="textSecondary">
          {t('settings.language')}
        </AppText>
        <View style={styles.row}>
          <LangChip code="en" label={t('settings.languageEn')} selected={locale === 'en'} onPress={setLocale} />
          <LangChip code="fr" label={t('settings.languageFr')} selected={locale === 'fr'} onPress={setLocale} />
        </View>
      </View>

      <View style={styles.block}>
        <AppText variant="label" color="textSecondary">
          {t('settings.memberState')}
        </AppText>
        <MemberStatePicker value={memberState} onChange={setMemberState} />
      </View>

      <View style={[styles.about, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
        <View style={styles.brand}>
          <Wordmark />
          <AppText variant="title">{t('appName')}</AppText>
        </View>
        <AppText variant="subtitle">{t('settings.aboutTitle')}</AppText>
        <AppText variant="body" color="textSecondary">
          {t('settings.aboutBody')}
        </AppText>
        <AppText variant="body" color="textSecondary">
          {t('settings.aboutData')}
        </AppText>
        <AppText variant="caption" color="textSecondary">
          {t('publisher')}
        </AppText>
        <AppText variant="caption" color="textSecondary">
          {t('settings.version', { version })}
        </AppText>
      </View>

      <Disclaimer />
    </Screen>
  );
}

function LangChip({
  code,
  label,
  selected,
  onPress,
}: {
  code: Locale;
  label: string;
  selected: boolean;
  onPress: (locale: Locale) => void;
}) {
  const theme = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={() => onPress(code)}
      style={[
        styles.chip,
        {
          backgroundColor: selected ? theme.primary : theme.backgroundElement,
          borderColor: selected ? theme.primary : theme.border,
        },
      ]}>
      <AppText variant="subtitle" style={{ color: selected ? theme.primaryText : theme.text }}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: Spacing.two,
    marginBottom: Spacing.four,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  chip: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  about: {
    borderWidth: 1,
    borderRadius: 16,
    padding: Spacing.four,
    gap: Spacing.two,
    marginBottom: Spacing.four,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    marginBottom: Spacing.two,
  },
});
