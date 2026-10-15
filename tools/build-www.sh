#!/bin/sh
# Builds www/ for the Capacitor app: the web game's files, with Three.js served locally instead of from the CDN
# so the app works offline. The web version (index.html at the repo root) is left untouched.
set -e
cd "$(dirname "$0")/.."
rm -rf www && mkdir -p www/vendor/three/build www/vendor/posthog-js
cp -R index.html manifest.webmanifest models-list.js tear-lines.js posthog-config.js models-web art brand www/
cp node_modules/three/build/three.module.min.js www/vendor/three/build/
cp node_modules/posthog-js/dist/module.js www/vendor/posthog-js/
# only the addons index.html imports (plus GLTFLoader's one dependency); add a line here if the game imports a new one
for f in loaders/GLTFLoader.js utils/BufferGeometryUtils.js utils/SkeletonUtils.js libs/meshopt_decoder.module.js; do
  mkdir -p "www/vendor/three/examples/jsm/$(dirname $f)" && cp "node_modules/three/examples/jsm/$f" "www/vendor/three/examples/jsm/$f"
done
sed -i '' 's#https://cdn.jsdelivr.net/npm/three@0.160.0/#./vendor/three/#g; s#https://unpkg.com/posthog-js@1.435.5/dist/#./vendor/posthog-js/#' www/index.html
sed -i '' '/_vercel\/insights/d' www/index.html   # Vercel Web Analytics only exists on the web deploy
