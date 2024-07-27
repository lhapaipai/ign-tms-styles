import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { cHydro } from "./vars";

/**
 * COURS_D_EAU a double emploi correspond
 * pour les zooms < 7 correspond à tous les cours d'eau visible
 * pour les zooms > 7 correspond aux plus petits cours d'eau
 */
export const g060_hydro_a_niveau: LayerSpecification[] = [
  {
    id: "hydroReseau - cours d'eau temporaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["match", ["get", "symbo"], ["COURS_D_EAU_TEMP", "COURS_D_EAU_TEMP_MOY"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.5, 17, 4],
      "line-dasharray": [6, 2],
    },
  },
  {
    id: "hydroReseau - cours d'eau faible",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    minzoom: 7,
    filter: ["==", ["get", "symbo"], "COURS_D_EAU"],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      "line-width": ["interpolate", ["linear"], ["zoom"], 7, 1.5, 12, 1.5, 17, 6.5],
    },
  },
  {
    id: "hydroReseau - canal ou filet interieur d'aqueduc",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["match", ["get", "symbo"], ["CANAL", "AQUEDUC_AU_SOL"], true, false],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.4, 17, 5.9],
    },
  },
  {
    id: "hydroReseau - carre - aqueduc",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    minzoom: 12,
    filter: ["==", ["get", "symbo"], "AQUEDUC_AU_SOL"],
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
  {
    id: "hydroReseau - cours d'eau moyen ",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["==", ["get", "symbo"], "COURS_D_EAU_MOY"],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      "line-width": ["interpolate", ["linear"], ["zoom"], 7, 2, 12, 2.5],
    },
  },
  {
    id: "hydroReseau - cours d'eau large ",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["==", ["get", "symbo"], "COURS_D_EAU_LAR"],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      "line-width": ["interpolate", ["linear"], ["zoom"], 7, 3, 11, 5],
    },
  },
  {
    id: "hydroReseau - cours d'eau",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    minzoom: 3,
    maxzoom: 7,
    filter: ["==", ["get", "symbo"], "COURS_D_EAU"],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": cHydro,
      /**
       * il doit y avoir presque correspondance de zoom au niveau 7 avec COURS_D_EAU_LAR
       * comme COURS_D_EAU_LAR se tortille on a l'impression qu'il est moins large
       */
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.6, 7, 2.5],
    },
  },
];
