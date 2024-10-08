import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g140_limite_lineaire: () => LayerSpecification[] = () => [
  {
    id: "Limite - cloture",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    filter: ["==", ["get", "symbo"], "CLOTURE"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#000000",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 0.6, 17, 1],
      "line-dasharray": [1.5, 4],
    },
  },
  {
    id: "Limite - layon",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 14,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "LAYON"],
    layout: {
      visibility: "visible",
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
    id: "Zone Règlementee - Enceinte militaire",
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
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(226, 130, 92, 0.8)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.7, 17, 3.1],
      "line-dasharray": [4, 1, 2, 5],
    },
  },
  {
    id: "limite zone naturelle",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      ["LIM_RESERVE_NATURELLE", "LIM_ZONE_NATURELLE", "LIM_ZONE_NATURELLE_ILE"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#FFC2CB",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 1],
    },
  },
  {
    id: "limite zone naturelle - Parc naturel 10",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    maxzoom: 10,
    filter: ["match", ["get", "symbo"], ["LIM_PARC_NATUREL", "LIM_PARC_NATUREL_ILE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#42A266",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 1],
    },
  },
  {
    id: "limite zone naturelle - Parc naturel 11",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 10,
    maxzoom: 11,
    filter: ["match", ["get", "symbo"], ["LIM_PARC_NATUREL", "LIM_PARC_NATUREL_ILE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#42A266",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "limite zone naturelle - Parc naturel 12",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 11,
    maxzoom: 12,
    filter: ["match", ["get", "symbo"], ["LIM_PARC_NATUREL", "LIM_PARC_NATUREL_ILE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#42A266",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 3],
    },
  },
  {
    id: "limite zone naturelle - Parc naturel 13",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 12,
    maxzoom: 13,
    filter: ["match", ["get", "symbo"], ["LIM_PARC_NATUREL", "LIM_PARC_NATUREL_ILE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#42A266",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 4],
    },
  },
  {
    id: "limite zone naturelle - Parc naturel 14",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 13,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["LIM_PARC_NATUREL", "LIM_PARC_NATUREL_ILE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(66, 162, 102, 0.7)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 5],
    },
  },
  {
    id: "limite zone naturelle - Parc marin",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "LIM_PARC_NATUREL_MARIN"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#2A81A2",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 2, 17, 4],
      "line-dasharray": [2, 1],
    },
  },
  {
    id: "parcellaire - parcelle bordure",
    type: "line",
    source: "plan_ign",
    "source-layer": "parcellaire_parcelle",
    filter: ["==", ["get", "symbo"], "PARCELLE"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#9933FF", "line-width": 1 },
  },
  {
    id: "parcellaire - section",
    type: "line",
    source: "plan_ign",
    "source-layer": "parcellaire_section",
    filter: ["==", ["get", "symbo"], "SECTION"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#287B00",
      "line-width": 1.9,
      "line-dasharray": [2, 4, 2],
    },
  },
  {
    id: "toponyme - parcellaire - section",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_parcellaire_section",
    filter: ["==", ["get", "txt_typo"], "SECTION"],
    layout: {
      "symbol-placement": "line",
      "text-offset": [0, 0],
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 15,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-max-angle": 45,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: { "text-color": "#287B00" },
  },
  {
    id: "toponyme - parcellaire - parcelle",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_parcellaire_parcelle",
    filter: ["==", ["get", "txt_typo"], "PARCELLE"],
    layout: {
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-max-angle": 45,
      "text-font": ["Source Sans Pro Bold"],
    },
    paint: {
      "text-color": "#9933FF",
      "text-halo-width": 1,
      "text-halo-color": "#FFFFFF",
    },
  },
  {
    id: "toponyme - parcellaire - adresse",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_parcellaire_adresse_ponc",
    filter: ["==", ["get", "txt_typo"], "ADRESSE"],
    layout: {
      "symbol-placement": "point",
      "text-field": ["concat", ["get", "numero"], ["get", "indice_de_repetition"]],
      "text-size": 11,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-max-angle": 45,
      "text-font": ["Source Sans Pro Bold"],
    },
    paint: {
      "text-color": "#695744",
      "text-halo-width": 1,
      "text-halo-color": "#FFFFFF",
    },
  },
  {
    id: "limite admin - limite de commune",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 13,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["LIM_ARRONDISSEMENT", "LIM_CANTON", "LIM_COMMUNE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(126, 119, 184, 0.5)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 3, 17, 5.5],
      "line-dasharray": [4, 2, 1, 1, 1, 1, 1, 2],
    },
  },
  {
    id: "limite admin - limite de département bandeau",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 8,
    maxzoom: 13,
    filter: ["==", ["get", "symbo"], "LIM_DEPARTEMENT"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(178, 175, 219, 0.4)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 4.1, 12, 6],
    },
  },
  {
    id: "limite admin - limite de département tiret",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 13,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "LIM_DEPARTEMENT"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(126, 119, 184, 0.5)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 3, 17, 5.5],
      "line-dasharray": [4, 2, 1, 1, 1, 2],
    },
  },
  {
    id: "limite admin - limite de région bandeau",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    maxzoom: 13,
    filter: ["==", ["get", "symbo"], "LIM_REGION"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(178, 175, 219, 0.5)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 4.5, 12, 6.7],
    },
  },
  {
    id: "limite admin - limite de région tiret",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 13,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "LIM_REGION"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(126, 119, 184, 0.5)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 3, 17, 5.5],
      "line-dasharray": [4, 2, 1, 2],
    },
  },
  {
    id: "limite etat 1",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 2,
    filter: ["match", ["get", "symbo"], ["LIM_ETAT", "LIM_ETAT_ETRANGER"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "rgba(178, 175, 219, 0.6)",
      "line-width": ["interpolate", ["linear"], ["zoom"], 2, 2, 3, 3.5, 9, 5, 14, 13, 15, 20, 16, 24, 17, 42],
    },
  },
  {
    id: "limite etat 2",
    type: "line",
    source: "plan_ign",
    "source-layer": "limite_lin",
    minzoom: 7,
    filter: ["match", ["get", "symbo"], ["LIM_ETAT", "LIM_ETAT_ETRANGER"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#9F9CB8",
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 1.5, 14, 3.5, 15, 5.5, 16, 6.5, 17, 11],
      "line-dasharray": [4, 2],
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
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#82A3B2", "line-width": 1 },
  },
];
