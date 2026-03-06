/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "academy-pink": "#e298b4",
        "academy-dark": "#1a1a1a",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
