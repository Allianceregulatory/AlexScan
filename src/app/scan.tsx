import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Device from 'expo-device';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Button } from '@/components/Button';
import { Screen } from '@/components/Screen';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import { PRODUCTS } from '@/data/catalogue';
import { getProductByBarcode } from '@/data/queries';
import { useTheme } from '@/hooks/use-theme';

export default function ScanScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { t, text } = useSettings();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [manual, setManual] = useState('');
  const [unknown, setUnknown] = useState<string | null>(null);

  const cameraLikelyUnavailable = Platform.OS === 'web' || Device.isDevice === false;
  const showCamera = Boolean(permission?.granted) && !cameraLikelyUnavailable;

  const handleBarcode = (raw: string) => {
    const code = raw.replace(/\s/g, '');
    const product = getProductByBarcode(code);
    if (product) {
      setUnknown(null);
      router.replace({ pathname: '/product/[id]', params: { id: product.id } });
      return;
    }
    setUnknown(code);
  };

  return (
    <Screen>
      {showCamera ? (
        <View style={[styles.cameraWrap, { borderColor: theme.border }]}>
          <CameraView
            style={StyleSheet.absoluteFill}
            facing="back"
            barcodeScannerSettings={{
              barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e', 'code128', 'code39', 'qr'],
            }}
            onBarcodeScanned={
              scanned
                ? undefined
                : ({ data }) => {
                    setScanned(true);
                    handleBarcode(data);
                  }
            }
          />
          <View style={styles.overlay}>
            <View style={[styles.finder, { borderColor: theme.primaryText }]} />
            <AppText variant="caption" style={{ color: theme.primaryText, textAlign: 'center' }}>
              {t('scan.pointCamera')}
            </AppText>
          </View>
        </View>
      ) : (
        <View style={[styles.permCard, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
          <AppText variant="subtitle">{t('scan.permissionTitle')}</AppText>
          <AppText variant="body" color="textSecondary">
            {permission?.granted === false || cameraLikelyUnavailable
              ? t('scan.permissionDenied')
              : t('scan.permissionBody')}
          </AppText>
          {!cameraLikelyUnavailable && permission?.granted !== true ? (
            <Button label={t('scan.grantPermission')} onPress={() => void requestPermission()} />
          ) : null}
        </View>
      )}

      <View style={styles.manual}>
        <TextInput
          value={manual}
          onChangeText={setManual}
          placeholder={t('scan.barcodePlaceholder')}
          placeholderTextColor={theme.textSecondary}
          keyboardType="number-pad"
          autoCapitalize="none"
          style={[
            styles.input,
            {
              backgroundColor: theme.backgroundElement,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />
        <Button
          label={t('scan.enterBarcode')}
          variant="secondary"
          onPress={() => handleBarcode(manual)}
        />
      </View>

      {unknown ? (
        <View style={[styles.unknown, { backgroundColor: theme.dangerSoft, borderColor: theme.border }]}>
          <AppText variant="subtitle">{t('scan.unknownTitle')}</AppText>
          <AppText variant="caption" color="textSecondary">
            {t('scan.unknownBody', { barcode: unknown })}
          </AppText>
        </View>
      ) : null}

      <View style={styles.fallback}>
        <AppText variant="subtitle">{t('scan.fallbackTitle')}</AppText>
        <AppText variant="caption" color="textSecondary">
          {t('scan.fallbackBody')}
        </AppText>
        {PRODUCTS.map((product) => (
          <Pressable
            key={product.id}
            onPress={() => handleBarcode(product.barcode)}
            style={[
              styles.sample,
              { backgroundColor: theme.backgroundElement, borderColor: theme.border },
            ]}>
            <AppText variant="subtitle">{text(product.name)}</AppText>
            <AppText variant="mono" color="textSecondary">
              {product.barcode}
            </AppText>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  cameraWrap: {
    height: 280,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    marginBottom: Spacing.three,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    backgroundColor: 'rgba(16,22,19,0.25)',
  },
  finder: {
    width: 220,
    height: 110,
    borderWidth: 2,
    borderRadius: 8,
  },
  permCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: Spacing.three,
    gap: Spacing.two,
    marginBottom: Spacing.three,
  },
  manual: {
    gap: Spacing.two,
    marginBottom: Spacing.four,
  },
  input: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: Spacing.three,
    paddingVertical: 14,
    fontSize: 16,
  },
  unknown: {
    borderWidth: 1,
    borderRadius: 12,
    padding: Spacing.three,
    gap: 6,
    marginBottom: Spacing.four,
  },
  fallback: {
    gap: Spacing.two,
  },
  sample: {
    borderWidth: 1,
    borderRadius: 12,
    padding: Spacing.three,
    gap: 4,
  },
});
