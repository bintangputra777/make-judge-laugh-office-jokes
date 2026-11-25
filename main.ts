// Make the AI Judge Laugh: Office Jokes — a make.fun entry.
//
// Writes one office joke (a single line, under 200 characters) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
//
// The joke: the boss's "we're a family here" line meets its logical end —
// if we're family, where's the inheritance? The punchline lands on the
// shared office truth behind the slogan: unpaid overtime.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss said 'we're a family here,' so I asked for my inheritance — apparently family only means unpaid overtime.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf-8");
