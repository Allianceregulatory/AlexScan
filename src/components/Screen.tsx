import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ScreenProps = ViewProps & {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
};

export function Screen({ children, scroll = true, padded = true, style, ...rest }: ScreenProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const content = (
    <View
      style={[
        styles.inner,
        padded && {
          paddingHorizontal: Spacing.four,
          paddingTop: Spacing.three,
          paddingBottom: Math.max(insets.bottom, Spacing.four) + Spacing.three,
        },
      ]}>
      {children}
    </View>
  );

  if (scroll) {
    return (
      <ScrollView
        style={[styles.root, { backgroundColor: theme.background }, style]}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        {...rest}>
        {content}
      </ScrollView>
    );
  }

  return (
    <View style={[styles.root, { backgroundColor: theme.background }, style]} {...rest}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
  },
});
