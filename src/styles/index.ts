import * as standardLayers from "./PLAN.IGN/standard";
import * as modernLayers from "./PLAN.IGN/modern";
import * as modernDarkLayers from "./PLAN.IGN/modern-dark";

import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

const configs = {
  "PLAN.IGN/standard": {
    layerGroups: standardLayers,
    sprite: "PlanIgn",
  },
  "PLAN.IGN/modern": {
    layerGroups: modernLayers,
    sprite: "basic",
  },
  "PLAN.IGN/modern-dark": {
    layerGroups: modernDarkLayers,
    sprite: "basic-dark",
  },
};

export default configs;

export type Config = {
  layerGroups: {
    [key: string]: LayerSpecification[];
  };
  sprite: string;
};
