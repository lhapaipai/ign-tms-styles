import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g250_toponyme_oro: () => LayerSpecification[] = () => [
  {
    id: "toponyme - oro lineaire 1",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_lin",
    filter: ["match", ["get", "txt_typo"], ["ORO_ILE_1", "ORO_RELIEF_1", "ORO_RELIEF_1_T"], true, false],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 20,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-padding": 5,
      "text-max-angle": 45,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
    },
  },
  {
    id: "toponyme - oro lineaire 2",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_lin",
    filter: [
      "match",
      ["get", "txt_typo"],
      ["ORO_CAP_1", "ORO_ILE_2", "ORO_RELIEF_2", "ORO_RELIEF_2_T", "ORO_SOMMET_1"],
      true,
      false,
    ],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 15,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-padding": 10,
      "text-max-angle": 45,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
    },
  },
  {
    id: "toponyme - oro lineaire 3",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_lin",
    filter: [
      "match",
      ["get", "txt_typo"],
      [
        "ORO_CAP_2",
        "ORO_CAP_3",
        "ORO_COL_2",
        "ORO_GORGE-1",
        "ORO_GORGE_1",
        "ORO_ILE_3",
        "ORO_RELIEF_3",
        "ORO_RELIEF_3_T",
        "ORO_RELIEF_4",
        "ORO_RELIEF_4_T",
        "ORO_SOMMET_2",
      ],
      true,
      false,
    ],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 12,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-max-angle": 45,
      "text-padding": 10,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-width": 1.5,
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
    },
  },
  {
    id: "toponyme - oro lineaire 4",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_lin",
    filter: ["match", ["get", "txt_typo"], ["ORO_GORGE_2", "ORO_SOMMET_3"], true, false],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-max-angle": 45,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-width": 1.5,
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
    },
  },
  {
    id: "toponyme - oro ponc 1B",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 8,
    filter: ["match", ["get", "txt_typo"], ["TYPO_G_2", "TYPO_G_3"], true, false],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 12, 15, 13, 21],
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme - oro ponc 1",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 8,
    filter: ["match", ["get", "txt_typo"], ["ORO_ILE_1", "ORO_RELIEF_1", "ORO_RELIEF_1_T", "TYPO_G_1"], true, false],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 21,
      "text-allow-overlap": true,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme - oro ponc monde",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 5,
    filter: [
      "match",
      ["get", "txt_typo"],
      [
        "Basin",
        "Depression",
        "Desert",
        "Geoarea",
        "Gorge",
        "Island",
        "Island group",
        "Isthmus",
        "Lake",
        "Lowland",
        "Pen/cape",
        "Plain",
        "Plateau",
        "Range/mtn",
        "Tundra",
        "Valley",
      ],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme - oro ponc 2B",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 8,
    filter: ["==", ["get", "txt_typo"], "TYPO_G_4"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 15, 16, 19],
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme - oro ponc 2",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 9,
    filter: [
      "match",
      ["get", "txt_typo"],
      ["ORO_CAP_1", "ORO_COL_1", "ORO_ILE_2", "ORO_RELIEF_2", "ORO_RELIEF_2_T", "ORO_SOMMET_1", "TYPO_G_5"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 9, 13, 10, 15, 13, 15, 16, 19],
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme - oro ponc 3",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    filter: [
      "match",
      ["get", "txt_typo"],
      [
        "ORO_CAP_2",
        "ORO_CAP_3",
        "ORO_COL_2",
        "ORO_GORGE-1",
        "ORO_GORGE_1",
        "ORO_ILE_3",
        "ORO_RELIEF_3",
        "ORO_RELIEF_3_T",
        "ORO_RELIEF_4",
        "ORO_RELIEF_4_T",
        "ORO_SOMMET_2",
        "TYPO_G_6",
        "TYPO_G_7",
      ],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 16, 17],
      "text-allow-overlap": true,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#863831", "text-halo-color": "#FFFFFF", "text-halo-width": 1.5 },
  },
  {
    id: "toponyme - oro ponc 4",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    filter: [
      "match",
      ["get", "txt_typo"],
      ["GORGE", "GROTTE", "ORO_GORGE_2", "ORO_SOMMET_3", "TYPO_G_8", "TYPO_G_9"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 11, 16, 16],
      "text-allow-overlap": true,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#863831",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 1.5,
    },
  },
  {
    id: "toponyme - courbe maitresse",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    filter: ["==", ["get", "txt_typo"], "ORO_COURBE"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10,
      "text-allow-overlap": false,
      "text-padding": 30,
      "text-rotate": ["get", "rotation"],
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#604A2F",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 1,
    },
  },
  {
    id: "toponyme - courbe glacier maitresse",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    filter: ["==", ["get", "txt_typo"], "ORO_COURBE_GLACIER"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10,
      "text-allow-overlap": false,
      "text-padding": 30,
      "text-rotate": ["get", "rotation"],
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#629FD9",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 1,
    },
  },
  {
    id: "toponyme - courbe rocher maitresse",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    filter: ["==", ["get", "txt_typo"], "ORO_COURBE_ROCHER"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10,
      "text-allow-overlap": false,
      "text-padding": 30,
      "text-rotate": ["get", "rotation"],
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#333333",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 1,
    },
  },
];
