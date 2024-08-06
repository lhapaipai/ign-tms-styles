import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { cToponyme, toponymeHalo } from "./vars";

export const g240_toponyme_ocs: LayerSpecification[] = [
  {
    id: "toponyme - lieu dit non habité",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_ocs_ponc",
    filter: ["==", ["get", "symbo"], "LIEU-DIT_NON_HABITE"],
    minzoom: 13,
    maxzoom: 20,
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": [
        "match",
        ["get", "txt_typo"],
        ["TYPO_B_4", "TYPO_B_5"],
        15,
        ["TYPO_B_7", "TYPO_B_8", "TYPO_B_9"],
        12,
        11,
      ],
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
      "text-allow-overlap": true,
    },
    paint: {
      "text-color": cToponyme.textDefault,
      ...toponymeHalo,
    },
  },
  /**
   * Voir Forêt de Macretet / d'Oyonnax au dessus du lac de Nantua
   */
  {
    id: "toponyme - ocs foret lineaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_ocs_lin",
    filter: ["match", ["get", "txt_typo"], ["OCS_FORET_1", "OCS_FORET_2", "OCS_FORET_3"], true, false],
    minzoom: 11,
    maxzoom: 13,
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["match", ["get", "txt_typo"], "OCS_FORET_1", 20, "OCS_FORET_2", 16, "OCS_FORET_3", 14, 13],

      "text-anchor": "center",
      "text-keep-upright": true,
      "text-max-angle": 45,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": cToponyme.textLimiteParc,
      ...toponymeHalo,
    },
  },
  {
    id: "toponyme - bois ponc",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_ocs_ponc",
    filter: ["==", ["get", "symbo"], "BOIS"],
    minzoom: 13,
    maxzoom: 20,
    layout: {
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": [
        "match",
        ["get", "txt_typo"],
        ["TYPO_F_2", "TYPO_F_3"],
        20,
        ["TYPO_F_4", "TYPO_F_5"],
        17,
        ["TYPO_F_6", "TYPO_F_7", "TYPO_F_8"],
        14,
        ["TYPO_F_10", "TYPO_F_9"],
        12,
        11,
      ],
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": cToponyme.textLimiteParc,
      ...toponymeHalo,
    },
  },
  {
    id: "toponyme - ocs foret ponc",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_ocs_ponc",
    minzoom: 10,
    maxzoom: 13,
    filter: ["==", ["get", "symbo"], "FORET"],
    layout: {
      visibility: "visible",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["match", ["get", "txt_typo"], "OCS_FORET_1", 20, "OCS_FORET_2", 16, "OCS_FORET_3", 14, 13],
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": cToponyme.textLimiteParc,
      ...toponymeHalo,
    },
  },
];
