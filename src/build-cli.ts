import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineCommand, runMain } from "citty";
import { buildStyle } from "./build-style";
import configs from "./styles";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const defaultOutDir = resolve(scriptDir, `../dist`);

type ConfigName = keyof typeof configs;

const main = defineCommand({
  meta: {
    name: "style-builder",
    version: "1.0.0",
    description: "Create style",
  },
  args: {
    outDir: {
      type: "string",
      description: "Specify the output directory, relative to project dir or absolute",
      default: defaultOutDir,
    },
    spriteBase: {
      type: "string",
      description:
        "Base sprites path when served in development or production (can be full URL like: https://lonlat.org/assets/sprites)",
      default: "/sprites",
    },
  },
  async run({ args }) {
    for (const name of Object.keys(configs)) {
      await buildStyle(name as ConfigName, args);
    }
  },
});

runMain(main);
