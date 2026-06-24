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

## NEXT TASK — auto-deploy pipeline to GoDaddy (decided, not yet built)
Plan: keep **GitHub as the source of truth** and add a GitHub Actions workflow
that builds the Astro site and **FTP-uploads `dist/` to GoDaddy cPanel
`public_html`** on every push to `main` — so GoDaddy gets push-to-publish too (no
manual re-zip/upload).

To build it we need:
- Confirm the GoDaddy product is **Web Hosting / cPanel** (has File Manager +
  `public_html`), NOT Website Builder. A PHP/static host is required.
- GoDaddy **FTP/SFTP credentials** added as GitHub repo **secrets** (e.g.
  `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`) — added by the owner in repo
  Settings → Secrets and variables → Actions. Never commit these.
- A new workflow file (e.g. `.github/workflows/deploy-godaddy.yml`) using an
  FTP-deploy action (e.g. `SamKirkland/FTP-Deploy-Action`) pointing `server-dir`
  at `public_html/`.
- Decide whether GoDaddy *replaces* GitHub Pages (repoint apex `A` record from
  GitHub IPs to the GoDaddy hosting IP) or runs alongside it as a mirror.

A one-time manual export bundle already exists locally (regenerable any time):
`vegalinks_godaddy_export.zip` — built from `dist/` with GitHub-only files removed
and an Apache `.htaccess` added (custom 404, force HTTPS, www→apex). The auto-deploy
pipeline replaces the need to make this by hand.

## Other open items
1. **Contact form** — Contact page currently has a form wired to a Formspree
   endpoint, but it's being reconsidered (delivery wasn't smooth). Options: (a)
   drop the form, use clean direct-email cards; (b) different form backend; (c)
   self-hosted PHP form if on GoDaddy hosting. **On hold.**
2. **Email routing for `info@` / `careers@`** — decide where these land (M365
   admin forwarding, or via a form backend). Not yet configured.
3. **Repo privacy** — repo is currently **public**. Making it private would
   disable GitHub Pages on the free plan (needs GitHub Pro, $4/mo). The site
   content is public anyway; private would only hide source/history/notes. Moot if
   hosting moves fully to GoDaddy.
4. **CI maintenance (optional):** the existing Pages workflow uses GitHub Actions
   on Node 20 (being deprecated). Bump `actions/checkout`, `actions/setup-node`,
   `actions/upload-artifact` (and confirm `withastro/action`) when convenient.

## Content guardrails (stealth)
Public copy reveals **no technical IP** — no architecture/mechanism details, no
product codenames, no performance/loss figures. Keep new copy to: the high-level
domain (high-speed interconnect for AI datacenters), beyond-200G + 0–50m
positioning, market macro, team pedigree, and contact. Re-check any new copy
against this before pushing.
