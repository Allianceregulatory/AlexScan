import { StyleSheet, View } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

export function Wordmark({ size = 28 }: { size?: number }) {
  const theme = useTheme();
  const mark = size;
  return (
    <View style={styles.row}>
      <View
        style={[
          styles.mark,
          {
            width: mark,
            height: mark,
            borderRadius: mark * 0.28,
            backgroundColor: theme.primary,
          },
        ]}>
        <View
          style={{
            width: mark * 0.38,
            height: mark * 0.38,
            borderRadius: mark * 0.19,
            backgroundColor: theme.primaryText,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mark: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
