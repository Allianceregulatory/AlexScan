import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Spacing } from '@/constants/theme';
import { MEMBER_STATES, type MemberStateCode } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';

const LABELS: Record<MemberStateCode, string> = {
  FR: 'FR',
  DE: 'DE',
  BE: 'BE',
};

type Props = {
  value: MemberStateCode;
  onChange: (value: MemberStateCode) => void;
};

export function MemberStatePicker({ value, onChange }: Props) {
  const theme = useTheme();

  return (
    <View style={styles.row}>
      {MEMBER_STATES.map((code) => {
        const selected = code === value;
        return (
          <Pressable
            key={code}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={() => onChange(code)}
            style={[
              styles.chip,
              {
                backgroundColor: selected ? theme.primary : theme.backgroundElement,
                borderColor: selected ? theme.primary : theme.border,
              },
            ]}>
            <AppText variant="subtitle" style={{ color: selected ? theme.primaryText : theme.text }}>
              {LABELS[code]}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  chip: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
