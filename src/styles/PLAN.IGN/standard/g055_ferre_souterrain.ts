import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g055_ferre_souterrain: () => LayerSpecification[] = () => [
  {
    id: "Ferre souterrain - voie normale",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    minzoom: 10,
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "VF_1_SOU",
        "VF_2_SOU",
        "VF_3_SOU",
        "VF_4_SOU",
        "VF_ELEC_1_SOU",
        "VF_ELEC_2_SOU",
        "VF_ELEC_3_SOU",
        "VF_ELEC_4_SOU",
        "VF_FERRO_ROUTIER_SOU",
      ],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B4B4B4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.8, 17, 2.5],
    },
  },
  {
    id: "Ferre souterrain - trait perpendic épais",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    minzoom: 10,
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "VF_1_SOU",
        "VF_2_SOU",
        "VF_3_SOU",
        "VF_4_SOU",
        "VF_ELEC_1_SOU",
        "VF_ELEC_2_SOU",
        "VF_ELEC_3_SOU",
        "VF_ELEC_4_SOU",
        "VF_FERRO_ROUTIER_SOU",
      ],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B4B4B4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
  {
    id: "Ferre souterrain - voie etroite",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    minzoom: 10,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["VF_ETROITE_1_SOU", "VF_ETROITE_2_SOU", "VF_ETROITE_SOU"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B4B4B4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
    },
  },
  {
    id: "Ferre souterrain - trait perpendic fin",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    minzoom: 10,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["VF_ETROITE_1_SOU", "VF_ETROITE_2_SOU", "VF_ETROITE_SOU"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B4B4B4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
  {
    id: "Ferre souterrain - voie service",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    minzoom: 14,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["VF_NON_EXPLOITEE_SOU", "VF_SERVICE_SOU"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B4B4B4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
      "line-dasharray": [5, 2, 1, 2],
    },
  },
  {
    id: "Ferre souterrain - funic/urbain",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["FUNI_CREMAILLERE_SOU", "TRANSPORT_URBAIN_SOU"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B4B4B4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
    },
  },
  {
    id: "Ferre souterrain - 2 trait perpendic - funic/urbain",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre_sou",
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["FUNI_CREMAILLERE_SOU", "TRANSPORT_URBAIN_SOU"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#B4B4B4",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 17],
      "line-dasharray": [0.1, 0.2, 0.1, 10],
    },
  },
];
