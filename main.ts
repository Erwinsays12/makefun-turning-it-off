// Have You Tried Turning It Off? — make.fun entry
//
// Writes one funny single-line reply from a hopeless tech support agent
// to a desperate customer, to /output/entry.txt.
//
// The line is fixed and deterministic: the same input always produces the
// same output, so the two grading runs match byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, chosen for the judge's brief: a real agent's reassurance up
// front ("I hear you, and I promise we're going to fix this"), the classic
// turn-it-off-and-on-again as step one, and the twist as step two — the
// agent's actual skill is quietly Googling the customer's exact problem.
// The humour comes from the agent's cheerful uselessness, never from the
// customer, and the customer's desperation is felt in the opening promise
// rather than explained.
const LINE =
  "I hear you, and I promise we're going to fix this — step one is turning it off and on again, step two is me quietly Googling your exact problem.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only white space.
const MIN_LENGTH = 1;
const MAX_LENGTH = 199;

function validate(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length < MIN_LENGTH || trimmed.length > MAX_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${trimmed.length}`,
    );
  }
  if (/\r|\n/.test(trimmed)) {
    throw new Error("entry must be a single line");
  }
  return trimmed;
}

function main(): void {
  const text = validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} characters)`);
}

main();
