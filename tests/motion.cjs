const { chromium } = require(process.env.PLAYWRIGHT_PACKAGE || "playwright");
const assert = require("node:assert/strict");
(async () => {
  const b = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const p = await b.newPage();
  await p.goto("http://127.0.0.1:8766/");
  assert.equal(
    await p.locator("[data-reel],#film-dialog,#motion-toggle").count(),
    0,
  );
  await p.waitForFunction(
    () => document.querySelector("#hero-film").currentTime > 0.1,
  );
  await p.waitForFunction(() => {
    const v = document.querySelector("#hero-film");
    return v.paused && v.currentTime >= 4.7;
  });
  assert((await p.locator("#hero-film").evaluate((v) => v.currentTime)) < 5.1);
  await p.evaluate(() => scrollTo(0, 1800));
  await p.evaluate(() => scrollTo(0, 0));
  assert(await p.locator("#hero-film").evaluate((v) => v.paused));
  const reduced = await b.newPage({ reducedMotion: "reduce" });
  await reduced.goto("http://127.0.0.1:8766/");
  assert.equal(await reduced.locator("#hero-film").getAttribute("src"), null);
  const saver = await b.newPage();
  await saver.addInitScript(() =>
    Object.defineProperty(navigator, "connection", {
      value: { saveData: true },
    }),
  );
  await saver.goto("http://127.0.0.1:8766/");
  assert.equal(await saver.locator("#hero-film").getAttribute("src"), null);
  console.log(
    "PASS: reel/control removed, finite cinematic entrance, reduced motion and data-saver poster fallback.",
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
