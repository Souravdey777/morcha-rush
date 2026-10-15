<p align="center">
  <img src="brand/logo.png" alt="Morcha Rush" width="520">
</p>

<p align="center">
  <b>Run the march. Outrun the corruption.</b><br>
  A satirical 3D endless runner through a festive Indian street, with a bribe-hungry Daroga Ji on your heels.
</p>

<p align="center">
  <a href="https://morcha-rush.vercel.app"><b>▶ Play now: morcha-rush.vercel.app</b></a>
</p>

<p align="center">
  <img src="screenshots/menu.jpg" alt="Start screen with Guddu" width="49%">
  <img src="screenshots/gameplay.jpg" alt="Running down the road" width="49%">
</p>

## About

Morcha Rush is a lane-switching endless runner in the spirit of Subway Surfers, set at a street march (*morcha*). You ring a gate's doorbell, shout "BHAAG!" and run. Dodge barricades, Section 144 signs, potholes and VIP convoys. Grab coins and power-ups. Stumble twice before you recover and Daroga Ji catches you and demands his *chai-paani*.

The humour pokes at everyday red tape and petty corruption, never at real people or parties.

It runs in the browser on desktop and mobile, with no install and no build step.

## Characters

| | Character | Bio | Ability | Unlock |
|---|---|---|---|---|
| 🎒 | **Guddu** *(RE-EXAM!)* | Third attempt. Second leak. Still has the admit card laminated. | No special move. | Free |
| 🩴 | **Thali Dadi** *(THAN-THAN!)* | Brought her steel thali from home. Didn't bring it back. | **Chappal Swat:** automatically swats a barricade out of the way every 8 seconds. | ₹250 |
| 🥁 | **MC Dhol** *(DHAM!)* | Dropped a diss track at the barricade. Dhol is the beat, Jantar Mantar is the studio. | **Beat Drop:** every landing sends a shockwave that clears obstacles ahead. | ₹500 |
| 📸 | **Camera Person** *(LIKE & SHARE!)* | Rolling since the first barricade. The reel outlived the minister. | **Viral Flash:** every near-miss flashes the camera for +25 points. | ₹1000 |
| 🪳 | **Cocky** *(UNBOTHERED!)* | Chronically online, 11 hours a day, bathroom breaks included. Lazy only in the physical sense. | **Unkillable:** shrugs off one crash per run. | ₹1500 |

On your heels: 👮 **Daroga Ji** *(CHALO THANE!)*. Still waiting for your Form 26-A. Attested. Three copies.

<p align="center">
  <img src="screenshots/cocky.jpg" alt="Cocky on the start screen" width="49%">
  <img src="screenshots/coins.jpg" alt="Coins and a pothole ahead" width="49%">
</p>

## Power-ups

| | Power-up | Effect |
|---|---|---|
| ☕ | Cutting Chai | A speed burst that smashes through anything in your way |
| 🥁 | Dhol Beat | Smashes barricades |
| 📸 | Press Pass | Invincible for a few seconds. "EXPOSED!" |
| 🛺 | Jugaad Thela | Ride a cart that absorbs one crash |
| 🍽️ | Steel Thali | Thali Dadi's, borrowed. A clatter that stuns Daroga Ji |

There are also random **Bijli Gayi** power cuts, onion carts that make you cry, achievements, and a little brown visitor worth catching.

## Controls

| | Desktop | Mobile |
|---|---|---|
| Switch lanes | ← → or A D | Swipe left / right |
| Jump | ↑ or W | Swipe up |
| Slide | ↓ or S | Swipe down |
| Start / pause | Space / P | Tap |

<p align="center">
  <img src="screenshots/mobile.jpg" alt="Start screen on a phone" width="300">
</p>

On a phone you can add it to your home screen and it opens full-screen like an app.

## Run it locally

No install is needed. Serve the folder with any static server:

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765. Opening `index.html` directly from disk also works, because the 3D models are packed into `models.js`.

## How it's built

- **One HTML file:** [`index.html`](index.html) holds all the game code, using [Three.js](https://threejs.org) r160 loaded from a CDN. There's no framework and no bundler.
- **3D models:** the characters, obstacles, power-ups and street props in [`models/`](models) are rigged GLB files generated with Higgsfield (Meshy and Tripo) from the concept art in [`concepts/`](concepts). [`tools/optimize-models.sh`](tools/optimize-models.sh) meshopt-compresses them into `models-web/` (11 MB → 5 MB), which the website loads in parallel and caches. [`tools/pack-models.py`](tools/pack-models.py) also packs them into `models.js` as base64, used only when `index.html` is opened straight from disk. Re-run both after changing a model:
  ```bash
  tools/optimize-models.sh && python3 tools/pack-models.py
  ```
- **Menu:** the start screen shows the selected runner's 3D model in a standing pose.
- **Fallbacks:** if a model fails to load, the game builds that character from simple shapes instead.
- **Analytics:** [PostHog](https://posthog.com) records game events (`run_start`, `run_end` with score and what caught you, `run_quit`, `revive`, `achievement`, `runner_unlock`) and errors, tagged with `platform` (web, ios or android). The public project key is in [`posthog-config.js`](posthog-config.js). The PostHog library loads in the background, so an ad blocker or a missing network never stops the game. Vercel Web Analytics adds page views on the website.
- **Saves:** your progress is saved in the browser with `localStorage`.
- **Teary screen:** clipping an onion cart blurs the screen with a line from [`tear-lines.js`](tear-lines.js): the runner's own pool, a shared pool, and a rare Daroga Ji line, shuffled so nothing repeats too soon. Check the picker with `node tools/test-tear-lines.mjs`. On localhost (or with `?debug` in the URL), press **T** to trigger it.

## Project layout

```
index.html              the whole game
models-web/             compressed GLB models the website loads (generated)
models-list.js          model names (generated)
models.js               base64 models for file:// (generated)
posthog-config.js       PostHog public project key
models/                 source GLB models + notes
art/                    character cutouts (no longer used by the game)
brand/                  logo and app icons
concepts/               concept art and turnaround sheets
screenshots/            README images
tools/                  model compression + packing scripts
design-doc.html         game design document
```

## Deploy

The game is a static site and is deployed on [Vercel](https://vercel.com). `.vercelignore` keeps the concept art and source models out of the upload.

```bash
vercel --prod
```

## Mobile apps (iOS and Android)

The same game ships as native apps through [Capacitor](https://capacitorjs.com). The web version is unchanged: `npm run www` copies the game into `www/` and points Three.js and PostHog at bundled copies so the app plays offline, then Capacitor wraps `www/` in the `ios/` and `android/` projects.

```bash
npm install
npm run ios       # build www/, sync, open Xcode
npm run android   # build www/, sync, open Android Studio
npm run apk       # or build a debug APK from the terminal (needs JDK 21: brew install openjdk@21)
```

The APK lands in `android/app/build/outputs/apk/debug/`. For `npm run apk`, set `JAVA_HOME` to `$(brew --prefix openjdk@21)/libexec/openjdk.jdk/Contents/Home`.

Edit the game in `index.html` as usual, then rerun one of the commands above. App icons come from `assets/icon.png` (`npx @capacitor/assets generate`).
