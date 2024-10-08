import { LayerGroupFactory } from "./types";

// const metadata = [
//   {
//     id: "bati_ponc",
//     geometry: "GEOMETRY",
//     maxzoom: "19",
//     minzoom: "4",
//     fieldsCount: "4",
//     fields: {
//       territoire: {
//         attribute: "territoire",
//         count: 7.0,
//         type: "character varying",
//         values: ["MYT", "SPM", "MTQ", "REU", "GLP", "GUF", "FXX"],
//       },
//       rotation: { attribute: "rotation", count: 1.0, type: "integer", min: 0.0, max: 0.0 },
//       niveau: { attribute: "niveau", count: 1.0, type: "text", values: ["n0"] },
//       symbo: { attribute: "symbo", count: 74.0, type: "character varying" },
//     },
//   },
//   {
//     id: "toponyme_bati_ponc",
//     geometry: "GEOMETRY",
//     maxzoom: "19",
//     minzoom: "11",
//     fieldsCount: "6",
//     fields: {
//       txt_typo: {
//         attribute: "txt_typo",
//         count: 13.0,
//         type: "text",
//         values: [
//           "TYPO_E_1",
//           "TYPO_E_GE",
//           "TYPO_A_5",
//           "TYPO_C_7",
//           "zai",
//           "divers_bati",
//           "religieux",
//           "TYPO_C_9",
//           "station",
//           "TYPO_A_7",
//           "TYPO_C_8",
//           "TYPO_C_6",
//         ],
//       },
//       symbo: {
//         attribute: "symbo",
//         count: 25.0,
//         type: "text",
//         values: [
//           "CENTRALE_ELECTRIQUE",
//           "GARE_VOYAGEURS",
//           "ABBAYE",
//           "ZAI",
//           "CHATEAU_FORT",
//           "AEROGARE",
//           "STADE",
//           "HIPPODROME",
//           "PARC_ATTRACTIONS",
//         ],
//       },
//       niveau: { attribute: "niveau", count: 1.0, type: "text", values: ["n0"] },
//       texte: { attribute: "texte", count: 102757.0, type: "character varying" },
//       territoire: {
//         attribute: "territoire",
//         count: 7.0,
//         type: "character varying",
//         values: ["MYT", "SPM", "REU", "MTQ", "GLP", "GUF", "FXX"],
//       },
//       designation: { attribute: "designation", count: 74.0, type: "text" },
//     },
//   },
// ];
/**
 * vérifier si on doit faire du cas par cas pour les bati ponctuels avec les minzoom/maxzoom notamment
 * le barrage qui a un minzoom/maxzoom: 12/14
 *
 */
/**
 * lorsque les zooms sont plus élevés le bati_ponc est remplacé par un bati_surf
 * il est important d'être cohérent avec le passage de couleurs
 */

export const g160_bati_ponctuel: LayerGroupFactory = (vars) => {
  const { bati, cHydro, cOroCourbe } = vars;
  return [
    {
      id: "routier ponctuel - barriere",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "routier_ponc",
      minzoom: 14,
      filter: ["==", ["get", "symbo"], "BARRIERE"],
      layout: {
        "icon-image": "barriere",
        "icon-size": ["interpolate", ["linear"], ["zoom"], 14, 0.5, 16, 1],
        "icon-allow-overlap": true,
        "icon-rotate": ["get", "rotation"],
      },
    },
    {
      id: "point coté",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "oro_ponc",
      minzoom: 11,
      maxzoom: 16,
      filter: [
        "match",
        ["get", "symbo"],
        ["POINT_COTE", "POINT_COTE_RESEAU", "POINT_COTE_TOPO", "POINT_RBF"],
        true,
        false,
      ],
      layout: {
        "symbol-placement": "point",
        "icon-image": "Localite",
        "icon-size": 0.1,
        "text-field": ["to-string", ["get", "texte"]],
        "text-size": 10,
        "text-allow-overlap": false,
        "text-anchor": "bottom-left",
        "text-offset": [0.2, 0.4],
        "text-padding": 2,
        "text-font": ["Source Sans Pro Italic"],
      },
      paint: { "text-color": cOroCourbe.sol.text },
    },
    {
      id: "hydro ponctuel",
      type: "circle",
      source: "plan_ign",
      "source-layer": "hydro_ponc",
      minzoom: 13,
      filter: [
        "match",
        ["get", "symbo"],
        ["AUTRE_HYDRO_PONC", "CASCADE", "PERTE", "POINT_D_EAU", "RESURGENCE", "SOURCE", "SOURCE_CAPTEE"],
        true,
        false,
      ],
      paint: {
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 14, 3, 17, 7],
        "circle-color": cHydro.default[0],
        "circle-opacity": 1,
        "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 17, 3],
        "circle-stroke-color": cHydro.default[1],
      },
    },
    {
      id: "hydro ponctuel avec image",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "hydro_ponc",
      minzoom: 14,
      filter: ["match", ["get", "symbo"], ["FONTAINE"], true, false],
      layout: {
        "icon-image": "fontaine",
      },
    },
    /************************************************* */

    {
      id: "bati Réservoir d'eau",
      type: "circle",
      source: "plan_ign",
      "source-layer": "bati_ponc",
      maxzoom: 15,
      filter: ["==", ["get", "symbo"], "RESERVOIR_EAU_PONC"],
      paint: {
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 14, 3, 17, 8],
        "circle-color": bati.hydro.cFill,
        "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 17, 2.5],
        "circle-stroke-color": bati.hydro.cLine,
      },
    },
    {
      id: "bati Puits-Abreuvoir",
      type: "circle",
      source: "plan_ign",
      "source-layer": "bati_ponc",
      minzoom: 13,
      filter: ["match", ["get", "symbo"], ["ABREUVOIR", "PUITS"], true, false],
      paint: {
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 14, 3, 17, 7],
        "circle-color": bati.hydro.cFill,
        "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 14, 2, 17, 5],
        "circle-stroke-color": bati.hydro.cLine,
      },
    },
    {
      id: "bati Chateau d'eau",
      type: "circle",
      source: "plan_ign",
      "source-layer": "bati_ponc",
      filter: ["==", ["get", "symbo"], "CHATEAU_EAU_PONC"],
      paint: {
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 14, 3, 17, 9],
        "circle-color": bati.hydro.cFill,
        "circle-opacity": 1,
        "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 14, 3, 17, 7.5],
        "circle-stroke-color": bati.hydro.cLine,
      },
    },
    /**
     * dans un calque séparé car visible à un niveau de zoom très bas
     */
    {
      id: "bati ponctuel aeroport",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "bati_ponc",
      minzoom: 7,
      maxzoom: 20,
      // not match
      filter: ["match", ["get", "symbo"], ["AEROPORT_PONC", "AERODROME_IMPORT_PONC", "AERODROME_PONC"], true, false],
      layout: {
        "icon-allow-overlap": true,
        "icon-image": [
          "match",
          ["get", "symbo"],
          ["AEROPORT_PONC", "AERODROME_IMPORT_PONC", "AERODROME_PONC"],
          "aeroport",
          "question",
        ],
        "icon-rotate": ["get", "rotation"],
      },
    },

    {
      id: "bati ponctuel reste",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "bati_ponc",
      // refuge à partir z12
      // gare à partir de z10 -> un peu trop tôt
      minzoom: 11,
      maxzoom: 20,
      // not match
      filter: [
        "match",
        ["get", "symbo"],
        [
          "RESERVOIR_EAU_PONC",
          "CHATEAU_EAU_PONC",
          "ABREUVOIR",
          "PUITS",
          "AEROPORT_PONC",
          "AERODROME_IMPORT_PONC",
          "AERODROME_PONC",

          // nous ne voulons pas afficher leur icône
          "CLOCHER", // souvent collé à EGLISE risque de doublon
          "PYLONE_ELEC",
          "TOUR_MOULIN_PONC", // voir bonneville
          "RELIGIEUX_QQUE_PONC",
          "SITE_REM_PONC", // ??

          // nous utiliserons à la place `toponyme_localite_ponc`
          "LOCALITE_PONC",
          "LOCALITE_PONC_PETIT",
        ],
        false,
        true,
      ],
      layout: {
        "icon-image": [
          "match",
          ["get", "symbo"],
          "HOPITAL_PONC",
          "hopital",
          ["CITERNE", "LAVOIR", "STATION_DE_POMPAGE", "STATION_EPURATION", "USINE_ELEVATRICE", "USINE_PRODUCTION_EAU"],
          "station-eau",
          "PHARE",
          "phare",
          ["AMER", "FEU", "FEU_PONC", "TOURELLE_LUMINEUSE"],
          "feu",
          ["BALISE", "TOURELLE"],
          "balise",
          "ECLUSE_PONC",
          "ecluse",
          "BARRAGE_PONC",
          "barrage",
          [
            "ANTENNE",
            "CHEMINEE",
            "CHEVALEMENT",
            "CONSTR_INDIF_PONC",
            "CONSTR_SPE_TECHNIQUE",
            "POSTE_GAZ",
            "PUITS_GAZ",
            "PUITS_PETROLE",
            "PYLONE_METEO",
            "TORCHERE",
            "TOUR_GUET",
            "TOUR_HERTZIENNE",
          ],
          "construction-speciale",
          "SILO_PONC",
          "silo",
          "EOLIENNE",
          "eolienne",
          "RESERVOIR_PONC",
          "reservoir",
          ["STADE", "STADE_PONC", "HIPPODROME"],
          "stade",
          "ABRI",
          "abri",
          ["CROIX", "ORATOIRE_PONC", "STELE", "TOMBEAU", "VIERGE"],
          "croix",
          "CHAPELLE",
          "chapelle",
          "TRANSFORMATEUR",
          "electricite",
          ["MONUMENT_PONC", "STATUE", "MONUMENT_PONC_COMP"],
          "monument",
          ["EDIFICE_REMARQUABLE", "CURIOSITE", "POINT_DE_VUE"],
          "pov",
          ["CATHEDRALE", "ABBAYE", "COUVENT", "BASILIQUE", "PRIEURE"],
          "culte",
          ["CULTE_MUSULMAN", "CULTE_ISRAELITE", "CULTE_CHRETIEN", "AUTRE_CULTE"],
          "priere",
          "REFUGE_GARDE",
          "refuge-garde",
          "REFUGE",
          "refuge-non-garde",
          ["AEROPORT_PONC", "AERODROME_IMPORT_PONC", "AERODROME_PONC"],
          "aeroport",
          "CHATEAU_PONC",
          "chateau",
          "FORTIF_PONC",
          "fortification",
          "GARE_VOYAGEURS",
          "train",
          "MOSQUEE",
          "religion-musulmane",
          ["EGLISE", "CHRETIEN_PONC"],
          "religion-chretienne",
          "SYNAGOGUE",
          "religion-juive",
          "STATION_METRO",
          "metro",
          "question",
        ],
        "icon-rotate": ["get", "rotation"],
      },
    },
  ];
};
