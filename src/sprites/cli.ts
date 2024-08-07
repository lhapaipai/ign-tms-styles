import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineCommand, runMain } from "citty";

import basicSprite from "./models/basic";
import basicDarkSprite from "./models/basic-dark";

import { buildSprite, BuildSpriteOptions } from "./build-sprite";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const defaultOutDir = resolve(scriptDir, `../../dist/sprites`);

const main = defineCommand({
  meta: {
    name: "sprite-builder",
    version: "1.0.0",
    description: "Create sprite",
  },
  args: {
    force: {
      type: "boolean",
      description: "Force to regenerate all png files",
      default: false,
    },
    icons: {
      type: "string",
      description: "Force to regenerate only specified icons (separated by ,)",
    },
    outDir: {
      type: "string",
      description: "Specify the output directory, relative to project dir or absolute",
      default: defaultOutDir,
    },
  },
  async run({ args: { icons, ...rest } }) {
    const sprites = [basicSprite, basicDarkSprite];

    const options: BuildSpriteOptions = {
      ...rest,
      iconsToRegenerate: [],
    };

    if (Array.isArray(icons)) {
      options.iconsToRegenerate = icons;
    } else if (typeof icons === "string") {
      options.iconsToRegenerate = [icons];
    }

    for (const sprite of sprites) {
      await buildSprite(sprite, options);
    }
  },
});

runMain(main);
