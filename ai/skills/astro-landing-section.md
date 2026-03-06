# Astro Landing Section Pattern

Use when adding a new section to the landing page.

## Purpose

Create a consistent, accessible, SEO-friendly section component that fits the academy design system.

## Inputs

- Section title (h2 or h3)
- Optional: variant (pink-bg | floral-bg | dark)
- Slot content

## Pattern

```astro
---
interface Props {
  title: string;
  variant?: "pink" | "floral" | "pink-border";
}
const { title, variant = "pink" } = Astro.props;

const bgClass = {
  pink: "bg-academy-pink",
  floral: "floral-bg",
  "pink-border": "bg-academy-pink border-t border-black/10",
}[variant];

const textClass = variant === "floral" ? "text-white" : "text-academy-dark";
---
<section class={`${bgClass} py-20`} data-purpose="section-name">
  <div class="container mx-auto px-6">
    <h2 class={`text-elegant-serif text-4xl mb-8 ${textClass}`}>{title}</h2>
    <hr class={variant === "floral" ? "border-white/30" : "border-black/20"} />
    <slot />
  </div>
</section>
```

## Conventions

- Use `data-purpose` for section identification
- Container: `container mx-auto px-6`
- Spacing: `py-20` or `py-24` for sections
- Heading: `text-elegant-serif text-4xl`
- Preserve heading hierarchy (single h1 on page, then h2, h3)
