import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { ferre } from "./vars";

export const g055_ferre_souterrain: LayerSpecification[] = [
  {
    id: "ferreSouterrain",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    minzoom: 10,
    maxzoom: 20,

    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-opacity": 0.5,
      "line-color": ferre.c,
      "line-width": ferre.w,
    },
  },
  {
    id: "ferreSouterrain - trait perpendiculaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    minzoom: 10,
    maxzoom: 20,
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": 0.5,
      "line-color": ferre.c,
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
];
