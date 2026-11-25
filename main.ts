// Your Week in One Line — entry for make.fun bounty
// u-boge-your-week-in-one-line-d1c14ced
// Writes a single line (1-100 chars) summing up the entrant's week
// to $MAKEFUN_OUTPUT_DIR/entry.txt (or ./out/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Lost a race to a blue tick, won a staring contest with a gas fee, shipped 190 entries anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
