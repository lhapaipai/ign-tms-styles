import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, writeFile } from "node:fs/promises";
import { generateStyle } from "./util";

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
const buildDir = resolve(projectDir, "dist");

import configs from "./styles";

type ConfigName = keyof typeof configs;

export type BuildStyleOptions = {
  outDir: string;
  spriteBase: string;
};

export async function buildStyle(name: ConfigName, { outDir, spriteBase }: BuildStyleOptions) {
  const { layerGroups, sprite } = configs[name];

  const layerGroupsId = Object.keys(layerGroups) as (keyof typeof layerGroups)[];

  const layersToAdd = layerGroupsId.sort().map((groupId) => {
    return layerGroups[groupId];
  });
  // @ts-ignore
  const layersConcat = [].concat(...layersToAdd);

  const style = generateStyle(layersConcat, `${spriteBase}/${sprite}`);

  await mkdir(buildDir, { recursive: true });

  const outPath = resolve(outDir, `${name}.json`);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(style), { encoding: "utf-8" });
}
