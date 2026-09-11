# AlexScan

Consumer scanner for **EU amateur (non-professional) biocides and plant protection products**. Scan a barcode or search a product name for a plain-language verdict, colour score, active substances, Member State authorisation signals, and sample alternatives.

Published by **Alliance Regulatory Limited** (Hong Kong).

This repository currently ships an **MVP shell**: a runnable Expo app with a local demonstration catalogue. Scores and authorisation signals are **sample illustrations**, not official rankings or live register extracts. Always read and follow the product label.

## Run

```bash
npm install
npx expo start
```

Then open the project in:

- [Expo Go](https://expo.dev/go) on a phone (camera barcode scan)
- Android emulator / iOS simulator (use the sample-barcode fallback if the camera is unavailable)
- Web: press `w` in the Expo CLI, or `npx expo start --web`

Typecheck:

```bash
npm run typecheck
```

## What you can do in this version

- Search the mock catalogue (try `glyphosate`, `PT18`, `Bti`)
- Open a product detail screen with a 0–100 colour score (green / yellow / orange / red)
- Switch English / French and the default Member State (FR, DE, BE) in Settings
- Scan a barcode on a device, or pick a sample barcode when the camera cannot run
- Read Alliance Regulatory Limited attribution in Settings and on the home footer

## Data

Mock products live in `src/data/catalogue.ts` with a typed `Product` model in `src/data/types.ts`. There are **no network calls**.

## Roadmap (not in this MVP)

- ECHA BPR public product / active-substance data for amateur biocides
- EU plant protection product database and Member State registers
- Live authorisation status instead of sample signals

## Stack

Expo SDK 57, React Native, TypeScript, Expo Router, `expo-camera` (`CameraView` barcode scanning).
