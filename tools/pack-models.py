#!/usr/bin/env python3
"""Pack models/*.glb into models.js (base64) so index.html works when opened straight from disk.
Browsers block fetch() of local files, but a <script src> loads fine. Re-run after changing any model:
    python3 tools/pack-models.py
"""
import base64, json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
data = {p.stem: base64.b64encode(p.read_bytes()).decode() for p in sorted((root / 'models').glob('*.glb'))}
(root / 'models.js').write_text('window.MORCHA_MODELS = ' + json.dumps(data) + ';\n')
print(f'packed {len(data)} models -> models.js ({(root / "models.js").stat().st_size / 1e6:.1f} MB)')
