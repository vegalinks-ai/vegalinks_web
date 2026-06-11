# Vega Links — website

Marketing site for Vega Links, built with [Astro](https://astro.build) and deployed to GitHub Pages
via GitHub Actions.

**Live:** https://vegalinks-ai.github.io/vegalinks_web/

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/vegalinks_web
```

Other commands:

```bash
npm run build    # static output to ./dist
npm run preview  # serve the production build locally
```

## Structure

```
src/
  layouts/Base.astro        shared <head>, nav, footer, meta
  components/               Nav, Footer, Hero, Waveform, StatCard, RoleCard, PageHeader
  pages/                    index, mission, market, approach, team, careers, contact, 404
  styles/global.css         design system (dark theme)
public/                     logo/favicon/og-image, .nojekyll, robots.txt
```

## Editing content

All copy lives in the `src/pages/*.astro` files. Contact emails (`info@vegalinks.ai`,
`careers@vegalinks.ai`) appear in `src/components/Footer.astro`, `src/pages/contact.astro`,
`src/pages/careers.astro`, and `src/components/RoleCard.astro` — update them there.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. In the repo, **Settings → Pages → Build and deployment → Source** must be set to
**GitHub Actions** (configured once).

### Custom domain

To serve from a custom domain, add a `CNAME` file to `public/` containing the domain, point DNS at
GitHub Pages, and update `site`/`base` in `astro.config.mjs` (a root domain uses `base: '/'`).
