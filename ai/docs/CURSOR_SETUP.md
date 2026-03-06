# Cursor Setup – Academia Yael Rodríguez Landing

This repo is set up for AI-driven development with Cursor.

## What's configured

- **.cursorrules** – Project rules: Astro, Tailwind, design tokens, SEO, file locations
- **CURSOR.md** – High-level context and site structure
- **CURSOR_QUICK_START.md** – Example prompts and workflows
- **ai/** – Context, docs, skills, agents, prompts

## How Cursor uses it

1. **.cursorrules** is loaded automatically – follow it for stack, design, conventions
2. **CURSOR.md** gives quick context – structure, sections, run commands
3. **ai/context/** – PROJECT_STRUCTURE, COMMON_PATTERNS, RECENT_CHANGES, TECH_STACK, CODING_STANDARDS

## Suggested workflows

- **New section:** Check PROJECT_STRUCTURE and COMMON_PATTERNS; create component in src/components/, use in index.astro
- **Design:** Use academy-pink, academy-dark; fonts Playfair Display, Montserrat
- **Images:** Use ImagePlaceholder.astro until real images; always provide descriptive alt/aria-label
- **After changes:** Update RECENT_CHANGES.md

## Quick prompts

- "Add JSON-LD for LocalBusiness"
- "Implement the Philosophy section with floral-bg"
- "Replace image URLs with ImagePlaceholder components"
