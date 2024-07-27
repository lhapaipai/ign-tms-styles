import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { cHydro, cOroRelief } from "./vars";

export const g010_oro: LayerSpecification[] = [
  {
    /* à partir du zoom 7 cela viendra remplacer notre orographie : relief - 0m */
    id: "bckgrd",
    type: "fill",
    source: "plan_ign",
    "source-layer": "fond_opaque",
    minzoom: 0,
    paint: { "fill-color": ["interpolate", ["linear"], ["zoom"], 8, cOroRelief.bg[0], 9, cOroRelief.bg[1]] },
  },
  {
    id: "ocean - mer",
    type: "fill",
    source: "plan_ign",
    "source-layer": "hydro_surf",
    minzoom: 0,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "ZONE_MARINE"],
    paint: {
      "fill-color": cHydro.default,
    },
  },
  {
    id: "orographie : relief - 0m",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "HYPSO_0"],
    paint: { "fill-color": ["interpolate", ["linear"], ["zoom"], 4, cOroRelief.hypso0[0], 7, cOroRelief.hypso0[1]] },
  },
  {
    id: "orographie : relief - 100m",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "HYPSO_100"],
    paint: {
      "fill-color": ["interpolate", ["linear"], ["zoom"], 4, cOroRelief.hypso100[0], 7, cOroRelief.hypso100[1]],
    },
  },
  {
    id: "orographie : relief - 200m",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "HYPSO_200"],
    paint: {
      "fill-color": ["interpolate", ["linear"], ["zoom"], 4, cOroRelief.hypso200[0], 7, cOroRelief.hypso200[1]],
    },
  },
  {
    id: "orographie : relief - 1000m",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "HYPSO_1000"],
    paint: {
      "fill-color": ["interpolate", ["linear"], ["zoom"], 4, cOroRelief.hypso1000[0], 7, cOroRelief.hypso1000[1]],
    },
  },
  {
    id: "orographie : relief - 3000m",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "HYPSO_3000"],
    paint: {
      "fill-color": ["interpolate", ["linear"], ["zoom"], 4, cOroRelief.hypso3000[0], 7, cOroRelief.hypso3000[1]],
    },
  },
  {
    id: "orographie : relief - 4000m",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "HYPSO_4000"],
    paint: {
      "fill-color": ["interpolate", ["linear"], ["zoom"], 4, cOroRelief.hypso4000[0], 7, cOroRelief.hypso4000[1]],
    },
  },
  {
    id: "orographie : relief - 5000m",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "HYPSO_5000"],
    paint: {
      "fill-color": ["interpolate", ["linear"], ["zoom"], 4, cOroRelief.hypso5000[0], 7, cOroRelief.hypso5000[1]],
    },
  },
  {
    id: "orographie : relief - glacier",
    type: "fill",
    source: "plan_ign",
    "source-layer": "oro_relief",
    minzoom: 0,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "GLACIER"],
    paint: { "fill-color": cOroRelief.glacier, "fill-opacity": 1 },
  },
];
