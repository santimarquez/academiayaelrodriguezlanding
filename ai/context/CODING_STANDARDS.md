# Coding Standards

Quick reference for this repository.

## General

- **Indentation:** 2 spaces
- **Naming:** camelCase (variables, functions), PascalCase (components), kebab-case for filenames
- **Language:** Spanish for all user-facing copy

## Astro

- Use `.astro` components; prefer static rendering
- Define `interface Props` for components with props
- Colocate in `src/components/` by section
- Use slot for layout wrappers

## Tailwind

- Utility-first; use design tokens (academy-pink, academy-dark)
- Prefer responsive utilities (md:, lg:)
- Avoid arbitrary values unless necessary

## Accessibility & SEO

- Semantic HTML (header, main, section, footer)
- Single h1 per page; logical h2/h3 hierarchy
- Alt text or aria-label for all images (including placeholders)
- Meta tags, canonical, Open Graph, JSON-LD
- lang="es" on html

## File locations

- Components: `src/components/`
- Layouts: `src/layouts/`
- Pages: `src/pages/`
- Content: `src/content/`
- Styles: `src/styles/`
- Static: `public/`
