const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.QA_URL || "http://127.0.0.1:8766/";
const out =
  process.env.QA_OUTPUT || path.resolve(__dirname, "../../design-review/after");
fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await b.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const p = await context.newPage(),
    errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  async function width(label) {
    const d = await p.evaluate(() => ({
      w: innerWidth,
      sw: document.documentElement.scrollWidth,
    }));
    assert(d.sw <= d.w + 1, label + JSON.stringify(d));
  }
  async function images() {
    await p.evaluate(async () => {
      for (const img of document.images) img.loading = "eager";
      await Promise.all(
        [...document.images].map((i) => i.decode().catch(() => {})),
      );
    });
  }
  for (const route of ["", "concepts.html"]) {
    await p.goto(base + route, { waitUntil: "networkidle" });
    await p.evaluate(() => document.fonts.ready);
    if ((await p.locator("html").getAttribute("lang")) !== "en")
      await p.locator("#langToggle").click();
    for (const locale of ["en", "ar"]) {
      if (locale === "ar") await p.locator("#langToggle").click();
      assert.equal(
        await p.locator("html").getAttribute("dir"),
        locale === "ar" ? "rtl" : "ltr",
      );
      for (const w of [1440, 1024, 768, 390, 320]) {
        await p.setViewportSize({ width: w, height: 1000 });
        await images();
        await width(`${route} ${locale} ${w}`);
        if ([1440, 768, 390].includes(w)) {
          await p.screenshot({
            path: path.join(
              out,
              `${route ? "gallery" : "home"}-${locale}-${w}.png`,
            ),
            fullPage: true,
          });
          console.log(
            route || "home",
            locale,
            w,
            await p.evaluate(() => document.documentElement.scrollHeight),
          );
        }
      }
    }
    assert.equal(await p.locator("h1").count(), 1);
    assert.equal(await p.locator("#connected").count(), 0);
  }
  await p.setViewportSize({ width: 1440, height: 1000 });
  await p.locator("#langToggle").click();
  await p.locator('[data-gallery-filter="systems"]').click();
  assert.equal(await p.locator(".concept-card").count(), 2);
  await p.locator('[data-gallery-filter="all"]').click();
  assert.equal(await p.locator(".concept-card").count(), 5);
  for (const id of ["dining", "academy", "retail", "property", "crm"]) {
    await p.locator(`.concept-card-caption [data-demo="${id}"]`).click();
    assert(await p.locator("#demo-dialog").isVisible());
    await width("dialog " + id);
    if (id === "dining") {
      await p.locator("#reservation-demo button").click();
      assert(
        (await p.locator("#reservation-result").innerText()).includes(
          "No booking was sent",
        ),
      );
    }
    if (id === "academy") {
      await p.locator('[data-action="enroll"]').click();
      assert(
        (await p.locator("#demo-content").innerText()).includes(
          "Demo applicant",
        ),
      );
    }
    if (id === "retail") {
      await p.locator('[data-action="add-cart"]').click();
      assert((await p.locator("#cart-result").innerText()).includes("1"));
    }
    if (id === "property") {
      await p.locator('[data-filter="Abdoun"]').click();
      assert.equal(await p.locator(".listing:visible").count(), 1);
    }
    if (id === "crm") {
      await p.locator('[data-action="move-lead"]').click();
      assert(await p.locator('[data-action="move-lead"]').isDisabled());
    }
    await p.keyboard.press("Escape");
    assert(!(await p.locator("#demo-dialog").isVisible()));
  }
  await p.goto(base, { waitUntil: "networkidle" });
  assert.equal(await p.locator(".case-story").count(), 2);
  await p.locator(".expertise-item").nth(3).locator("summary").click();
  assert(
    (await p.locator(".expertise-item").nth(3).getAttribute("open")) !== null,
  );
  await p.locator('[name="name"]').fill("QA Visitor");
  await p.locator('[name="email"]').fill("qa@example.com");
  await p.locator('[name="company"]').fill("Fictional QA Company");
  await p.locator("#project-budget").selectOption("1000-3000");
  await p.locator('[name="message"]').fill("A bilingual website project.");
  await p.locator("#project-form button").click();
  const mail = await p.locator("#mail-draft").getAttribute("href");
  assert(mail.startsWith("mailto:hello@ratqai.com?"));
  assert(decodeURIComponent(mail).includes("JOD 1,000–3,000"));
  assert(decodeURIComponent(mail).includes("\n"));
  assert(
    (await p.locator("#form-status").innerText()).includes(
      "Nothing has been sent",
    ),
  );
  await p.setViewportSize({ width: 390, height: 844 });
  await p.locator("#menu-toggle").click();
  assert.equal(
    await p.locator("#menu-toggle").getAttribute("aria-expanded"),
    "true",
  );
  await p.locator('#navigation a[href="./#work"]').click();
  assert.equal(
    await p.locator("#menu-toggle").getAttribute("aria-expanded"),
    "false",
  );
  await p.locator("#langToggle").click();
  await p.locator('.round-link[data-demo="dining"]').click();
  await p.locator("#reservation-demo button").click();
  assert(
    (await p.locator("#reservation-result").innerText()).includes("لم يُرسل"),
  );
  await width("Arabic mobile dialog");
  await p.screenshot({ path: path.join(out, "ar-mobile-dialog.png") });
  await p.keyboard.press("Escape");
  await p.reload();
  assert.equal(await p.locator("html").getAttribute("lang"), "ar");
  const rm = await p
    .locator(".hero-line > span")
    .first()
    .evaluate((e) => ({
      transform: getComputedStyle(e).transform,
      animation: getComputedStyle(e).animationName,
    }));
  assert.equal(rm.transform, "none");
  assert.equal(rm.animation, "none");
  await p.setViewportSize({ width: 1440, height: 1000 });
  await p.locator("#langToggle").click();
  await p.evaluate(() => scrollTo(0, 0));
  await p.screenshot({ path: path.join(out, "hero-desktop.png") });
  await p.locator("#dining-preview").scrollIntoViewIfNeeded();
  await p.screenshot({ path: path.join(out, "dining-desktop.png") });
  await p.locator("#academy-preview").scrollIntoViewIfNeeded();
  await p.screenshot({ path: path.join(out, "academy-desktop.png") });
  assert.deepEqual(errors, []);
  const broken = await p.evaluate(() =>
    [...document.images]
      .filter((i) => i.complete && i.naturalWidth === 0)
      .map((i) => i.src),
  );
  assert.deepEqual(broken, []);
  console.log(
    "PASS: both routes, 20 language/viewport combinations, 5 concepts, gallery filtering, expertise accordion, inquiry/budget email draft, keyboard dialogs, mobile menu and reduced motion.",
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
