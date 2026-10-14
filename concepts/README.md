# Morcha Rush: concept art

Reference art for building chunky low-poly Three.js models. Generated in Higgsfield on 2026-10-12.

## Settings (all files)

| Setting | Value |
|---|---|
| Model | `gpt_image_2_5` (GPT Image 2.5, variant `flare`) |
| Quality / resolution | `high` / `2k` |
| Hero shots, coin, icon | 1:1, 2048×2048 |
| Turnarounds, props, power-ups, environment, key art | 16:9, 2688×1520 |
| Variations | 2 per hero shot (best kept), 1 per sheet, 3 for key art |
| Image references | Turnarounds use their hero shot. Key art uses all five heroes. Icon uses Guddu's hero. |

The model has no separate negative-prompt field, so the negative list is written into the prompt as an `Avoid:` line.

## Shared prompt blocks

Each full prompt below is **Subject + Style block + Avoid block**, joined with a blank line. The exceptions are noted per file.

**Style block (characters)**
```
Style: soft clay/vinyl-toy shading, smooth simple chunky low-poly-friendly forms, gentle rim light, soft ambient occlusion. Head about 1/3 of total height, oversized googly eyes (white sclera, small black pupils, slightly mismatched), small hands, sturdy legs, big shoes. Palette: saffron #FF8A1F, hot pink #FF3D7F, teal #13B5A6, marigold #FFD23F, deep plum #2A1B3D, off-white #FFF8EC. Bright daytime, soft key light from top-left. No text other than the <placard / comic burst / badge>.
```

**Style block (turnarounds)**
```
Style: stylized 3D character render, soft clay/vinyl-toy shading, smooth simple chunky low-poly-friendly forms, gentle rim light, soft ambient occlusion. Head about 1/3 of total height. Palette: saffron #FF8A1F, hot pink #FF3D7F, teal #13B5A6, marigold #FFD23F, deep plum #2A1B3D, off-white #FFF8EC. Soft key light from top-left.
```

**Avoid block (heroes)**
```
Avoid: realistic photo, photorealistic skin, gore, blood, weapons, violence, real person likeness, political party symbol, flag, religious symbol, police uniform, military, riot, fire, extra limbs, deformed hands, blurry, watermark, logo, extra text, gibberish text, dark moody lighting, horror.
```
(The Inspector's hero and turnaround also add `badge`.)

**Avoid block (turnarounds)**
```
Avoid: realistic photo, gore, weapons, violence, real person likeness, flag, political or religious symbol, uniform, extra limbs, deformed hands, blurry, watermark, logo, extra text, gibberish text, dark lighting.
```

**Turnaround suffix (inserted after each turnaround's character description)**
```
Shown in front view, side view, back view and 3/4 view, neutral A-pose with arms slightly out, standing on a flat line, evenly spaced, orthographic-feel camera, consistent proportions and colors across all four views, flat light-grey background, no comic text bursts, no placard text except on the front view, no labels or captions.
```

---

## A. Hero shots (1:1)

### `guddu.png`
Job `999ced94-677b-49a3-885a-c49ed192c575` (variation 1 of 2).
> Stylized 3D game character render, full body, 3/4 front view, dynamic running pose mid-stride. "Guddu", a cheerful Indian college student, around 19, warm brown skin, messy spiky black hair, huge googly eyes with a curious, slightly confused expression and a small smile. Wears a bright blue hoodie with sleeves pushed up, dark plum joggers and chunky hot-pink sneakers. Carries a comically oversized teal backpack, almost as big as his torso, stuffed with books and a rolled-up poster sticking out. In one hand he holds a wooden stick with a white cardboard placard reading exactly "HMMM 🤔" in thick hand-painted letters. Chunky toy-like proportions, soft clay shading, festive saffron and pink accents, plain flat warm-yellow #FFD23F background, premium mobile game character style.

**Model it:** royal-blue hoodie, plum joggers, hot-pink sneakers. The teal backpack is the silhouette; make it about torso-sized with a book stack and a rolled poster poking up. Spiky hair cap, white placard on a stick.

### `dadi-ji.png`
Job `878d807b-ca31-4573-8a2f-895e7f9b230e` (variation 1 of 2).
> Stylized 3D game character render, full body, 3/4 front view, action pose. "Dadi-ji", a feisty, tiny Indian grandmother, around 75, warm brown skin with smile wrinkles, white hair in a tight round bun, round gold-rimmed glasses, huge googly eyes behind them, stern-but-hilarious "don't test me" expression. Wears a hot-pink cotton saree with a marigold-yellow border, a cardigan draped over her shoulders and sensible flat sandals. She raises one brown leather chappal (flip-flop) overhead mid-swing like a comic superhero, with motion lines and a comic burst reading exactly "THWACK!". Chunky toy-like proportions, soft clay shading, plain flat warm-yellow #FFD23F background, wholesome and funny, premium mobile game character style.

**Model it:** short and wide. The silhouette is a bell-shaped pink saree with a marigold hem band plus a diagonal pallu band. Teal cardigan, white bun sphere on top, gold ring glasses. The chappal is a separate prop for the raised-arm swing.

### `dhol-bro.png`
Job `baa04373-9ca0-42d9-b5d7-18e503cad9de` (variation 2 of 2).
> Stylized 3D game character render, full body, 3/4 front view, mid-jump with knees tucked, ecstatic. "Dhol Bro", a joyful Indian festival drummer, around 25, warm brown skin, big curled black moustache, a huge open-mouth grin, googly eyes squeezed with joy. Wears a bright hot-pink turban, a marigold-yellow kurta with a pink sash, white churidar and pointed juttis. A large saffron-orange dhol drum with white drumheads and plum criss-cross rope lacing is strapped across his chest. Both hands hold curved wooden drumsticks mid-strike, with a circular sound-wave ring and a comic burst reading exactly "DHAM!". Chunky toy-like proportions, soft clay shading, plain flat warm-yellow #FFD23F background, premium mobile game character style.

**Model it:** a tall pink turban dome reads first. The horizontal orange barrel drum (white caps, plum X-lacing) sits across the belly on plum straps. Yellow kurta, pink sash, white leggings, pink pointed juttis, curled moustache.

### `camera-intern.png`
Job `7ad02a24-d207-4d1d-b3c7-c3487156a341` (variation 1 of 2).
> Stylized 3D game character render, full body, 3/4 front view, crouched running pose while filming. "Camera Intern", an eager, over-caffeinated young Indian news intern, around 22, warm brown skin, black hair under a backwards saffron-orange cap, one googly eye visible and squinting, the other hidden behind a chunky black DSLR camera held up to the face. Wears a teal zip jacket, a lanyard with a white badge reading exactly "PRESS", cargo pants with too many pockets, and a tiny paper chai cup tucked in one pocket. A bright white camera flash burst with radiating lines and a comic burst reading exactly "FLASH!". Chunky toy-like proportions, soft clay shading, plain flat warm-yellow #FFD23F background, premium mobile game character style.

**Model it:** backwards saffron cap plus a black DSLR block at face height. Teal jacket, pink lanyard with a white PRESS card, olive cargo pants with boxy pockets, plum backpack, purple/pink sneakers. The model added olive pants and a plum backpack beyond the brief; keep them, they read well.

### `inspector.png`
Job `f36fec59-3f10-476b-b07d-ae51ecdfcee0` (variation 2 of 2).
> Stylized 3D game character render, full body, 3/4 front view, comically determined running pose leaning forward. "The Inspector", a fictional, generic comic bureaucrat, around 50, warm brown skin, round belly, bushy black moustache, googly eyes narrowed in determination, eyebrows angled. Wears a plain grey safari suit (no badges, no insignia, no uniform markings), a hot-pink tie, a flat black cap and polished black shoes. Waves a brown clipboard overflowing with paper forms, loose sheets fluttering. A comic speech burst reading exactly "FORM 27-B?!". Funny, not menacing. Chunky toy-like proportions, soft clay shading, plain flat warm-yellow #FFD23F background, premium mobile game character style.

Style block note: ends "No text other than the speech burst; paper forms show only abstract lines." Avoid block also includes `badge`.

**Model it:** egg-shaped body, plain grey suit, hot-pink tie as the one accent, flat black cap, bushy moustache, glossy black shoes, brown clipboard with a paper stack. It came out as a two-piece lounge suit rather than a strict safari suit, which is still generic.

## B. Turnaround sheets (16:9)

Each is **"Character model turnaround sheet of the SAME character as the reference image: " + description + turnaround suffix + turnaround style + turnaround avoid**, with the hero job as the image reference.

| File | Reference | Character description used | Notes |
|---|---|---|---|
| `guddu-turnaround.png` | `999ced94…` | "Guddu", a cheerful Indian college student, warm brown skin, messy spiky black hair, huge googly eyes, bright blue hoodie with sleeves pushed up, dark plum joggers, chunky hot-pink sneakers, comically oversized teal backpack stuffed with books and a rolled-up poster, holding a wooden stick with a white cardboard placard reading "HMMM 🤔". | Back view shows backpack pocket layout |
| `dadi-ji-turnaround.png` | `878d807b…` | "Dadi-ji", a feisty tiny Indian grandmother, warm brown skin with smile wrinkles, white hair in a tight round bun, round gold-rimmed glasses, huge googly eyes, hot-pink cotton saree with a marigold-yellow border, teal cardigan draped over her shoulders, brown flat sandals, holding one brown leather chappal at her side. | Suffix used "no text anywhere" |
| `dhol-bro-turnaround.png` | `baa04373…` | "Dhol Bro", a joyful Indian festival drummer, warm brown skin, big curled black moustache, big grin, googly eyes, bright hot-pink turban, marigold-yellow kurta with a pink sash, white churidar, pointed pink juttis, a large saffron-orange dhol drum with white drumheads and plum criss-cross rope lacing strapped across his chest on a plum strap, curved wooden drumsticks in hands. | Back view shows X-strap and sash knot |
| `camera-intern-turnaround.png` | `7ad02a24…` | "Camera Intern", an eager young Indian news intern, warm brown skin, black hair under a backwards saffron-orange cap, googly eyes, teal zip jacket, a pink lanyard with a white badge reading "PRESS", olive cargo pants with many pockets and a tiny paper chai cup in one pocket, purple-and-pink sneakers, a small plum backpack, holding a chunky black DSLR camera lowered at chest height so the face is visible. | Camera lowered so the face is modelable |
| `inspector-turnaround.png` | `f36fec59…` | "The Inspector", a fictional generic comic bureaucrat, warm brown skin, round belly, bushy black moustache, googly eyes, plain grey suit with no badges, no insignia and no markings, hot-pink tie, flat black cap, polished black shoes, holding a brown clipboard with paper forms (forms show only abstract lines). Funny, not menacing. | Avoid block adds `police uniform, badge` |

Job IDs: Guddu `c15bd7dd-3469-40bc-93b2-ec6c99369bae`, Dadi-ji `e0673036-7c42-49d2-992c-ba04399b242b`, Dhol Bro `11e712e2-f3ca-4a69-ada2-dd9a79b100b2`, Camera Intern `208c1d49-09d2-4e59-8c3b-ea575ab86587`, Inspector `d5da3479-69aa-463b-8602-4158aa109287`.

## C. `obstacles.png` (16:9)
Job `bc075879-c61f-44fc-ba3e-6e9de9899c94`. This is a full prompt; the shared blocks are not appended.
> Stylized 3D game prop sheet, four separate props in a row on a plain flat warm-yellow #FFD23F background, evenly spaced, 3/4 view, chunky toy-like low-poly-friendly shapes, soft clay shading, gentle rim light, soft ambient occlusion:
> 1. A striped saffron-and-white road barricade with a hanging sign reading exactly "ADJUSTING, PLEASE WAIT".
> 2. A tall red-bordered white signboard held up on two poles reading exactly "SECTION 144", with a clear tall empty gap underneath the board between the poles.
> 3. A round pothole crater in grey asphalt, cracked edges, a little puddle, with a small pink pennant flag on a stick reading exactly "Work in Progress ✨".
> 4. A comic VIP convoy car: a shiny white boxy sedan with a flashing red-and-blue roof light and a small blank white pennant on the bonnet, next to a glowing orange road banner reading exactly "ROUTE DIVERTED".
> Palette: saffron #FF8A1F, hot pink #FF3D7F, teal #13B5A6, marigold #FFD23F, deep plum #2A1B3D, off-white #FFF8EC. Bright daytime, soft key light from top-left. Only the four exact sign texts above; no other text, no labels, no numbers.
> Avoid: realistic photo, gore, weapons, violence, people, real person likeness, political party symbol, national flag, religious symbol, police markings, military, riot, fire, blurry, watermark, logo, extra text, gibberish text, dark moody lighting.

**Model it:** barricade = A-frame with diagonal saffron/white stripes and amber blinker caps (jump over). Section 144 = pink-bordered board on two orange/white striped poles with plum feet; keep the gap for the slide. Pothole = ring of grey rubble blocks around a flat puddle disc, plus a pink pennant. VIP = boxy white sedan, light bar, plum-and-orange "ROUTE DIVERTED" glowing banner as the lane blocker.

## D. `powerups.png` (16:9)
Job `79e6d2e5-72ad-4505-8dad-a43043cce4eb`. Full prompt:
> Stylized 3D game power-up pickups, four floating glossy collectible icons in a row on a plain flat warm-yellow #FFD23F background, each inside its own soft glowing ring, evenly spaced, chunky toy shapes, soft clay shading, gentle rim light:
> 1. Cutting Chai: a small glass of milky orange tea with curling white steam.
> 2. Dhol Beat: a mini saffron-orange dhol drum with white drumheads, plum rope lacing and two crossed wooden sticks.
> 3. Press Pass: a teal lanyard with a white badge reading exactly "PRESS", with a sparkly camera-flash star.
> 4. Jugaad Thela: a wobbly, patched-together wooden handcart with mismatched wheels and a tiny teal hover glow underneath.
> Palette: saffron #FF8A1F, hot pink #FF3D7F, teal #13B5A6, marigold #FFD23F, deep plum #2A1B3D, off-white #FFF8EC. Bright, soft key light from top-left. The only text is "PRESS" on the badge; no labels, no captions.
> Avoid: realistic photo, people, weapons, flag, political or religious symbol, blurry, watermark, logo, extra text, gibberish text, dark lighting.

**Model it:** each pickup sits in a colour-coded emissive ring (chai = yellow, dhol = pink, press = teal, thela = yellow). Chai glass = fluted tapered cylinder. Thela = open box on two mismatched wheels with one patched plank.

## D. `coin.png` (1:1)
Job `2ab9496c-7d7b-4b8b-b54e-01a173a24f7e`. Full prompt:
> Stylized 3D game collectible: a single thick, glossy gold coin with an embossed Indian rupee symbol ₹ in the centre and a raised rim, tilted slightly toward the viewer with a light spin motion blur on one edge and a few sparkles, centered on a plain flat warm-yellow #FFD23F background. Chunky toy-like low-poly-friendly shape, soft clay shading, gentle rim light, soft ambient occlusion, warm gold with deep plum #2A1B3D shadow accents. No other text or numbers.
> Avoid: realistic photo, real currency note, portrait, flag, political symbol, blurry, watermark, logo, extra text, gibberish text, dark lighting.

**Model it:** thick cylinder (about 1:4 thickness:diameter), raised rim, extruded ₹ with plum-tinted shadow. Spin on Y.

## E. `environment.png` (16:9)
Job `41135391-16be-4d6e-8126-5910aeeb723f`. Full prompt:
> Stylized 3D game environment concept, chase-camera view from behind and above a small cartoon runner on a 3-lane Delhi street, lanes marked with bold white dashes, running straight toward the horizon. A festive, joyful street march: marigold garlands strung overhead across the street, colorful triangle bunting, confetti in the air. Left and right sidewalks: a chai stall with a steaming kettle, parked green-and-yellow auto-rickshaws, a red generic city bus with no logos or text, pigeons scattering. Background skyline silhouettes: an India Gate-style memorial arch, domes and minarets in soft haze, warm late-afternoon light. Low-poly-friendly chunky shapes, soft clay/vinyl-toy shading, gentle rim light, bright palette of saffron #FF8A1F, hot pink #FF3D7F, teal #13B5A6, marigold #FFD23F with deep plum #2A1B3D shadows, cheerful and busy. No text anywhere, no signs with writing.
> Avoid: realistic photo, gore, weapons, violence, real person likeness, political party symbol, flag, religious symbol, police uniform, military, protest violence, riot, fire, angry mob, blurry, watermark, logo, extra text, gibberish text, dark moody lighting, horror.

**Model it:** use this for camera height/FOV and fog colour (warm peach haze). Curbs are yellow/black striped, and garlands and bunting cross overhead every few segments. Sidewalk kit: chai stall, auto-rickshaw, red bus, marigold pots, lamp posts. The skyline is a flat billboard layer.

## F. `key-art.png` (16:9)
Job `b6cfb4be-c5bd-4212-9b92-92e3563f659c` (retake). References: all five hero jobs. Full prompt:
> Stylized 3D game title key art, 16:9. COMPOSITION: the top 30% of the image is open, empty, soft blue-to-warm sky with nothing in it (reserved for the game title). The characters occupy the lower 70%. The five characters from the reference images, matching their designs exactly: Guddu (blue hoodie, huge teal backpack, "HMMM 🤔" placard), Dadi-ji (hot-pink saree, teal cardigan, gold glasses, waving a chappal), Dhol Bro (pink turban, yellow kurta, orange dhol drum) and Camera Intern (backwards orange cap, teal jacket, DSLR) running joyfully side by side toward the camera down a festive Delhi street. A few steps directly behind them, The Inspector (grey suit, pink tie, flat cap) chases them, comically huffing, waving his clipboard with loose papers fluttering. Marigold garlands and bunting along the street sides, confetti and marigold petals, auto-rickshaws and a chai stall with plain unlabelled awning at the edges, an India Gate-style arch small in soft haze far behind. Two comic bursts reading exactly "CHALO!" and "OYE!" placed at mid-height on the left and right edges, beside the characters, not in the sky. Low-poly-friendly chunky shapes, soft clay/vinyl-toy shading, gentle rim light, bright saffron #FF8A1F / hot pink #FF3D7F / teal #13B5A6 / marigold #FFD23F palette with deep plum #2A1B3D shadows, joyful festival energy. The ONLY text in the image is CHALO!, OYE! and HMMM on the placard (plus PRESS on the badge); no shop signs, no stall signs, no lettering anywhere else.
> Avoid: realistic photo, gore, blood, weapons, violence, real person likeness, political party symbol, flag, religious symbol, police uniform, military, riot, fire, angry mob, extra limbs, deformed hands, blurry, watermark, logo, shop sign text, extra text, gibberish text, dark moody lighting, horror.

The first attempt (`9a3c47cc…`) was dropped because it added a stray "CHAI" sign and its bursts filled the title area.

**Use it:** the title goes in the top ~25% sky band. It's a good lineup reference for relative character heights.

## G. `icon.png` (1:1)
Job `eaf3d955-9218-441d-a7c9-d533d31c8ec1`. Reference: Guddu hero. Full prompt:
> Stylized 3D game app icon: a rounded-square icon filled with a smooth saffron #FF8A1F to hot pink #FF3D7F diagonal gradient. Centered, the head and shoulders of "Guddu" from the reference image, the same character: warm brown skin, messy spiky black hair, huge googly eyes, bright blue hoodie. A tiny white cardboard placard on a stick reading "HMMM 🤔" peeks in from the lower right corner. Bold, simple, readable at small sizes, soft clay/vinyl-toy shading, gentle rim light. No other text.
> Avoid: realistic photo, flag, political or religious symbol, blurry, watermark, logo, extra text, gibberish text, dark lighting.

**Use it:** the rounded square is baked in on a white canvas. Mask or crop it for stores that apply their own corner radius.
