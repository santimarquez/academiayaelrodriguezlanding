import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import compressor from "astro-compressor";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://academia-yaelrodriguez.es",
  output: "static",
  adapter: node({ mode: "standalone" }),
  security: { checkOrigin: false },
  devToolbar: { enabled: false },
  integrations: [tailwind(), mdx(), sitemap(), compressor()],
});
