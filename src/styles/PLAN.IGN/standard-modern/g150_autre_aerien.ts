import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g150_autre_aerien: LayerSpecification[] = [
  {
    id: "autre ligne electrique",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["==", ["get", "symbo"], "LIGNE_ELECTRIQUE"],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    minzoom: 12,
    maxzoom: 20,
    paint: {
      "line-color": "#d6d3d1",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.5, 13, 1.5, 17, 2],
    },
  },
  /**
   * Déplacé depuis g160 pour le mettre avec la ligne électrique
   */
  {
    id: "bati pylone électrique",
    type: "circle",
    source: "plan_ign",
    "source-layer": "bati_ponc",
    filter: ["==", ["get", "symbo"], "PYLONE_ELEC"],
    minzoom: 13,
    maxzoom: 20,

    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 13, 1.6, 17, 4],
      "circle-color": "#57534e",
    },
  },
  {
    id: "autre construction linéaire",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    minzoom: 11,
    maxzoom: 20,
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
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 11, "#d6d3d1", 15, "#a8a29e"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 11, 0.5, 13, 1.5, 17, 2],
    },
  },
  {
    id: "autre construction linéaire - trait perpend cable ou remontée",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    minzoom: 11,
    filter: ["match", ["get", "symbo"], ["REMONTEE_MEC", "CABLE", "CONDUITE_MATIERES_P", "HYDROCARBURES"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 11, "#d6d3d1", 15, "#78716c"],
      "line-width": 4,
      "line-dasharray": [0.5, 10],
    },
  },
];
