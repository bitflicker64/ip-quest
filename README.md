# IP Quest

A small mobile learning game that teaches school students the basics of Intellectual Property (IP).
Students read about the six main types of IP, then test themselves with a quiz.

Built with React Native and Expo. No backend and no login: all content is in `data.js`.

## Screens

1. **Home**: the title, a short tagline, and two buttons, Learn and Play Quiz.
2. **Learn**: six cards, one per IP type (Patent, Copyright, Trademark, Industrial Design,
   Geographical Indication, Trade Secret). Each card has a one-line definition and an
   everyday example, such as a song being copyrighted or Darjeeling tea being a GI.
3. **Quiz**: ten multiple-choice questions, one at a time. Tapping an answer shows right or
   wrong at once, highlights the correct option, and explains why. A star counter shows the score.
4. **Result**: the final score out of 10, a message based on the score, and buttons to
   play again or go home.

Navigation is a simple state switch in `App.js`, so the app needs no navigation library.

## Project files

| File | What it holds |
| --- | --- |
| `App.js` | All four screens and the styles |
| `data.js` | The six IP types and the ten quiz questions |
| `app.json` | Expo config (app name, icon, Android package id) |
| `assets/` | App icon and splash images |

## Run it

You need Node.js (LTS) and the Expo Go app on an Android or iOS phone.

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS). To run it in a browser instead:

```bash
npx expo start --web
```

## Build an Android APK

With EAS (cloud build, needs a free Expo account):

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

The `preview` profile in `eas.json` builds an `.apk` you can install directly. When the build
finishes, EAS prints a download link.

With a local Android SDK:

```bash
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```

The APK is written to `android/app/build/outputs/apk/release/app-release.apk`.

## Editing the content

To change a definition or add a question, edit `data.js`. Each question has `question`,
`options`, `answer` (the index of the right option, starting at 0) and `explanation`.
