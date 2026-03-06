# Academia Yael Rodríguez Landing

Landing page for Yael Rodríguez Beauty & Business Academy. Static site built with Astro + Tailwind.

## Tech Stack

- **Astro** – static site generator
- **TailwindCSS** – styling (academy-pink, academy-dark)
- **Content Collections** – blog-ready (not implemented)

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview  # preview production build
```

## Docker

```bash
docker compose build
docker compose up  # http://localhost:8080
```

## Environment

Copy `.env.example` to `.env` and set `SITE_URL` for production (canonical, Open Graph, sitemap).

## Project Structure

- `src/components/` – section components (Hero, Philosophy, Courses, etc.)
- `src/content/blog/` – future blog posts (Content Collections)
- `src/layouts/BaseLayout.astro` – meta, SEO, fonts
- `public/` – static assets, favicon, robots.txt

## Images

Currently uses colored placeholders. Replace `ImagePlaceholder` usage with real images when provided.
