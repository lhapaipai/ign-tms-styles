import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g040_hydro_surf: LayerSpecification[] = [
  {
    id: "hydro surfacique",
    type: "fill",
    source: "plan_ign",
    "source-layer": "hydro_surf",
    filter: ["match", ["get", "symbo"], ["BASSIN", "SURFACE_D_EAU"], true, false],
    layout: { visibility: "visible" },
    paint: { "fill-color": "#AAD5E9", "fill-outline-color": "#AAD5E9" },
  },
  {
    id: "hydro surfacique temporaire",
    type: "fill",
    source: "plan_ign",
    "source-layer": "hydro_surf",
    filter: ["==", ["get", "symbo"], "SURFACE_D_EAU_TEMP"],
    layout: { visibility: "visible" },
    paint: { "fill-color": "rgba(168, 203, 220, 0.5)" },
  },
];
