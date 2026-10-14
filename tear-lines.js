// Teary-screen lines + picker. A classic script (not a module or JSON fetch) so index.html also works from file://.
// Pools are keyed by character id (CHARS in index.html), plus `shared` and the rare `daroga`.
window.TEAR_LINES = {
  guddu: [
    "Thinking about the paper you studied two years for. Leaked… again.",
    "Thinking about results day. Aura: −1000.",
    "Thinking about the re-exam. Delulu is the solulu.",
    "Thinking about the rishtedaar who asked 'beta, result kab aayega?'",
    "Thinking about 400 pages of coaching notes. All soggy now.",
  ],
  dadi: [
    "Thinking about your 11-hour screen time. Dadi's not mad, just disappointed.",
    "Thinking about shaadi? Dadi has a list. And a biodata.",
    "Thinking about 1972, when Dadi was a baddie. Tears of nostalgia.",
    "Thinking about the situationship that couldn't survive one dinner with Dadi.",
    "Thinking about your ex? Dadi isn't. Her tears are for onion prices.",
  ],
  dhol: [
    "Thinking about the ex who left you on read. Turn it into a verse.",
    "Thinking about emotional damage. Mic check, one, two.",
    "Thinking about your last breakup. This beat goes harder.",
    "Thinking about her. Crying in 4/4 time.",
    "Thinking about the girl who never replied to your 16 bars.",
  ],
  intern: [
    "Thinking about the shot you just ruined. Lens fogged. Content still posted.",
    "Thinking about your main character moment. The algorithm didn't push it.",
    "Thinking about why your ex just liked your story from 2023. Red flag 🚩.",
    "Thinking about your GRWM to cry at the morcha. Waterproof kajal only.",
    "Thinking about low battery, no storage, blurry footage.",
  ],
  cocky: [
    "Thinking about nothing. Antennae down. Unbothered, moisturised, lightly onion-scented.",
    "Thinking about the 'we need to talk' text. The one thing cockroaches can't survive.",
    "Thinking about being chronically online and emotionally offline.",
    "Thinking about touching grass? Bro, I live in the drain.",
    "Thinking about the system. Rent free in its head. Not paying, not leaving.",
  ],
  shared: [
    "Thinking about 'seen at 2:14 am'. No reply.",
    "Thinking about 'let's circle back'. Ick unlocked.",
    "Thinking about crying in public. Aura −500. Recalibrating…",
    "Thinking about Mom, who thinks you 'just stepped out for chai'.",
    "Thinking about your moye moye moment.",
    "Thinking about how cooked you are. Lightly. Medium rare.",
    "Thinking about onion prices. Not crying, just budgeting.",
    "Thinking about onions at ₹120/kg. At least the tears are free.",
  ],
  daroga: [
    "Thinking about rona-dhona? Form 26-A pehle.",
  ],
};

// pick(charId): runner's pool 70%, shared 25%, daroga 5%. Each pool is a shuffle-bag (no repeats until it has all
// been shown), and the same line never shows twice in a row, even across pools. `store` = { load(), save(state) }.
window.makeTearPicker = function (lines, store) {
  const st = store.load() || {}, bags = st.bags || {};
  let last = st.last || null;
  const shuffled = n => { const a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const usable = k => Array.isArray(bags[k]) && bags[k].length && bags[k].every(i => Number.isInteger(i) && i >= 0 && i < lines[k].length);
  function draw(k) {
    if (!usable(k)) bags[k] = shuffled(lines[k].length);
    const b = bags[k], n = b.length - 1;
    if (lines[k][b[n]] === last) {            // would repeat the previous line
      if (!n) return null;                    // a one-line pool: let the caller try another pool
      [b[n], b[n - 1]] = [b[n - 1], b[n]];    // show it later in this bag instead
    }
    return lines[k][b.pop()];
  }
  return {
    pick(charId, r = Math.random()) {
      const order = r < 0.7 ? [charId, 'shared'] : r < 0.95 ? ['shared', charId] : ['daroga', 'shared', charId];
      for (const k of order) {
        if (!lines[k] || !lines[k].length) continue;
        const line = draw(k);
        if (line) { last = line; store.save({ bags, last }); return line; }
      }
      return last;
    },
  };
};
