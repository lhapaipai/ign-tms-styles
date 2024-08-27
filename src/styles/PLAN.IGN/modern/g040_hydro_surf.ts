import { LayerGroupFactory } from "./types";

export const g040_hydro_surf: LayerGroupFactory = (vars) => {
  const { cHydro } = vars;
  return [
    {
      id: "hydroSurfacique",
      type: "fill",
      source: "plan_ign",
      "source-layer": "hydro_surf",
      minzoom: 0,
      maxzoom: 20,
      filter: ["match", ["get", "symbo"], ["BASSIN", "SURFACE_D_EAU", "SURFACE_D_EAU_TEMP"], true, false],
      paint: {
        "fill-opacity": ["match", ["get", "symbo"], "SURFACE_D_EAU_TEMP", 0.7, 1],
        "fill-color": [
          "match",
          ["get", "symbo"],
          ["BASSIN", "SURFACE_D_EAU"],
          cHydro.default[0],
          "ZONE_D_ESTRAN",
          cHydro.estran,
          "ZONE_MARAIS",
          cHydro.marais,
          "SURFACE_D_EAU_TEMP",
          cHydro.eauTemporaire,
          cHydro.default[0],
        ],
      },
    },
  ];
};
