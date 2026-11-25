// Make the AI Judge Laugh — make.fun bounty entry.
// The program writes one line to /output/entry.txt: a single joke about
// office life, under 200 characters. The open-plan office was sold to us
// as a collaboration machine; the only thing it reliably produces is
// people wearing headphones to escape each other.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Our open-plan office 'encourages collaboration'. It encourages headphones.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace, on a single line: refuse to write anything that would fail it.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === "" ||
  LINE.includes("\n")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
