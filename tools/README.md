# Tools

For rfr's maintainers, not for adopters: nothing here is installed with a plugin.

Coming with steps 3 and 4 of the rebuild plan, carried over from the archived repository with their tests:

| Tool | What it does | From |
|---|---|---|
| Eval harness | Runs the cases in each repository's `evals/` against agents and records the results beside the rules | `evals/` |
| Session replay | Replays the commands of real sessions through the guards, to check a guard change does not misfire. Run it before releasing a guard change | `evals/session-replay/replay-commands.mjs` |
| Attention report | Summarises what agents attended to in a run | `evals/` |

None yet.
