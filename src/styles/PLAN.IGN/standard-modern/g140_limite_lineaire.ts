import { LayerSpecification, LineLayerSpecification } from "@maplibre/maplibre-gl-style-spec";

const bandeauLayout: LineLayerSpecification["layout"] = {
  "line-cap": "round",
  "line-join": "round",
};
const tiretLayout: LineLayerSpecification["layout"] = {
  "line-cap": "butt",
  "line-join": "round",
};

const cTiretMonde = "#605780";
const cTiret = "#9f9cb8";
const cBandeau = "#f1f1f6";

export const g140_limite_lineaire: LayerSpecification[] = [
  {
    id: "limite militaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    filter: [
      "match",
      ["get", "symbo"],
      ["LIM_CHAMP_TIR", "LIM_ENCEINTE_MILI", "LIM_ENCEINTE_MILITAIRE", "LIM_ZONE_REGLEMENTEE"],
      true,
      false,
    ],
    layout: tiretLayout,
    paint: {
      "line-color": "#E5997A",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.7, 17, 3.1],
      "line-dasharray": [4, 1, 2, 5],
    },
  },
  {
    id: "limite cloture",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    filter: ["==", ["get", "symbo"], "CLOTURE"],
    layout: tiretLayout,
    paint: {
      "line-color": "#000000",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 0.6, 17, 1],
      "line-dasharray": [1.5, 4],
    },
  },
  {
    id: "limite layon",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 14,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "LAYON"],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B3989A",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 15, 1.2, 16, 1.4, 17, 2],
      "line-dasharray": [4, 7],
    },
  },

  {
    id: "limite zone naturelle",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      ["LIM_RESERVE_NATURELLE", "LIM_ZONE_NATURELLE", "LIM_ZONE_NATURELLE_ILE"],
      true,
      false,
    ],
    layout: tiretLayout,
    paint: {
      "line-color": "#FFC2CB",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 1],
    },
  },
  {
    id: "limite zone naturelle - Parc",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["LIM_PARC_NATUREL", "LIM_PARC_NATUREL_ILE"], true, false],
    layout: tiretLayout,
    paint: {
      "line-color": "#42A266",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 1],
    },
  },

  {
    id: "limite zone naturelle - Parc marin",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "LIM_PARC_NATUREL_MARIN"],
    layout: tiretLayout,
    paint: {
      "line-color": "#2A81A2",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 1],
    },
  },
  {
    id: "limite admin - limite de commune",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 12,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["LIM_ARRONDISSEMENT", "LIM_CANTON", "LIM_COMMUNE"], true, false],
    paint: {
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 12, 0, 13, 1],
      "line-color": cTiret,
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 2, 15, 2],
      "line-dasharray": [0, 1.5],
    },
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
  },
  {
    id: "limite admin - limite de département bandeau",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 8,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "LIM_DEPARTEMENT"],
    layout: bandeauLayout,
    paint: {
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 9, 1],
      "line-color": cBandeau,
      "line-width": ["interpolate", ["linear"], ["zoom"], 7, 5, 15, 10],
    },
  },
  {
    id: "limite admin - limite de département tiret",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 8,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "LIM_DEPARTEMENT"],
    layout: tiretLayout,
    paint: {
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 9, 1],
      "line-color": cTiret,
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 1.5, 15, 4],
      "line-dasharray": [1, 1],
    },
  },
  {
    id: "limite admin - limite de région bandeau",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "LIM_REGION"],
    layout: bandeauLayout,
    paint: {
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 1],
      "line-color": cBandeau,
      "line-width": ["interpolate", ["linear"], ["zoom"], 7, 5, 15, 10],
    },
  },
  {
    id: "limite admin - limite de région tiret",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "LIM_REGION"],
    layout: tiretLayout,
    paint: {
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 7, 0, 8, 1],
      "line-color": cTiret,
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 1.5, 15, 4],
      "line-dasharray": ["step", ["zoom"], ["literal", [1, 1]], 7, ["literal", [3, 1]]],
    },
  },

  {
    id: "limite etat bandeau",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 5,
    filter: ["match", ["get", "symbo"], ["LIM_ETAT", "LIM_ETAT_ETRANGER"], true, false],
    layout: bandeauLayout,
    paint: {
      "line-color": cBandeau,
      "line-width": ["interpolate", ["linear"], ["zoom"], 5, 2, 7, 5, 15, 10],
    },
  },
  {
    id: "limite etat tiret",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 2,
    filter: ["match", ["get", "symbo"], ["LIM_ETAT", "LIM_ETAT_ETRANGER"], true, false],
    layout: tiretLayout,
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 2, cTiretMonde, 8, cTiret],
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.5, 5, 1, 9, 1.5, 15, 4],
      "line-dasharray": ["step", ["zoom"], ["literal", [1]], 7, ["literal", [5, 1, 1, 1]]],
    },
  },

  {
    id: "limite cote",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    maxzoom: 10,
    filter: ["match", ["get", "symbo"], ["LIM_COTE"], true, false],
    layout: bandeauLayout,
    paint: { "line-color": "#82A3B2", "line-width": 1 },
  },
];
