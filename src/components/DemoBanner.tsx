import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import { useTheme } from '@/hooks/use-theme';

export function DemoBanner() {
  const theme = useTheme();
  const { t } = useSettings();

  return (
    <View style={[styles.banner, { backgroundColor: theme.demoSoft, borderColor: theme.border }]}>
      <AppText variant="label" style={{ color: theme.demo }}>
        {t('demoBadge')}
      </AppText>
      <AppText variant="caption" color="textSecondary">
        {t('home.demoBanner')}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    borderWidth: 1,
    borderRadius: 12,
    padding: Spacing.three,
    gap: 6,
  },
});
