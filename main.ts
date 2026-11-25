// The Funniest Office Joke, Judged Head to Head
// One short joke about office life, written to /output/entry.txt.
//
// The joke: "My out-of-office says I'm on holiday. My calendar says I'm in
// three meetings. One of them is lying, and it's the one that pays me."
// 130 characters, one line, UTF-8, ASCII only. Deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My out-of-office says I'm on holiday. My calendar says I'm in three meetings. One of them is lying, and it's the one that pays me.";

// The sealed gate requires 1-200 characters, one line, not only whitespace.
// Guard kept tight: 130 chars, no newline, no trailing space.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`line must be one line of 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
