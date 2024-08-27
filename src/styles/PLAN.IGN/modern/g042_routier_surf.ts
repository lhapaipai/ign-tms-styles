import { LayerGroupFactory } from "./types";

export const g042_routier_surf: LayerGroupFactory = (vars) => {
  const { autoroute, escalier, routeSurface } = vars;
  return [
    {
      id: "Routier surfacique",
      type: "fill",
      source: "plan_ign",
      "source-layer": "routier_surf",
      minzoom: 13,
      maxzoom: 20,

      filter: [
        "match",
        ["get", "symbo"],
        ["SURF_ROUT_LOC", "SURF_ROUT_NON_CLA", "SURF_ROUT_PRINC", "SURF_ROUT_REG", "DALLE_DE_PROTECTION"],
        true,
        false,
      ],
      paint: {
        "fill-color": routeSurface.cDefaut,
        "fill-outline-color": routeSurface.cOut,
        "fill-opacity": ["match", ["get", "symbo"], "DALLE_DE_PROTECTION", 0.5, 1],
      },
    },

    {
      id: "Routier surfacique - Parking",
      type: "fill",
      source: "plan_ign",
      "source-layer": "routier_surf",
      maxzoom: 20,
      filter: ["==", ["get", "symbo"], "PARKING_SURF"],
      paint: {
        "fill-color": routeSurface.cParking,
        "fill-pattern": ["step", ["zoom"], "blank", 15, "parking"],
      },
    },
    {
      id: "Routier surfacique - Escalier surfacique",
      type: "fill",
      source: "plan_ign",
      "source-layer": "routier_surf",
      maxzoom: 20,
      filter: ["==", ["get", "symbo"], "ESCALIER_SURF"],
      paint: {
        "fill-opacity": 0.8,
        "fill-color": escalier.cFiletInt,
        "fill-outline-color": routeSurface.cOut,
      },
    },
    {
      id: "Routier surfacique - Péage surfacique",
      type: "fill",
      source: "plan_ign",
      "source-layer": "routier_surf",
      maxzoom: 20,
      filter: ["==", ["get", "symbo"], "SURF_PEAGE"],
      paint: {
        "fill-color": autoroute.cFiletInt,
        "fill-outline-color": autoroute.cFiletExt,
      },
    },
  ];
};
