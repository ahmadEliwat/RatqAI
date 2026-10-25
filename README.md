# RatqAI V2 — cinematic design reset

This is the static HTML/CSS/JavaScript implementation on `feature/ratqai-v2-phase-one`, for PR #1 and its Netlify Deploy Preview only. Do not merge or publish to production without the owner's approval.

## Local preview

From this checkout run `python -m http.server 8766 --bind 127.0.0.1`, then visit http://127.0.0.1:8766/. No installation, backend, database, or build step is needed. Run `node --check script.js` for syntax validation.

## Experience

- Midnight navy and champagne hero with product-based art direction, entry motion and progressive scroll reveals.
- Saffron House: fictional restaurant/menu and reservation simulation.
- Noura: academy workspace; add one sample enrollment to its application list.
- Forma: fictional storefront and stock overview; add items to the session bag.
- Darna: two fictional Amman properties with location filters and inquiry simulation.
- Folio: a fictional professional-services CRM; move a sample lead to In discussion.
- Six service disciplines, four-step approach, project-email preparation, direct email and Instagram.
- All marketing copy, forms, menus and demo content support English and Arabic with RTL. Brand names and model identifiers remain unchanged. Language preference alone persists locally; inquiry details and demo state are not stored or transmitted.

Every product, price, name and metric in the examples is illustrative. These are not client projects, delivered results, real listings, or testimonials. No reservation, payment, registration or CRM message is submitted. Preparing a real project inquiry creates a mailto draft; the visitor explicitly opens their email app to review and send it.

## Branding and assets

The original favicon.svg, brand colors, and existing lowercase text wordmark are retained. The repository does not contain an owner-supplied full official logo asset. Replace the text wordmark only when the owner supplies and approves that asset; no replacement logo was invented.

Illustrative photographs: Unsplash CDN images, stored locally for reliable previews. They do not depict the fictional businesses or actual properties in Jordan. Source IDs: dining `photo-1414235077428-338989a2e8c0`, retail `photo-1483985988355-763728e1935b`, campus `photo-1523240795612-9a054b0db644`, residence `photo-1600596542815-ffad4c1539a9`, interior `photo-1600210492486-724fe5c67fb0`. Replace with approved client photography for any real client use. Fonts: Google Fonts Manrope, DM Sans and Tajawal, with local fallback fonts.

## Compatibility and QA

The canonical https://ratqai.com/, Organization schema, metadata, robots.txt, sitemap.xml, favicon and production hostname redirects are retained. Preview hosts are not matched by production redirects. Email remains hello@ratqai.com and Instagram remains @ratqai. No WhatsApp contact was added. Connected Business and its obsolete styles/translations/scripts are removed entirely.

Native dialogs handle keyboard focus containment and Escape. Form controls have visible labels, status feedback is announced, and controls provide focus states. Reduced motion disables entry animations, scrolling transitions and mockup transforms. Layouts adapt to desktop, tablet and mobile; navigation has a mobile toggle.

## Verification commands

- `node tests/check.cjs`: dependency-free syntax, translation coverage, anchor, SEO, asset and contact checks.
- `node tests/browser.cjs`: browser smoke suite, using an available Playwright installation. Set `PLAYWRIGHT_PACKAGE` to its absolute module path if it is not on Node's module path, `CHROME_PATH` to your browser executable, and optionally `QA_URL` / `QA_OUTPUT`. No browser code is loaded by the website.
- `git diff --check`: whitespace review.

Verified in isolated Chrome at 1440, 1024, 768, 390 and 320 pixels, in both languages. Automated axe-core WCAG A/AA audits were run in English and Arabic. Manual visual review covered the hero, academy, full-page desktop/mobile captures and Arabic reservation dialog. This does not replace assistive-technology or real-device testing before production approval.
