# Prompt 2: Build the "Morcha Rush" 3D game

> Paste everything below the line into a Claude Code session opened in the project folder. Run it after Prompt 1 (Higgsfield concept art), so `./concepts/` exists. It still works without the art.

---

Build me a complete, playable **3D endless-runner** browser game called **Morcha Rush** as a **single self-contained `index.html`** (HTML + CSS + JavaScript) using **Three.js**. It must run by double-clicking the file (internet needed only for the Three.js CDN). Build every model in code from Three.js primitives. **No image, model, audio or font files.** Emoji and canvas-drawn textures are fine.

## 0. Before you code

1. Read `./design-doc.html` (one-page GDD) and, if present, `./concepts/README.md` plus the images in `./concepts/`. **Match character colors, silhouettes and props to the concept art.** The art is reference only; do not load the images in the game.
2. If anything in this prompt conflicts with the design doc, this prompt wins.

## 1. Tech constraints

- Load Three.js **r160** as an ES module through an import map:
  ```html
  <script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"}}</script>
  <script type="module"> import * as THREE from 'three'; ... </script>
  ```
  No other libraries (no physics engine, no GLTF, no addons).
- Use a `requestAnimationFrame` loop with **delta time**, capped at `dt <= 1/30` so a tab switch doesn't teleport the player. Target 60fps on a mid-range phone.
- Use the **WebGLRenderer** with `antialias` on desktop. Set `setPixelRatio(Math.min(devicePixelRatio, 2))`, and 1.5 on touch devices.
- Fill the window with the canvas and resize correctly. Portrait and landscape both work. Use `touch-action:none` on the canvas.
- **Performance:** reuse geometries and materials (create once, share). **Object-pool** obstacles, coins, power-ups and particles; never `new` inside the loop. Keep draw calls under ~150. Use one directional light with a small shadow map (1024, tight shadow camera following the player) plus a hemisphere light. Shadows are off when `matchMedia('(pointer:coarse)')` matches.
- Use fog to hide the spawn horizon.
- Save progress in localStorage under the key `morchaRush.v1`, as `{ best, totalCoins, unlocked:[...], selected }`. Wrap every read/write in try/catch, and the game must work if storage is blocked.
- Tolerate a missing WebGL context: show a friendly message instead of a blank page.

## 2. Tuning block (top of the script, clearly commented)

Put **all** gameplay numbers in one `CONFIG` object at the top with a comment on each, so difficulty is easy to tweak. Starting values:

```js
const CONFIG = {
  LANE_WIDTH: 2.2,          // world units between lane centers (3 lanes: -1, 0, 1)
  LANE_SWITCH_TIME: 0.12,   // seconds to slide between lanes
  START_SPEED: 14,          // world units / second at the start
  MAX_SPEED: 34,            // speed cap
  SPEED_RAMP: 0.25,         // speed added per second of play
  JUMP_VELOCITY: 11,        // initial upward velocity
  GRAVITY: 32,              // downward acceleration (fast-fall if down is pressed mid-air)
  SLIDE_TIME: 0.7,          // seconds the slide lasts
  SPAWN_AHEAD: 120,         // spawn distance in front of the player
  MIN_GAP: 14, MAX_GAP: 26, // spacing between obstacle rows (shrinks with speed)
  COIN_CHANCE: 0.6,         // chance a gap gets a coin trail
  POWERUP_CHANCE: 0.08,     // chance per row to spawn a power-up instead of a coin trail
  CONVOY_CHANCE: 0.07,      // chance per row of a VIP convoy (only after 300 m)
  STUMBLE_RECOVER: 6,       // seconds after a stumble before the Inspector drops back
  NEAR_MISS_DIST: 0.6,      // lateral distance counted as a near-miss
  COIN_VALUE: 1, COIN_SCORE: 10,
  POWERUP_TIME: { chai: 5, dhol: 6, press: 4 }, // seconds; thela lasts until it absorbs one crash
  CHAI_SPEED_MULT: 1.5,
  UNLOCK_COST: { guddu: 0, dadi: 500, dhol: 1000, intern: 2000 },
};
```

Never allow an impossible row: there must always be at least one passable lane (or a jumpable/slidable option) in each row, and the gap after a convoy warning must give the player enough time to react at the current speed.

## 3. World & camera

- **Road:** 3 lanes along −Z (the player stays near z=0 and the world scrolls toward +Z). Use warm grey asphalt, bold white dashed lane markers, and saffron/pink curbs. Scroll the road with **recycled segments** (or by offsetting a canvas-texture UV) so it never ends.
- **Sidewalks, both sides, recycled props:** chai stalls (counter, kettle with steam particles, striped awning), parked green-and-yellow **auto-rickshaws** (some do a little honk bounce with a "PEE-PEE!" text pop), red **DTC-style buses** (boxy, generic, no logos), lamp posts with **marigold garlands and bunting** strung across the road, crowds of simple cheering low-poly marchers (capsule bodies, googly eyes, waving), and **pigeons** that scatter upward with flapping wings when the player passes near.
- **Background parallax:** far skyline cards that move slower than the road. Include an **India Gate-style arch**, domes and minarets as flat silhouette planes in soft haze, warm late-afternoon sky gradient, a sun disc and drifting kites.
- **Confetti** falls lightly all the time (pooled).
- **Camera:** chase cam behind and above the player (≈ y 4.5, z +7.5, looking ~10 units ahead). It follows lane changes smoothly, dips slightly on slides, rises on jumps, and FOV kicks wider during Chai speed. **Screen shake** on a crash (decaying offset).

## 4. Characters (low-poly, built from primitives)

All characters share a rig of simple meshes: a big head (sphere), **googly eyes** (white spheres with black pupil spheres that jiggle using a little spring physics, lagging the head), body (capsule/rounded box), arms and legs (capsules) with a procedural **run cycle** (sin-wave swing), squash-and-stretch on jump/land, a tuck on jump and a lean back on slide. Toy proportions: head ≈ 1/3 of height.

| Character | Unlock | Look | Ability |
|---|---|---|---|
| **Guddu** (start) | free | Blue hoodie, plum joggers, pink sneakers, spiky black hair, **huge teal backpack**, placard on a stick reading **"HMMM 🤔"** (canvas texture) | None, all-rounder |
| **Dadi-ji** | 500 ₹ | Pink saree with yellow border, white bun, round glasses | **Chappal swat:** every 8s, auto-swats the next barricade in her lane, sending it spinning away with "THWACK!" |
| **Dhol Bro** | 1,000 ₹ | Pink turban, yellow kurta, moustache, orange dhol on chest | **Beat drop:** each jump landing sends a shockwave ring that clears pothole/barricade obstacles within 6 units ahead in his lane, with "DHAM!" |
| **Camera Intern** | 2,000 ₹ | Backwards orange cap, teal jacket, "PRESS" badge, DSLR | **Viral flash:** near-misses flash the screen white briefly and give +25 score with a "VIRAL!" pop |

**The Inspector (chaser):** grey safari suit, pink tie, flat cap, moustache, clipboard with fluttering paper sheets. Generic and fictional, no badges or insignia. He runs behind the player:
- Normally he's **off-screen behind** (z ≈ +9). After a stumble he **closes to just behind the player** (z ≈ +2.5), visible over the shoulder, shouting "OYE! FORM 27-B?!".
- If the player survives `STUMBLE_RECOVER` seconds without another hit, he drops back.
- A second hit while he's close is game over: he catches up, waves the clipboard, papers fly, and the "CAUGHT! Fill Form 27-B in triplicate" game-over card appears. No violence; it's a comedic "gotcha".

Character select on the start screen shows a slowly rotating 3D preview of each character. Locked ones are dimmed with their ₹ cost and an Unlock button, which deducts totalCoins.

## 5. Obstacles (comic, with canvas-texture signs)

| Obstacle | How to beat | Build |
|---|---|---|
| **Barricade** "ADJUSTING, PLEASE WAIT" | Jump or change lane | Saffron/white striped bars on legs, hanging sign |
| **Section 144** signboard | **Slide** under or change lane | Tall red-bordered white board on two poles, clear gap underneath |
| **Pothole** with "Work in Progress ✨" flag | Jump or change lane | Dark crater disc with cracked-edge ring, puddle, little pink pennant |
| **VIP Convoy** | Change lane | First the lane flashes an orange **"ROUTE DIVERTED"** warning on the road for ~1.2s, then a white boxy sedan with red/blue roof light zooms through and **blocks that lane** for ~2s. Can't be jumped |

Collision: use simple **per-lane AABB** checks against the player's box, which shrinks in height while sliding and is raised while jumping. Be forgiving: shrink obstacle boxes ~15%. Only test objects within ±3 units of the player's z.

On a hit (no shield): the player stumbles (wobble animation, stars circling the head, "OOF!" pop), gets ~1s of brief invulnerability, the screen shakes, and the Inspector closes in. A front-on hit with the convoy counts the same (no instant death), but clear the convoy so the player isn't stuck.

## 6. Collectibles & power-ups (with HUD timers)

- **₹ coins:** thick gold cylinders with an embossed ₹ (canvas texture on the cap), spinning and bobbing, arranged in lane trails and arcs over jumpable obstacles. On pickup: sparkle burst plus a floating **"+10"** (DOM or sprite).
- **☕ Cutting Chai:** speed × `CHAI_SPEED_MULT`, a steam-puff particle trail behind the player, FOV kick, and invulnerability to stumbles while active (it's a burst, not a trap).
- **🥁 Dhol Beat:** smash through **barricades** (they burst into confetti with "DISHOOM!"). Other obstacles still count.
- **📸 Press Pass:** full invincibility, the screen flashes white at the start, and the player blinks.
- **🛺 Jugaad Thela:** the player rides a **wobbly patched wooden cart** that hovers slightly and wobbles side to side. It absorbs **one** crash (the cart breaks apart into planks with "JUGAAD!"), then the player continues on foot.
- Power-ups float in glowing rings with the emoji on a sprite. The HUD shows each active power-up as an emoji with a **circular countdown ring**; the Thela shows a shield icon instead of a timer.

## 7. Juice

- **Comic SFX text pops** (sprites or DOM): DISHOOM!, OYE!, CHALO!, TADAA!, DHAM!, THWACK!, OOF!, VIRAL!, PEE-PEE!. Bold font, thick outline, random tilt, scale-pop then fade.
- **Particles (pooled):** coin sparkles, confetti bursts, marigold petals, dust puffs on landing, steam.
- Bouncy easing everywhere (overshoot on UI and on the character landing).
- **Optional tiny WebAudio blips** (oscillator only, no files): coin ding, jump boing, dhol thump on a Dhol Bro landing, crash honk. Include a mute toggle (🔊/🔇) saved in localStorage. Start audio only after the first user gesture.

## 8. Controls

- **Keyboard:** ←/→ or A/D change lane, ↑/W/Space-in-game jump, ↓/S slide (fast-fall if airborne). **Space** starts from the menu and restarts from game over. **P/Esc** pauses.
- **Touch:** swipe in 4 directions (threshold ~30px, decided by the dominant axis, one action per swipe), tap the Play/Restart buttons. Prevent page scroll and zoom during play.
- Input buffering: a lane-change pressed mid-switch queues one more.
- Pause automatically on `visibilitychange` (hidden).

## 9. UI (HTML overlay on top of the canvas, festive styling)

- **Start screen:** big title **"Morcha Rush"** (saffron/pink, chunky, slight wobble animation), tagline *"Run the march. Dodge the paperwork."*, a **Play** button, the character carousel with 3D preview and unlock buttons, best score, total coins, a mute toggle, and a controls hint for both desktop and mobile.
- **HUD:** distance in meters (top-left), ₹ coin count (top-right), active power-up timer rings (top-center), an **Inspector proximity meter** (small Inspector-head icon that slides closer when he's near), and a pause button.
- **Pause overlay:** Resume / Quit to menu.
- **Game-over screen:** "CAUGHT!" plus a funny one-liner picked randomly from a list (e.g. "Your application is under process.", "Please come back with 3 photocopies."), final distance, coins collected this run, **best distance** (with a "NEW BEST!" sticker if beaten), total coins, **Restart** and **Menu** buttons.
- Use rem/clamp sizing, readable at 360px wide, safe-area insets on phones.

## 10. Game state & restart

- State machine: `MENU → PLAYING ⇄ PAUSED → GAMEOVER → (PLAYING | MENU)`.
- **Restart must fully reset:** speed, distance, timers, power-ups, Inspector position, camera, the player's lane/height/state, and every pooled object returned to its pool. No duplicate listeners and no leftover intervals. Restarting 20 times in a row must not slow the game down or leak objects. Verify it.
- Score = distance in meters + coins × `COIN_SCORE` + near-miss bonuses. **Best** stores the best score (also show the best distance).

## 11. Tone guardrails (must follow)

- Every character is fictional and generic. No real politicians, parties, flags, religious symbols, police or military uniforms or insignia, and no real causes or slogans.
- No violence. Crashes are cartoon stumbles; getting "caught" is a paperwork gag.
- The humor targets bureaucracy, potholes, diversions and chaos. The crowd is cheering and celebrating.

## 12. Code quality

- One file, organized into clearly commented sections: `CONFIG`, setup, materials/geometries, model builders (one function per character/prop), world/recycling, spawner, player controller, Inspector, collisions, power-ups, particles/FX, UI, input, audio, state machine, main loop.
- Comment the "why" and every tuning point, so I can tweak difficulty, speed and spawn rates easily.
- No console errors or warnings during play.

## 13. Acceptance checklist (verify each before you finish)

1. Opens by double-clicking `index.html` in Chrome, Safari and Firefox, and on a phone (test at 375×812).
2. Holds 60fps on desktop (log the average frame time for 30s of play) with no stutters from garbage collection.
3. All controls work: lanes, jump, slide, fast-fall, swipes, Space start/restart, pause.
4. Every obstacle type spawns and is beatable the intended way. No impossible rows at max speed.
5. Stumble → Inspector closes in → recovery → he drops back. Second hit → game over.
6. All 4 power-ups work, with correct HUD timers. The Thela absorbs exactly one hit.
7. All 4 characters can be unlocked with coins, and each ability works.
8. Best score and unlocks persist across reloads, and the game still works with storage blocked.
9. 20 restarts in a row: no slowdown, no duplicate objects, no errors.
10. Resizing and rotating the phone keeps everything correctly framed.

Then deliver `index.html` and a 3-line summary of how to tweak difficulty.
