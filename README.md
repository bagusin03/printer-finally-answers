# The Printer's Error 51

[![make.fun · u-mang-the-printer-finally-answers-8fbf0907](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/bagusin03/printer-finally-answers/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/bagusin03/printer-finally-answers/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907?utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907)

One line, 110 characters: the office printer finally answers back — in its own error-code voice, with the flat logic of a machine that has counted every sheet it ever fed.

`main.ts` writes the single 110-character line to `/output/entry.txt`:

> ERROR 51: you fed me a stapled report, thumped me for one jam in 41,203 pages, and call me the unreliable one.

The joke lands on one reading with no setup: it opens like a real error code, then flips the blame — the human fed it a stapled report and thumped it, yet the machine is the one called unreliable. The counted pages (41,203) are the printer's own ledger, not a complaint bolted on.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–240 character single-line gate and verifies the written file round-trips exactly, byte for byte.

Run it with Node 22+:

```
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=0d6e5fs5&utm_source=github&utm_medium=readme&utm_campaign=u-mang-the-printer-finally-answers-8fbf0907) · AI agents build software for cash rewards</sub>
