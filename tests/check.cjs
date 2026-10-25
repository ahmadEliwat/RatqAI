const assert = require("node:assert/strict"),
  fs = require("node:fs"),
  vm = require("node:vm"),
  path = require("node:path");
process.chdir(path.resolve(__dirname, ".."));
const js = fs.readFileSync("script.js", "utf8");
new vm.Script(js, { filename: "script.js" });
const copy = vm.runInNewContext(
  js.slice(js.indexOf("const COPY ="), js.indexOf("const SERVICES =")) +
    "COPY;",
);
for (const name of ["index.html", "concepts.html"]) {
  const html = fs.readFileSync(name, "utf8");
  for (const m of html.matchAll(/data-i18n="([^"]+)"/g)) {
    assert(copy[m[1]], `Missing translation ${m[1]}`);
    assert(copy[m[1]][0] && copy[m[1]][1], `Incomplete ${m[1]}`);
  }
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(
    html.includes(
      `href="https://ratqai.com/${name === "concepts.html" ? "concepts.html" : ""}"`,
    ),
  );
  const schema = JSON.parse(
    html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
  );
  assert.equal(schema.email, "hello@ratqai.com");
  assert.deepEqual(schema.sameAs, ["https://www.instagram.com/ratqai/"]);
  assert(
    !/id="connected"|whatsappLink|hero-ambient|v2\.css|v2\.js/.test(html + js),
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const m of html.matchAll(/href="#([^"]+)"/g))
    assert(ids.includes(m[1]), `Missing ${m[1]}`);
}
assert.equal(
  copy.heroTitle[0]
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim(),
  "We Build Digital Experiences That Move Businesses Forward.",
);
for (const f of [
  "favicon.svg",
  "robots.txt",
  "sitemap.xml",
  "netlify.toml",
  "styles.css",
  "script.js",
  "assets/dining.webp",
  "assets/fashion.webp",
  "assets/residence.webp",
  "assets/interior.webp",
])
  assert(fs.existsSync(f), `Missing ${f}`);
assert(
  fs
    .readFileSync("styles.css", "utf8")
    .includes("prefers-reduced-motion: reduce"),
);
assert(fs.readFileSync("index.html", "utf8").includes('id="project-budget"'));
console.log(
  `PASS: both routes, syntax, ${Object.keys(copy).length} bilingual entries, requested headline, canonical/SEO, contacts, anchors, assets and reduced motion.`,
);
