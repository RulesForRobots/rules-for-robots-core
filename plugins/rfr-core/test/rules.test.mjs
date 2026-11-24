import assert from 'node:assert/strict';
import { existsSync, readdirSync } from 'node:fs';
import { test } from 'node:test';

const dir = new URL('../rules/', import.meta.url);
const rules = existsSync(dir)
  ? readdirSync(dir).filter((file) => file.endsWith('.md') && !file.endsWith('.evidence.md'))
  : [];

test('each rule has its evidence file beside it', () => {
  for (const rule of rules) {
    const evidence = rule.replace(/\.md$/, '.evidence.md');
    assert.ok(existsSync(new URL(evidence, dir)), `${rule} has no ${evidence}`);
  }
});
