import * as standardLayers from "./PLAN.IGN/standard/index";
import * as standardModernLayers from "./PLAN.IGN/standard-modern/index";

const configs = {
  standard: {
    stylePath: "PLAN.IGN/standard.json",
    layerGroups: standardLayers,
    sprite: "PlanIgn",
  },
  "standard-modern": {
    stylePath: "PLAN.IGN/standard-modern.json",
    layerGroups: standardModernLayers,
    sprite: "basic",
  },
};

export default configs;
