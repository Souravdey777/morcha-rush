# Morcha Rush: 3D models

23 game-ready GLB files built from the `concepts/` art. All textures are 1024 px WebP (`EXT_texture_webp`), which three.js r124+ loads with a plain `GLTFLoader`, with no Draco or Meshopt decoder needed.

## Characters (rigged + run cycle)

| File | Tris | Size | Notes |
|---|---|---|---|
| `guddu.glb` | 15.6k | 1.4 MB | Starter. Placard was not carried over. |
| `dadi-ji.glb` | 15.5k | 1.2 MB | Chappal in left hand. Saree stretches slightly at full stride. |
| `dhol-bro.glb` | 18.9k | 1.2 MB | Drum is a separate mesh `Dhol`, parented to bone `Spine01` (rebuilt in code; the generated one was lost). No drumsticks. |
| `camera-intern.glb` | 15.6k | 1.3 MB | DSLR held up while running. |
| `inspector.glb` | 14.4k | 0.8 MB | Chaser, now a cartoon **police inspector**: khaki uniform, beret, whistle, handcuffs. The uniform is generic, with no real emblem. Clip `Armature|Run_02|baselayer`, 0.73 s jog. Meshy's filter rejected the cop design, so he was built with Tripo multiview, turned to face +Z, and then rigged. Rotating before rigging fixed an earlier version whose legs kicked sideways. |
| `cocky.glb` | 14.2k | 1.0 MB | **New runner.** A cockroach in Gen Z clothes: bucket hat, lilac crop hoodie, cargos with a chain, platform sneakers, earbuds, tote bag and phone. RunFast clip. The phone sometimes drifts off his hand mid-stride; hide it if that bothers you. Scale him to about 0.3 for the scuttling easter-egg version. |

- Skeleton: `Hips → Spine02 → Spine01 → Spine → neck → Head`, plus shoulders/arms/hands and legs/feet/toes (Mixamo-like names without the prefix).
- One clip each: `Armature|RunFast|baselayer` (0.5 s) for the runners (including Cocky), and `Armature|Run_02|baselayer` (0.73 s) for the Inspector. All loop cleanly.
- They face **+Z**, with their feet at **y = 0**, and are about 1.0–1.16 units tall in the run pose.

```js
const gltf = await new GLTFLoader().loadAsync('models/guddu.glb');
const runner = gltf.scene;
const mixer = new THREE.AnimationMixer(runner);
mixer.clipAction(gltf.animations[0]).play();
// per frame: mixer.update(delta * (runSpeed / baseSpeed));
runner.traverse(o => { if (o.isMesh) o.castShadow = true; });
```

## Obstacles (static, pivot at base centre)

| File | Tris | Gameplay | Notes |
|---|---|---|---|
| `obstacle-barricade.glb` | 9.9k | jump | **Rebuilt in code to match real Delhi Police steel barricades**: square-tube frame banded yellow and black, a hazard-striped sheet panel carrying the "ADJUSTING, PLEASE WAIT" plate, vertical bars, splayed side feet with rubber pads, and red reflectors. Line several up for a protest wall. |
| `obstacle-section-144.glb` | 4.7k | slide under | The text is an overlay mesh on both faces (`SignTextFront`/`SignTextBack`), because the generated texture was garbled. The board faces ±X, so rotate it 90° on Y to face the runner. |
| `obstacle-pothole.glb` | 5.7k | jump | Sink about 0.1 so the road disc sits flush. |
| `obstacle-vip-convoy.glb` | 7.2k | lane blocker | Amber beacon only, with no police lights. "ROUTE DIVERTED" banner. |

## Power-ups and collectible (static, pivot at base centre)

| File | Tris | Notes |
|---|---|---|
| `powerup-cutting-chai.glb` | 4.9k | Add the glow ring in-engine (emissive torus). |
| `powerup-dhol-beat.glb` | 4.7k | |
| `powerup-press-pass.glb` | 4.9k | |
| `powerup-jugaad-thela.glb` | 5.4k | Add the hover glow in-engine. |
| `coin.glb` | 2.1k | Built in code: gold disc with ₹ on both faces. Faces +Z, so spin it on Y. Good for `InstancedMesh`. |

Props are normalised to about 1 unit on their longest side. Scale them to your lane width (e.g. `prop.scale.setScalar(laneWidth * 0.9)`).


## Street life (static, pivot at base centre)

| File | Tris | Use |
|---|---|---|
| `pedestrian-shopper.glb` | 5.8k | Pavement walker. Translate it, and add a ~2 cm bob at 2 Hz. |
| `pedestrian-office-goer.glb` | 5.9k | Pavement walker, same trick. |
| `street-dog.glb` | 4.7k | Crossing hazard: slide it across a lane with a hop bob. |
| `street-bus.glb` | 6.7k | Generic red bus. Use as traffic or a long lane blocker. |
| `street-auto-rickshaw.glb` | 5.4k | Parked along the kerb or weaving through lanes. |
| `street-chai-stall.glb` | 7.4k | Sidewalk dressing. |
| `street-lamp-garland.glb` | 5.0k | Repeat every few road segments. |
| `street-marigold-planter.glb` | 3.7k | Scatter generously; good for `InstancedMesh`. |

These are posed, not rigged, so animate their movement in code. Rigging the two pedestrians costs 8 credits each through `3d_rigging` with a walk clip (id 30). The dog is not a biped, so a humanoid rig won't work on it.

## How they were made

- **Characters:** Higgsfield `multi_image_to_3d` (Meshy) using the four views from each turnaround sheet, with textures, auto-rigging and the RunFast clip (id 16), at 15k polys.
- **Props:** Each one was regenerated as a single isolated image (GPT Image 2.5, using the prop sheet as reference; the VIP car was changed to an amber beacon), then converted with Tripo H3.1 at a 3–8k face limit.
- **Post-processing in three.js / gltf-transform:**
  - the Dhol Bro drum
  - the Section 144 text overlay
  - the procedural coin
  - WebP texture compression
  - base pivots

The Higgsfield job IDs are listed in `job-ids.txt`.
