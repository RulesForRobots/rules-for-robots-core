# Roadmap

Open work in this repository only. Work across repositories, and the order of the steps, is in the [front door's roadmap](https://github.com/RulesForRobots/rules-for-robots/blob/main/ROADMAP.md). Steps are those of the [rebuild plan](https://github.com/lifelike-and-believable/rules-for-robots/blob/main/docs/rebuild-plan.md), section 8.

## Step 3: Core, rules only

- `rfr-core` from `plugins/core` in the archive: the guards that refuse destructive commands, shell writes to protected files, and MCP actions outside declared services; `setup` (from `install-rules`), which writes the rules of every installed rfr plugin into `.claude/rules/rfr/` and a marked block in `AGENTS.md`; WA-001 to WA-006, WA-012, SEC-001, SEC-003, and DOC-001, each with its evidence beside it; `decisions` and `write-adr`; the `check-runner` and `citation-checker` agents.
- Fix found on 2026-11-15: the MCP guard refused `add_repo` (Claude Code's own session tools). Those tools change the session, not an outside service, and should not be refused.
- `rfr-feedback`, filing on the repository of the plugin concerned.
- Try it on a throwaway repository, then on one real project at "rules only".

## Step 4: Core, full process

- `rfr-process`, domain-neutral, from `plugins/process`, `checks/ci/process-*`, and `deliver-on-merge`: process state at session start, the GitHub gate, the delivery run and its stop check, the decisions file, `deliver` and `revise`, and the reusable process workflow. It reads stage definitions from installed domain plugins; `rfr-engineering` is the first to declare them.
- The decisions of the held 8.0.0 release (archive pull request #272) carry into `rfr-process` 1.0.0.
- The scoped hosting access spec (archive pull request #274) moves here as a spec in `docs/specs/`.
- `tools/`: the eval harness, session replay, and attention report.
- From this step on, rfr develops itself through its own full process (decision D7): this repository's specs become approved packets, and the gate applies to them.
- Try the gate on a throwaway repository first.

## Later

- Revisit [ADR 0001](docs/decisions/0001-repository-ci.md) at the first release: reusable workflows called by tag may replace the copied CI scripts.
