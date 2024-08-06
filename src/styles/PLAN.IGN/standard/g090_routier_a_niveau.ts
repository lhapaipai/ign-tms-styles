import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g090_routier_a_niveau: LayerSpecification[] = [
  {
    id: "Chemin a niveau - piste cyclable",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin",
    minzoom: 13,
    filter: ["match", ["get", "symbo"], ["PISTE_CYCLABLE", "VOIE_VERTE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#9B5CCC", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1.1, 15, 1.7, 16, 2, 17, 3.5, 18, 6],
      "line-dasharray": [6, 2],
    },
  },
  {
    id: "Chemin a niveau - filet exterieur - escalier",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin",
    minzoom: 14,
    filter: ["==", ["get", "symbo"], "ESCALIER"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#8C7274", 18, "#C8C8C8"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1.75, 15, 3, 16, 4.2, 17, 9.5],
    },
  },
  {
    id: "Chemin a niveau - filet interieur - escalier",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin",
    minzoom: 14,
    filter: ["==", ["get", "symbo"], "ESCALIER"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#FFFFFF",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 15, 1.9, 16, 2.7, 17, 5.8],
      "line-dasharray": [1, 0.2],
    },
  },
  {
    id: "Chemin a niveau - Rue pietonne",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin",
    minzoom: 14,
    filter: ["==", ["get", "symbo"], "RUE_PIETONNE"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#8C7274", 18, "#F8E5D5"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 15, 1.2, 16, 1.4, 17, 2, 18, 5],
      "line-dasharray": [1, 3],
    },
  },
  {
    id: "Chemin a niveau - sentier",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin",
    minzoom: 13,
    filter: ["==", ["get", "symbo"], "SENTIER"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#8C7274", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 15, 1.2, 16, 1.4, 17, 2, 18, 6],
      "line-dasharray": [4, 3],
    },
  },
  {
    id: "Chemin a niveau - chemin",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin",
    minzoom: 12,
    filter: ["==", ["get", "symbo"], "CHEMIN"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#8C7274", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 15, 1.2, 16, 1.4, 17, 2, 18, 7],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route non revetu carrosable",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "NON_REVETUE_CARRO"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 12, "#646464", 17, "#8C8C8C"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 3.2, 15, 5.4, 16, 7.7, 17, 16.8],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route non revetu carrosable",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    filter: ["==", ["get", "symbo"], "NON_REVETUE_CARRO"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#FFFFFF",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.3, 15, 4.1, 16, 6.3, 17, 13.5, 18, 16.8],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - bretelle autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 12,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_AUTO_LIBRE_1",
        "BRET_AUTO_LIBRE_2",
        "BRET_AUTO_LIBRE_3",
        "BRET_AUTO_PEAGE_1",
        "BRET_AUTO_PEAGE_2",
        "BRET_AUTO_PEAGE_3",
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
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#DE460E", 17, "#F18800", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 2.5, 14, 3.7, 15, 6.8, 16, 8.4, 17, 14],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route non classee restreint",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    filter: ["==", ["get", "symbo"], "NON_CLASSEE_RESTREINT"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#969696", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 3.2, 15, 5.4, 16, 7.7, 17, 16.8],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route non classee",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    filter: ["match", ["get", "symbo"], ["NON_CLASSEE", "NON_CLASSEE_4"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#969696", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 3.2, 15, 5.4, 16, 7.7, 17, 16.8],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route locale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 7,
    filter: ["match", ["get", "symbo"], ["BRET_LOCALE", "LOCALE_1", "LOCALE_2", "LOCALE_3", "LOCALE_4"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 12, "#8C8C8C", 13, "#B4B4B4", 17, "#B4B4B4", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 2, 14, 3.5, 15, 6, 16, 8.4, 17, 18.3],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route locale en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 11,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "LOCALE_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#C8C8C8",
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 2, 14, 3.5, 15, 6, 16, 8.4, 17, 18.3],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route regionale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 8,
    filter: [
      "match",
      ["get", "symbo"],
      ["BRET_REGIONALE", "REGIONALE_1", "REGIONALE_2", "REGIONALE_3", "REGIONALE_4"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#828282", 10, "#B4B4B4", 17, "#B4B4B4", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 6, 1.5, 9, 2.3, 14, 5, 15, 8.1, 16, 11.2, 17, 22],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route regionale en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 10,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "REGIONALE_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#C8C8C8",
      "line-width": ["interpolate", ["linear"], ["zoom"], 6, 1.5, 9, 2.3, 14, 5, 15, 8.1, 16, 11.2, 17, 22],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route principale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 8,
    filter: [
      "match",
      ["get", "symbo"],
      ["BRET_PRINCIPALE", "PRINCIPALE_1", "PRINCIPALE_2", "PRINCIPALE_3", "PRINCIPALE_4"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#E2A52A", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 6, 1.8, 9, 2.7, 14, 5.9, 15, 9, 16, 12.2, 17, 22.5],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - route principale en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 10,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "PRINCIPALE_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#C8C8C8",
      "line-width": ["interpolate", ["linear"], ["zoom"], 6, 1.8, 9, 2.7, 14, 5.9, 15, 9, 16, 12.2, 17, 22.5],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 8,
    filter: ["match", ["get", "symbo"], ["AUTOROU_LIBRE", "AUTOROU_PEAGE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#DE460E", 17, "#F18800", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 6, 2.5, 9, 3.5, 14, 7.5, 15, 11, 16, 15, 17, 26],
    },
  },
  {
    id: "Routier a niveau - filet extérieur - autoroute en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 8,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "AUTOROU_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#C8C8C8",
      "line-width": ["interpolate", ["linear"], ["zoom"], 6, 2.5, 9, 3.5, 14, 7.5, 15, 11, 16, 15, 17, 26],
    },
  },
  {
    id: "Routier a niveau - filet interieur - bretelle autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 12,
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_AUTO_LIBRE_1",
        "BRET_AUTO_LIBRE_2",
        "BRET_AUTO_LIBRE_3",
        "BRET_AUTO_PEAGE_1",
        "BRET_AUTO_PEAGE_2",
        "BRET_AUTO_PEAGE_3",
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
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#F18800", 17, "#F2B230"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.5, 14, 2.6, 15, 5.2, 16, 6.7, 17, 10.8],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route non classee restreint",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "NON_CLASSEE_RESTREINT"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#EDF1FF",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.3, 15, 4.1, 16, 6.3, 17, 13.5],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route non classee",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["NON_CLASSEE", "NON_CLASSEE_4"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#FFFFFF",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.3, 15, 4.1, 16, 6.3, 17, 13.5],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route locale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["BRET_LOCALE", "LOCALE_1", "LOCALE_2", "LOCALE_3", "LOCALE_4"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": [
        "interpolate",
        ["linear"],
        ["zoom"],
        6,
        "#F2B361",
        7,
        "#FFFFFF",
        12,
        "#FFFFFF",
        13,
        "#FCF4A8",
        17,
        "#FCF7C1",
      ],
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 1.3, 14, 2.3, 15, 4.1, 16, 6.1, 17, 13.1],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route locale en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 11,
    filter: ["==", ["get", "symbo"], "LOCALE_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 12, "#FFFFFF", 13, "#FCF4A8", 17, "#FCF7C1", 18, "#EDEDED"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 2, 14, 3.5, 15, 6, 16, 8.4, 17, 18.3],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route regionale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      ["BRET_REGIONALE", "REGIONALE_1", "REGIONALE_2", "REGIONALE_3", "REGIONALE_4"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": [
        "interpolate",
        ["linear"],
        ["zoom"],
        6,
        "#F2A949",
        7,
        "#FFFFFF",
        9,
        "#FFFFFF",
        10,
        "#FDF28B",
        17,
        "#FCF6BD",
      ],
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 1.1, 6, 1.4, 9, 1.5, 14, 3.2, 15, 5.8, 16, 8.3, 17, 16.2],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route regionale en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 10,
    filter: ["==", ["get", "symbo"], "REGIONALE_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#FFFFFF", 10, "#FDF28B", 17, "#FCF6BD", 18, "#EDEDED"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.4, 6, 1.5, 9, 2.3, 14, 5, 15, 8.1, 16, 11.2, 17, 22],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route principale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    maxzoom: 18,
    filter: [
      "match",
      ["get", "symbo"],
      ["BRET_PRINCIPALE", "PRINCIPALE_1", "PRINCIPALE_2", "PRINCIPALE_3", "PRINCIPALE_4"],
      true,
      false,
    ],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 6, "#F29924", 7, "#F3C66D", 9, "#F3C66D", 17, "#F2DDB3"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.6, 6, 1.8, 9, 2.1, 14, 4.4, 15, 7.3, 16, 10, 17, 18.5],
    },
  },
  {
    id: "Routier a niveau - filet interieur - route principale en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 10,
    filter: ["==", ["get", "symbo"], "PRINCIPALE_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#F3C66D", 17, "#F2DDB3", 18, "#EDEDED"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.5, 6, 1.8, 9, 2.7, 14, 5.9, 15, 9, 16, 12.2, 17, 22.5],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "Routier a niveau - filet interieur - autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["AUTOROU_LIBRE", "AUTOROU_PEAGE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#F18800", 17, "#F2B230"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.7, 6, 2.5, 9, 2.7, 14, 5.8, 15, 9, 16, 12, 17, 20.8],
    },
  },
  {
    id: "Routier a niveau - axe central - autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 13,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["AUTOROU_LIBRE", "AUTOROU_PEAGE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#FFFFFF",
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0.6, 14, 0.7, 15, 1, 16, 1.2, 17, 2.1],
    },
  },
  {
    id: "Routier a niveau - filet interieur - autoroute en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 8,
    filter: ["==", ["get", "symbo"], "AUTOROU_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 9, "#F18800", 17, "#F2B230", 18, "#EDEDED"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.7, 6, 2.5, 9, 3.5, 14, 7.5, 15, 11, 16, 15, 17, 26],
      "line-dasharray": [2, 2],
    },
  },
  {
    id: "Routier a niveau - axe centrale - autoroute en construction",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route",
    minzoom: 13,
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "AUTOROU_CONSTR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#808080",
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0.6, 14, 0.7, 15, 1, 16, 1.2, 17, 2.1],
    },
  },
  {
    id: "liaison routiere - Bac Liaison Maritime",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_liaison",
    minzoom: 8,
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["BAC_AUTO", "BAC_LIAISON_MARITIME", "LIAISON_MARITIME"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#5792C2",
      "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2.5],
    },
  },
  {
    id: "liaison routiere - Gue route",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_liaison",
    filter: ["==", ["get", "symbo"], "GUE_ROUTE"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 13, "#BEBEBE", 17, "#646464", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.3, 15, 4.1, 16, 6.3, 17, 13.5],
    },
  },
  {
    id: "liaison routiere - Gue chemin",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_liaison",
    maxzoom: 18,
    filter: ["==", ["get", "symbo"], "GUE_CHEMIN"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 13, "#BEBEBE", 17, "#646464"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1.6, 15, 2.9, 16, 4.4, 17, 6.5],
    },
  },
  {
    id: "liaison routiere - filet extérieur - Pont passerelle",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_liaison",
    filter: ["match", ["get", "symbo"], ["PONT_LIN", "PONT_MOBILE_LIN", "PONT_PASSERELLE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": ["interpolate", ["linear"], ["zoom"], 17, "#C8C8C8", 18, "#FFFFFF"],
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.2, 15, 3.8, 16, 5.4, 17, 11.8],
    },
  },
  {
    id: "liaison routiere - filet intérieur - Pont passerelle",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_liaison",
    maxzoom: 18,
    filter: ["match", ["get", "symbo"], ["PONT_LIN", "PONT_MOBILE_LIN", "PONT_PASSERELLE"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#FFFFFF",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 0.7, 15, 1.1, 16, 1.7, 17, 3.8],
    },
  },
  {
    id: "bati transport surfacique - bati peage",
    type: "fill",
    source: "plan_ign",
    "source-layer": "bati_surf",
    minzoom: 13,
    filter: ["==", ["get", "symbo"], "BATI_PEAGE"],
    layout: { visibility: "visible" },
    paint: { "fill-color": "#DCDCDC", "fill-outline-color": "#808080" },
  },
  {
    id: "routier ponctuel - peage ponctuel",
    type: "circle",
    source: "plan_ign",
    "source-layer": "routier_ponc",
    minzoom: 8,
    filter: ["==", ["get", "symbo"], "PEAGE_PONC"],
    layout: { visibility: "visible" },
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 9, 3.5, 12, 6.5],
      "circle-color": "#E2A52A",
      "circle-stroke-width": 1,
      "circle-stroke-color": "#808080",
    },
  },
];
