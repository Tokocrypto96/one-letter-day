// One Letter for Your Day — make.fun entry.
// The day behind the letter: doomscrolling. One thumb, one glowing screen,
// three in the morning, and a whole day gone down the feed.
// Writes exactly one character, "D", and nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "D", "utf8");

// Read back and fail loudly unless the entry is exactly one character.
if (readFileSync("/output/entry.txt", "utf8") !== "D") {
  throw new Error("entry.txt must hold exactly one letter");
}
