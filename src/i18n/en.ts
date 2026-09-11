export const en = {
  appName: 'AlexScan',
  publisher: 'Alliance Regulatory Limited',
  demoBadge: 'Sample / demo data',
  home: {
    tagline:
      'Plain-language guidance for EU amateur (non-professional) biocides and garden plant protection products.',
    scanCta: 'Scan barcode',
    searchPlaceholder: 'Search a product name or barcode',
    searchCta: 'Search',
    demoBanner:
      'This version uses a demonstration catalogue. Scores are sample illustrations, not official rankings.',
    footer: 'Published by Alliance Regulatory Limited',
    settings: 'Settings',
    sampleHint: 'Try “glyphosate”, “PT18”, or “Bti”.',
  },
  scan: {
    title: 'Scan',
    permissionTitle: 'Camera access',
    permissionBody:
      'AlexScan uses the camera only to read a product barcode. You can also pick a sample product below.',
    grantPermission: 'Allow camera',
    permissionDenied: 'Camera is unavailable on this device or permission was not granted.',
    fallbackTitle: 'Try a sample barcode',
    fallbackBody:
      'Simulators, browsers, and some devices cannot scan. Choose a demonstration product:',
    pointCamera: 'Point the camera at an EAN barcode',
    unknownTitle: 'No match in the sample catalogue',
    unknownBody: 'Barcode {{barcode}} is not in the demonstration set. Search by name instead.',
    enterBarcode: 'Look up barcode',
    barcodePlaceholder: 'Enter barcode numbers',
  },
  search: {
    title: 'Results',
    empty: 'No demonstration products match “{{query}}”.',
    allTitle: 'Demonstration catalogue',
    count: '{{count}} in the sample catalogue',
  },
  product: {
    title: 'Product',
    why: 'Why this score',
    type: 'Product type',
    actives: 'Active substances',
    cas: 'CAS {{cas}}',
    authorisation: 'Authorisation signal',
    memberState: 'EU Member State',
    hazards: 'Key notes',
    alternativesCta: 'See lower-concern options',
    noAlternatives: 'No sample alternatives are linked for this product.',
    barcode: 'Barcode {{barcode}}',
    demoScore: 'Demo score',
    scoreOutOf: '{{score}} / 100',
    notFound: 'This product is not in the demonstration catalogue.',
  },
  alternatives: {
    title: 'Alternatives',
    intro:
      'Sample options from the demonstration catalogue for a similar amateur use. Compare labels — this is not a substitution recommendation.',
    empty: 'No linked sample alternatives.',
  },
  settings: {
    title: 'Settings',
    language: 'Language',
    languageEn: 'English',
    languageFr: 'Français',
    memberState: 'Default EU Member State',
    aboutTitle: 'About AlexScan',
    aboutBody:
      'AlexScan is a consumer scanner for amateur biocides and plant protection products sold for non-professional use in the EU. It is published by Alliance Regulatory Limited, a Hong Kong company.',
    aboutData:
      'Live ECHA BPR and EU PPP register integration is not in this version. Authorisation signals below are sample data for France, Germany, and Belgium.',
    disclaimerTitle: 'Guidance only',
    version: 'Version {{version}}',
  },
  category: {
    biocide: 'Biocide',
    ppp: 'Plant protection product (PPP)',
    PT18: 'PT18 — insecticides / arthropod control',
    PT19: 'PT19 — repellents',
    herbicide: 'Herbicide (garden / amateur)',
    fungicide: 'Fungicide (garden / amateur)',
    insecticide: 'Insecticide (garden / amateur)',
    molluscicide: 'Molluscicide (slugs / snails)',
  },
  status: {
    authorised_amateur: 'Sample signal: authorised for amateur use',
    restricted_amateur: 'Sample signal: restricted amateur use',
    withdrawn: 'Sample signal: withdrawn / not available for amateur use',
    not_authorised: 'Sample signal: not authorised',
    unknown: 'Sample signal: not in this dataset',
  },
  score: {
    green: 'Lower concern',
    yellow: 'Moderate concern',
    orange: 'Elevated concern',
    red: 'High concern',
    caption: 'Colour bands follow a Yuka-style 0–100 demo scale. They are not a legal classification.',
  },
  disclaimer: {
    short:
      'Guidance only — not a substitute for the product label, SDS, or official authorisation. Always read and follow the label. Demo scores are sample illustrations.',
    full:
      'AlexScan provides consumer guidance only. It is not legal advice, a risk assessment, or a substitute for the product label, Safety Data Sheet, or decisions of ECHA, the European Commission, or Member State competent authorities. Always read and follow the label. Scores and authorisation signals in this version are demonstration data, not official rankings or live register extracts. Published by Alliance Regulatory Limited.',
  },
  common: {
    back: 'Back',
    close: 'Close',
    cas: 'CAS',
  },
} as const;
