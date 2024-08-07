import * as standardLayers from "./styles/PLAN.IGN/standard";
import * as modernLayers from "./styles/PLAN.IGN/modern";

let standardTotal = 0;
let modernTotal = 0;

Object.keys(standardLayers).forEach((id) => {
  const groupID = id as keyof typeof standardLayers;

  console.log(`${groupID}: ${standardLayers[groupID].length} -> ${modernLayers[groupID].length}`);
  standardTotal += standardLayers[groupID].length;
  modernTotal += modernLayers[groupID].length;
});

console.log(`Total: ${standardTotal} -> ${modernTotal}`);
