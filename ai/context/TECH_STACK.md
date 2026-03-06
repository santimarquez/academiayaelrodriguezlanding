# Tech Stack

Reference for Academia Yael Rodríguez landing page.

## Core

| Technology | Purpose | Notes |
|------------|---------|-------|
| **Astro** | Static site, components | SSG, Content Collections for blog |
| **TailwindCSS** | Styling | academy-pink, academy-dark tokens |
| **TypeScript** | Typing (optional) | Strict where used |

## Content Collections

- **Blog:** `src/content/config.ts` defines `blog` collection
- **Schema:** title, description, pubDate, draft, tags (Zod)
- **Future:** Add @astrojs/mdx for MDX posts

## Fonts

- **Playfair Display** – serif, headings
- **Montserrat** – sans-serif, body
- Loaded via Google Fonts (preconnect + display=swap)

## DevOps

- **Docker:** Dockerfile for production build
- **docker-compose:** Local preview with nginx
- **Config:** SITE_URL in .env for canonical/OG

## SEO & Quality

- Meta tags, canonical, Open Graph, Twitter cards
- JSON-LD: Organization, LocalBusiness, EducationalOrganization, Review
- Sitemap (@astrojs/sitemap), robots.txt
- Semantic HTML, WCAG AA basics
