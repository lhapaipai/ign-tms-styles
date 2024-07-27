import { createApp, createRouter, defineEventHandler, getQuery, getRouterParams, handleCors } from "h3";

import * as standardLayers from "./styles/PLAN.IGN/standard";
import * as standardModernLayers from "./styles/PLAN.IGN/modern";

import { basename } from "node:path";
import { generateStyle } from "./util";

const layerGroupsByStyle = {
  standard: standardLayers,
  modern: standardModernLayers,
};

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
    const style = basename(params.style, ".json") as "standard" | "modern";

    if (!["standard", "modern"].includes(style)) {
      throw new Error("style query parameter !");
    }

    const layers = layerGroupsByStyle[style];

    const queryParams = getQuery(event);
    let layerGroupsEnabled = Object.keys(queryParams);

    console.log(params.style, layerGroupsEnabled);

    if (layerGroupsEnabled.length === 0) {
      layerGroupsEnabled = Object.keys(layers);
    }

    const layersToAdd = layerGroupsEnabled.sort().map((layerId) => {
      const layers = layerGroupsByStyle[style];
      // @ts-ignore
      return layers[layerId] || [];
    });
    const layersConcat = [].concat(...layersToAdd);

    const sprite = style === "standard" ? "PlanIgn" : "basic";

    return generateStyle(layersConcat, `/sprites/${sprite}`);
  }),
);
