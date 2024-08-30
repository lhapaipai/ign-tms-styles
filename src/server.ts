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
    const style = basename(params.style, ".json");

    const configId = `${params.resource}/${style}` as keyof Config;

    if (!Object.keys(configs).includes(configId)) {
      throw new Error(`unknown config ${configId} !`);
    }

    const config = configs[configId];

    const queryParams = getQuery(event);
    let layerGroupsEnabled = Object.keys(queryParams);

    console.log(params.style, layerGroupsEnabled);

    if (layerGroupsEnabled.length === 0) {
      layerGroupsEnabled = Object.keys(config.layerGroups);
    }

    const layersToAdd = layerGroupsEnabled.sort().map((layerId) => {
      return config.layerGroups[layerId](config.vars) || [];
    });

    // @ts-ignore
    const layersConcat = [].concat(...layersToAdd);

    return generateStyle(layersConcat, `/sprites/${config.sprite}`);
  }),
);
