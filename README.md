# RatqAI V2 — design rescue, revision two

Static HTML/CSS/JavaScript on `feature/ratqai-v2-phase-one`, for PR #1 only. **Do not merge or deploy to production without owner approval.**

## Run and validate

Run `python -m http.server 8766 --bind 127.0.0.1`, then open http://127.0.0.1:8766/ and http://127.0.0.1:8766/concepts.html. There is no install, backend, database or build step.

- `node tests/check.cjs`: syntax, translation coverage, SEO, anchor and asset checks.
- `node tests/browser.cjs`: Playwright browser checks. Point `PLAYWRIGHT_PACKAGE` at an installed Playwright module if needed and `CHROME_PATH` at Chrome. Optional `QA_URL` and `QA_OUTPUT` choose the target and screenshot folder. These are development tools, never loaded by the site.
- `node tests/motion.cjs`: finite native video playback, removed reel/control, reduced motion and data saver checks (same Playwright configuration).
- `git diff --check`: whitespace review.

## Editorial structure

The homepage is deliberately curated: the requested engineering-led hero, a six-service expertise accordion, two leading concept case studies, Why RatqAI, Discover/Design/Develop/Launch, and a project inquiry form. The separate `concepts.html` collection organizes all five concepts with filters and full-size interactive dialogs.

The visual direction preserves midnight navy `#101a25`, champagne `#d8bd90`, the original favicon, and the existing lowercase wordmark. A silent cinematic programming film anchors the hero, as a brief entrance, with no reel or pause button. Product typography is larger, layouts share a consistent frame and caption system, and photography is locally optimized WebP. Headline entrances, scroll reveals, restrained photography parallax and hover treatments respect reduced motion without scroll-jacking.

## Concepts and contact behavior

All sample brands, data, prices and statistics are fictional. They are not delivered client work or claimed results.

- **Saffron House:** restaurant, menu and reservation simulation; nothing booked or sent.
- **Noura Academy:** a sample pending application can be added; active-student totals stay unchanged.
- **Forma:** session shopping bag and inventory overview; no checkout, payment or orders are placed.
- **Darna Properties:** fictional Amman residences with location filters and an inquiry simulation. Photos do not show actual Jordan listings.
- **Folio:** a sample lead can move to In discussion; no notifications are sent.

The real project form collects name, email, required mobile number, optional business, project type, description and optional budget. It posts URL-encoded data directly to Netlify Forms, with a honeypot, native field validation, pending/success/failure states, duplicate-submit protection and a 15-second timeout. Failed attempts retain entered details. Success indicates server acceptance, not confirmed inbox delivery. Netlify form detection is enabled, and submission email notifications are configured to `hello@ratqai.com` in the existing project settings. Email is `hello@ratqai.com`, Instagram is `@ratqai`. No WhatsApp contact is present.

English and Arabic share complete navigation, form and sample-interface translations with RTL composition. Language preference alone is persisted locally. Concept state lives only in page memory. Brand names and SKU identifiers retain their own direction.

## Assets and branding limitation

The official full logo image asset is **not present** in the repository or newly supplied brief. The existing wordmark is retained without inventing a new logo. The owner should supply the exact official SVG/PNG before final branding approval.

Illustrative photos are from Unsplash, optimized locally: dining `photo-1414235077428-338989a2e8c0`; neutral knitwear `photo-1434389677669-e08b4cac3105`; residence `photo-1600596542815-ffad4c1539a9`; interior `photo-1600210492486-724fe5c67fb0`. They do not represent the fictional businesses. Google Fonts Manrope, DM Sans and Tajawal have system fallbacks. No runtime image CDN or animation library is required.

## Review evidence and deployment boundary

See [the design audit](docs/DESIGN-AUDIT.md) and [annotated comparison](docs/design-review.jpg). Full desktop/tablet/mobile captures in EN/AR are supplied as a separate local review artifact rather than shipping large screenshot collections with the website.

Browser QA covers both pages at 1440, 1024, 768, 390 and 320px in both languages, five interactive concepts, gallery filters, the expertise accordion, inquiry submission payload, mobile navigation, native dialogs/Escape, language persistence and reduced motion. Page-level axe-core WCAG A/AA checks were run for both pages in English and Arabic. These checks do not constitute aesthetic approval or replace real-device and assistive-technology review.

SEO metadata, canonical homepage URL, robots, sitemap, Organization structured data, contact details, and existing Netlify configuration are preserved. The concept gallery has its own canonical path. Connected Business remains absent. Existing Netlify preview login protection was not changed; unauthenticated hosted browser validation is limited by that gate. All design captures used the exact source served locally. Production remains unchanged.

## Cinematic media

The silent hero clip is illustrative stock footage, not footage of the RatqAI team: [Mixkit — Skilled programmer working in front of a computer](https://mixkit.co/free-stock-video/skilled-programmer-working-in-front-of-a-computer-41651/), supplied under the Mixkit Free License. It is locally encoded as a roughly 595 KB MP4. Posters are local WebP. The separate concept reel and its assets have been removed at the owner’s request.

The hero runs once for less than five seconds, then holds still. It also pauses offscreen. There is no persistent loop or pause button. Reduced-motion and data-saver preferences start with a static poster and no hero video request. No new runtime dependency was introduced.

## Expertise and inquiry review

Each service has a local, lazy-loaded illustrative picture: four screenshots of the fictional concept interfaces and two original workflow/integration diagrams. The sample screenshots contain illustrative English interfaces; their surrounding copy and image alternatives are translated into Arabic. Concept entry buttons and the collection link have larger targets, high contrast and stronger weight.

Netlify Forms documentation: https://docs.netlify.com/manage/forms/setup/ and https://docs.netlify.com/manage/forms/notifications/ . A real preview submission must be checked in the Netlify Forms dashboard; mailbox receipt must be confirmed by the owner. Site-wide form detection and notification configuration do not publish the V2 homepage to production. No DNS, mailbox or production deployment settings were changed.
