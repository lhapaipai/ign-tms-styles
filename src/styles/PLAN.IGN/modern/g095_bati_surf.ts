import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

/**
 * ZAI : Zone d'activité ou d'intérêt
 */

export const g095_bati_surf: LayerSpecification[] = [
  {
    id: "bati surfacique - remplissage",
    type: "fill",
    source: "plan_ign",
    "source-layer": "bati_surf",
    minzoom: 13,
    filter: ["!=", ["get", "symbo"], "BATI_QQUE"],
    paint: {
      "fill-opacity": ["interpolate", ["linear"], ["zoom"], 13, 0, 14, 1],
      "fill-color": [
        "match",
        ["get", "symbo"],
        ["MAIRIE", "MAIRIE_ANNEXE"],
        "#fecaca", // red 200
        ["BATI_COMMERCIAL", "BATI_INDUSTRIEL", "HANGAR", "HANGAR_COMMERCIAL", "HANGAR_INDUSTRIEL"],
        "#e2e8f0", // slate 200
        "BATI_SPORTIF",
        "#a7f3d0", // emerald 200
        "BATI_GARE",
        "#c7d2fe", // indigo 200
        "PECHERIE_SURF",
        "#bfdbfe", // blue 200
        ["BATI_PUBLIC", "HANGAR_PUBLIC"],
        "#fed7aa", // orange 200
        [
          "AUTRE_CULTE_SURF",
          "CHAPELLE_SURF",
          "CHRETIEN_SURF",
          "EGLISE_SURF",
          "MOSQUEE_SURF",
          "RELIGIEUX_QQUE",
          "SYNAGOGUE_SURF",
        ],
        "#e9d5ff", // purple 200
        ["ECLUSE_SURF", "RESERVOIR_EAU_SURF"],
        "#ADCCD9",
        "BARRAGE_SURF",
        "#FFFFFF",
        "CHATEAU_EAU_SURF",
        "#1466B2",
        "SILO_SURF",
        "#C7A9AA",
        "RESERVOIR_INDUS_SURF",
        "#8D9DAA",
        "SERRE_SURF",
        "#CAD6D9",

        ["ARC_TRIOMPHE_SURF", "ARENE_THEATRE", "CHATEAU_SURF", "FORTIF_SURF", "MONUMENT_SURF", "TOUR_MOULIN_SURF"],
        "#9b9b9b",
        ["FOOT_SURF", "MULTI_SPORT_SURF", "NATATION_SURF", "PISTE_SPORT_SURF", "SPORT_INDIF_SURF", "TENNIS_SURF"],
        "#ECFCCB", // lime 100
        ["PISTE_DUR", "PISTE_HERBE"],
        "#DBDBDB",
        ["CIMETIERE_MILI_SURF", "CIMETIERE_SURF", "NECROPOLE_NATIONALE"],
        "#F0F0F0",
        "POSTE_ELEC_SURF",
        "#e1e5ec",
        "#DDDDDD",
      ],
    },
  },
  {
    id: "bati surfacique - bati qque remplissage z14",
    type: "fill",
    source: "plan_ign",
    "source-layer": "bati_surf",
    minzoom: 14,
    filter: ["==", ["get", "symbo"], "BATI_QQUE"],
    paint: {
      "fill-opacity": ["interpolate", ["linear"], ["zoom"], 14, 0, 15, 1],
      "fill-color": [
        "match",
        ["get", "symbo"],
        "BATI_QQUE",
        "#e7e5e4", // stone 200
        "#DDDDDD",
      ],
    },
  },

  {
    id: "bati surfacique - cimetiere motif",
    type: "fill",
    source: "plan_ign",
    "source-layer": "bati_surf",
    filter: ["match", ["get", "symbo"], ["CIMETIERE_MILI_SURF", "CIMETIERE_SURF", "NECROPOLE_NATIONALE"], true, false],
    paint: { "fill-pattern": "cimetiere" },
  },
  {
    id: "bati surfacique - contour",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_surf",
    minzoom: 13,
    maxzoom: 20,
    filter: ["!=", ["get", "symbo"], "BATI_QQUE"],
    paint: {
      "line-width": ["interpolate", ["linear"], ["zoom"], 15, 0.1, 16, 0.3, 19, 2],
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 13, 0, 14, 1],

      "line-color": [
        "match",
        ["get", "symbo"],
        ["MAIRIE", "MAIRIE_ANNEXE"],
        "#f87171", // red 400
        ["BATI_COMMERCIAL", "BATI_INDUSTRIEL", "HANGAR", "HANGAR_COMMERCIAL", "HANGAR_INDUSTRIEL"],
        "#94a3b8", // slate 400
        "BATI_SPORTIF",
        "#34d399", // emerald 400
        "BATI_GARE",
        "#818cf8", // indigo 400
        "PECHERIE_SURF",
        "#60a5fa", // blue 400
        ["BATI_PUBLIC", "HANGAR_PUBLIC"],
        "#fb923c", // orange 400
        [
          "AUTRE_CULTE_SURF",
          "CHAPELLE_SURF",
          "CHRETIEN_SURF",
          "EGLISE_SURF",
          "MOSQUEE_SURF",
          "RELIGIEUX_QQUE",
          "SYNAGOGUE_SURF",
        ],
        "#c084fc", // purple 400
        ["ECLUSE_SURF", "RESERVOIR_EAU_SURF"],
        "#336699",

        "BARRAGE_SURF",
        "#464646",
        "CHATEAU_EAU_SURF",
        "#115390",
        "SILO_SURF",
        "#696969",
        "RESERVOIR_INDUS_SURF",
        "#464646",
        "SERRE_SURF",
        "#8C8C8C",

        ["ARC_TRIOMPHE_SURF", "ARENE_THEATRE", "CHATEAU_SURF", "FORTIF_SURF", "MONUMENT_SURF", "TOUR_MOULIN_SURF"],
        "#6E6E6E",
        ["FOOT_SURF", "MULTI_SPORT_SURF", "NATATION_SURF", "PISTE_SPORT_SURF", "SPORT_INDIF_SURF", "TENNIS_SURF"],
        "#BEF264", // lime 300
        ["PISTE_DUR", "PISTE_HERBE"],
        "#808080",
        ["CIMETIERE_MILI_SURF", "CIMETIERE_SURF", "NECROPOLE_NATIONALE"],
        "#a8a29e", // stone 400
        "POSTE_ELEC_SURF",
        "#000000",
        "#B8B8B8",
      ],
    },
  },
  {
    id: "bati surfacique - bati qque contour z14",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_surf",
    minzoom: 14,
    filter: ["==", ["get", "symbo"], "BATI_QQUE"],
    paint: {
      "line-width": ["interpolate", ["linear"], ["zoom"], 15, 0.1, 16, 0.3, 19, 2],
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 14, 0, 15, 1],
      "line-color": [
        "match",
        ["get", "symbo"],
        "BATI_QQUE",
        "#a8a29e", // stone 400
        "#B8B8B8",
      ],
    },
  },
  /**
   * permet surtout de délimiter des zones qui contiennent des batiments zai
   */
  {
    id: "bati ZAI - Autres",
    type: "fill",
    source: "plan_ign",
    "source-layer": "bati_zai",
    minzoom: 15,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "nature"],
      [
        "Administration centrale de l'Etat",
        "Autre service déconcentré de l'Etat",
        "Autre établissement d'enseignement",
        "Capitainerie",
        "Caserne",
        "Caserne de pompiers",
        "Collège",
        "Divers public ou administratif",
        "Enseignement primaire",
        "Enseignement supérieur",
        "Etablissement extraterritorial",
        "Etablissement hospitalier",
        "Etablissement pénitentiaire",
        "Etablissement thermal",
        "Gendarmerie",
        "Hôpital",
        "Lycée",
        "Maison de retraite",
        "Maison du parc",
        "Musée",
        "Office de tourisme",
        "Palais de justice",
        "Piscine",
        "Police",
        "Poste",
        "Science",
        "Siège d'EPCI",
        "Structure d'accueil pour personnes handicapées",
        "Université",
      ],
      true,
      false,
    ],
    paint: {
      "fill-color": "#ffedd5", // orange 100
      "fill-opacity": 0.3,
    },
  },

  {
    id: "bati ZAI - Commandement",
    type: "fill",
    source: "plan_ign",
    "source-layer": "bati_zai",
    minzoom: 15,
    filter: [
      "match",
      ["get", "nature"],
      [
        "Hôtel de collectivité",
        "Hôtel de département",
        "Hôtel de région",
        "Préfecture",
        "Préfecture de région",
        "Sous-préfecture",
      ],
      true,
      false,
    ],
    layout: { visibility: "visible" },
    paint: {
      "fill-color": "#FF0000",
      "fill-opacity": 0.3,
      "fill-outline-color": "#B40000",
    },
  },
];
