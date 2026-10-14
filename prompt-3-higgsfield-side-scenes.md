# Prompt 3: Higgsfield side-scene models for "Morcha Rush"

> Paste everything below the line into the Claude session that has Higgsfield connected (the same one that made `models/`). When it's done, copy the new `.glb` files into this project's `models/` folder and run `python3 tools/pack-models.py`. The game picks them up automatically. Any file that's missing falls back to the version built in code.

---

You are making **set-dressing 3D models** for the sidewalks of **Morcha Rush**, a 3D endless runner set on a festive Delhi street. The characters, obstacles and power-ups are already done (see `models/README.md` and `concepts/README.md`). Now match the **side scenes in `concepts/environment.png`**: chai stalls, auto-rickshaws, red buses, marigold-wrapped lamp posts, flower pots, leafy trees, sandstone havelis with domes, and marchers on the pavement.

## Use the same pipeline as before

1. **Isolated reference image per prop:** GPT Image 2.5, 1:1, `high` / `2k`. Use `concepts/environment.png` (and `concepts/key-art.png` for people) as image references. Show one prop, 3/4 front view, on a plain flat warm-yellow `#FFD23F` background, and nothing else in frame.
2. **Image to 3D:** Tripo H3.1 with textures, using the face limits below. For people, use Meshy `multi_image_to_3d` (turnaround first). No rig is needed; a static pose is fine.
3. **Post-process (gltf-transform / three.js), exactly like `models/`:**
   - **Front faces +Z.** For storefront props (stall, haveli, lamp, pot, tree, marchers), "front" is the side that faces the road. For vehicles, it's the vehicle's nose.
   - **Base pivot:** base centred at the origin, sitting on y = 0.
   - **Normalised:** longest side = 1 unit. The game rescales it.
   - **Textures:** WebP 1024 px (`EXT_texture_webp`); no Draco or Meshopt.
   - Remove any ground plane or background slab the generator adds.
4. **Save** into `./models/` with the exact filenames below. Add a section to `models/README.md` (tris, size, notes) and the job IDs to `models/job-ids.txt`.

## Shared style (every prompt)

```
Style: stylized 3D game prop, soft clay/vinyl-toy shading, smooth chunky low-poly-friendly forms, gentle rim light, soft ambient occlusion, warm golden-hour light from the top-left. Palette: saffron #FF8A1F, hot pink #FF3D7F, teal #13B5A6, marigold #FFD23F, deep plum #2A1B3D, off-white #FFF8EC, sandstone pink #E0957A. Plain flat warm-yellow #FFD23F background, single object, fully in frame, no ground, no shadow plane.
Avoid: realistic photo, text, letters, signage with writing, logos, brand names, flags, political or religious symbols, police markings, weapons, people (unless asked), blurry, watermark, extra objects.
```

## The models

| File | Face limit | Prompt (subject) |
|---|---|---|
| `decor-chai-stall.glb` | 8k | A cheerful roadside **Indian chai stall**: wooden counter with a hot-pink patterned cloth front and teal/marigold fringe, a **curved striped awning** (saffron, teal, pink, marigold stripes) with a **scalloped edge**, a string of warm glowing bulbs under the awning, a big **steel kettle on a small stove**, stacks of terracotta **kulhad cups**, glass jars on a back shelf, a small wooden bench in front, and marigold flower pots at both corners. A friendly **chai-wala** with googly eyes, a moustache and a yellow gamcha stands behind the counter pouring tea. The front of the stall faces the camera. |
| `decor-auto-rickshaw.glb` | 6k | A classic **Indian auto-rickshaw**: green lower body, marigold-yellow canvas canopy, three wheels, small round headlight, red tail lights, black seat visible, no text or number plate. Nose facing the camera at a 3/4 angle. |
| `decor-dtc-bus.glb` | 8k | A chunky **red city bus** (generic, Delhi DTC-style): tomato-red body, cream stripe, big dark window band, amber rear lights, rounded corners, four wheels, **no logos, no route number, no text**. Toy-like proportions. Nose facing the camera at a 3/4 angle. |
| `decor-lamp-post.glb` | 4k | An ornate **Delhi heritage street lamp**: dark plum cast-iron pole with a decorative base, and a lantern-style lamp head with a warm glowing cream glass box and a small domed cap. The pole is wrapped from top to bottom in thick **marigold garlands** (orange and yellow), with a marigold tassel hanging from the lamp arm. |
| `decor-marigold-pot.glb` | 3k | A round **terracotta pot** overflowing with orange and yellow **marigolds** and green leaves. |
| `decor-neem-tree.glb` | 5k | A leafy **neem street tree**: short brown trunk, big round fluffy canopy made of 4–5 chunky green blobs in two tones, with a small round tree-guard ring at the base. |
| `decor-haveli-a.glb` | 8k | A **sandstone-pink Delhi haveli facade block** (old city building), 2 floors: arched windows in deep plum, one carved **jharokha balcony** in the middle, cream trim and cornice, a **dome** on top with a gold finial, and small **chhatri** pavilions at the corners. Flat back. The front faces the camera. |
| `decor-haveli-b.glb` | 8k | Same family, 3 floors and narrower: terracotta-rose sandstone, a row of arches on the ground floor, two jharokhas, a flat roof with a parapet, one big onion **dome**, and potted marigolds on the parapet. |
| `decor-haveli-c.glb` | 8k | Same family, wide and low: a Mughal-style **arcade** of 5 cream arches on the ground floor, a pink upper floor with lattice (jaali) windows, marigold bunting across the facade, and two small domes. |
| `decor-marcher-a.glb` | 8k | A cheerful **marcher** standing and waving, same toy style and googly eyes as the game characters: young woman in a hot-pink salwar kameez with a yellow dupatta, one arm raised waving, no placard text. *(Meshy multi-image; make a turnaround first.)* |
| `decor-marcher-b.glb` | 8k | A **marcher**: older uncle in a white kurta and a teal Nehru jacket, clapping, big grin, moustache, googly eyes. |
| `decor-marcher-c.glb` | 8k | A **marcher**: kid in an orange t-shirt and blue shorts, jumping with both arms up, confetti in hand, googly eyes. |

## Tone guardrails

- Everything is generic and fictional: no brand names, no route numbers, no shop signs with words, no party colours or symbols, no flags, no religious iconography.
- Marchers are cheering and celebrating, not protesting angrily. No placards with text.

## Checklist before you finish

- [ ] 12 `.glb` files in `./models/` with the exact names above.
- [ ] Each one faces +Z, sits on y = 0, has its longest side = 1, and uses WebP textures, with no ground plane.
- [ ] Each is under its face limit, and total new size is about 6 MB or less.
- [ ] No text, logos or symbols anywhere.
- [ ] `models/README.md` and `models/job-ids.txt` updated.
- [ ] Tell the user to run `python3 tools/pack-models.py` in the game folder.
