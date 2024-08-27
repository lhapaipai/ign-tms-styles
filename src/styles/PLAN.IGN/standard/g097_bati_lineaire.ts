import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g097_bati_lineaire: () => LayerSpecification[] = () => [
  {
    id: "construction linéaire - mur",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["==", ["get", "symbo"], "MUR"],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#8C8C8C", "line-width": 0.3 },
  },
  {
    id: "construction linéaire - autre",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    filter: ["match", ["get", "symbo"], ["FORTIF_LIN", "MUR_SOUTENEMENT", "RUINE_LIN"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "round",
      "line-join": "round",
    },
    paint: { "line-color": "#646464", "line-width": 0.5 },
  },
  {
    id: "construction hydrographique linéaire - Barrage",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    minzoom: 13,
    filter: ["==", ["get", "symbo"], "BARRAGE_LIN"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#646464",
      "line-width": ["interpolate", ["linear"], ["zoom"], 13, 1.5, 17, 5],
    },
  },
  {
    id: "construction hydrographique linéaire - Quai",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    minzoom: 12,
    filter: ["match", ["get", "symbo"], ["DIGUE", "QUAI"], true, false],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#828282",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 17, 2.5],
    },
  },
  {
    id: "construction hydrographique linéaire - Pecherie",
    type: "line",
    source: "plan_ign",
    "source-layer": "bati_lin",
    minzoom: 12,
    filter: ["==", ["get", "symbo"], "PECHERIE_LIN"],
    layout: {
      visibility: "visible",
      "line-cap": "butt",
      "line-join": "round",
    },
    paint: {
      "line-color": "#0066CC",
      "line-width": ["interpolate", ["linear"], ["zoom"], 14, 1, 17, 2.5],
    },
  },
];
