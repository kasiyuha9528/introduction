// サイト内で使っている文字だけを含む Zen Maru Gothic を生成する。
// 日本語フォントをそのまま配信すると数百ファイル・数MBになり表示が遅くなるため。
// src/ の文言を変えたら `npm run fonts` で作り直す（ビルド前にも自動で実行される）。
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, extname } from "node:path";
import subsetFont from "subset-font";

const SRC_DIR = "src";
const OUT_DIR = "src/app/fonts";
const CACHE_DIR = "node_modules/.cache/zen-maru-gothic";
const FONT_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/zenmarugothic";
const WEIGHTS = ["Regular", "Bold", "Black"];

async function collectText(dir) {
  let text = "";
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) text += await collectText(path);
    else if ([".ts", ".tsx"].includes(extname(entry.name))) text += await readFile(path, "utf8");
  }
  return text;
}

async function loadSource(weight) {
  const cached = join(CACHE_DIR, `ZenMaruGothic-${weight}.ttf`);
  try {
    return await readFile(cached);
  } catch {
    const res = await fetch(`${FONT_URL}/ZenMaruGothic-${weight}.ttf`);
    if (!res.ok) throw new Error(`download failed: ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(CACHE_DIR, { recursive: true });
    await writeFile(cached, buf);
    return buf;
  }
}

// ASCII は文言が変わっても困らないよう常に含める
let ascii = "";
for (let c = 0x20; c < 0x7f; c++) ascii += String.fromCharCode(c);
const chars = [...new Set(ascii + (await collectText(SRC_DIR)))].join("");

await mkdir(OUT_DIR, { recursive: true });
for (const weight of WEIGHTS) {
  try {
    const subset = await subsetFont(await loadSource(weight), chars, { targetFormat: "woff2" });
    const out = join(OUT_DIR, `ZenMaruGothic-${weight}.woff2`);
    await writeFile(out, subset);
    console.log(`${out}: ${(subset.length / 1024).toFixed(1)}KB`);
  } catch (err) {
    // 取得できなくてもコミット済みのフォントでビルドを続ける
    console.warn(`[subset-font] ${weight} をスキップ: ${err.message}`);
  }
}
