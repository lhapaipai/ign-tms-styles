import * as standardLayers from "./styles/PLAN.IGN/standard/index";
import * as standardModernLayers from "./styles/PLAN.IGN/standard-modern/index";

let standardTotal = 0;
let modernTotal = 0;

Object.keys(standardLayers).forEach((id) => {
  const groupID = id as keyof typeof standardLayers;

  console.log(`${groupID}: ${standardLayers[groupID].length} -> ${standardModernLayers[groupID].length}`);
  standardTotal += standardLayers[groupID].length;
  modernTotal += standardModernLayers[groupID].length;
});

console.log(`Total: ${standardTotal} -> ${modernTotal}`);
