import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
// const metadata = [
//   {
//     id: "bati_lin",
//     geometry: "GEOMETRY",
//     maxzoom: "19",
//     minzoom: "11",
//     fieldsCount: "3",
//     fields: {
//       symbo: {
//         attribute: "symbo",
//         count: 23.0,
//         type: "character varying",
//         values: [
//           "MUR",

//           "REMONTEE_MEC",
//           "TREMPLIN_SKI",
//           "CABLE",
//           "HYDROCARBURES",
//           "PECHERIE_LIN",
//           "MUR_PARAVALANCHE",
//           "PORTIQUE_PORTUAIRE",
//           "PISTE_LUGE",
//           "PECHE_AU_CARRELET",
//           "DIGUE",
//           "LIGNE_ELECTRIQUE",
//           "MUR_SOUTENEMENT",
//           "GRUE_PORTUAIRE",
//           "CONDUITE_MATIERES_P",
//           "TERRASSE",
//           "QUAI",
//           "RUINE_LIN",
//           "BARRAGE_LIN",
//           "PELOTE_BASQ_LIN",
//           "PISTE_BOBSLEIGH",
//           "MUR_PIERRES_SECHES",
//           "SPORT_MONTAGNE_LIN",
//         ],
//       },
//       niveau: { attribute: "niveau", count: 1.0, type: "text", values: ["n0"] },
//       territoire: {
//         attribute: "territoire",
//         count: 7.0,
//         type: "character varying",
//         values: ["MYT", "SPM", "REU", "MTQ", "GLP", "GUF", "FXX"],
//       },
//     },
//   },
// ];

/**
 * Certains éléments aérien de `bati_lin` comme les cables et les remontées
 * mécaniques apparaissent dans g150_autre_aerien
 */
export const g080_bati_lineaire: LayerSpecification[] = [
  {
    id: "construction linéaire - au sol",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    minzoom: 13,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      ["MUR", "MUR_PARAVALANCHE", "FORTIF_LIN", "MUR_SOUTENEMENT", "RUINE_LIN", "PECHERIE_LIN"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#a8a29e", "line-width": ["interpolate", ["linear"], ["zoom"], 15, 0.1, 16, 1, 19, 4] },
  },
  {
    id: "construction hydrographique linéaire - Barrage",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    minzoom: 13,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "BARRAGE_LIN"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#e7e5e4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.5, 16, 7, 18, 20],
    },
  },
  {
    id: "construction hydrographique linéaire - Quai",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    /**
     * la donnée est présente dès le zoom 12 mais est trop fine et a une précision trop faible
     * voir la digue de la pointe de l'aiguillon vers la rochelle
     */
    minzoom: 13,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["DIGUE", "QUAI"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#a8a29e",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 17, 2.5],
    },
  },
];
