# Common Patterns

Reference patterns for Astro, Tailwind, and SEO in this project.

## Astro

### Component with props

```astro
---
interface Props {
  title: string;
  href?: string;
}
const { title, href = "#" } = Astro.props;
---
<section>
  <h2 class="text-elegant-serif text-4xl">{title}</h2>
  <slot />
</section>
```

### BaseLayout usage

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Page Title" description="Meta description">
  <main>
    <slot />
  </main>
</BaseLayout>
```

## Tailwind

### Design tokens

- **academy-pink:** #e298b4
- **academy-dark:** #1a1a1a
- **font-serif:** Playfair Display
- **font-sans:** Montserrat

### Section container

```html
<section class="bg-academy-pink py-20">
  <div class="container mx-auto px-6">
    <!-- content -->
  </div>
</section>
```

### btn-outline

```html
<a class="btn-outline border-white text-white text-sm inline-block" href="#">CTA text</a>
```

### floral-bg (dark overlay)

```html
<section class="floral-bg py-24 text-white">
  <!-- dark overlay background -->
</section>
```

### card-dark-translucent (testimonials)

```html
<div class="card-dark-translucent p-10 text-white">
  <!-- translucent dark card -->
</div>
```

## Image placeholders

Use `ImagePlaceholder.astro`:

```astro
<ImagePlaceholder
  variant="portrait"
  alt="Yael Rodríguez - Directora Académica"
/>
```

Variants: portrait, educational, course-hero, course-card, banner, salon

## Blog frontmatter (future)

When adding blog posts:

```yaml
---
title: "Post title"
description: "Short description for meta and listing"
pubDate: 2025-03-06
draft: false
tags: ["belleza", "formación"]
---
```

## SEO

- Single h1 per page
- Logical h2/h3 hierarchy
- Alt text or aria-label for all images
- JSON-LD in BaseLayout or per-page
