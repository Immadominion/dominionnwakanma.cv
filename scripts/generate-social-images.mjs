// Regenerate the CV and Nous share cards with Playwright and Chrome.
// Install Playwright separately for this optional tool; it is not a site dependency.
// Run: node scripts/generate-social-images.mjs
// PLAYWRIGHT_MODULE can point at an external Playwright install's index.mjs file.
// Set CHROME_BIN if Chrome is installed somewhere other than the paths below.
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const chrome = [
  process.env.CHROME_BIN,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((path) => path && existsSync(path));

if (!chrome) throw new Error("Set CHROME_BIN to your Chrome or Chromium executable.");
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");

const asset = (path) => pathToFileURL(join(root, "public", path)).href;
const pages = [
  {
    slug: "cv",
    label: "CV",
    title: "Dominion Nwakanma",
    description: "Mobile and product engineer. Apps people use,<br>open-source SDKs other developers build on,<br>and the courses that teach them.",
    images: ["media/trimmy-800.webp", "media/chumbucket-800.webp", "media/hack4futo-crowd-800.webp"],
  },
  {
    slug: "nous",
    label: "dominionnwakanma.cv/nous",
    title: "For Nous Research",
    description: "Dominion Nwakanma. Mobile and product engineer.<br>Selected work, a short film, and why I fit your team.",
    images: ["media/nous-film.webp", "media/trimmy-800.webp", "media/dartus-800.webp"],
  },
];

const temporary = mkdtempSync(join(tmpdir(), "dominion-social-"));
mkdirSync(join(root, "public", "og"), { recursive: true });
const browser = await chromium.launch({ executablePath: chrome, headless: true });

try {
  const tab = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const page of pages) {
    const source = join(temporary, `${page.slug}.html`);
    writeFileSync(source, `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${page.title}</title>
<style>
@font-face { font-family: Inter; src: local("Inter"); font-weight: 100 900; }
* { box-sizing: border-box; }
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
body { background: #161615; color: #ededec; font: 500 30px/1.4 Inter, -apple-system, BlinkMacSystemFont, sans-serif; -webkit-font-smoothing: antialiased; }
main { padding: 72px 80px; }
.avatar { display: block; width: 56px; height: 56px; border-radius: 50%; object-fit: cover; }
.label { position: absolute; top: 83px; right: 80px; font-size: 20px; color: #a1a09a; }
h1 { font: inherit; margin: 23px 0 24px; letter-spacing: -.4px; }
p { margin: 0; color: #a1a09a; letter-spacing: -.4px; }
.work { position: absolute; display: flex; gap: 20px; top: 445px; left: 80px; }
.work img { display: block; width: 360px; height: 225px; border-radius: 16px; object-fit: cover; object-position: top; }
</style></head>
<body><main>
<img class="avatar" src="${asset("avatar.webp")}" alt="Dominion Nwakanma">
<span class="label">${page.label}</span>
<h1>${page.title}</h1><p>${page.description}</p>
<div class="work">${page.images.map((src) => `<img src="${asset(src)}" alt="">`).join("")}</div>
</main></body></html>`);
    await tab.goto(pathToFileURL(source).href);
    await tab.evaluate(() => document.fonts.ready);
    await tab.screenshot({ path: join(root, "public", "og", `${page.slug}.png`) });
    console.log(`Generated public/og/${page.slug}.png`);
  }
} finally {
  await browser.close();
  rmSync(temporary, { recursive: true, force: true });
}
