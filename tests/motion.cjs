const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || "playwright");
const assert = require("node:assert/strict"),
  fs = require("fs");
(async () => {
  const b = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  fs.mkdirSync("../cinema-qa", { recursive: true });
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  await p.goto("http://127.0.0.1:8766/", { waitUntil: "networkidle" });
  await p.waitForFunction(
    () =>
      document.querySelector("#hero-film").currentTime > 0.1 &&
      !document.querySelector("#hero-film").paused,
  );
  assert.equal(await p.locator(".hero-line").count(), 4);
  await p.locator("#motion-toggle").click();
  assert(await p.locator("#hero-film").evaluate((v) => v.paused));
  assert(
    await p
      .locator("body")
      .evaluate((e) => e.classList.contains("motion-paused")),
  );
  await p.screenshot({ path: "../cinema-qa/hero-motion-desktop.png" });
  await p.locator("#motion-toggle").click();
  await p.waitForFunction(() => !document.querySelector("#hero-film").paused);
  await p.evaluate(() =>
    scrollTo({
      top: document.querySelector("#home").offsetHeight + 300,
      behavior: "instant",
    }),
  );
  await p.waitForFunction(() => document.querySelector("#hero-film").paused);
  await p.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await p.waitForFunction(() => !document.querySelector("#hero-film").paused);
  await p.locator("[data-reel]").click();
  assert(await p.locator("#film-dialog").isVisible());
  await p.waitForFunction(
    () => document.querySelector("#concept-film").currentTime > 0.15,
  );
  assert.equal(
    Math.round(await p.locator("#concept-film").evaluate((v) => v.duration)),
    12,
  );
  assert(await p.locator("#hero-film").evaluate((v) => v.paused));
  await p.locator("#concept-film").evaluate(async (v) => {
    v.pause();
    await new Promise((r) => {
      v.addEventListener("seeked", r, { once: true });
      v.currentTime = 6;
    });
  });
  await p.screenshot({ path: "../cinema-qa/concept-reel-desktop.png" });
  await p.keyboard.press("Escape");
  assert(!(await p.locator("#film-dialog").isVisible()));
  assert(await p.locator("#concept-film").evaluate((v) => v.paused));
  await p.locator("#langToggle").click();
  assert(
    (await p.locator(".reel-launch strong").innerText()).includes("الحركة"),
  );
  await p.locator("[data-reel]").click();
  assert(
    (await p.locator("#concept-film").getAttribute("src")).endsWith("ar.mp4"),
  );
  await p.waitForFunction(
    () => document.querySelector("#concept-film").currentTime > 0.15,
  );
  await p.keyboard.press("Escape");
  await p.setViewportSize({ width: 390, height: 844 });
  await p.locator("#motion-toggle").click();
  await p.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await p.screenshot({ path: "../cinema-qa/hero-motion-mobile-ar.png" });
  assert(
    await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  );
  const reduced = await b.newPage({ reducedMotion: "reduce" });
  await reduced.goto("http://127.0.0.1:8766/", { waitUntil: "networkidle" });
  assert.equal(await reduced.locator("#hero-film").getAttribute("src"), null);
  assert.equal(
    await reduced
      .locator(".hero-line>span")
      .first()
      .evaluate((e) => getComputedStyle(e).animationName),
    "none",
  );
  await reduced.locator("#motion-toggle").click();
  await reduced.waitForFunction(
    () => !document.querySelector("#hero-film").paused,
  );
  const saver = await b.newPage();
  await saver.addInitScript(() =>
    Object.defineProperty(navigator, "connection", {
      value: { saveData: true },
    }),
  );
  await saver.goto("http://127.0.0.1:8766/", { waitUntil: "networkidle" });
  assert.equal(await saver.locator("#hero-film").getAttribute("src"), null);
  assert.deepEqual(errors, []);
  console.log(
    "PASS: real media playback, pause/resume, offscreen suspension, both 12-second films, seeking, Escape, Arabic/mobile, reduced motion and data-saver fallback.",
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
