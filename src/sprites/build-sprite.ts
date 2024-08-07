import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp, { OverlayOptions } from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";

import { basename, extname } from "node:path/posix";
import { Resvg } from "@resvg/resvg-js";
import { fileExists } from "./util";

const scriptDir = dirname(fileURLToPath(import.meta.url));

export type BuildSpriteOptions = {
  force: boolean;
  iconsToRegenerate: string[];
  outDir: string;
};

export async function buildSprite(
  { name, items, width, height }: Sprite,
  { force, iconsToRegenerate, outDir }: BuildSpriteOptions,
) {
  const manifest: Manifest = {};

  const iconsDir = resolve(scriptDir, `icons`);

  const sprite = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  });

  const compositeOptions: OverlayOptions[] = [];
  for (const [key, { x, y, width, height, pixelRatio, src, searchAndReplace }] of Object.entries(items)) {
    let iconPath = resolve(iconsDir, src);

    const tmpDir = resolve(scriptDir, `tmp/${name}`);
    await mkdir(tmpDir, { recursive: true });

    if (extname(src) === ".svg") {
      const tmpPath = resolve(tmpDir, `${basename(src, ".svg")}.png`);
      const exists = await fileExists(tmpPath);

      if (force || !exists || iconsToRegenerate.includes(key)) {
        console.log(`generating ${basename(tmpPath)} file`);
        let svg = await readFile(iconPath, { encoding: "utf-8" });

        if (searchAndReplace) {
          searchAndReplace.forEach(([searchValue, replaceValue]) => {
            svg = svg.replaceAll(searchValue, replaceValue);
          });
        }

        const resvg = new Resvg(svg, {
          fitTo: {
            mode: "width",
            value: width,
          },
        });
        const data = resvg.render();
        const pngBuffer = data.asPng();

        await writeFile(tmpPath, pngBuffer);
      }
      iconPath = tmpPath;
    }
    compositeOptions.push({
      input: iconPath,
      top: y,
      left: x,
    });

    manifest[key] = { x, y, width, height, pixelRatio };
  }

  await mkdir(outDir, { recursive: true });
  const outputPath = resolve(outDir, `${name}.png`);

  await sprite
    .composite(compositeOptions)
    .png({
      compressionLevel: 9,
      quality: 60,
    })
    .toFile(outputPath);

  manifest.blank = {
    x: 0,
    y: 384,
    width: 1,
    height: 1,
    pixelRatio: 1,
  };

  await writeFile(resolve(outDir, `${name}.json`), JSON.stringify(manifest), {
    encoding: "utf-8",
  });
}
