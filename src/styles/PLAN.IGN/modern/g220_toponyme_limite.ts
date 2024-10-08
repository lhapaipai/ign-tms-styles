import { LayerGroupFactory } from "./types";

export const g220_toponyme_limite: LayerGroupFactory = (vars) => {
  const { cText, limite, toponymeHalo } = vars;
  return [
    {
      id: "toponyme - limite ponc",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_limite_ponc",
      layout: {
        visibility: "visible",
        "symbol-placement": "point",
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": [
          "match",
          ["get", "txt_typo"],
          ["LIM_PARC_1", "LIM_PARC_2", "PARC_1", "PARC_2", "PARC_MARIN_1", "PARC_MARIN_2", "LIM_MILI_1", "LIM_MILI_2"],
          15,
          13,
        ],
        "text-allow-overlap": false,
        "text-padding": 5,
        "text-font": ["Source Sans Pro Regular"],
      },
      paint: {
        "text-color": [
          "match",
          ["get", "txt_typo"],
          ["LIM_PARC_1", "LIM_PARC_2", "PARC_1", "PARC_2", "LIM_PARC_3", "LIM_PARC_4", "RESERVE_NATURELLE_PONC"],
          limite.parcNaturel.cText,
          ["LIM_MILI_1", "LIM_MILI_2", "LIM_MILI_3", "LIM_MILI_4"],
          limite.militaire.cText,
          ["PARC_MARIN_1", "PARC_MARIN_2"],
          limite.parcMarin.cText,
          cText,
        ],
        ...toponymeHalo,
      },
    },
  ];
};
