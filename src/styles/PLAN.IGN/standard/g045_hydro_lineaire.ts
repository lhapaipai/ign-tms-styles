import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g045_hydro_lineaire: () => LayerSpecification[] = () => [
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
  {
    id: "réseau hydro - cours d'eau temporaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["match", ["get", "symbo"], ["COURS_D_EAU_TEMP", "COURS_D_EAU_TEMP_MOY"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.5, 17, 4],
      "line-dasharray": [6, 2],
    },
  },
  {
    id: "réseau hydro - cours d'eau",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    minzoom: 3,
    filter: ["==", ["get", "symbo"], "COURS_D_EAU"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.3, 7, 1.5, 12, 1.5, 17, 6.5],
    },
  },
  {
    id: "réseau hydro - canal",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["==", ["get", "symbo"], "CANAL"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.4, 17, 5.9],
    },
  },
  {
    id: "réseau hydro - filet interieur - aqueduc",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    minzoom: 12,
    filter: ["==", ["get", "symbo"], "AQUEDUC_AU_SOL"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.4, 16, 3.5, 17, 5.9],
    },
  },
  {
    id: "réseau hydro - carre - aqueduc",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    minzoom: 12,
    filter: ["==", ["get", "symbo"], "AQUEDUC_AU_SOL"],
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
  {
    id: "réseau hydro - cours d'eau moyen ",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["==", ["get", "symbo"], "COURS_D_EAU_MOY"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 7, 2, 12, 2.5],
    },
  },
  {
    id: "réseau hydro - cours d'eau large ",
    type: "line",
    source: "plan_ign",
    "source-layer": "hydro_reseau",
    filter: ["==", ["get", "symbo"], "COURS_D_EAU_LAR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#AAD5E9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 7, 3, 11, 5],
    },
  },
];
