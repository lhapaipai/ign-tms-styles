import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { cOroText, toponymeHalo } from "./vars";

const defaultPaint = {
  "text-color": cOroText,
  ...toponymeHalo,
};

/**
 * toponyme_oro_ponc
 *
 * txt_typo
 *
 * 0  < z < 10 : Range/mtn, TYPO_G_5
 * 10 < z < 12 : ORO_SOMMET_*, ORO_GORGE_*, ORO_COL_*, ORO_CAP_*, ORO_ILE_* GROTTE (1 à 3)
 * 12 < z < 13 : ORO_RELIEF_* ORO_RELIEF_*_T (1 à 4)
 * 13 < z < 20 : TYPO_G_* (1 à 8)
 */

export const g250_toponyme_oro: LayerSpecification[] = [
  {
    id: "toponyme - oro lineaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_lin",
    minzoom: 10,
    maxzoom: 13,
    layout: {
      "symbol-placement": "line",
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": [
        "match",
        ["get", "txt_typo"],
        ["ORO_ILE_1", "ORO_RELIEF_1", "ORO_RELIEF_1_T"],
        21,
        ["ORO_SOMMET_1", "ORO_CAP_1", "ORO_ILE_2", "ORO_RELIEF_2", "ORO_RELIEF_2_T"],
        17,
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
        15,
        13, // ["ORO_GORGE_2", "ORO_SOMMET_3"]
      ],
      "text-allow-overlap": true,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-padding": 5,
      "text-max-angle": 45,
      "text-font": ["Source Sans Pro Bold Italic"],
    },
    paint: {
      "text-color": cOroText,
      "text-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 13, 0.6],
      ...toponymeHalo,
    },
  },
  /***************************************************************** */

  {
    id: "toponyme - oro ponc z13 tertiaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 13,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "txt_typo"],
      ["TYPO_G_1", "TYPO_G_2", "TYPO_G_3", "TYPO_G_4", "TYPO_G_5", "TYPO_G_6", "TYPO_G_7"],
      false,
      true,
    ],

    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 15, 14],
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: defaultPaint,
  },
  {
    id: "toponyme - oro ponc z13 secondaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 13,
    maxzoom: 20,
    filter: ["match", ["get", "txt_typo"], ["TYPO_G_5", "TYPO_G_6", "TYPO_G_7"], true, false],

    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 13, 15, 16],
      "text-font": ["Source Sans Pro Semibold Italic"],
      "text-allow-overlap": ["step", ["zoom"], false, 15, true],
    },
    paint: defaultPaint,
  },
  {
    id: "toponyme - oro ponc z13 principal",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 13,
    maxzoom: 20,
    filter: ["match", ["get", "txt_typo"], ["TYPO_G_1", "TYPO_G_2", "TYPO_G_3", "TYPO_G_4"], true, false],

    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],
      "text-field": ["to-string", ["get", "texte"]],
      "text-padding": 10,
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 15, 15, 18],
      "text-font": ["Source Sans Pro Bold Italic"],
      "text-allow-overlap": true,
    },
    paint: defaultPaint,
  },

  {
    id: "toponyme - oro ponc z12-z13 secondaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 12,
    maxzoom: 13,
    filter: [
      "match",
      ["get", "txt_typo"],
      ["ORO_RELIEF_3", "ORO_RELIEF_3_T", "ORO_RELIEF_4", "ORO_RELIEF_4_T"],
      true,
      false,
    ],
    layout: {
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["match", ["get", "txt_typo"], ["ORO_RELIEF_3", "ORO_RELIEF_3_T"], 13, 12],
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: defaultPaint,
  },
  {
    id: "toponyme - oro ponc z12-z13 principal",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 12,
    maxzoom: 13,
    filter: [
      "match",
      ["get", "txt_typo"],
      ["ORO_RELIEF_1", "ORO_RELIEF_1_T", "ORO_RELIEF_2", "ORO_RELIEF_2_T"],
      true,
      false,
    ],

    layout: {
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 12, 14, 13, 15],
      "text-font": [
        "match",
        ["get", "txt_typo"],
        ["ORO_RELIEF_1", "ORO_RELIEF_1_T"],
        ["literal", ["Source Sans Pro Bold Italic"]],
        ["literal", ["Source Sans Pro Semibold Italic"]],
      ],
      "text-allow-overlap": true,
    },
    paint: defaultPaint,
  },
  /**
   * "ORO_CAP_1", "ORO_ILE_1", "ORO_COL_1", "ORO_SOMMET_1", "ORO_SOMMET_2", "ORO_GORGE_1"
   * on sépare en 2 calques car "text-allow-overlap" n'accepte pas encore les data expressions
   * et on a vraiment besoin de ne pas masquer les éléments de niveau 1 et les sommets de niveau 2
   */
  {
    id: "toponyme - oro ponc z10-z12 tertiaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 10,
    maxzoom: 12,
    /** not -> on utilise une négation pour prendre tous les éléments restants : GORGE, GROTTE... */
    filter: [
      "match",
      ["get", "txt_typo"],
      [
        "ORO_CAP_1",
        "ORO_ILE_1",
        "ORO_COL_1",
        "ORO_SOMMET_1",
        "ORO_GORGE_1",
        "ORO_CAP_2",
        "ORO_ILE_2",
        "ORO_COL_2",
        "ORO_SOMMET_2",
      ],
      false,
      true,
    ],
    layout: {
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 13, 16, 15],
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: defaultPaint,
  },
  {
    /**
     * ces éléments sont importants et ne doivent jamais être masqués.
     */
    id: "toponyme - oro ponc z10-z12 secondaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 10,
    maxzoom: 12,
    filter: ["match", ["get", "txt_typo"], ["ORO_CAP_2", "ORO_ILE_2", "ORO_COL_2", "ORO_SOMMET_2"], true, false],
    layout: {
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],

      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 13, 12, 14],
      "text-padding": 10,
      "text-font": ["Source Sans Pro Semibold Italic"],
      "text-allow-overlap": ["step", ["zoom"], false, 11, true],
    },
    paint: defaultPaint,
  },
  {
    /**
     * ces éléments sont importants et ne doivent jamais être masqués.
     */
    id: "toponyme - oro ponc z10-z12 principal",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 10,
    maxzoom: 12,
    filter: [
      "match",
      ["get", "txt_typo"],
      ["ORO_CAP_1", "ORO_ILE_1", "ORO_COL_1", "ORO_SOMMET_1", "ORO_GORGE_1"],
      true,
      false,
    ],
    layout: {
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 13, 12, 14],
      "text-padding": 20,
      "text-font": ["literal", ["Source Sans Pro Bold Italic"]],
      "text-allow-overlap": true,
    },
    paint: defaultPaint,
  },

  /**
   * z8 à 10 TYPO_G_(1 à 5)
   * 1 à 4 se trouvent sur le littoral
   * 5 tous les sommets
   * "TYPO_G_1", "TYPO_G_2", "TYPO_G_3", "TYPO_G_4", "TYPO_G_5"
   */
  {
    id: "toponyme - oro ponc z8-z10 sommets",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 8,
    maxzoom: 10,
    filter: ["==", ["get", "txt_typo"], "TYPO_G_5"],
    layout: {
      "text-field": ["to-string", ["get", "texte"]],
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],
      "text-size": ["interpolate", ["linear"], ["zoom"], 8, 11, 10, 13],
      "text-font": ["Source Sans Pro Semibold Italic"],
    },
    paint: defaultPaint,
  },
  {
    id: "toponyme - oro ponc z8-z10 littoral",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 8,
    maxzoom: 10,
    filter: ["!", ["==", ["get", "txt_typo"], "TYPO_G_5"]],
    // filter: ["match", ["get", "txt_typo"], ["TYPO_G_1", "TYPO_G_2", "TYPO_G_3", "TYPO_G_4"], true, false],
    layout: {
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["match", ["get", "txt_typo"], "TYPO_G_1", 21, "TYPO_G_2", 17, "TYPO_G_3", 15, 13],
      "text-allow-overlap": ["step", ["zoom"], false, 9, true],

      "text-padding": 1,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: defaultPaint,
  },

  {
    id: "toponyme - oro ponc monde",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_oro_ponc",
    minzoom: 5,
    maxzoom: 7,
    layout: {
      // "text-field": ["format", ["to-string", ["get", "texte"]], {}, "\n", {}, ["to-string", ["get", "txt_typo"]], {}],
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 5, 12, 7, 15],
      "text-padding": 1,
      "text-font": ["Source Sans Pro Semibold Italic"],
    },
    paint: defaultPaint,
  },
];
