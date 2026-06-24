# Project handoff / current state

Quick orientation for picking up work on another machine. (Public repo — no
confidential details here.)

## Live site & infrastructure
- **Live:** https://vegalinks.ai (apex is primary; `www` 301-redirects to it).
- **Host:** GitHub Pages, repo `vegalinks-ai/vegalinks_web`, served via GitHub Actions.
- **Custom domain:** configured in repo Settings → Pages. `public/CNAME` = `vegalinks.ai`.
- **HTTPS:** Let's Encrypt cert issued; **Enforce HTTPS is ON**.
- **DNS (at GoDaddy):** apex `A` → GitHub Pages IPs (185.199.108–111.153);
  `www` `CNAME` → `vegalinks-ai.github.io`. Microsoft 365 email records (MX/SPF/
  DMARC/autodiscover) are present and must be left intact.

## Develop & deploy
```bash
git clone https://github.com/vegalinks-ai/vegalinks_web.git
cd vegalinks_web
npm install
npm run dev      # http://localhost:4321/
npm run build    # static output to ./dist
```
Deploy is automatic: **push to `main`** → GitHub Actions builds and publishes to
Pages. No manual step. (Astro static site; `astro.config.mjs` has `site:
'https://vegalinks.ai'`, `base: '/'`.)

## Open items (decisions pending)
1. **Contact form** — the Contact page currently has a form wired to a Formspree
   endpoint, but it's being reconsidered (delivery wasn't smooth). Options on the
   table: (a) drop the form, use clean direct-email cards; (b) switch to a
   different form backend; (c) self-hosted form if/when moving to PHP hosting.
   **On hold** pending a decision. No urgency.
2. **Email routing for `info@` / `careers@`** — decide where these should land
   (mailbox forwarding in the Microsoft 365 admin center, or via a form backend).
   Not yet configured.
3. **Hosting question (open):** whether to keep GitHub Pages (current — free,
   auto-deploy, free HTTPS) or move the static build to GoDaddy cPanel hosting.
   No technical need to move for a static site; revisit if consolidating.
4. **CI maintenance (optional):** the deploy workflow uses GitHub Actions still on
   Node 20, which GitHub is deprecating. Bump `actions/checkout`,
   `actions/setup-node`, `actions/upload-artifact` (and confirm `withastro/action`)
   to current versions when convenient.

## Content guardrails (stealth)
Public copy reveals **no technical IP** — no architecture/mechanism details, no
product codenames, no performance/loss figures. Keep new copy to: the high-level
domain (high-speed interconnect for AI datacenters), beyond-200G + 0–50m
positioning, market macro, team pedigree, and contact. Re-check any new copy
against this before pushing.
