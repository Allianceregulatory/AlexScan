import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
};

export function Button({ label, onPress, variant = 'primary', disabled }: Props) {
  const theme = useTheme();
  const background =
    variant === 'primary' ? theme.primary : variant === 'secondary' ? theme.backgroundElement : 'transparent';
  const textColor = variant === 'primary' ? theme.primaryText : theme.primary;
  const borderColor = variant === 'ghost' ? 'transparent' : variant === 'primary' ? theme.primary : theme.border;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: background,
          borderColor,
          opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
        },
      ]}>
      <View>
        <AppText variant="subtitle" style={{ color: textColor, textAlign: 'center' }}>
          {label}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
