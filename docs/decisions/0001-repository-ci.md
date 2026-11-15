# 0001. Each repository keeps a copy of the CI scripts, with Core as their source

Status: accepted, 2026-11-15, with the scaffolding of the organization (step 2 of the rebuild plan).

## Context

Every `rules-for-robots-<domain>` repository has the same layout and needs the same CI: find the plugins a change touches, check each one's structure and that it is self-contained, run its tests, validate it with Claude Code, and release one plugin at a time as `<plugin>--v<version>`. The scripts that do this are about 300 lines of Node with no dependencies, in `.github/scripts/`, called from `.github/workflows/ci.yml` and `release.yml`.

There are two ways to share them:

1. Core publishes reusable workflows that check out Core's scripts, and each domain repository calls them with `uses: RulesForRobots/rules-for-robots-core/.github/workflows/...@<ref>`.
2. Each repository keeps an identical copy, and Core's copy is the source.

## Decision

A copy in each repository, for now. Core's is the source; a change is made here first and then copied to each domain repository in its own pull request.

- A called workflow has no reliable way to check out the scripts at its own ref, so the scripts and the workflow could drift unless every caller also passes the ref.
- Until Core has its first release there is no tag to pin to; calling `@main` would let a change in Core break CI in every domain repository at once, with nothing to roll back to.
- A copy works the day the repository is created, before any other repository merges, and a maintainer can read their CI without leaving their repository.

## Consequences

- Copies can drift. Until something checks them, the reviewer of a change to `.github/scripts/`, `ci.yml`, or `release.yml` checks that it was made in Core first.
- Revisit when Core makes its first release (step 6 of the rebuild plan): reusable workflows called by tag, the way adopters call `rfr-process`, may then be the better choice, and this record is replaced by the one that says so.
