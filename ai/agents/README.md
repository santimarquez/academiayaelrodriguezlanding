# AI Agents

Optional specialized workflows for this repo (e.g. SEO checks, documentation).

## Purpose

Agents define multi-step workflows Cursor can follow, such as:
- SEO: validate meta, schema, sitemap, alt text
- Documentation: ensure RECENT_CHANGES and ai/docs are updated

## Usage

When agent files exist, invoke in Cursor chat, e.g.:
- "Run the SEO agent to check the landing page"
- "Use the documentation agent for this change"

## Adding agents

1. Create `ai/agents/<name>-agent.md`
2. Include: purpose, triggers, steps, examples
3. List the agent in this README

## Reference

- Main AI guide: `ai/README.md`
- Context: `ai/context/`
