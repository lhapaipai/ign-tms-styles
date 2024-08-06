import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g042_routier_surf: LayerSpecification[] = [
  {
    id: "Routier surfacique",
    type: "fill",
    source: "plan_ign",
    "source-layer": "routier_surf",
    filter: [
      "match",
      ["get", "symbo"],
      ["SURF_ROUT_LOC", "SURF_ROUT_NON_CLA", "SURF_ROUT_PRINC", "SURF_ROUT_REG"],
      true,
      false,
    ],
    layout: { visibility: "visible" },
    paint: { "fill-color": "#FFFFFF", "fill-outline-color": "#000000" },
  },
  {
    id: "Routier surfacique - Dalle de protection",
    type: "fill",
    source: "plan_ign",
    "source-layer": "routier_surf",
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "DALLE_DE_PROTECTION"],
    layout: { visibility: "visible" },
    paint: {
      "fill-opacity": 0.5,
      "fill-color": "#FFFFFF",
      "fill-outline-color": "#000000",
    },
  },
  {
    id: "Routier surfacique - Escalier surfacique",
    type: "fill",
    source: "plan_ign",
    "source-layer": "routier_surf",
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "ESCALIER_SURF"],
    layout: { visibility: "visible" },
    paint: {
      "fill-opacity": 0.8,
      "fill-color": "#FFFFFF",
      "fill-outline-color": "#918091",
    },
  },
  {
    id: "Routier surfacique - Péage surfacique",
    type: "fill",
    source: "plan_ign",
    "source-layer": "routier_surf",
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "SURF_PEAGE"],
    layout: { visibility: "visible" },
    paint: { "fill-color": "#F2DAAA", "fill-outline-color": "#E2A52A" },
  },
];
