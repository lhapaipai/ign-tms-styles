import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g040_hydro_souterrain_et_surface: LayerSpecification[] = [
  {
    id: "hydro surfacique",
    type: "fill",
    source: "plan_ign",
    "source-layer": "hydro_surf",
    filter: ["match", ["get", "symbo"], ["BASSIN", "SURFACE_D_EAU", "ZONE_MARINE"], true, false],
    layout: { visibility: "visible" },
    paint: { "fill-color": "#AAD5E9", "fill-outline-color": "#AAD5E9" },
  },
  {
    id: "hydro surfacique temporaire",
    type: "fill",
    source: "plan_ign",
    "source-layer": "hydro_surf",
    filter: ["==", ["get", "symbo"], "SURFACE_D_EAU_TEMP"],
    layout: { visibility: "visible" },
    paint: { "fill-color": "rgba(168, 203, 220, 0.5)" },
  },
  {
    id: "réseau hydro  - cours d'eau souterrain",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau_sou",
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["COURS_D_EAU_MOY_SOU", "COURS_D_EAU_SOU"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.5, 17, 6.5],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "réseau hydro - filet interieur - aqueduc souterrain",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau_sou",
    minzoom: 12,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "AQUEDUC_SOU"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.4, 16, 3.5, 17, 5.9],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "réseau hydro - carre - aqueduc souterrain",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau_sou",
    minzoom: 12,
    filter: ["==", ["get", "symbo"], "AQUEDUC_SOU"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 3.5, 16, 8.7, 17, 14.7],
      "line-dasharray": [1, 5],
    },
  },
];
