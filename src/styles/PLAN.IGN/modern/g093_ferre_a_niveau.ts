import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { ferre } from "./vars";

export const g093_ferre_a_niveau: LayerSpecification[] = [
  {
    id: "ferreNiveau - voie normale",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 10,
    filter: [
      "match",
      ["get", "symbo"],
      ["VF_1", "VF_2", "VF_3", "VF_4", "VF_ELEC_1", "VF_ELEC_2", "VF_ELEC_3", "VF_ELEC_4"],
      true,
      false,
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ferre.c,
      "line-width": ferre.w,
    },
  },
  {
    id: "ferreNiveau - voie etroite, funic/urbain",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 10,
    filter: [
      "match",
      ["get", "symbo"],
      ["VF_ETROITE", "VF_ETROITE_1", "VF_ETROITE_2", "FUNI_CREMAILLERE", "TRANSPORT_URBAIN"],
      true,
      false,
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ferre.c,
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
    },
  },

  {
    id: "ferreNiveau - voie service, voie en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 14,
    filter: ["match", ["get", "symbo"], ["VF_NON_EXPLOITEE", "VF_SERVICE", "VF_EN_CONSTR"], true, false],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ferre.c,
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
      "line-dasharray": [5, 2, 1, 2],
    },
  },
  {
    id: "ferreNiveau - trait perpendic",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 10,
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ferre.c,
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
];
