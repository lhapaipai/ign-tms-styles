import { LayerGroupFactory } from "./types";

export const g110_hydro_aerien: LayerGroupFactory = (vars) => {
  const { cHydro } = vars;
  return [
    {
      id: "réseau hydro  - cours d'eau superieur",
      type: "line",
      source: "plan_ign",
      "source-layer": "hydro_reseau_sup",
      filter: ["match", ["get", "symbo"], ["COURS_D_EAU_MOY_SUP", "COURS_D_EAU_SUP"], true, false],
      layout: {
        visibility: "visible",
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": cHydro.default[0],
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.5, 17, 6.5],
      },
    },
    {
      id: "réseau hydro - canal superieur",
      type: "line",
      source: "plan_ign",
      "source-layer": "hydro_reseau_sup",
      filter: ["==", ["get", "symbo"], "CANAL_SUP"],
      layout: {
        visibility: "visible",
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": cHydro.default[0],
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.4, 17, 5.9],
      },
    },
    {
      id: "réseau hydro - filet interieur - aqueduc superieur",
      type: "line",
      source: "plan_ign",
      "source-layer": "hydro_reseau_sup",
      filter: ["==", ["get", "symbo"], "AQUEDUC_SUP"],
      layout: {
        visibility: "visible",
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": cHydro.default[0],
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1.4, 16, 3.5, 17, 5.9],
      },
    },
    {
      id: "réseau hydro - carre - aqueduc superieur",
      type: "line",
      source: "plan_ign",
      "source-layer": "hydro_reseau_sup",
      filter: ["==", ["get", "symbo"], "AQUEDUC_SUP"],
      layout: {
        visibility: "visible",
        "line-cap": "butt",
        "line-join": "round",
      },
      paint: {
        "line-color": cHydro.default[0],
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 3.5, 16, 8.7, 17, 14.7],
        "line-dasharray": [1, 5],
      },
    },
  ];
};
