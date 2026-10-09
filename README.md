# RatqAI — website starter

A responsive, single-page, static marketing website. English / Arabic language switcher, no database, no account system, no backend. All copy can be edited in `index.html` and `script.js`.

## Run locally
Double-click `index.html` or run a local server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Before publishing — IMPORTANT
1. Open `script.js` and replace the two empty entries at the top in `CONTACT` with your **real business email** and your **WhatsApp number including country code, digits only**. Until then, the links are purposely disabled rather than linking to someone else's contact details.
2. Review all wording to make sure it accurately represents services you can deliver. The site intentionally contains no fabricated testimonials, results, or client logos.
3. Check trademark/name/domain availability before making `RatqAI` your public brand.
4. Replace the placeholder brand name throughout if you select a different name.
5. Add a privacy notice before collecting leads through any future embedded form or analytics.

## Deploy
For **Cloudflare Pages**, create a Pages project and upload the files in this directory, or connect a Git repository with a static deployment (no build command; output directory `/`). Other static hosts work too.

Fonts are loaded from Google Fonts and require network access. The site falls back to system fonts without them.
