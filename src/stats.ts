import * as standardLayers from "./styles/PLAN.IGN/standard";
import * as standardModernLayers from "./styles/PLAN.IGN/modern";

let standardTotal = 0;
let modernTotal = 0;

Object.keys(standardLayers).forEach((id) => {
  const groupID = id as keyof typeof standardLayers;

  console.log(`${groupID}: ${standardLayers[groupID].length} -> ${standardModernLayers[groupID].length}`);
  standardTotal += standardLayers[groupID].length;
  modernTotal += standardModernLayers[groupID].length;
});

console.log(`Total: ${standardTotal} -> ${modernTotal}`);
