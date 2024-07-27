import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { cHydro } from "./vars";

export const g040_hydro_souterrain_et_surface: LayerSpecification[] = [
  {
    id: "hydroSurfacique",
    type: "fill",
    source: "plan_ign",
    "source-layer": "hydro_surf",
    minzoom: 0,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["BASSIN", "SURFACE_D_EAU", "ZONE_MARINE", "SURFACE_D_EAU_TEMP"], true, false],
    paint: {
      "fill-color": [
        "match",
        ["get", "symbo"],
        ["BASSIN", "SURFACE_D_EAU", "ZONE_MARINE"],
        cHydro,
        "ZONE_D_ESTRAN",
        "#C3DDE9",
        "ZONE_MARAIS",
        "#d6e6d3",
        "SURFACE_D_EAU_TEMP",
        "#d4e5ee",
        cHydro,
      ],
    },
  },
  {
    id: "hydroSouterrain reseau",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau_sou",
    minzoom: 10,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["COURS_D_EAU_MOY_SOU", "COURS_D_EAU_SOU", "AQUEDUC_SOU"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.4, 16, 3.5, 17, 5.9],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "hydroSouterrain reseau - aqueduc carre",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau_sou",
    minzoom: 12,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "AQUEDUC_SOU"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 3.5, 16, 8.7, 17, 14.7],
      "line-dasharray": [1, 5],
    },
  },
];
