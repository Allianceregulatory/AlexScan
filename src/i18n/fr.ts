import type { en } from '@/i18n/en';

type DeepStringify<T> = T extends string
  ? string
  : { [K in keyof T]: DeepStringify<T[K]> };

export const fr: DeepStringify<typeof en> = {
  appName: 'AlexScan',
  publisher: 'Alliance Regulatory Limited',
  demoBadge: 'Données d’échantillon / démo',
  home: {
    tagline:
      'Repères en langage clair pour les biocides et produits phytopharmaceutiques amateurs (non professionnels) dans l’UE.',
    scanCta: 'Scanner le code-barres',
    searchPlaceholder: 'Rechercher un nom ou un code-barres',
    searchCta: 'Rechercher',
    demoBanner:
      'Cette version utilise un catalogue de démonstration. Les scores sont des illustrations, pas des classements officiels.',
    footer: 'Édité par Alliance Regulatory Limited',
    settings: 'Réglages',
    sampleHint: 'Essayez « glyphosate », « PT18 » ou « Bti ».',
  },
  scan: {
    title: 'Scan',
    permissionTitle: 'Accès caméra',
    permissionBody:
      'AlexScan n’utilise la caméra que pour lire un code-barres. Vous pouvez aussi choisir un produit d’échantillon ci-dessous.',
    grantPermission: 'Autoriser la caméra',
    permissionDenied: 'Caméra indisponible sur cet appareil, ou autorisation non accordée.',
    fallbackTitle: 'Essayer un code-barres d’échantillon',
    fallbackBody:
      'Les simulateurs, navigateurs et certains appareils ne peuvent pas scanner. Choisissez un produit de démonstration :',
    pointCamera: 'Pointez la caméra vers un code-barres EAN',
    unknownTitle: 'Aucune correspondance dans le catalogue d’échantillon',
    unknownBody:
      'Le code-barres {{barcode}} n’est pas dans le jeu de démonstration. Recherchez plutôt par nom.',
    enterBarcode: 'Rechercher le code-barres',
    barcodePlaceholder: 'Saisir les chiffres du code-barres',
  },
  search: {
    title: 'Résultats',
    empty: 'Aucun produit de démonstration ne correspond à « {{query}} ».',
    allTitle: 'Catalogue de démonstration',
    count: '{{count}} dans le catalogue d’échantillon',
  },
  product: {
    title: 'Produit',
    why: 'Pourquoi ce score',
    type: 'Type de produit',
    actives: 'Substances actives',
    cas: 'CAS {{cas}}',
    authorisation: 'Signal d’autorisation',
    memberState: 'État membre de l’UE',
    hazards: 'Points clés',
    alternativesCta: 'Voir des options de moindre préoccupation',
    noAlternatives: 'Aucune alternative d’échantillon n’est liée à ce produit.',
    barcode: 'Code-barres {{barcode}}',
    demoScore: 'Score démo',
    scoreOutOf: '{{score}} / 100',
    notFound: 'Ce produit n’est pas dans le catalogue de démonstration.',
  },
  alternatives: {
    title: 'Alternatives',
    intro:
      'Options d’échantillon du catalogue de démonstration pour un usage amateur comparable. Comparez les étiquettes — ceci n’est pas une recommandation de substitution.',
    empty: 'Aucune alternative d’échantillon liée.',
  },
  settings: {
    title: 'Réglages',
    language: 'Langue',
    languageEn: 'English',
    languageFr: 'Français',
    memberState: 'État membre de l’UE par défaut',
    aboutTitle: 'À propos d’AlexScan',
    aboutBody:
      'AlexScan est un scanner grand public pour les biocides et produits phytopharmaceutiques amateurs destinés à un usage non professionnel dans l’UE. Il est édité par Alliance Regulatory Limited, société de Hong Kong.',
    aboutData:
      'L’intégration en direct des données ECHA BPR et des registres PPP de l’UE n’est pas dans cette version. Les signaux d’autorisation ci-dessous sont des données d’échantillon pour la France, l’Allemagne et la Belgique.',
    disclaimerTitle: 'À titre indicatif seulement',
    version: 'Version {{version}}',
  },
  category: {
    biocide: 'Biocide',
    ppp: 'Produit phytopharmaceutique (PPP)',
    PT18: 'PT18 — insecticides / lutte contre les arthropodes',
    PT19: 'PT19 — répulsifs',
    herbicide: 'Herbicide (jardin / amateur)',
    fungicide: 'Fongicide (jardin / amateur)',
    insecticide: 'Insecticide (jardin / amateur)',
    molluscicide: 'Molluscicide (limaces / escargots)',
  },
  status: {
    authorised_amateur: 'Signal d’échantillon : autorisé pour usage amateur',
    restricted_amateur: 'Signal d’échantillon : usage amateur restreint',
    withdrawn: 'Signal d’échantillon : retiré / non disponible pour usage amateur',
    not_authorised: 'Signal d’échantillon : non autorisé',
    unknown: 'Signal d’échantillon : absent de ce jeu de données',
  },
  score: {
    green: 'Préoccupation plus faible',
    yellow: 'Préoccupation modérée',
    orange: 'Préoccupation élevée',
    red: 'Préoccupation forte',
    caption:
      'Les couleurs suivent une échelle démo 0–100 de type Yuka. Elles ne constituent pas une classification juridique.',
  },
  disclaimer: {
    short:
      'Simple guidance — ne remplace pas l’étiquette, la FDS ni l’autorisation officielle. Lire et suivre l’étiquette. Les scores démo sont des illustrations.',
    full:
      'AlexScan fournit uniquement une guidance au consommateur. Ce n’est pas un conseil juridique, une évaluation des risques, ni un substitut à l’étiquette, à la fiche de données de sécurité ou aux décisions de l’ECHA, de la Commission européenne ou des autorités compétentes des États membres. Lire et suivre toujours l’étiquette. Les scores et signaux d’autorisation de cette version sont des données de démonstration, pas des classements officiels ni des extraits de registres en direct. Édité par Alliance Regulatory Limited.',
  },
  common: {
    back: 'Retour',
    close: 'Fermer',
    cas: 'CAS',
  },
};
