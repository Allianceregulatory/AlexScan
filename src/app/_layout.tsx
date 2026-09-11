import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { SettingsProvider, useSettings } from '@/context/SettingsContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useTheme } from '@/hooks/use-theme';

SplashScreen.preventAutoHideAsync();

function Navigation() {
  const theme = useTheme();
  const scheme = useColorScheme();
  const { t, ready } = useSettings();

  useEffect(() => {
    if (ready) {
      void SplashScreen.hideAsync();
    }
  }, [ready]);

  return (
    <>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: theme.primary,
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { fontWeight: '700', color: theme.text },
          contentStyle: { backgroundColor: theme.background },
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="scan" options={{ title: t('scan.title') }} />
        <Stack.Screen name="search" options={{ title: t('search.title') }} />
        <Stack.Screen name="product/[id]" options={{ title: t('product.title') }} />
        <Stack.Screen name="alternatives/[id]" options={{ title: t('alternatives.title') }} />
        <Stack.Screen name="settings" options={{ title: t('settings.title') }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <SettingsProvider>
      <Navigation />
    </SettingsProvider>
  );
}
