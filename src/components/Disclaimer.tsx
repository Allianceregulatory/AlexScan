import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  compact?: boolean;
};

export function Disclaimer({ compact = false }: Props) {
  const theme = useTheme();
  const { t } = useSettings();

  return (
    <View style={[styles.box, { backgroundColor: theme.demoSoft, borderColor: theme.border }]}>
      <AppText variant="label" style={{ color: theme.demo }}>
        {t('settings.disclaimerTitle')}
      </AppText>
      <AppText variant="caption" color="textSecondary">
        {compact ? t('disclaimer.short') : t('disclaimer.full')}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 12,
    padding: Spacing.three,
    gap: Spacing.two,
  },
});
