import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g020_ocs: () => LayerSpecification[] = () => {
  return [
    {
      id: "ocs - vegetation - zone boiséee, foret fermee, peupleraie",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: [
        "match",
        ["get", "symbo"],
        [
          "ZONE_BOISEE",
          "ZONE_FORET_FERMEE_CONI",
          "ZONE_FORET_FERMEE_FEUIL",
          "ZONE_FORET_FERMEE_MIXTE",
          "ZONE_PEUPLERAIE",
        ],
        true,
        false,
      ],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#DFE8D5", "fill-outline-color": "#DFE8D5" },
    },
    {
      id: "ocs - vegetation - forêt ouverte",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["match", ["get", "symbo"], ["ZONE_FORET_OUVERTE"], true, false],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#EDF2D9", "fill-outline-color": "#EDF2D9" },
    },
    {
      id: "ocs - vegetation - lande ligneuse",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["==", ["get", "symbo"], "ZONE_LANDE_LIGNEUSE"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#F2EECD" },
    },
    {
      id: "ocs - vegetation - vigne",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["==", ["get", "symbo"], "ZONE_VIGNE"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#FFEDD9" },
    },
    {
      id: "ocs - vegetation - verger",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["==", ["get", "symbo"], "ZONE_VERGER"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#FAE2C5" },
    },
    {
      id: "ocs - vegetation - canne à sucre, bananeraie",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["==", ["get", "symbo"], "ZONE_CANNE_BANANE"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#FAEDFA" },
    },
    {
      id: "hydro surfacique - Estran",
      type: "fill",
      source: "plan_ign",
      "source-layer": "hydro_surf",
      filter: ["==", ["get", "symbo"], "ZONE_D_ESTRAN"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#C3DDE9", "fill-outline-color": "#C3DDE9" },
    },
    {
      id: "ocs - vegetation - mangrovre",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["==", ["get", "symbo"], "ZONE_MANGROVE"],
      layout: { visibility: "visible" },
      paint: {
        "fill-color": ["interpolate", ["linear"], ["zoom"], 9, "#85CCCB", 10, "#90CCCB"],
      },
    },
    {
      id: "ocs - vegetation - marais",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["==", ["get", "symbo"], "ZONE_MARAIS"],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "Marais" },
    },
    {
      id: "hydro surfacique - marais",
      type: "fill",
      source: "plan_ign",
      "source-layer": "hydro_surf",
      filter: ["==", ["get", "symbo"], "ZONE_MARAIS"],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "Marais" },
    },
    {
      id: "ocs - vegetation - marais salant",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_vegetation_surf",
      filter: ["==", ["get", "symbo"], "ZONE_MARAIS_SALANT"],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "MaraisSalant" },
    },
    {
      id: "ocs - Zone",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_nature_sol_surf",
      filter: ["==", ["get", "symbo"], "ZONE_ROCHEUSE"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#D0D0D0", "fill-opacity": 0.3 },
    },
    {
      id: "ocs - Zone sable sec",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_nature_sol_surf",
      filter: ["==", ["get", "symbo"], "ZONE_SABLE_SEC"],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "Sable" },
    },
    {
      id: "ocs - Zone sable humide",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_nature_sol_surf",
      filter: ["match", ["get", "symbo"], ["FOND_CUVETTE_HUMIDE", "ZONE_SABLE_HUMIDE"], true, false],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "SableHumide" },
    },
    {
      id: "ocs - Zone graviers galets secs",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_nature_sol_surf",
      filter: ["==", ["get", "symbo"], "GRAVIERS_GALETS_SEC"],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "GravierSec" },
    },
    {
      id: "ocs - Zone graviers galets humides",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_nature_sol_surf",
      filter: ["==", ["get", "symbo"], "GRAVIERS_GALETS_HUM"],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "Gravier" },
    },
    {
      id: "ocs - Zone rocher hydro",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_nature_sol_surf",
      filter: ["==", ["get", "symbo"], "ZONE_ROCHER_HYDRO"],
      layout: { visibility: "visible" },
      paint: { "fill-pattern": "RocherHydro" },
    },
    {
      id: "ocs - Zone glacier",
      type: "fill",
      source: "plan_ign",
      "source-layer": "ocs_nature_sol_surf",
      filter: ["==", ["get", "symbo"], "ZONE_GLACIER"],
      layout: { visibility: "visible" },
      paint: {
        "fill-pattern": "Glacier",
        "fill-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.5, 12, 0.3],
      },
    },
    {
      id: "zone d'activité",
      type: "fill",
      source: "plan_ign",
      "source-layer": "bati_zone_surf",
      filter: ["==", ["get", "symbo"], "ZONE_INDUS_ACTI"],
      layout: { visibility: "visible" },
      paint: { "fill-color": "#D9D9D9" },
    },
  ];
};
