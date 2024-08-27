/**
 * les placements sont effectués de bas en haut
 * les éléments qui doivent absolument apparaitre doivent être définis en bas
 * avec un text-allow-overlap à true
 * 
 * const metadata = {
 *   id: "toponyme_localite_ponc",
 *   geometry: "GEOMETRY",
 *   maxzoom: "18",
 *   minzoom: "0",
 *   fields: {
 *     txt_typo: {
 *       values: [
 *         "TYPO_E_GE",
 *         "TYPO_A_10",
 *         "TYPO_A_9",
 *         "TYPO_A_8",
 *         "TYPO_A_7",
 *         "TYPO_A_6",
 *         "TYPO_A_5",
 *         "TYPO_A_4",
 *         "TYPO_A_3",
 *         "TYPO_A_2",
 *         "TYPO_A_1",
 *       ],
 *     },
 *     symbo: {
 *       values: ["LIEU-DIT-HABITE", "QUARTIER", "COMMUNE_CHEF_LIEU", "COMMUNE_FUSIONNEE"],
 *     },
 *   },
 * };

 * Sans documentation difficile de s'y retrouver
 * z1 à z7   : commune *       écriture en minuscule
 * z7 à z10  : TYPO_A_*        écriture en majuscule
 * z10 à z13 : BAT_COMMUNE_*   écriture en majuscule
 * z13 à ?   : TYPO_A_*        écriture en minuscule
 *
 * Attention les TYPO_A_ des zooms 7 à 10 ne correspondent pas forcéments avec les zoom > 13.
 * exemple : auxerre
 *    zooms 7 à 10 -> TYPO_A_3
 *    z10 à 13     -> BAT_COMMUNE_2_T
 *    > z13        -> TYPO_A_2
 *
 * la stratégie semble donc de découper en 2: z1 à z13 puis z13 à z20
 *
 * puis pour les zooms 13 à 20
 * TYPO_A_1 à 4 commune et non-commune (cas très peu probable)
 * TYPO_A_5 à 10 commune (cas très peu probable) et non-commune
 * quand bien même le cas se produisait, les règles sont les mêmes...
 */

import { LayerGroupFactory } from "./types";

export const g270_toponyme_localite: LayerGroupFactory = (vars) => {
  const { circleDefaultPaint, cToponyme, toponymeHalo } = vars;
  return [
    {
      id: "toponyme localite n0 typoA10",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 15,
      maxzoom: 18,
      filter: ["match", ["get", "txt_typo"], ["TYPO_A_10", "TYPO_E_GE", "BAT_QUARTIER", "BAT_QUARTIER_T"], true, false],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 15, 11, 17, 13.5],
        "text-allow-overlap": ["step", ["zoom"], false, 16, true],
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Italic"],
      },
      paint: {
        "text-color": ["interpolate", ["linear"], ["zoom"], 15, cToponyme.defaultFadeIn, 17, cToponyme.default],
        ...toponymeHalo,
      },
    },

    {
      id: "toponyme localite n0 typoA9",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 14,
      maxzoom: 18,
      filter: ["==", ["get", "txt_typo"], "TYPO_A_9"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 15, 11.5, 17, 14],
        "text-allow-overlap": ["step", ["zoom"], false, 15, true],
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": ["interpolate", ["linear"], ["zoom"], 14, cToponyme.defaultFadeIn, 16, cToponyme.default],
        ...toponymeHalo,
      },
    },
    {
      id: "toponyme localite n0 typoA8",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 14,
      maxzoom: 18,
      filter: ["==", ["get", "txt_typo"], "TYPO_A_8"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 15, 12, 17, 15],
        "text-allow-overlap": ["step", ["zoom"], false, 15, true],
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": ["interpolate", ["linear"], ["zoom"], 14, cToponyme.defaultFadeIn, 16, cToponyme.default],
        ...toponymeHalo,
      },
    },
    {
      id: "toponyme localite n0 typoA7",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 13,
      maxzoom: 18,
      filter: ["==", ["get", "txt_typo"], "TYPO_A_7"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 15, 13, 17, 16],
        "text-allow-overlap": ["step", ["zoom"], false, 14, true],
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        ...toponymeHalo,
        "text-color": ["interpolate", ["linear"], ["zoom"], 13, cToponyme.defaultFadeIn, 15, cToponyme.default],
      },
    },
    {
      id: "toponyme localite n0 typoA5etA6",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 13,
      maxzoom: 17,
      filter: ["match", ["get", "txt_typo"], ["TYPO_A_5", "TYPO_A_6"], true, false],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 15, 15, 17, 18],
        "text-allow-overlap": true,
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },

    {
      id: "toponyme localite n0 typoA4",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 13,
      maxzoom: 16,
      filter: ["==", ["get", "txt_typo"], "TYPO_A_4"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": 17,
        "text-allow-overlap": true,
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },

    {
      id: "toponyme localite n0 typoA3",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 13,
      maxzoom: 16,
      filter: ["==", ["get", "txt_typo"], "TYPO_A_3"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": 19,
        "text-allow-overlap": true,
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Semibold"],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },
    {
      id: "toponyme localite n0 typoA2",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 13,
      maxzoom: 16,
      filter: ["==", ["get", "txt_typo"], "TYPO_A_2"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": 21,
        "text-allow-overlap": true,
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Semibold"],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },

    {
      id: "toponyme localite n0 typoA1",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 13,
      maxzoom: 16,
      filter: ["==", ["get", "txt_typo"], "TYPO_A_1"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": 23,
        "text-allow-overlap": true,
        "text-anchor": "center",
        "text-padding": 1,
        "text-font": ["Source Sans Pro Bold"],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },

    /**
     * zooms inférieurs à 13
     */
    {
      id: "cercle localite z11 à z13",
      type: "circle",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 11,
      maxzoom: 13,
      paint: {
        ...circleDefaultPaint,
        "circle-radius": [
          "match",
          ["get", "txt_typo"],
          [
            "BAT_ANCIENNE_COM",
            "BAT_ANCIENNE_COM_T",
            "BAT_CHEF_LIEU_COM",
            "BAT_CHEF_LIEU_COM-T",
            "BAT_CHEF_LIEU_COM_T",
            "BAT_COMMUNE_5",
            "BAT_COMMUNE_5_T",
            "BAT_COMMUNE_ASSOCIEE",
            "BAT_COMMUNE_ASSOCIEE_T",
            "Commune très petite",
            "TYPO_A_6",
            "TYPO_A_7",
            "BAT_HAMEAU",
            "BAT_HAMEAU_T",
          ],
          2,
          3,
        ],
      },
    },
    {
      id: "cercle localite z10 à z11",
      type: "circle",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 10,
      maxzoom: 11,
      filter: [
        "match",
        ["get", "txt_typo"],
        [
          "BAT_ANCIENNE_COM",
          "BAT_ANCIENNE_COM_T",
          "BAT_CHEF_LIEU_COM",
          "BAT_CHEF_LIEU_COM-T",
          "BAT_CHEF_LIEU_COM_T",
          "BAT_COMMUNE_5",
          "BAT_COMMUNE_5_T",
          "BAT_COMMUNE_ASSOCIEE",
          "BAT_COMMUNE_ASSOCIEE_T",
          "Commune très petite",
          "TYPO_A_6",
          "TYPO_A_7",
          "BAT_HAMEAU",
          "BAT_HAMEAU_T",
        ],
        false,
        true,
      ],
      paint: {
        ...circleDefaultPaint,
        "circle-radius": [
          "match",
          ["get", "txt_typo"],
          ["BAT_COMMUNE_1_T", "BAT_COMMUNE_1", "BAT_COMMUNE_2_T", "BAT_COMMUNE_2", "BAT_COMMUNE_3", "BAT_COMMUNE_3_T"],
          3,
          2,
        ],
      },
    },
    {
      id: "cercle localite z7 à z10",
      type: "circle",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 7,
      maxzoom: 10,
      filter: ["match", ["get", "txt_typo"], ["TYPO_A_1", "TYPO_A_2", "TYPO_A_3", "TYPO_A_4"], true, false],
      paint: {
        ...circleDefaultPaint,
        "circle-radius": ["match", ["get", "txt_typo"], ["TYPO_A_1", "TYPO_A_2"], 3, 2],
      },
    },

    {
      id: "toponyme localite hameau ",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 11,
      maxzoom: 13,
      filter: ["match", ["get", "txt_typo"], ["BAT_HAMEAU", "BAT_HAMEAU_T"], true, false],
      layout: {
        "icon-image": "Localite",
        "icon-size": 0.17,
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": 11,
        "text-allow-overlap": false,
        "text-anchor": "bottom-left",
        "text-offset": [0.3, 0.1],
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": ["interpolate", ["linear"], ["zoom"], 11, cToponyme.defaultFadeIn, 12, cToponyme.default],

        ...toponymeHalo,
      },
    },

    {
      id: "toponyme localite importance 5 bis",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      /**
       * accessible dès le zoom 10 mais trop d'informations à la fois
       */
      minzoom: 11,
      maxzoom: 13,
      filter: [
        "match",
        ["get", "txt_typo"],
        [
          "BAT_ANCIENNE_COM",
          "BAT_ANCIENNE_COM_T",
          "BAT_CHEF_LIEU_COM",
          "BAT_CHEF_LIEU_COM-T",
          "BAT_CHEF_LIEU_COM_T",
          "BAT_COMMUNE_5",
          "BAT_COMMUNE_5_T",
          "BAT_COMMUNE_ASSOCIEE",
          "BAT_COMMUNE_ASSOCIEE_T",
          "Commune très petite",
          /** je retire en connaissance de cause TYPO_A_5 car il rentre en conflit avec BAT_COMMUNE_4
           *  et de toute façon il correspond à des niveaux de zoom (z7 à 10) pas compatible
           *
           * et j'ajoute "TYPO_A_6", "TYPO_A_7" spécifique aux DOM-TOMs ?
           */
          "TYPO_A_6",
          "TYPO_A_7",
        ],
        true,
        false,
      ],
      layout: {
        "icon-image": "Localite",
        "icon-size": 0.21,
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 11, 11, 12, 12],
        // désactivé car risque de conflit entre BAT_COMMUNE_5 et BAT_CHEF_LIEU_COM entre les zooms 12 et 13
        // "text-allow-overlap": ["step", ["zoom"], false, 12, true],
        "text-allow-overlap": false,
        "text-anchor": "bottom-left",
        "text-offset": [0.3, 0.1],
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        // "text-color": "green",
        "text-color": ["interpolate", ["linear"], ["zoom"], 11, cToponyme.defaultFadeIn, 12, cToponyme.default],
        ...toponymeHalo,
      },
    },

    {
      id: "toponyme localite importance 4",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 7,
      maxzoom: 13,
      filter: ["match", ["get", "txt_typo"], ["BAT_COMMUNE_4", "BAT_COMMUNE_4_T", "TYPO_A_4"], true, false],
      layout: {
        "icon-image": "Localite",
        "icon-size": 0.21,
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 7, 12, 8, 13, 12, 13],
        "text-allow-overlap": ["step", ["zoom"], false, 11, true],
        "text-anchor": "bottom-left",
        "text-offset": [0.3, 0.1],
        "text-padding": 1,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": ["interpolate", ["linear"], ["zoom"], 7, cToponyme.defaultFadeIn, 9, cToponyme.default],
        ...toponymeHalo,
      },
    },
    {
      id: "toponyme localite importance 3",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 5,
      maxzoom: 13,
      /**
       * il semble que les commune 3 deviennent des TYPO_A_3 qui deviennent des BAT_COMMUNE_2
       * je laisse cependant les filtres en état car toute tentative est pire que l'existant
       */
      filter: [
        "match",
        ["get", "txt_typo"],
        ["commune 3", "TYPO_A_3", "BAT_COMMUNE_3", "BAT_COMMUNE_3_T"],
        true,
        false,
      ],
      layout: {
        "icon-image": "Localite",
        "icon-size": 0.21,
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 6, 12, 7, 15, 11, 15],
        "text-allow-overlap": ["step", ["zoom"], false, 9, true],
        "text-anchor": "bottom-left",
        "text-offset": [0.3, 0.1],
        "text-padding": 1,
        "text-font": [
          "step",
          ["zoom"],
          ["literal", ["Source Sans Pro Regular"]],
          9,
          ["literal", ["Source Sans Pro Semibold"]],
        ],
      },
      paint: {
        "text-color": ["interpolate", ["linear"], ["zoom"], 6, cToponyme.defaultFadeIn, 8, cToponyme.default],
        ...toponymeHalo,
      },
    },
    {
      id: "toponyme localite importance 2",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 5,
      maxzoom: 13,
      filter: [
        "match",
        ["get", "txt_typo"],
        ["commune 2", "TYPO_A_2", "BAT_COMMUNE-2", "BAT_COMMUNE_2", "BAT_COMMUNE_2_T"],
        true,
        false,
      ],
      layout: {
        "icon-image": "Localite",
        "icon-size": 0.25,
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 5, 12, 6, 15, 10, 17],
        "text-allow-overlap": ["step", ["zoom"], false, 7, true],
        "text-anchor": "bottom-left",
        "text-offset": [0.3, 0.2],
        "text-padding": 1,
        "text-font": [
          "step",
          ["zoom"],
          ["literal", ["Source Sans Pro Regular"]],
          6,
          ["literal", ["Source Sans Pro Semibold"]],
          9,
          ["literal", ["Source Sans Pro Bold"]],
        ],
      },
      paint: {
        "text-color": ["interpolate", ["linear"], ["zoom"], 5, cToponyme.defaultFadeIn, 7, cToponyme.default],
        ...toponymeHalo,
      },
    },

    /**
   * commune 1 : capitales des pays
   * on n'a aucune logique
   * mulhouse TYPO_A_2 -> BAT_COMMUNE_1_T
   *

   */
    {
      id: "toponyme localite importance 1",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 4,
      maxzoom: 13,
      filter: [
        "match",
        ["get", "txt_typo"],
        ["commune 1", /* z7 -> z10 et >z13 */ "TYPO_A_1", /* z10 -> z13 */ "BAT_COMMUNE_1_T", "BAT_COMMUNE_1"],
        true,
        false,
      ],
      layout: {
        "icon-image": "Localite",
        "icon-size": 0.3,
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 5, 16, 8, 20],
        "text-allow-overlap": ["step", ["zoom"], false, 6, true],
        "text-anchor": "bottom-left",
        "text-offset": [0.25, -0.1],
        "text-padding": 1,
        "text-font": [
          "step",
          ["zoom"],
          ["literal", ["Source Sans Pro Regular"]],
          6,
          ["literal", ["Source Sans Pro Bold"]],
        ],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },

    {
      id: "cercle localite z5 à z7",
      type: "circle",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 5,
      maxzoom: 7,
      filter: ["match", ["get", "txt_typo"], ["commune 1", "commune 2", "commune 3"], true, false],
      paint: {
        ...circleDefaultPaint,
        "circle-radius": ["match", ["get", "txt_typo"], "commune 1", 3, 2],
      },
    },
    {
      id: "toponyme pays secondaire",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 3,
      maxzoom: 6,
      filter: ["==", ["get", "txt_typo"], "pays 3"],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 4, 13, 7, 20],
        "text-allow-overlap": ["step", ["zoom"], false, 5, true],
        "text-anchor": "center",
        "text-padding": 2,
        "text-font": ["Source Sans Pro Semibold"],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },

    {
      id: "toponyme pays principal",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_localite_ponc",
      minzoom: 2,
      maxzoom: 6,
      filter: ["match", ["get", "txt_typo"], ["pays 2", "pays 1"], true, false],
      layout: {
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 1, 9, 6, 25],
        "text-allow-overlap": true,
        "text-anchor": "center",
        "text-padding": 2,
        "text-font": ["Source Sans Pro Semibold"],
      },
      paint: {
        "text-color": cToponyme.default,
        ...toponymeHalo,
      },
    },
  ];
};
