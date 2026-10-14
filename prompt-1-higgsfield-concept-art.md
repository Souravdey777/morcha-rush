# Prompt 1: Higgsfield concept art for "Morcha Rush"

> Paste everything below the line into a Claude session that has Higgsfield connected.

---

You are generating concept art in Higgsfield for a 3D mobile/browser endless-runner game called **Morcha Rush**. The images are **reference art only**. A developer will use them to build chunky low-poly 3D models in code (Three.js), so clear silhouettes, readable colors and simple shapes matter more than fine detail.

## Project context

- **Game:** a 3D endless runner, "Subway Surfers meets a festival". The player runs down a 3-lane Delhi street during a chaotic but joyful street march, dodging comic bureaucratic obstacles while a clipboard-waving Inspector chases them.
- **Tone:** lighthearted cartoon satire. The jokes are about red tape, potholes, road diversions and paperwork, **never** about any real person, politician, party, religion, caste, cause, police force or uniform. Nobody gets hurt; a crash is a cartoon stumble with stars over the head. It should read as a celebration, not a conflict.
- **Signature look:** googly eyes, bouncy toy-like proportions (big head, short body), festive palette, comic sound-effect bursts (DISHOOM!, OYE!, CHALO!, THWACK!).

## Style bible (apply to every image)

- **Render style:** stylized 3D character render, like a premium mobile game. Soft clay/vinyl-toy shading, smooth simple forms, slightly chunky low-poly-friendly geometry, gentle rim light, soft ambient occlusion.
- **Proportions:** head about 1/3 of total height, oversized googly eyes (white sclera, small black pupils, slightly mismatched for comedy), small hands, sturdy legs, big shoes.
- **Palette:** saffron `#FF8A1F`, hot pink `#FF3D7F`, teal `#13B5A6`, marigold yellow `#FFD23F`, deep plum outline/shadow `#2A1B3D`, warm off-white `#FFF8EC`. Skin tones: a range of warm South Asian browns.
- **Background:** plain flat warm-yellow (`#FFD23F`) or light gradient, no scenery (except the environment shots), so the subject is easy to isolate.
- **Lighting:** bright daytime, soft key light from top-left, no harsh shadows.
- **Text in images:** only the exact sign/placard text given. Everything else text-free.

**Negative prompt (use on every generation):**
`realistic photo, photorealistic skin, gore, blood, weapons, violence, real politician, real person likeness, political party symbol, flag, religious symbol, police uniform, military, protest violence, riot, fire, angry mob, extra limbs, deformed hands, blurry, watermark, logo, extra text, gibberish text, dark moody lighting, horror`

## Output settings

- **Character hero shots:** 1:1, highest quality, 2–4 variations each. Pick the best one.
- **Turnaround sheets:** 16:9.
- **Environment / key art:** 16:9.
- **Icon:** 1:1.
- **Save files** into `./concepts/` in the project folder using the filenames given below (PNG). If Higgsfield returns URLs, download them to those paths.
- After generating, write `./concepts/README.md` listing each file, the exact prompt used, the model/settings, and one line on what to match when modelling (key colors and silhouette notes).

---

## A. Characters: hero shots (1:1)

### A1. Guddu (starter player character) → `concepts/guddu.png`
Stylized 3D game character render, full body, 3/4 front view, dynamic running pose mid-stride. "Guddu", a cheerful Indian college student, around 19, warm brown skin, messy spiky black hair, huge googly eyes with a curious, slightly confused expression and a small smile. Wears a bright blue hoodie with sleeves pushed up, dark plum joggers and chunky hot-pink sneakers. Carries a comically **oversized teal backpack**, almost as big as his torso, stuffed with books and a rolled-up poster sticking out. In one hand he holds a wooden stick with a white cardboard placard reading exactly **"HMMM 🤔"** in thick hand-painted letters. Chunky toy-like proportions, soft clay shading, festive saffron and pink accents, plain warm-yellow background, premium mobile game character style.

### A2. Dadi-ji (unlockable, 500 coins) → `concepts/dadi-ji.png`
Stylized 3D game character render, full body, 3/4 front view, action pose. "Dadi-ji", a feisty, tiny Indian grandmother, around 75, warm brown skin with smile wrinkles, white hair in a tight round bun, round gold-rimmed glasses, huge googly eyes behind them, stern-but-hilarious "don't test me" expression. Wears a **hot-pink cotton saree with a marigold-yellow border**, a cardigan draped over her shoulders and sensible flat sandals. She raises one brown leather **chappal (flip-flop) overhead mid-swing** like a comic superhero, with motion lines and a comic burst reading **"THWACK!"**. Chunky toy-like proportions, soft clay shading, plain warm-yellow background, wholesome and funny, premium mobile game character style.

### A3. Dhol Bro (unlockable, 1,000 coins) → `concepts/dhol-bro.png`
Stylized 3D game character render, full body, 3/4 front view, mid-jump with knees tucked, ecstatic. "Dhol Bro", a joyful Indian festival drummer, around 25, warm brown skin, big curled black moustache, a huge open-mouth grin, googly eyes squeezed with joy. Wears a **bright hot-pink turban**, a marigold-yellow kurta with a pink sash, white churidar and pointed juttis. A large **saffron-orange dhol drum** with white drumheads and plum criss-cross rope lacing is strapped across his chest. Both hands hold curved wooden drumsticks mid-strike, with a circular sound-wave ring and a comic burst reading **"DHAM!"**. Chunky toy-like proportions, soft clay shading, plain warm-yellow background, premium mobile game character style.

### A4. Camera Intern (unlockable, 2,000 coins) → `concepts/camera-intern.png`
Stylized 3D game character render, full body, 3/4 front view, crouched running pose while filming. "Camera Intern", an eager, over-caffeinated young Indian news intern, around 22, warm brown skin, black hair under a **backwards saffron-orange cap**, one googly eye visible and squinting, the other hidden behind a chunky black **DSLR camera** held up to the face. Wears a teal zip jacket, a lanyard with a white badge reading **"PRESS"**, cargo pants with too many pockets, and a tiny paper chai cup tucked in one pocket. A bright white **camera flash burst** with radiating lines and a comic burst reading **"FLASH!"**. Chunky toy-like proportions, soft clay shading, plain warm-yellow background, premium mobile game character style.

### A5. The Inspector (chaser, not playable) → `concepts/inspector.png`
Stylized 3D game character render, full body, 3/4 front view, comically determined running pose leaning forward. "The Inspector", a **fictional, generic** comic bureaucrat, around 50, warm brown skin, round belly, bushy black moustache, googly eyes narrowed in determination, eyebrows angled. Wears a **plain grey safari suit** (no badges, no insignia, no uniform markings), a hot-pink tie, a flat black cap and polished black shoes. Waves a brown clipboard overflowing with paper forms, loose sheets fluttering. A comic speech burst reading **"FORM 27-B?!"**. Funny, not menacing. Chunky toy-like proportions, soft clay shading, plain warm-yellow background, premium mobile game character style.

## B. Character turnaround sheets (16:9), for 3D modelling

One per character, same descriptions as section A. Prompt suffix:

> Character model turnaround sheet, same character shown in **front view, side view, back view and 3/4 view**, neutral A-pose with arms slightly out, standing on a flat line, evenly spaced, orthographic-feel camera, consistent proportions and colors across all four views, flat light-grey background, no comic text bursts, no placard text except on the front view.

Files: `concepts/guddu-turnaround.png`, `concepts/dadi-ji-turnaround.png`, `concepts/dhol-bro-turnaround.png`, `concepts/camera-intern-turnaround.png`, `concepts/inspector-turnaround.png`.

Use the hero shot as the image reference (image-to-image / character reference) if Higgsfield supports it, so each turnaround matches its hero.

## C. Obstacles: prop sheet (16:9) → `concepts/obstacles.png`

Stylized 3D game prop sheet, four props on a flat warm-yellow background, evenly spaced, 3/4 view, chunky toy-like low-poly-friendly shapes, soft clay shading:
1. A striped **saffron-and-white road barricade** with a hanging sign reading exactly **"ADJUSTING, PLEASE WAIT"**.
2. A tall **red-bordered white signboard on two poles** reading exactly **"SECTION 144"**, with a clear gap underneath (the player slides under it).
3. A round **pothole crater** in grey asphalt, cracked edges, a little puddle, with a small pink pennant flag reading **"Work in Progress ✨"**.
4. A comic **VIP convoy**: a shiny white boxy sedan with a flashing red-and-blue roof light, a small pennant (blank, no real flag), and a glowing orange road banner reading **"ROUTE DIVERTED"**.

## D. Power-ups: icon sheet (16:9) → `concepts/powerups.png`

Stylized 3D game power-up pickups, four floating glossy collectible icons on a flat warm-yellow background, each inside a soft glowing ring, chunky toy shapes:
1. **Cutting Chai**: a small glass of milky orange tea with steam curls (☕ feel).
2. **Dhol Beat**: a mini saffron dhol drum with crossed sticks (🥁 feel).
3. **Press Pass**: a teal lanyard badge reading **"PRESS"** with a camera flash sparkle (📸 feel).
4. **Jugaad Thela**: a wobbly, patched-together wooden handcart with mismatched wheels and a tiny hover glow underneath (🛺 jugaad feel).

Also a **gold ₹ coin**: thick, glossy, embossed rupee symbol, slight spin blur. Include it as a 5th item or as a separate file, `concepts/coin.png` (1:1).

## E. Environment key art (16:9) → `concepts/environment.png`

Stylized 3D game environment concept, chase-camera view from behind and above a runner on a **3-lane Delhi street**, lanes marked with bold white dashes, running toward the horizon. A festive street march: marigold garlands strung overhead, colorful bunting, confetti in the air. Left and right sidewalks: a chai stall with a steaming kettle, parked green-and-yellow auto-rickshaws, a red DTC-style city bus (generic, no logos), pigeons scattering. Background skyline silhouettes: an **India Gate-style arch**, domes and minarets in soft haze, warm late-afternoon light. Low-poly-friendly chunky shapes, bright saffron/pink/teal palette, soft clay shading, cheerful and busy, no real people likenesses, no political symbols or flags.

## F. Title / key art (16:9) → `concepts/key-art.png`

Stylized 3D game key art: Guddu, Dadi-ji, Dhol Bro and Camera Intern running toward the camera down a festive Delhi street, with the Inspector chasing behind waving his clipboard. Confetti, marigolds, comic bursts reading "CHALO!" and "OYE!". Leave clear empty space at the top for the game title. Bright saffron/pink/teal palette, soft clay shading, joyful energy.

## G. App icon (1:1) → `concepts/icon.png`

Stylized 3D game app icon: Guddu's head with huge googly eyes and a tiny "HMMM 🤔" placard peeking in, on a saffron-to-pink gradient rounded square, bold and readable at small sizes, no other text.

---

## Checklist before you finish

- [ ] All files saved in `./concepts/` with the exact names above.
- [ ] Colors match the palette, and characters look consistent between hero and turnaround images.
- [ ] Sign text is spelled exactly right (regenerate if it's garbled).
- [ ] No real people, symbols, flags, uniforms or violence.
- [ ] `./concepts/README.md` written, with prompts, settings and modelling notes.
- [ ] Report back a short list of the files and any you'd regenerate.
