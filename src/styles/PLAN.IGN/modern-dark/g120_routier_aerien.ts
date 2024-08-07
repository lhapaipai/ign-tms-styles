import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import {
  autoroute,
  cPisteCyclable,
  escalier,
  routeLocale,
  routeNonClassee,
  routeNonClasseeRestreint,
  routeNonRevetue,
  routePrincipale,
  routeRegionale,
  sentier,
} from "./vars";

export const g120_routier_aerien: LayerSpecification[] = [
  {
    id: "cheminSuperieur - piste cyclable",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin_sup",
    minzoom: 13,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "PISTE_CYCLABLE_SUP"],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": cPisteCyclable,
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1.1, 15, 1.7, 16, 2, 17, 3.5, 18, 6],
      "line-dasharray": [6, 2],
    },
  },
  {
    id: "cheminSuperieur - filet exterieur - escalier",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin_sup",
    minzoom: 14,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "ESCALIER_SUP"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": escalier.cFiletExt,
      "line-width": escalier.wFiletExt,
    },
  },
  {
    id: "cheminSuperieur - filet interieur - escalier",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin_sup",
    minzoom: 14,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "ESCALIER_SUP"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": escalier.cFiletInt,
      "line-width": escalier.wFiletInt,
      "line-dasharray": [1, 0.2],
    },
  },
  {
    id: "cheminSuperieur - Rue pietonne, sentier, chemin",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_chemin_sup",
    minzoom: 14,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["RUE_PIETONNE_SUP", "SENTIER_SUP", "CHEMIN_SUP"], true, false],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": sentier.c,
      "line-width": sentier.w,
      "line-dasharray": [1, 3],
    },
  },
  {
    id: "routierSuperieur - filet extérieur - route non revetu carrosable",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "NON_REVETUE_CARRO_SUP"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": routeNonRevetue.cFiletExt,
      "line-width": routeNonRevetue.wFiletExt,
      "line-dasharray": routeNonRevetue.dashArray,
    },
  },
  {
    id: "routierSuperieur - filet extérieur - bretelle autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 12,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_AUTO_LIBRE_1_SUP",
        "BRET_AUTO_LIBRE_2_SUP",
        "BRET_AUTO_LIBRE_3_SUP",
        "BRET_AUTO_PEAGE_1_SUP",
        "BRET_AUTO_PEAGE_2_SUP",
        "BRET_AUTO_PEAGE_3_SUP",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": autoroute.cFiletExt,
      "line-width": autoroute.wFiletExtBretelle,
    },
  },
  {
    id: "routierSuperieur - filet extérieur - route non classee restreint",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 13,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "NON_CLASSEE_RESTREINT_SUP"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": routeNonClasseeRestreint.cFiletExt,
      "line-width": routeNonClasseeRestreint.wFiletExt,
    },
  },
  {
    id: "routierSuperieur - filet extérieur - route non classee",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 13,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["NON_CLASSEE_4_SUP", "NON_CLASSEE_SUP"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": routeNonClassee.cFiletExt,
      "line-width": routeNonClassee.wFiletExt,
    },
  },
  {
    id: "routierSuperieur - filet extérieur - route locale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      ["BRET_LOCALE_SUP", "LOCALE_1_SUP", "LOCALE_2_SUP", "LOCALE_3_SUP", "LOCALE_4_SUP", "LOCALE_CONSTR_SUP"],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["LOCALE_CONSTR_SUP"], 0.2, 1],
      "line-color": routeLocale.cFiletExt,
      "line-width": routeLocale.wFiletExt,
    },
  },
  {
    id: "routierSuperieur - filet extérieur - route regionale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_REGIONALE_SUP",
        "REGIONALE_1_SUP",
        "REGIONALE_2_SUP",
        "REGIONALE_3_SUP",
        "REGIONALE_4_SUP",
        "REGIONALE_CONSTR_SUP",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["REGIONALE_CONSTR_SUP"], 0.2, 1],
      "line-color": routeRegionale.cFiletExt,
      "line-width": routeRegionale.wFiletExt,
    },
  },
  {
    id: "routierSuperieur - filet extérieur - route principale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_PRINCIPALE_SUP",
        "PRINCIPALE_1_SUP",
        "PRINCIPALE_2_SUP",
        "PRINCIPALE_3_SUP",
        "PRINCIPALE_4_SUP",
        "PRINCIPALE_CONSTR_SUP",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["PRINCIPALE_CONSTR_SUP"], 0.2, 1],
      "line-color": routePrincipale.cFiletExt,
      "line-width": routePrincipale.wFiletExt,
    },
  },
  {
    id: "routierSuperieur - filet extérieur - autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["AUTOROU_LIBRE_SUP", "AUTOROU_PEAGE_SUP", "AUTOROU_CONSTR_SUP"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["AUTOROU_CONSTR_SUP"], 0.2, 1],
      "line-color": autoroute.cFiletExt,
      "line-width": autoroute.wFiletExt,
    },
  },
  {
    id: "routierSuperieur - filet interieur - route non revetu carrosable",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "NON_REVETUE_CARRO_SUP"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": routeNonRevetue.cFiletInt,
      "line-width": routeNonRevetue.wFiletInt,
    },
  },
  {
    id: "routierSuperieur - filet interieur - bretelle autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 12,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_AUTO_LIBRE_1_SUP",
        "BRET_AUTO_LIBRE_2_SUP",
        "BRET_AUTO_LIBRE_3_SUP",
        "BRET_AUTO_PEAGE_1_SUP",
        "BRET_AUTO_PEAGE_2_SUP",
        "BRET_AUTO_PEAGE_3_SUP",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": autoroute.cFiletInt,
      "line-width": autoroute.wFiletIntBretelle,
    },
  },
  {
    id: "routierSuperieur - filet interieur - route non classee restreint",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 13,
    maxzoom: 20,
    filter: ["==", ["get", "symbo"], "NON_CLASSEE_RESTREINT_SUP"],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": routeNonClasseeRestreint.cFiletInt,
      "line-width": routeNonClasseeRestreint.wFiletInt,
    },
  },
  {
    id: "routierSuperieur - filet interieur - route non classee",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 13,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["NON_CLASSEE_4_SUP", "NON_CLASSEE_SUP"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": routeNonClassee.cFiletInt,
      "line-width": routeNonClassee.wFiletInt,
    },
  },
  {
    id: "routierSuperieur - filet interieur - route locale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      ["BRET_LOCALE_SUP", "LOCALE_1_SUP", "LOCALE_2_SUP", "LOCALE_3_SUP", "LOCALE_4_SUP", "LOCALE_CONSTR_SUP"],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["LOCALE_CONSTR_SUP"], 0.2, 1],
      "line-color": routeLocale.cFiletInt,
      "line-width": routeLocale.wFiletInt,
    },
  },
  {
    id: "routierSuperieur - filet interieur - route regionale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_REGIONALE_SUP",
        "REGIONALE_1_SUP",
        "REGIONALE_2_SUP",
        "REGIONALE_3_SUP",
        "REGIONALE_4_SUP",
        "REGIONALE_CONSTR_SUP",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["REGIONALE_CONSTR_SUP"], 0.2, 1],
      "line-color": routeRegionale.cFiletInt,
      "line-width": routeRegionale.wFiletInt,
    },
  },
  {
    id: "routierSuperieur - filet interieur - route principale",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: [
      "match",
      ["get", "symbo"],
      [
        "BRET_PRINCIPALE_SUP",
        "PRINCIPALE_1_SUP",
        "PRINCIPALE_2_SUP",
        "PRINCIPALE_3_SUP",
        "PRINCIPALE_4_SUP",
        "PRINCIPALE_CONSTR_SUP",
      ],
      true,
      false,
    ],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["PRINCIPALE_CONSTR_SUP"], 0.2, 1],
      "line-color": routePrincipale.cFiletInt,
      "line-width": routePrincipale.wFiletInt,
    },
  },
  {
    id: "routierSuperieur - filet interieur - autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 11,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["AUTOROU_LIBRE_SUP", "AUTOROU_PEAGE_SUP", "AUTOROU_CONSTR_SUP"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["AUTOROU_CONSTR_SUP"], 0.2, 1],
      "line-color": autoroute.cFiletInt,
      "line-width": autoroute.wFiletInt,
    },
  },
  {
    id: "routierSuperieur - axe central - autoroute",
    type: "line",
    source: "plan_ign",
    "source-layer": "routier_route_sup",
    minzoom: 13,
    maxzoom: 20,
    filter: ["match", ["get", "symbo"], ["AUTOROU_LIBRE_SUP", "AUTOROU_PEAGE_SUP", "AUTOROU_CONSTR_SUP"], true, false],
    layout: {
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-opacity": ["match", ["get", "symbo"], ["AUTOROU_CONSTR_SUP"], 0.2, 1],
      "line-color": autoroute.cAxeCentral,
      "line-width": autoroute.wAxeCentral,
    },
  },
];
