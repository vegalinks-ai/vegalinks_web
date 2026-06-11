import { defineConfig } from 'astro/config';

// Project page served at https://vegalinks-karthik.github.io/vegalinks_web/
export default defineConfig({
  site: 'https://vegalinks-karthik.github.io',
  base: '/vegalinks_web',
  output: 'static',
  trailingSlash: 'ignore',
});
