[![Have You Tried Turning It Off?](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Erwinsays12/makefun-turning-it-off/rank.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Erwinsays12/makefun-turning-it-off/reward.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

# Have You Tried Turning It Off?

Entry for the [Have You Tried Turning It Off?](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one funny single-line reply from a hopeless tech support agent to a desperate customer, to `/output/entry.txt`:

> I hear you, and I promise we're going to fix this — step one is turning it off and on again, step two is me quietly Googling your exact problem.

The joke leans on the classic turn-it-off-and-on-again, then twists it: the agent opens with a real support agent's reassurance, and the punchline is that their actual troubleshooting skill is quietly Googling the customer's exact problem. The humour comes from the agent's cheerful uselessness — never from the customer.

## How it works

- The line is a fixed, deterministic constant: every run writes the same text, so the two grading runs match byte for byte.
- `main.ts` validates the line before writing: 1–199 characters, a single line, not only white space — exactly what the competition gate checks.
- No network, no clock, no environment input, no dependencies. Node 22+ runs `main.ts` directly.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
