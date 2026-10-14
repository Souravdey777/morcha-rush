// node tools/test-tear-lines.mjs: checks the teary-screen line picker in tear-lines.js.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';

const win = {};
vm.runInNewContext(readFileSync(new URL('../tear-lines.js', import.meta.url), 'utf8'), { window: win });
const { TEAR_LINES: L, makeTearPicker } = win;
const memStore = () => { let s = null; return { load: () => s && JSON.parse(s), save: v => { s = JSON.stringify(v); } }; };

// 1. No repeats within one bag cycle, for every pool (r forces the pool: <0.7 runner, <0.95 shared).
for (const id of ['guddu', 'dadi', 'dhol', 'intern', 'cocky']) {
  const p = makeTearPicker(L, memStore());
  for (let cycle = 0; cycle < 20; cycle++) {
    const seen = L[id].map(() => p.pick(id, 0.1));
    assert.equal(new Set(seen).size, L[id].length, `${id}: repeated a line within one bag`);
  }
}
const ps = makeTearPicker(L, memStore());
assert.equal(new Set(L.shared.map(() => ps.pick('guddu', 0.8))).size, L.shared.length, 'shared: repeated a line within one bag');

// 2. The bag carries over to a new picker on the same store (i.e. across runs / page loads).
const store = memStore(), a = makeTearPicker(L, store), firstHalf = [a.pick('dhol', 0.1), a.pick('dhol', 0.1)];
const b = makeTearPicker(L, store), rest = L.dhol.slice(2).map(() => b.pick('dhol', 0.1));
assert.equal(new Set([...firstHalf, ...rest]).size, L.dhol.length, 'bag state did not persist');

// 3. Never the same line twice in a row, across pools, including the one-line daroga pool.
const q = makeTearPicker(L, memStore());
let prev = null;
for (let i = 0; i < 20000; i++) {
  const line = q.pick(['guddu', 'dadi', 'dhol', 'intern', 'cocky'][i % 5], i % 7 === 0 ? 0.97 : Math.random());
  assert.notEqual(line, prev, `same line twice in a row: ${line}`); prev = line;
}

// 4. Unknown runner id or broken stored state still works.
assert.ok(makeTearPicker(L, memStore()).pick('nobody', 0.1));
assert.ok(makeTearPicker(L, { load: () => ({ bags: { guddu: [99, 'x'] }, last: 5 }), save() {} }).pick('guddu', 0.1));
console.log('tear-lines: all checks passed');
