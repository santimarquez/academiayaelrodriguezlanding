# Project Structure

Last updated: 2025-03-06

## Overview

Static landing page for Yael Rodríguez Beauty & Business Academy. Astro + Tailwind. Spanish-only. Blog-ready via Content Collections.

## Repository Layout

```
academiayaelrodriguezlanding/
├── src/
│   ├── components/       # Section components (Hero, Philosophy, Courses, etc.)
│   ├── content/          # Content Collections (blog-ready)
│   │   ├── config.ts     # Blog collection schema (Zod)
│   │   └── blog/         # Future .md/.mdx posts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/               # Static assets, favicon, robots.txt
├── ai/                   # AI context, docs, skills, agents, prompts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── .cursorrules
├── CURSOR.md
└── CURSOR_QUICK_START.md
```

## Section Mapping

| Section | Component | Location |
|---------|-----------|----------|
| Hero | HeroSection.astro | src/components/ |
| Philosophy | PhilosophySection.astro | src/components/ |
| Differentiation | DifferentiationSection.astro | src/components/ |
| Method pillars | (part of Differentiation) | |
| Courses | CoursesSection.astro | src/components/ |
| Testimonials | TestimonialsSection.astro | src/components/ |
| CTA Decision | CTADecisionSection.astro | src/components/ |
| Academic Team | AcademicTeamSection.astro | src/components/ |
| Contact | ContactSection.astro | src/components/ |
| Salon Footer | SalonFooterSection.astro | src/components/ |

## Future Blog Structure (Not Implemented)

When blog is added:
- **List:** `src/pages/blog/index.astro` – uses `getCollection('blog')`
- **Single:** `src/pages/blog/[...slug].astro` – uses `getEntry()` and `render()`
- **Posts:** `src/content/blog/*.md` or `.mdx` with frontmatter (title, description, pubDate, draft, tags)

## Conventions

- Components: PascalCase; colocate by section
- Layouts: BaseLayout for meta, fonts, global styles
- Content: blog collection schema in config.ts; posts in blog/
- Images: ImagePlaceholder.astro until real images provided
