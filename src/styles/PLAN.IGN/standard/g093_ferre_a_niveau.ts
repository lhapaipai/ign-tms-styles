import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g093_ferre_a_niveau: () => LayerSpecification[] = () => [
  {
    id: "Ferre a niveau - voie normale",
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
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.8, 17, 2.5],
    },
  },

  {
    id: "Ferre a niveau - voie normale trait perpendic",
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
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
  {
    id: "Ferre a niveau - voie etroite",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 10,
    filter: ["match", ["get", "symbo"], ["VF_ETROITE", "VF_ETROITE_1", "VF_ETROITE_2"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
    },
  },
  {
    id: "Ferre a niveau - voie etroite trait perpendic",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 10,
    filter: ["match", ["get", "symbo"], ["VF_ETROITE", "VF_ETROITE_1", "VF_ETROITE_2"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
  {
    id: "Ferre a niveau - voie service",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 14,
    filter: ["match", ["get", "symbo"], ["VF_NON_EXPLOITEE", "VF_SERVICE"], true, false],
    layout: {
      visibility: "visible",
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
    id: "Ferre a niveau - voie en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 10,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "VF_EN_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "Ferre a niveau - voie en construction trait perpendic",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    minzoom: 10,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "VF_EN_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 14.7],
      "line-dasharray": [0.1, 10],
    },
  },
  {
    id: "Ferre a niveau - funic/urbain",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    filter: ["match", ["get", "symbo"], ["FUNI_CREMAILLERE", "TRANSPORT_URBAIN"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.3, 17, 1.8],
    },
  },
  {
    id: "Ferre a niveau - 2 trait perpendic - funic/urbain",
    type: "line",
    source: "plan_ign",
    "source-layer": "ferre",
    filter: ["match", ["get", "symbo"], ["FUNI_CREMAILLERE", "TRANSPORT_URBAIN"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#787878",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 17],
      "line-dasharray": [0.1, 0.2, 0.1, 10],
    },
  },
];
