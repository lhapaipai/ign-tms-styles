import { LayerGroupFactory } from "./types";

export const g150_autre_aerien: LayerGroupFactory = (vars) => {
  const { aerien } = vars;
  return [
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
        "line-color": aerien.cLigneElec,
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
        "circle-color": aerien.cPylone,
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
        "line-color": aerien.cLigneAutre,
        "line-width": ["interpolate", ["linear"], ["zoom"], 11, 0.5, 13, 1.5, 17, 2],
      },
    },
    {
      id: "autre construction linéaire - trait perpend cable ou remontée",
      type: "line",
      source: "plan_ign",
      "source-layer": "bati_lin",
      minzoom: 11,
      filter: [
        "match",
        ["get", "symbo"],
        ["REMONTEE_MEC", "CABLE", "CONDUITE_MATIERES_P", "HYDROCARBURES"],
        true,
        false,
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "round",
      },
      paint: {
        "line-color": aerien.cPylone,
        "line-width": 4,
        "line-dasharray": [0.75, 10],
      },
    },
  ];
};
