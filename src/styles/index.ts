import * as standardLayers from "./PLAN.IGN/standard";

import * as modernLayers from "./PLAN.IGN/modern";
import * as modernVars from "./PLAN.IGN/modern/vars";

import * as modernDarkLayers from "./PLAN.IGN/modern-dark";
import * as modernDarkVars from "./PLAN.IGN/modern-dark/vars";

import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

const configs: Record<string, Config> = {
  "PLAN.IGN/standard": {
    layerGroups: standardLayers,
    sprite: "PlanIgn",
    vars: {},
  },
  "PLAN.IGN/modern": {
    layerGroups: modernLayers,
    sprite: "basic",
    vars: modernVars,
  },
  "PLAN.IGN/modern-dark": {
    layerGroups: modernDarkLayers,
    sprite: "basic-dark",
    vars: modernDarkVars,
  },
};

export default configs;

export type Config = {
  layerGroups: {
    [key: string]: (vars: any) => LayerSpecification[];
  };
  sprite: string;
  vars: any;
};
