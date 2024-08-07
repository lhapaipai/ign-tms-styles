import { createApp, createRouter, defineEventHandler, getQuery, getRouterParams, handleCors } from "h3";

import { basename } from "node:path";
import { generateStyle } from "./util";
import configs, { Config } from "./styles";

export const app = createApp();
const router = createRouter();

app.use(
  defineEventHandler((event) => {
    if (handleCors(event, { origin: "*" })) {
      return;
    }
  }),
);

app.use(router);

router.get(
  "/:resource/:style",
  defineEventHandler(async (event) => {
    const params = getRouterParams(event);
    const style = basename(params.style, ".json") as "standard" | "modern" | "modern-dark";

    if (!["standard", "modern", "modern-dark"].includes(style)) {
      throw new Error(`unknown style ${style} !`);
    }

    // @ts-ignore
    const config = configs[`${params.resource}/${style}`] as Config;

    const queryParams = getQuery(event);
    let layerGroupsEnabled = Object.keys(queryParams);

    console.log(params.style, layerGroupsEnabled);

    if (layerGroupsEnabled.length === 0) {
      layerGroupsEnabled = Object.keys(config.layerGroups);
    }

    const layersToAdd = layerGroupsEnabled.sort().map((layerId) => {
      return config.layerGroups[layerId] || [];
    });

    // @ts-ignore
    const layersConcat = [].concat(...layersToAdd);

    const sprite = style === "standard" ? "PlanIgn" : "basic";

    return generateStyle(layersConcat, `/sprites/${sprite}`);
  }),
);
