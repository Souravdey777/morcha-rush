#!/usr/bin/env python3
"""Pack models-web/*.glb (meshopt-compressed, see optimize-models.sh) for index.html. Re-run after changing any model:
    tools/optimize-models.sh && python3 tools/pack-models.py
models-list.js: the model names; over http the game fetches models-web/<name>.glb directly (smaller, cached, parallel).
models.js: the same models as base64, only loaded when index.html is opened straight from disk (file:// blocks fetch()).
"""
import base64, json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
files = sorted((root / 'models-web').glob('*.glb'))
(root / 'models-list.js').write_text('window.MORCHA_MODEL_NAMES = ' + json.dumps([p.stem for p in files]) + ';\n')
data = {p.stem: base64.b64encode(p.read_bytes()).decode() for p in files}
(root / 'models.js').write_text('window.MORCHA_MODELS = ' + json.dumps(data) + ';\n')
print(f'packed {len(data)} models -> models.js ({(root / "models.js").stat().st_size / 1e6:.1f} MB)')
