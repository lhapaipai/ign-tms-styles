import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { toponymeHalo } from "./vars";

export const g170_routier_borne: LayerSpecification[] = [
  {
    id: "toponyme - bornes postales haute",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_borne",
    minzoom: 17,
    maxzoom: 20,

    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "borne_sur"]],
      "text-size": 11,
      "text-anchor": "center",
      "text-allow-overlap": true,
      "text-offset": [0, -1.4],
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#79654F",
      ...toponymeHalo,
    },
  },

  {
    id: "toponyme - bornes postales bas",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_borne",
    minzoom: 17,
    maxzoom: 20,
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "borne_sous"]],
      "text-size": 11,
      "text-anchor": "center",
      "text-allow-overlap": true,
      "text-offset": [0, 1.4],
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#79654F",
      ...toponymeHalo,
    },
  },
];
