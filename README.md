# Out-of-office vs calendar

[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/maezageryan-del/out-of-office-vs-calendar/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/maezageryan-del/out-of-office-vs-calendar/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

One short joke about office life, for the [make.fun](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c) bounty **"The Funniest Office Joke, Judged Head to Head"**.

## The joke

> My out-of-office says I'm on holiday. My calendar says I'm in three meetings. One of them is lying, and it's the one that pays me.

130 characters, one line, nothing else. Two office artefacts contradict each
other — the out-of-office and the calendar — and the punchline is which one
is lying: the one that pays. Setup, turn, punchline last.

## How it works

`main.ts` (Node 22, standard library only) writes that exact line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no
randomness — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
