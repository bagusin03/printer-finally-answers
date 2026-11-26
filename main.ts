// The Printer Finally Answers — make.fun entry.
// One original line, in the office printer's own voice: weary, literal,
// faintly passive-aggressive, with the flat logic of a machine that has
// counted every sheet it ever fed. Written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "ERROR 51: you fed me a stapled report, thumped me for one jam in 41,203 pages, and call me the unreliable one.";

// Guard the sealed gate ourselves: one line, 1-240 characters, not blank,
// no stray whitespace at either end. Fail loudly instead of ever writing
// an entry the scorer would reject.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (
  chars < 1 ||
  chars > 240 ||
  !LINE.trim() ||
  LINE !== LINE.trim() ||
  LINE.includes("\n")
) {
  throw new Error(`entry fails gate: ${chars} chars, ${bytes} bytes`);
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, LINE, "utf8");

// Verify the written file round-trips exactly, byte for byte.
const back = fs.readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
console.log(`wrote ${chars} chars (${bytes} bytes) to ${outPath}`);
