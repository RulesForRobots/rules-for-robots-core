<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/RulesForRobots/.github/raw/main/brand/lockups/core-dark.svg">
  <img src="https://github.com/RulesForRobots/.github/raw/main/brand/lockups/core-light.svg" alt="Rules for Robots Core" height="64">
</picture>

# Rules for Robots Core

The domain-neutral part of Rules for Robots: the plugins every project installs, the process engine every domain uses, and the tools rfr's maintainers use to test it.

Rules for Robots lets one person direct agents through a whole project by approving decisions, never commands. Start at the front door, [RulesForRobots/rules-for-robots](https://github.com/RulesForRobots/rules-for-robots), for the charter, which plugins to install, and the `rfr` marketplace. This repository is where the Core plugins are made; you install them from the marketplace, not from here.


## Plugins

| Plugin | For | Status |
|---|---|---|
| `rfr-core` | Every project. Guards that refuse what must never happen, `setup`, which writes the rules of every installed rfr plugin into a project, the working-agreement rules, `decisions` and `write-adr`, the `check-runner` and `citation-checker` agents. | Empty; step 3 |
| `rfr-process` | The full process. The domain-neutral engine: process state at session start, the GitHub gate, the delivery run and its stop check, `deliver` and `revise`, the reusable process workflow. It reads stage definitions from installed domain plugins. | Step 4 |
| `rfr-feedback` | Optional. `report-feedback`, filing on the repository of the plugin concerned. | Step 3 or 4 |

Open work is in [ROADMAP.md](ROADMAP.md).

## Working on this repository

Node 22 or later; there is nothing to install.

```
npm run verify
```

[AGENTS.md](AGENTS.md) has the layout and conventions, for people and agents alike. Contributing and security reports follow the organization's defaults in [RulesForRobots/.github](https://github.com/RulesForRobots/.github).

## Licence

[MIT](LICENSE).
