const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const cp = require("node:child_process");
const path = require("node:path");
process.chdir(path.resolve(__dirname, ".."));
cp.execFileSync(process.execPath, ["--check", "script.js"]);
const html = fs.readFileSync("index.html", "utf8");
const js = fs.readFileSync("script.js", "utf8");
const copy = vm.runInNewContext(
  js.slice(js.indexOf("const COPY ="), js.indexOf("const SERVICES =")) + "COPY;",
);
for (const match of html.matchAll(/data-i18n="([^"]+)"/g)) {
  assert(copy[match[1]], `Missing translation ${match[1]}`);
  assert(
    copy[match[1]][0] && copy[match[1]][1],
    `Incomplete translation ${match[1]}`,
  );
}
assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
assert(html.includes('href="https://ratqai.com/"'));
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
for (const match of html.matchAll(/href="#([^"]+)"/g))
  assert(ids.includes(match[1]), `Missing anchor ${match[1]}`);
for (const file of [
  "favicon.svg",
  "robots.txt",
  "sitemap.xml",
  "netlify.toml",
  "styles.css",
  "script.js",
  "assets/dining.jpg",
  "assets/campus.jpg",
  "assets/fashion.jpg",
  "assets/residence.jpg",
  "assets/interior.jpg",
])
  assert(fs.existsSync(file), `Missing asset ${file}`);
assert(
  fs
    .readFileSync("styles.css", "utf8")
    .includes("prefers-reduced-motion: reduce"),
);
console.log(
  `PASS: syntax, ${Object.keys(copy).length} bilingual copy entries, internal links, unique IDs, SEO, contacts, assets, and reduced-motion support.`,
);
