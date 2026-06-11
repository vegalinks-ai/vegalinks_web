import { defineConfig } from 'astro/config';

// Served at the custom apex domain https://vegalinks.ai/ (GitHub Pages)
export default defineConfig({
  site: 'https://vegalinks.ai',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
});
