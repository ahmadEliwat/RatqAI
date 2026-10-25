const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.QA_URL || "http://127.0.0.1:8766/";
const out = process.env.QA_OUTPUT || path.resolve(__dirname, "../../v2-qa");
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const errors = [];
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const p = await context.newPage();
  p.on("pageerror", (e) => errors.push(e.message));
  await p.goto(base, { waitUntil: "networkidle" });
  await p.emulateMedia({ reducedMotion: "reduce" });
  await p.evaluate(() => document.fonts.ready);
  assert.equal(await p.locator("h1").count(), 1);
  assert.equal(await p.locator("#connected").count(), 0);
  assert.equal(
    await p.locator("link[rel=canonical]").getAttribute("href"),
    "https://ratqai.com/",
  );
  const assertWidth = async (label) => {
    const d = await p.evaluate(() => ({
      w: innerWidth,
      sw: document.documentElement.scrollWidth,
    }));
    assert(d.sw <= d.w + 1, `${label} overflow: ${JSON.stringify(d)}`);
  };
  for (const lang of ["en", "ar"]) {
    if (lang === "ar") await p.locator("#langToggle").click();
    assert.equal(
      await p.locator("html").getAttribute("dir"),
      lang === "ar" ? "rtl" : "ltr",
    );
    for (const width of [1440, 1024, 768, 390, 320]) {
      await p.setViewportSize({ width, height: 1000 });
      await assertWidth(lang + " " + width);
      const missing = await p.evaluate(
        () =>
          [...document.querySelectorAll("input,select,textarea")].filter(
            (e) =>
              !e.closest("label") &&
              !e.labels?.length &&
              !e.getAttribute("aria-label"),
          ).length,
      );
      assert.equal(missing, 0);
      if (width === 1440 || width === 390) {
        await p.screenshot({
          path: path.join(out, `${lang}-${width}.png`),
          fullPage: true,
        });
      }
    }
  }
  await p.setViewportSize({ width: 1440, height: 1000 });
  await p.locator("#langToggle").click();
  assert.equal(await p.locator("html").getAttribute("lang"), "en");
  await p.locator('[data-demo="dining"]').first().click();
  assert(await p.locator("#demo-dialog").isVisible());
  await p.locator("#reservation-demo button").click();
  assert(
    (await p.locator("#reservation-result").innerText()).includes(
      "No booking was sent",
    ),
  );
  await p.keyboard.press("Escape");
  assert(!(await p.locator("#demo-dialog").isVisible()));
  await p.locator('[data-demo="academy"]').click();
  await p.locator('[data-action="enroll"]').click();
  assert((await p.locator("#demo-content").innerText()).includes("249"));
  await p.keyboard.press("Escape");
  await p.locator('[data-demo="retail"]').first().click();
  await p.locator('[data-action="add-cart"]').click();
  assert((await p.locator("#cart-result").innerText()).includes("1"));
  await p.keyboard.press("Escape");
  await p.locator('[data-demo="property"]').click();
  await p.locator('[data-filter="Abdoun"]').click();
  assert.equal(await p.locator(".listing:visible").count(), 1);
  await p.keyboard.press("Escape");
  await p.locator('[data-demo="crm"]').click();
  await p.locator('[data-action="move-lead"]').click();
  assert(await p.locator('[data-action="move-lead"]').isDisabled());
  await p.keyboard.press("Escape");
  await p.locator('[name="name"]').fill("QA Visitor");
  await p.locator('[name="email"]').fill("qa@example.com");
  await p.locator('[name="message"]').fill("A sample website inquiry.");
  await p.locator("#project-form button").click();
  const mail = await p.locator("#mail-draft").getAttribute("href");
  assert(mail.startsWith("mailto:hello@ratqai.com?"));
  assert(decodeURIComponent(mail).includes("QA Visitor"));
  assert(decodeURIComponent(mail).includes("\n"));
  assert.equal(await p.locator("#mail-draft").isVisible(), true);
  await p.setViewportSize({ width: 390, height: 844 });
  await p.locator("#menu-toggle").click();
  assert.equal(
    await p.locator("#menu-toggle").getAttribute("aria-expanded"),
    "true",
  );
  await p.locator('#navigation a[href="#work"]').click();
  assert.equal(
    await p.locator("#menu-toggle").getAttribute("aria-expanded"),
    "false",
  );
  await p.locator("#langToggle").click();
  await p.locator('[data-demo="dining"]').first().click();
  await assertWidth("Arabic mobile modal");
  await p.locator("#reservation-demo button").click();
  assert(
    (await p.locator("#reservation-result").innerText()).includes("لم يُرسل"),
  );
  await p.screenshot({ path: path.join(out, "ar-mobile-modal.png") });
  await p.keyboard.press("Escape");
  await p.locator('[data-demo="academy"]').click();
  await assertWidth("Arabic academy mobile modal");
  await p.keyboard.press("Escape");
  await p.locator("#langToggle").click();
  await p.reload();
  assert.equal(await p.locator("html").getAttribute("lang"), "en");
  const reduced = await p
    .locator(".stage-browser")
    .evaluate((e) => ({
      animation: getComputedStyle(e).animationName,
      transform: getComputedStyle(e).transform,
    }));
  assert.equal(reduced.animation, "none");
  assert.equal(reduced.transform, "none");
  await p.setViewportSize({ width: 1440, height: 1000 });
  await p.locator("#home").scrollIntoViewIfNeeded();
  await p.screenshot({ path: path.join(out, "hero-desktop.png") });
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
    "PASS: 10 responsive/language combinations, five interactive concepts, email draft, mobile navigation, dialog Escape, locale persistence, reduced motion, images and browser errors.",
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
