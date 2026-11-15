# Roadmap

Open work in this repository only. Work across repositories, and the order of the steps, is in the [front door's roadmap](https://github.com/RulesForRobots/rules-for-robots/blob/main/ROADMAP.md). Steps are those of the [rebuild plan](https://github.com/lifelike-and-believable/rules-for-robots/blob/main/docs/rebuild-plan.md), section 8.

## Step 3: Core, rules only

- `rfr-core` from `plugins/core` in the archive: the guards that refuse destructive commands, shell writes to protected files, and MCP actions outside declared services; `setup` (from `install-rules`), which writes the rules of every installed rfr plugin into `.claude/rules/rfr/` and a marked block in `AGENTS.md`; WA-001 to WA-006, WA-012, SEC-001, SEC-003, and DOC-001, each with its evidence beside it; `decisions` and `write-adr`; the `check-runner` and `citation-checker` agents.
- Fix found on 2026-11-15: the MCP guard refused `add_repo` (Claude Code's own session tools). Those tools change the session, not an outside service, and should not be refused.
- `rfr-feedback`, filing on the repository of the plugin concerned.
- Try it on a throwaway repository, then on one real project at "rules only".

## Step 4: Core, full process

- `rfr-process`, domain-neutral, from `plugins/process`, `checks/ci/process-*`, and `deliver-on-merge`: process state at session start, the GitHub gate, the delivery run and its stop check, the decisions file, `deliver` and `revise`, and the reusable process workflow. It reads stage definitions from installed domain plugins; `rfr-engineering` is the first to declare them.
- A whole-system stage that any domain can declare: one approved document for the outer shape of the whole project, between the stories and the first feature's design, refined as each feature comes into focus. Found on XR Studio In A Box, where layer 1's design went straight to implementation with no pass on the shape of the whole system or the order of the slices that build it. The engine needs four things from it:
  - It is gated like a design and comes before any feature's design in stage order.
  - Each feature's design cites the section of it that the feature fills in, and goes stale when that section changes.
  - The process state at session start shows its slice order and where the project stands in it.
  - A change to it is a revision through `revise`.
  It holds boundaries and order, never how a part works inside, so it adds no coupling between parts. Check it against the archive's foundations (`docs/specs/revisions-and-foundations.md`, 26c): foundations cover documents several features share, such as the data model and roles, but not the shape of the whole or the slice order, so this may be a kind of foundation rather than a new mechanism. `rfr-engineering` declares it for software (its roadmap, step 4); Creation's version would be the whole sequence blocked out before any one shot is refined.
- The decisions of the held 8.0.0 release (archive pull request #272) carry into `rfr-process` 1.0.0.
- The scoped hosting access spec (archive pull request #274) moves here as a spec in `docs/specs/`.
- `tools/`: the eval harness, session replay, and attention report.
- From this step on, rfr develops itself through its own full process (decision D7): this repository's specs become approved packets, and the gate applies to them.
- Try the gate on a throwaway repository first.

## Later

- Revisit [ADR 0001](docs/decisions/0001-repository-ci.md) at the first release: reusable workflows called by tag may replace the copied CI scripts.
