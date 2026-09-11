import type { Product } from '@/data/types';

/**
 * TODO: Replace this local mock catalogue with live EU data sources:
 * - Biocides (BPR): ECHA public product / active-substance information (product type, amateur vs professional)
 * - Plant protection products: EU PPP database and Member State registers
 *
 * Keep `Product` as the canonical app model. Map remote DTOs → Product in a future
 * `src/data/remote/` module. This MVP must not make those network calls.
 */
export const PRODUCTS: Product[] = [
  {
    id: 'gardenpath-ant-gel',
    barcode: '3760123450010',
    name: {
      en: 'GardenPath Ant Gel (sample)',
      fr: 'Gel fourmis GardenPath (échantillon)',
    },
    brand: { en: 'GardenPath', fr: 'GardenPath' },
    category: { kind: 'biocide', productType: 'PT18' },
    actives: [
      {
        id: 'acetamiprid',
        name: { en: 'Acetamiprid', fr: 'Acétamipride' },
        casNumber: '135410-20-7',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'restricted_amateur',
    },
    score: 34,
    scoreReasons: [
      {
        en: 'Demo score: neonicotinoid-class insecticide; typical concern is exposure of non-target insects.',
        fr: 'Score démo : insecticide de la famille des néonicotinoïdes ; préoccupation typique pour les insectes non cibles.',
      },
      {
        en: 'Indoor bait gels can reduce spray drift, but the active remains a synthetic insecticide.',
        fr: 'Un gel appât intérieur limite la dérive de pulvérisation, mais la substance reste un insecticide de synthèse.',
      },
    ],
    hazardNotes: [
      {
        en: 'Keep out of reach of children and pets. Do not place baits where food is prepared. Read the label.',
        fr: 'Tenir hors de portée des enfants et des animaux. Ne pas placer les appâts là où les aliments sont préparés. Lire l’étiquette.',
      },
    ],
    alternatives: ['dustaway-silica'],
  },
  {
    id: 'patioclear-crawling-spray',
    barcode: '3760123450027',
    name: {
      en: 'PatioClear Crawling Insect Spray (sample)',
      fr: 'Spray insectes rampants PatioClear (échantillon)',
    },
    brand: { en: 'PatioClear', fr: 'PatioClear' },
    category: { kind: 'biocide', productType: 'PT18' },
    actives: [
      {
        id: 'cypermethrin',
        name: { en: 'Cypermethrin', fr: 'Cyperméthrine' },
        casNumber: '52315-07-8',
      },
    ],
    memberStateStatuses: {
      FR: 'restricted_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 26,
    scoreReasons: [
      {
        en: 'Demo score: broad-spectrum pyrethroid spray; typical concerns include non-target arthropods and aquatic organisms if misused outdoors.',
        fr: 'Score démo : spray pyréthrinoïde à large spectre ; préoccupations typiques pour les arthropodes non cibles et les organismes aquatiques en cas de mésusage extérieur.',
      },
    ],
    hazardNotes: [
      {
        en: 'Aerosol/space sprays are easy to over-apply. Avoid use near ponds, drains, and flowering plants. Follow ventilation instructions on the label.',
        fr: 'Les sprays se prêtent au surdosage. Éviter les plans d’eau, les égouts et les plantes en fleur. Respecter les consignes d’aération de l’étiquette.',
      },
    ],
    alternatives: ['dustaway-silica'],
  },
  {
    id: 'dustaway-silica',
    barcode: '3760123450034',
    name: {
      en: 'DustAway Silica Crawling Insect Powder (sample)',
      fr: 'Poudre insectes rampants DustAway silice (échantillon)',
    },
    brand: { en: 'DustAway', fr: 'DustAway' },
    category: { kind: 'biocide', productType: 'PT18' },
    actives: [
      {
        id: 'silicon-dioxide',
        name: {
          en: 'Silicon dioxide (amorphous silica)',
          fr: 'Dioxyde de silicium (silice amorphe)',
        },
        casNumber: '7631-86-9',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 78,
    scoreReasons: [
      {
        en: 'Demo score: desiccant dust with a physical mode of action rather than a neurotoxic insecticide.',
        fr: 'Score démo : poudre dessiccante à mode d’action physique, plutôt qu’un insecticide neurotoxique.',
      },
      {
        en: 'Still a biocide: avoid inhaling dust and apply only where the label allows.',
        fr: 'Il s’agit toujours d’un biocide : éviter d’inhaler la poussière et n’appliquer que selon l’étiquette.',
      },
    ],
    hazardNotes: [
      {
        en: 'Do not apply as a space spray. Avoid breathing dust; keep away from aquaria.',
        fr: 'Ne pas appliquer en pulvérisation spatiale. Éviter d’inhaler la poussière ; tenir éloigné des aquariums.',
      },
    ],
    alternatives: [],
  },
  {
    id: 'trailsafe-deet',
    barcode: '3760123450041',
    name: {
      en: 'TrailSafe Mosquito Lotion 30% (sample)',
      fr: 'Lotion moustiques TrailSafe 30 % (échantillon)',
    },
    brand: { en: 'TrailSafe', fr: 'TrailSafe' },
    category: { kind: 'biocide', productType: 'PT19' },
    actives: [
      {
        id: 'deet',
        name: { en: 'DEET (N,N-diethyl-m-toluamide)', fr: 'DEET (N,N-diéthyl-m-toluamide)' },
        casNumber: '134-62-3',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 52,
    scoreReasons: [
      {
        en: 'Demo score: DEET is a widely used skin-applied repellent; higher concentrations increase residue on skin.',
        fr: 'Score démo : le DEET est un répulsif cutané largement utilisé ; une concentration plus élevée augmente le résidu sur la peau.',
      },
      {
        en: 'Useful where mosquito bite prevention matters; follow age and re-application limits on the label.',
        fr: 'Utile lorsque la prévention des piqûres importe ; respecter les limites d’âge et de réapplication de l’étiquette.',
      },
    ],
    hazardNotes: [
      {
        en: 'For skin use only as labelled. Do not apply under clothing or on damaged skin. Wash hands after applying.',
        fr: 'Usage cutané uniquement selon l’étiquette. Ne pas appliquer sous les vêtements ni sur une peau lésée. Se laver les mains après application.',
      },
    ],
    alternatives: ['skinguard-icaridin'],
  },
  {
    id: 'skinguard-icaridin',
    barcode: '3760123450058',
    name: {
      en: 'SkinGuard Family Icaridin Spray (sample)',
      fr: 'Spray familial icaridine SkinGuard (échantillon)',
    },
    brand: { en: 'SkinGuard', fr: 'SkinGuard' },
    category: { kind: 'biocide', productType: 'PT19' },
    actives: [
      {
        id: 'icaridin',
        name: { en: 'Icaridin (picaridin)', fr: 'Icaridine (picaridine)' },
        casNumber: '119515-38-7',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 74,
    scoreReasons: [
      {
        en: 'Demo score: icaridin is a common amateur skin repellent often chosen when a DEET alternative is preferred.',
        fr: 'Score démo : l’icaridine est un répulsif cutané amateur courant, souvent choisi comme alternative au DEET.',
      },
    ],
    hazardNotes: [
      {
        en: 'Apply only as directed. Avoid eyes and mucous membranes. Check the label for minimum age.',
        fr: 'Appliquer uniquement selon les instructions. Éviter les yeux et les muqueuses. Vérifier l’âge minimum sur l’étiquette.',
      },
    ],
    alternatives: [],
  },
  {
    id: 'pondcare-bti',
    barcode: '3760123450065',
    name: {
      en: 'PondCare Bti Mosquito Dunks (sample)',
      fr: 'Comprimés moustiques Bti PondCare (échantillon)',
    },
    brand: { en: 'PondCare', fr: 'PondCare' },
    category: { kind: 'biocide', productType: 'PT18' },
    actives: [
      {
        id: 'bti',
        name: {
          en: 'Bacillus thuringiensis israelensis (Bti)',
          fr: 'Bacillus thuringiensis israelensis (Bti)',
        },
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 88,
    scoreReasons: [
      {
        en: 'Demo score: microbial larvicide used in standing water; comparatively targeted versus broad-spectrum adulticides.',
        fr: 'Score démo : larvicide microbien pour eaux stagnantes ; plus ciblé que les adulticides à large spectre.',
      },
    ],
    hazardNotes: [
      {
        en: 'Use only in sites listed on the label (e.g. ornamental ponds, water butts). This does not replace source reduction (emptying containers).',
        fr: 'Utiliser uniquement sur les sites indiqués (bassins d’ornement, récupérateurs d’eau, etc.). Cela ne remplace pas la suppression des gîtes (vider les récipients).',
      },
    ],
    alternatives: [],
  },
  {
    id: 'weedaway-glyphosate',
    barcode: '3760123450072',
    name: {
      en: 'WeedAway Total Glyphosate Concentrate (sample)',
      fr: 'Désherbant total WeedAway glyphosate (échantillon)',
    },
    brand: { en: 'WeedAway', fr: 'WeedAway' },
    category: { kind: 'ppp', use: 'herbicide' },
    actives: [
      {
        id: 'glyphosate',
        name: { en: 'Glyphosate', fr: 'Glyphosate' },
        casNumber: '1071-83-6',
      },
    ],
    memberStateStatuses: {
      FR: 'withdrawn',
      DE: 'restricted_amateur',
      BE: 'restricted_amateur',
    },
    score: 18,
    scoreReasons: [
      {
        en: 'Demo score: non-selective herbicide; amateur access and conditions of use differ by Member State.',
        fr: 'Score démo : herbicide non sélectif ; l’accès amateur et les conditions d’emploi varient selon l’État membre.',
      },
      {
        en: 'Typical concerns include effects on non-target vegetation and the need for strict label compliance where still sold.',
        fr: 'Préoccupations typiques : végétation non cible et respect strict de l’étiquette là où le produit est encore vendu.',
      },
    ],
    hazardNotes: [
      {
        en: 'Sample status only: France has restricted amateur glyphosate more tightly than some other Member States. Always check the current national register and the product label — do not rely on this demo screen.',
        fr: 'Statut d’échantillon seulement : la France a davantage restreint le glyphosate amateur que certains autres États membres. Vérifier le registre national en vigueur et l’étiquette — ne pas se fier à cet écran démo.',
      },
    ],
    alternatives: ['pathclear-pelargonic'],
  },
  {
    id: 'pathclear-pelargonic',
    barcode: '3760123450089',
    name: {
      en: 'PathClear Pelargonic Path Herbicide (sample)',
      fr: 'Désherbant allées PathClear acide pélargonique (échantillon)',
    },
    brand: { en: 'PathClear', fr: 'PathClear' },
    category: { kind: 'ppp', use: 'herbicide' },
    actives: [
      {
        id: 'pelargonic-acid',
        name: { en: 'Pelargonic acid (nonanoic acid)', fr: 'Acide pélargonique (acide nonanoïque)' },
        casNumber: '112-05-0',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 67,
    scoreReasons: [
      {
        en: 'Demo score: contact, non-systemic herbicidal fatty acid often used on paths; typically less persistent than many systemic herbicides.',
        fr: 'Score démo : herbicide de contact (acide gras) souvent utilisé sur allées ; généralement moins persistant que beaucoup d’herbicides systémiques.',
      },
      {
        en: 'Still phytotoxic to any green tissue it contacts. Repeat applications may be needed; this is not a “residue-free” claim.',
        fr: 'Toujours phytotoxique pour tout tissu vert contacté. Des applications répétées peuvent être nécessaires ; ceci n’est pas une allégation « sans résidu ».',
      },
    ],
    hazardNotes: [
      {
        en: 'Avoid spray drift onto wanted plants. May irritate eyes and skin — use the PPE stated on the label.',
        fr: 'Éviter la dérive sur les plantes à conserver. Peut irriter les yeux et la peau — utiliser les EPI indiqués sur l’étiquette.',
      },
    ],
    alternatives: [],
  },
  {
    id: 'roseshield-sulfur',
    barcode: '3760123450096',
    name: {
      en: 'RoseShield Sulfur Fungicide (sample)',
      fr: 'Fongicide soufre RoseShield (échantillon)',
    },
    brand: { en: 'RoseShield', fr: 'RoseShield' },
    category: { kind: 'ppp', use: 'fungicide' },
    actives: [
      {
        id: 'sulfur',
        name: { en: 'Sulfur', fr: 'Soufre' },
        casNumber: '7704-34-9',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 76,
    scoreReasons: [
      {
        en: 'Demo score: elemental sulfur is a long-established amateur fungicide for powdery mildew-type diseases on labelled crops.',
        fr: 'Score démo : le soufre élémentaire est un fongicide amateur ancien contre les oïdiums sur les cultures indiquées.',
      },
    ],
    hazardNotes: [
      {
        en: 'Can scorch plants in hot weather. Avoid mixing practices not described on the label. Keep dust out of eyes and lungs.',
        fr: 'Peut brûler les plantes par temps chaud. Ne pas mélanger hors étiquette. Éviter poussières dans les yeux et les voies respiratoires.',
      },
    ],
    alternatives: [],
  },
  {
    id: 'bluespot-copper',
    barcode: '3760123450102',
    name: {
      en: 'BlueSpot Copper Garden Spray (sample)',
      fr: 'Bouillie cuivre BlueSpot jardin (échantillon)',
    },
    brand: { en: 'BlueSpot', fr: 'BlueSpot' },
    category: { kind: 'ppp', use: 'fungicide' },
    actives: [
      {
        id: 'copper-hydroxide',
        name: { en: 'Copper hydroxide', fr: 'Hydroxyde de cuivre' },
        casNumber: '20427-59-2',
      },
    ],
    memberStateStatuses: {
      FR: 'restricted_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 44,
    scoreReasons: [
      {
        en: 'Demo score: copper fungicides are effective on some foliar diseases but copper can accumulate in soil and is hazardous to aquatic organisms if misused.',
        fr: 'Score démo : les fongicides cuivrés sont efficaces sur certaines maladies foliaires, mais le cuivre peut s’accumuler dans le sol et est dangereux pour les organismes aquatiques en cas de mésusage.',
      },
    ],
    hazardNotes: [
      {
        en: 'Do not exceed the maximum number of applications or dose on the label. Keep spray out of ponds and wells.',
        fr: 'Ne pas dépasser le nombre d’applications ni la dose de l’étiquette. Tenir la bouillie éloignée des mares et des puits.',
      },
    ],
    alternatives: ['roseshield-sulfur'],
  },
  {
    id: 'slugstop-ferric',
    barcode: '3760123450119',
    name: {
      en: 'SlugStop Ferric Phosphate Pellets (sample)',
      fr: 'Granulés anti-limaces SlugStop phosphate ferrique (échantillon)',
    },
    brand: { en: 'SlugStop', fr: 'SlugStop' },
    category: { kind: 'ppp', use: 'molluscicide' },
    actives: [
      {
        id: 'ferric-phosphate',
        name: { en: 'Ferric phosphate', fr: 'Phosphate ferrique' },
        casNumber: '10045-86-0',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'authorised_amateur',
      BE: 'authorised_amateur',
    },
    score: 81,
    scoreReasons: [
      {
        en: 'Demo score: ferric phosphate baits are a common amateur alternative to metaldehyde slug pellets in the EU.',
        fr: 'Score démo : les appâts au phosphate ferrique sont une alternative amateur courante aux granulés de métaldéhyde dans l’UE.',
      },
    ],
    hazardNotes: [
      {
        en: 'Scatter thinly as labelled — piles can attract pets. This is still a plant protection product.',
        fr: 'Épandre en mince filet selon l’étiquette — les tas peuvent attirer les animaux. Il s’agit toujours d’un produit phytopharmaceutique.',
      },
    ],
    alternatives: [],
  },
  {
    id: 'bloomprotect-pyrethrin',
    barcode: '3760123450126',
    name: {
      en: 'BloomProtect Pyrethrin RTU (sample)',
      fr: 'Prêt-à-l’emploi pyréthrine BloomProtect (échantillon)',
    },
    brand: { en: 'BloomProtect', fr: 'BloomProtect' },
    category: { kind: 'ppp', use: 'insecticide' },
    actives: [
      {
        id: 'pyrethrins',
        name: { en: 'Pyrethrins', fr: 'Pyréthrines' },
        casNumber: '8003-34-7',
      },
    ],
    memberStateStatuses: {
      FR: 'authorised_amateur',
      DE: 'restricted_amateur',
      BE: 'authorised_amateur',
    },
    score: 38,
    scoreReasons: [
      {
        en: 'Demo score: natural-origin pyrethrins remain broad-spectrum insecticides and are typically highly toxic to bees and aquatic invertebrates if they reach those organisms.',
        fr: 'Score démo : les pyréthrines d’origine naturelle restent des insecticides à large spectre, généralement très toxiques pour les abeilles et les invertébrés aquatiques s’ils les atteignent.',
      },
    ],
    hazardNotes: [
      {
        en: 'Do not spray plants in flower or when bees are foraging. Avoid watercourses. “Natural origin” is not the same as low risk.',
        fr: 'Ne pas pulvériser les plantes en fleur ni pendant l’activité des abeilles. Éviter les cours d’eau. « Origine naturelle » n’équivaut pas à un faible risque.',
      },
    ],
    alternatives: ['dustaway-silica'],
  },
];
