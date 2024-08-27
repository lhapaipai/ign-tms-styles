import { DataDrivenPropertyValueSpecification } from "@maplibre/maplibre-gl-style-spec";
import { LayerGroupFactory } from "./types";

const importantLineaire = [
  "OCEAN_MER",
  "HYD-LIN-1",
  "HYD_LIN_1",
  "HYD_LIN_2",
  "HYD_SURF_1",
  "HYD_SURF_1_T",
  "TYPO_D_1",
  "TYPO_D_2",
  "TYPO_D_3_T",
  "TYPO_D_4_T",
  "TYPO_D_LIN_1",
];

const secondaireSize: DataDrivenPropertyValueSpecification<number> = [
  "interpolate",
  ["linear"],
  ["zoom"],
  14,
  12,
  18,
  19,
];

export const g210_toponyme_hydro: LayerGroupFactory = (vars) => {
  const { cHydro, toponymeHydroHalo } = vars;
  return [
    {
      id: "toponyme - hydro lineaire principal et glacier",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_hydro_lin",
      filter: ["in", ["get", "txt_typo"], ["literal", importantLineaire]],
      layout: {
        "symbol-placement": "line",
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["match", ["get", "txt_typo"], "OCEAN_MER", 30, "ORO_GLACIER_2", 14, 15],
        "text-padding": 10,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        ...toponymeHydroHalo,
        "text-color": cHydro.text,
      },
    },
    {
      id: "toponyme - hydro lineaire secondaire",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_hydro_lin",
      filter: ["!", ["in", ["get", "txt_typo"], ["literal", importantLineaire]]],
      layout: {
        "symbol-placement": "line",
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": secondaireSize,
        "text-padding": 10,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        ...toponymeHydroHalo,
        "text-color": cHydro.text,
      },
    },
    {
      id: "toponyme - hydro ponc ocean",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_hydro_ponc",
      minzoom: 1,
      maxzoom: 6,
      filter: ["==", ["get", "txt_typo"], "ocean"],
      layout: {
        visibility: "visible",
        "symbol-placement": "point",
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 1, 16, 6, 30],
        "text-allow-overlap": true,
        "text-anchor": "center",
        "text-padding": 10,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": cHydro.textOcean,
      },
    },
    {
      id: "toponyme - hydro ponc principal",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_hydro_ponc",
      minzoom: 6,
      filter: [
        "match",
        ["get", "txt_typo"],
        [
          /* toponyme - hydro ponc 1 */
          "HYD_SURF_1",
          "TYPO_D_1",
          "grand",
          "mer",
          /* toponyme - hydro ponc ponc 2 */
          "HYD_SURF_2",
          "TYPO_D_2",
          "moyen",
        ],
        true,
        false,
      ],
      layout: {
        visibility: "visible",
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": 17,
        "text-padding": 10,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        ...toponymeHydroHalo,
        "text-color": cHydro.text,
      },
    },
    {
      id: "toponyme - hydro ponc secondaire",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_hydro_ponc",
      filter: [
        "match",
        ["get", "txt_typo"],
        [
          /* toponyme - hydro ponc 2B */
          "TYPO_D_3",
          "TYPO_D_4",
          /* toponyme - hydro ponc 3 */
          "HYD_SURF_3",
          "TYPO_D_5",
          "TYPO_D_6",
          "TYPO_D_7",
          /* toponyme - hydro ponc 4 */
          "HYD_SURF_4",
          "HYD_SURF_4_T",
          "HYD_SURF_5",
          "HYD_SURF_5_T",
          "SOURCE",
          "TYPO_D_8",
        ],
        true,
        false,
      ],
      layout: {
        visibility: "visible",
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": secondaireSize,
        "text-padding": 10,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        ...toponymeHydroHalo,
        "text-color": cHydro.text,
      },
    },
    {
      id: "toponyme - hydro ponc tertiaire",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_hydro_ponc",
      filter: [
        "match",
        ["get", "txt_typo"],
        [/* toponyme - hydro ponc 5 */ "TYPO_D_10", "TYPO_D_9", "TYPO_E_1_cyan"],
        true,
        false,
      ],
      layout: {
        visibility: "visible",
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": ["interpolate", ["linear"], ["zoom"], 15, 11, 17, 14],
        "text-padding": 5,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        ...toponymeHydroHalo,
        "text-color": cHydro.text,
      },
    },
  ];
};
