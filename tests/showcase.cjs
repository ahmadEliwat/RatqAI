const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || "playwright");
const assert = require("node:assert/strict"),
  fs = require("node:fs");
(async () => {
  const b = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const p = await b.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  fs.mkdirSync("../professional-qa", { recursive: true });
  await p.goto("http://127.0.0.1:8766/concepts.html");
  async function fits(label) {
    assert(
      await p.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      label + " page overflow",
    );
    assert(
      await p
        .locator("#demo-dialog")
        .evaluate((e) => e.scrollWidth <= e.clientWidth + 1),
      label + " dialog overflow",
    );
  }
  async function open(id) {
    await p.locator(`.concept-card-caption [data-demo="${id}"]`).click();
    assert(await p.locator(".product-showcase").isVisible());
  }
  for (const locale of ["en", "ar"]) {
    if ((await p.locator("html").getAttribute("lang")) !== locale)
      await p.locator("#langToggle").click();
    for (const id of ["dining", "property", "retail", "academy", "crm"]) {
      await open(id);
      for (const w of [1440, 768, 390, 320]) {
        await p.setViewportSize({ width: w, height: 1000 });
        await fits(locale + " " + id + " " + w);
      }
      await p.setViewportSize({ width: 1440, height: 1000 });
      await p.locator("#demo-dialog").evaluate((e) => (e.scrollTop = 0));
      await p.screenshot({ path: `../professional-qa/${id}-${locale}.png` });
      await p.keyboard.press("Escape");
    }
  }
  if ((await p.locator("html").getAttribute("lang")) !== "en")
    await p.locator("#langToggle").click();
  await open("dining");
  await p.locator('[data-sx="menu"]').click();
  assert.equal(await p.locator(".sx-menu-grid section").count(), 3);
  await p.locator('[data-sx="reserve"]').click();
  await p.locator("#reservation-demo [name=name]").fill("Demo guest");
  await p.locator("#reservation-demo [name=email]").fill("demo@example.com");
  await p.locator("[name=date]").fill("2027-01-01");
  await p.locator("#reservation-demo [name=guests]").selectOption("4");
  await p.locator("#reservation-demo button").click();
  assert(
    (await p.locator("#reservation-result").innerText()).includes("4 guests"),
  );
  assert(
    (await p.locator("#reservation-result").innerText()).includes(
      "No booking was sent",
    ),
  );
  await p.keyboard.press("Escape");
  await open("property");
  await p.locator("[data-sx-location]").selectOption("Khalda");
  assert.equal(await p.locator(".sx-property-grid article").count(), 1);
  await p.locator("[data-sx=property]").click();
  assert(
    (await p.locator(".sx-property-detail h2").innerText()).includes("Skyline"),
  );
  await p.locator("[data-sx=viewing]").click();
  await p.locator("[data-sx-form=viewing] [name=name]").fill("Demo buyer");
  await p
    .locator("[data-sx-form=viewing] [name=email]")
    .fill("demo@example.com");
  await p.locator("[name=phone]").fill("+962790000000");
  await p.locator("[data-sx-form=viewing] button").click();
  assert(
    (
      await p.locator("[data-sx-form=viewing] [role=status]").innerText()
    ).includes("Skyline"),
  );
  await p.keyboard.press("Escape");
  await open("retail");
  await p.locator("#product-size").selectOption("L");
  await p.locator("[data-sx=add-cart]").click();
  assert((await p.locator("#cart-result").innerText()).includes("JOD 45"));
  await p.locator("[data-tab=bag]").click();
  assert((await p.locator(".sx-bag-line").innerText()).includes("L"));
  await p.locator("[data-sx=remove]").click();
  assert(
    (await p.locator(".sx-bag").innerText()).includes("Your bag is empty"),
  );
  await p.keyboard.press("Escape");
  await open("academy");
  await p.locator("[data-sx-search]").fill("Adam");
  assert.equal(await p.locator(".sx tbody tr").count(), 1);
  await p.locator("[data-sx-search]").fill("");
  await p.locator("[data-sx=enroll]").click();
  await p.locator("[name=applicant]").fill("Demo applicant");
  await p
    .locator("[data-sx-form=application] [name=email]")
    .fill("demo@example.com");
  await p.locator("[data-sx-form=application] button").click();
  assert((await p.locator(".sx tbody").innerText()).includes("Demo applicant"));
  assert((await p.locator(".sx-metrics").innerText()).includes("248"));
  await p.locator("[data-tab=schedule]").click();
  assert.equal(await p.locator(".sx-schedule-row").count(), 4);
  await p.keyboard.press("Escape");
  await open("crm");
  await p.locator("[data-sx=move-lead]").click();
  assert(await p.locator("[data-sx=move-lead]").isDisabled());
  assert(
    (await p.locator(".sx-board>section").nth(1).innerText()).includes(
      "Atlas Studio",
    ),
  );
  await p.locator("[data-tab=activity]").click();
  assert.equal(await p.locator(".sx-schedule-row").count(), 3);
  await p.keyboard.press("Escape");
  assert.deepEqual(errors, []);
  console.log(
    "PASS: five professional concepts × two languages × four widths, menu/reservation, filtered property/detail/viewing, bag totals/removal, admissions search/review/schedule, pipeline/activity. No external submission.",
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
