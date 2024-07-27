a été retiré pour le moment

```ts
import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

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
  {
    id: "oro lin - talus",
    type: "line",
    source: "plan_ign",
    "source-layer": "oro_lin",
    minzoom: 15,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "TALUS"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: { "line-color": "#AAAAAA", "line-width": 1 },
  },
  {
    id: "oro lin - talus - trait perpendiculaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "oro_lin",
    minzoom: 15,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "TALUS"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAAAAA",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2, 16, 4],
      "line-dasharray": [0.2, 1],
      "line-translate": [0, 2],
    },
  },
];
