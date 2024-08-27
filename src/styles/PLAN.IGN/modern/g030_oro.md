a été retiré pour le moment

```ts
import { LayerGroupFactory } from "./types";


export const v2_01_oro: LayerSpecification[] = [
  {
    id: "oro - courbe et cuvette bathymetrique",
    type: "line",
    source: "plan_ign",
    "source-layer": "oro_courbe",
    minzoom: 10,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["CNV_BATHYMETRIQUE", "CUV_BATHYMETRIQUE"], true, false],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#0000FF", "line-width": 1 },
  },
];
