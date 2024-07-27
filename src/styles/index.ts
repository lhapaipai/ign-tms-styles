import * as standardLayers from "./PLAN.IGN/standard/index";
import * as standardModernLayers from "./PLAN.IGN/modern/index";

const configs = {
  "PLAN.IGN/standard": {
    layerGroups: standardLayers,
    sprite: "PlanIgn",
  },
  "PLAN.IGN/modern": {
    layerGroups: standardModernLayers,
    sprite: "basic",
  },
};

export default configs;
