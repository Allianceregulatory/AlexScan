import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/AppText';
import { Button } from '@/components/Button';
import { Disclaimer } from '@/components/Disclaimer';
import { MemberStatePicker } from '@/components/MemberStatePicker';
import { Screen } from '@/components/Screen';
import { ScoreBadge } from '@/components/ScoreBadge';
import { Spacing } from '@/constants/theme';
import { useSettings } from '@/context/SettingsContext';
import { getProductById } from '@/data/queries';
import type { MemberStateCode } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';
import { kindKey, productTypeKey, scoreBandKey, statusKey } from '@/lib/labels';
import { isPoorScore, scoreBand } from '@/lib/score';

export default function ProductDetailScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { t, text, memberState } = useSettings();
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = id ? getProductById(Array.isArray(id) ? id[0] : id) : undefined;
  const [selectedState, setSelectedState] = useState<MemberStateCode>(memberState);

  if (!product) {
    return (
      <Screen>
        <AppText variant="body">{t('product.notFound')}</AppText>
      </Screen>
    );
  }

  const band = scoreBand(product.score);
  const status = product.memberStateStatuses[selectedState] ?? 'unknown';
  const showAlternatives = isPoorScore(product.score) && product.alternatives.length > 0;

  return (
    <Screen>
      <View style={[styles.hero, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
        <ScoreBadge score={product.score} size="lg" />
        <AppText variant="label" color="textSecondary">
          {t('demoBadge')}
        </AppText>
        <AppText variant="title" style={{ textAlign: 'center' }}>
          {text(product.name)}
        </AppText>
        <AppText variant="caption" color="textSecondary">
          {text(product.brand)} · {t('product.barcode', { barcode: product.barcode })}
        </AppText>
        <AppText variant="caption" color="textSecondary">
          {t(scoreBandKey(band))} · {t('product.scoreOutOf', { score: product.score })}
        </AppText>
        <AppText variant="caption" color="textSecondary" style={{ textAlign: 'center' }}>
          {t('score.caption')}
        </AppText>
      </View>

      <Section title={t('product.why')}>
        {product.scoreReasons.map((reason, index) => (
          <AppText key={index} variant="body" color="textSecondary">
            {text(reason)}
          </AppText>
        ))}
      </Section>

      <Section title={t('product.type')}>
        <AppText variant="body">
          {t(kindKey(product))}
        </AppText>
        <AppText variant="caption" color="textSecondary">
          {t(productTypeKey(product))}
        </AppText>
      </Section>

      <Section title={t('product.actives')}>
        {product.actives.map((active) => (
          <View key={active.id} style={styles.activeRow}>
            <AppText variant="subtitle">{text(active.name)}</AppText>
            {active.casNumber ? (
              <AppText variant="mono" color="textSecondary">
                {t('product.cas', { cas: active.casNumber })}
              </AppText>
            ) : null}
          </View>
        ))}
      </Section>

      <Section title={t('product.authorisation')}>
        <AppText variant="caption" color="textSecondary">
          {t('product.memberState')}
        </AppText>
        <MemberStatePicker value={selectedState} onChange={setSelectedState} />
        <View style={[styles.status, { backgroundColor: theme.primarySoft, borderColor: theme.border }]}>
          <AppText variant="subtitle">{t(statusKey(status))}</AppText>
        </View>
      </Section>

      <Section title={t('product.hazards')}>
        {product.hazardNotes.map((note, index) => (
          <AppText key={index} variant="body" color="textSecondary">
            {text(note)}
          </AppText>
        ))}
      </Section>

      {showAlternatives ? (
        <Button
          label={t('product.alternativesCta')}
          onPress={() => router.push({ pathname: '/alternatives/[id]', params: { id: product.id } })}
        />
      ) : isPoorScore(product.score) ? (
        <AppText variant="caption" color="textSecondary">
          {t('product.noAlternatives')}
        </AppText>
      ) : null}

      <View style={styles.disclaimer}>
        <Disclaimer compact />
      </View>
    </Screen>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <AppText variant="label" color="textSecondary">
        {title}
      </AppText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    gap: Spacing.two,
    padding: Spacing.four,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: Spacing.four,
  },
  section: {
    gap: Spacing.two,
    marginBottom: Spacing.four,
  },
  activeRow: {
    gap: 2,
  },
  status: {
    borderWidth: 1,
    borderRadius: 12,
    padding: Spacing.three,
  },
  disclaimer: {
    marginTop: Spacing.three,
  },
});
