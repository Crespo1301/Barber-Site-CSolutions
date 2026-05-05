# CLAUDE.md

Repo role: mockup or proposal repo and reusable sales template candidate.

## Business Context

- Treat this repo as a lead-generation asset, not a core maintained client property by default.
- Shared workflow rules live in `/home/cresp3/Portfolio/AI-WORKFLOW.md`.

## Claude Role Here

- Use Claude for premium concepting, service-business positioning, and sales-facing polish.
- Let Codex handle implementation if this repo is selected for reuse, refinement, or handoff.

## Working Notes

- Copy is already centralized in `src/data/site.js`.
- This repo is a good seed for the future lead mockup kit.

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm run stitch:init
npm run stitch:doctor
npm run stitch:proxy
```

## Shared AI Tooling

- Follow `AI-WORKFLOW.md` for the shared CSolutions AI stack.
- Use repo-local `.claude/skills/` for `code-review-graph`, `Impeccable`, `ui-ux-pro-max`, and `mattpocock/skills` workflows.
- Use repo-local `.codex/skills/` and `.agents/skills/` when Codex or agent-side work needs the same design or review system.
- Use `.mcp.json` with `code-review-graph` after running `code-review-graph build --repo /home/cresp3/Barber-Site-CSolutions` so exploration and reviews stay token-efficient.
- Use OpenSpec for larger changes that benefit from proposal, spec, and task artifacts.

If Claude reports that the `build-graph` skill cannot find MCP tools:

1. confirm `.mcp.json` exists in the repo root
2. confirm it points to `/home/cresp3/.local/bin/code-review-graph`
3. rerun `code-review-graph build --repo /home/cresp3/Barber-Site-CSolutions`
4. restart the Claude session in this repo if needed so it reloads the MCP server
