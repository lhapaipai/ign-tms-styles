import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g150_autre_aerien: LayerSpecification[] = [
  {
    id: "ligne electrique",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["==", ["get", "symbo"], "LIGNE_ELECTRIQUE"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#808080",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1, 17, 2],
    },
  },
  {
    id: "bati ponctuel infrastructure - pylone électrique",
    type: "circle",
    source: "plan_ign",
    "source-layer": "bati_ponc",
    filter: ["==", ["get", "symbo"], "PYLONE_ELEC"],
    layout: { visibility: "visible" },
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 13, 1, 17, 2],
      "circle-color": "#000000",
    },
  },
  {
    id: "autre construction linéaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: [
      "match",
      ["get", "symbo"],
      [
        "CABLE",
        "CONDUITE_MATIERES_P",
        "HYDROCARBURES",
        "PISTE_AERO_LIN",
        "PISTE_BOBSLEIGH",
        "PISTE_LUGE",
        "REMONTEE_MEC",
        "SPORT_MONTAGNE_LIN",
      ],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#808080", "line-width": 1 },
  },
  {
    id: "autre construction linéaire - trait perpend cable",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["==", ["get", "symbo"], "CABLE"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#808080",
      "line-width": 5,
      "line-dasharray": [0.5, 10],
    },
  },
  {
    id: "autre construction linéaire - trait perpend 1 remont",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["==", ["get", "symbo"], "REMONTEE_MEC"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#808080",
      "line-width": 6,
      "line-dasharray": [1, 10],
    },
  },
  {
    id: "autre construction linéaire - trait perpend 2 remont",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["==", ["get", "symbo"], "REMONTEE_MEC"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#BEBEBE",
      "line-width": 6,
      "line-dasharray": [0.3, 0.4, 0.3, 10],
    },
  },
  {
    id: "autre construction linéaire - trait perpend carbur",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["match", ["get", "symbo"], ["CONDUITE_MATIERES_P", "HYDROCARBURES"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#808080",
      "line-width": 5,
      "line-dasharray": [1, 10],
    },
  },
];
