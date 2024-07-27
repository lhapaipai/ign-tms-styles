import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

/**
 * oro_lin : lignes de falaises. on n'en trouve pas beaucoup en haute savoie
 * à part vers les carrières de pierres.
 *
 * les calques `NORMALE` ET `MAITRESSE` n'ont pas été fusionnés ensemble car
 * il ne peux y avoir qu'une seule interpolation par calque.
 */

// const cSol = "#604a2f"; // "#D9C8A9"
// const cRocher = "#333333"; // "#AAAAAA"
// const cGlacier = "#629FD9"; // "#A4BFD9"

export const g030_oro: LayerSpecification[] = [
  {
    id: "oro - courbe et cuvette maitresse",
    type: "line",
    source: "plan_ign",
    "source-layer": "oro_courbe",
    minzoom: 10,
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "CNV_MAITRESSE",
        "CUVETTE_MAITRESSE",
        "CNV_GLACIER_MAITRESSE",
        "CUV_GLACIER_MAITRESSE",
        "CNV_ROCHER_MAITRESSE",
        "CUV_ROCHER_MAITRESSE",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": [
        "match",
        ["get", "symbo"],
        ["CNV_MAITRESSE", "CUVETTE_MAITRESSE"],
        "#D9C8A9",
        ["CNV_GLACIER_MAITRESSE", "CUV_GLACIER_MAITRESSE"],
        "#A4BFD9",
        ["CNV_ROCHER_MAITRESSE", "CUV_ROCHER_MAITRESSE"],
        "#aaaaaa",
        "#D9C8A9",
      ],
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.7, 15, 2, 18, 4],
    },
  },
  {
    id: "oro - courbe et cuvette normale",
    type: "line",
    source: "plan_ign",
    "source-layer": "oro_courbe",
    minzoom: 10,
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "CNV_MAITRESSE",
        "CUVETTE_MAITRESSE",
        "CNV_GLACIER_MAITRESSE",
        "CUV_GLACIER_MAITRESSE",
        "CNV_ROCHER_MAITRESSE",
        "CUV_ROCHER_MAITRESSE",
      ],
      false,
      true,
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": [
        "match",
        ["get", "symbo"],
        ["CNV_NORMALE", "CUVETTE_NORMALE"],
        "#d9d1c2",
        ["CNV_GLACIER_NORMALE", "CUV_GLACIER_NORMALE"],
        "#A4BFD9",
        ["CNV_ROCHER_NORMALE", "CUV_ROCHER_NORMALE"],
        "#AAAAAA",
        "#d9d1c2",
      ],
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1, 15, 1.2, 18, 2],
    },
  },

  {
    id: "oro lin - talus",
    type: "line",
    source: "plan_ign",
    "source-layer": "oro_lin",
    minzoom: 14,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "TALUS"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#D9C8A9", "line-width": 1 },
  },
  {
    id: "oro lin - talus - trait perpendiculaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "oro_lin",
    minzoom: 14,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "TALUS"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#D9C8A9",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 7, 16, 9],
      "line-dasharray": [0.1, 1],
      "line-offset": 4,
    },
  },

  /**
   * les informations d'altitude pour le zoom 12-13 sont contenues dans le champ texte de toponyme_oro_ponc
   */

  {
    id: "oro toponyme - cote de courbe z12-13",
    type: "symbol",
    source: "plan_ign",
    minzoom: 12,
    maxzoom: 13,
    "source-layer": "toponyme_oro_ponc",
    filter: ["match", ["get", "txt_typo"], ["ORO_COURBE_ROCHER", "ORO_COURBE_GLACIER", "ORO_COURBE"], true, false],
    layout: {
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10,
      "text-allow-overlap": true,
      "text-padding": 30,
      "text-rotate": ["get", "rotation"],
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": [
        "match",
        ["get", "txt_typo"],
        "ORO_COURBE_ROCHER",
        "#333333",
        "ORO_COURBE_GLACIER",
        "#629FD9",
        "#604A2F",
      ],
      "text-halo-color": "#fff",
      "text-halo-width": 1,
    },
  },
  /**
   * ensuite, les informations d'altitude pour le zoom 13-13 sont contenues dans le champ texte de oro_courbe
   */
  {
    id: "oro toponyme - cote de courbe z13+",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "oro_courbe",
    minzoom: 13,
    maxzoom: 18,
    filter: [
      "all",
      ["!=", ["get", "texte"], "0"],
      ["==", ["get", "hors_zone"], true],
      [
        "match",
        ["get", "symbo"],
        [
          "CNV_MAITRESSE",
          "CUVETTE_MAITRESSE",
          "CNV_ROCHER_MAITRESSE",
          "CUV_ROCHER_MAITRESSE",
          "CNV_GLACIER_MAITRESSE",
          "CUV_GLACIER_MAITRESSE",
        ],
        true,
        false,
      ],
    ],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 10, 15, 13],
      "text-anchor": "center",
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "viewport",
      "text-keep-upright": false,
      "text-max-angle": 20,
      "text-max-width": 100,
      "text-font": ["Source Sans Pro Italic"],
      "text-allow-overlap": true,
    },
    paint: {
      "text-color": [
        "match",
        ["get", "symbo"],
        ["CNV_MAITRESSE", "CUVETTE_MAITRESSE"],
        "#604A2F",
        ["CNV_GLACIER_MAITRESSE", "CUV_GLACIER_MAITRESSE"],
        "#629FD9",
        ["CNV_ROCHER_MAITRESSE", "CUV_ROCHER_MAITRESSE"],
        "#333333",
        "#604A2F",
      ],
      "text-halo-width": 0.5,
      "text-halo-color": "#FFFFFF",
    },
  },
];
