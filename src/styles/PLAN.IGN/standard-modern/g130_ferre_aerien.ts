import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g130_ferre_aerien: LayerSpecification[] = [
  {
    id: "ferreSuperieur - voie normale",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sup",
    minzoom: 10,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "VF_1_SUP",
        "VF_2_SUP",
        "VF_3_SUP",
        "VF_4_SUP",
        "VF_ELEC_1_SUP",
        "VF_ELEC_2_SUP",
        "VF_ELEC_3_SUP",
        "VF_ELEC_4_SUP",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.8, 17, 2.5],
    },
  },
  {
    id: "ferreSuperieur - voie etroite",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sup",
    minzoom: 10,
    filter: [
      "match",
      ["get", "symbo"],
      ["VF_ETROITE_1_SUP", "VF_ETROITE_2_SUP", "VF_ETROITE_SUP", "FUNI_CREMAILLERE_SUP", "TRANSPORT_URBAIN_SUP"],
      true,
      false,
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
    },
  },

  {
    id: "ferreSuperieur - voie service",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sup",
    minzoom: 14,
    filter: ["match", ["get", "symbo"], ["VF_NON_EXPLOITEE_SUP", "VF_SERVICE_SUP", "VF_EN_CONSTR_SUP"], true, false],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
      "line-dasharray": [5, 2, 1, 2],
    },
  },
  {
    id: "ferreSuperieur - trait perpendic",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sup",
    minzoom: 10,
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
];
