import { Resvg, ResvgRenderOptions } from "@resvg/resvg-js";
import { readFile, writeFile } from "fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const iconsDir = resolve(scriptDir, "basic/icons");
const svg = await readFile(join(iconsDir, "abri.svg"), { encoding: "utf-8" });

const opts: ResvgRenderOptions = {
  background: "rgba(255, 0, 0)",
  fitTo: {
    mode: "width",
    value: 1200,
  },
  font: {
    loadSystemFonts: false, // It will be faster to disable loading system fonts.
    defaultFontFamily: "Arial",
  },
  // imageRendering: 1,
  // shapeRendering: 2,
  logLevel: "debug", // Default Value: error
};

svg.replaceAll;

const t = performance.now();
const resvg = new Resvg(svg, opts);
const data = resvg.render();
const pngBuffer = data.asPng();

console.info("Original SVG Size:", `${resvg.width} x ${resvg.height}`);
console.info("Output PNG Size  :", `${data.width} x ${data.height}`);
console.info("✨ Done in", performance.now() - t, "ms");

console.log(svg);

await writeFile(join(scriptDir, "abri.png"), pngBuffer);
