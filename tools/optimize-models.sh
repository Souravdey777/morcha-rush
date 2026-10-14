#!/bin/sh
# Meshopt-compress models/*.glb into models-web/ (what the website loads; ~3x smaller).
# Re-run after changing any model, then: python3 tools/pack-models.py
cd "$(dirname "$0")/.." && mkdir -p models-web
for f in models/*.glb; do npx -y @gltf-transform/cli@4.1.1 meshopt "$f" "models-web/$(basename "$f")" >/dev/null || exit 1; done
du -sh models models-web
