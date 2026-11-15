# rfr-core

The plugin every Rules for Robots project installs: guards that refuse what must never happen, the `setup` skill that writes the rules of every installed rfr plugin into a project, the working-agreement rules, and the agents and skills every domain uses.

**Status:** empty. It exists so that CI and the release workflow have a plugin to run on. Step 3 of the [rebuild plan](https://github.com/lifelike-and-believable/rules-for-robots/blob/main/docs/rebuild-plan.md) fills it, carrying over from `plugins/core` in the archived repository.

## Install

Not listed in the `rfr` marketplace until its first release. Then:

```
/plugin install rfr-core --marketplace RulesForRobots/rules-for-robots
```

## Layout

Everything the plugin needs at run time is inside this folder.

| Folder | Holds |
|---|---|
| `.claude-plugin/plugin.json` | The manifest. Raise `version` whenever the contents change, or installed copies will not update |
| `rules/` | Rule files, each with its evidence beside it |
| `agents/`, `skills/`, `hooks/`, `scripts/` | What Claude Code loads, and the scripts they run |
| `test/` | This plugin's tests, run by CI when the plugin changes |
