import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g260_toponyme_routier_ferre: LayerSpecification[] = [
  {
    id: "toponyme ferre lineaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_ferre_lin",
    minzoom: 12,
    filter: ["match", ["get", "txt_typo"], ["FER_NOM", "FER_OUVRAGE"], true, false],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10,
      "text-anchor": "center",
      "text-offset": [0, -1],
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#000000",
      "text-halo-width": 1,
      "text-halo-color": "rgba(255, 255, 255, 1)",
    },
  },

  {
    id: "toponyme - liaison maritime",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_liaison_lin",
    minzoom: 8,
    maxzoom: 18,
    filter: ["match", ["get", "txt_typo"], ["LIAISON_MAR", "LIAISON_MARITIME"], true, false],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 15,
      "text-anchor": "center",
      "text-keep-upright": true,
      "text-max-angle": 45,
      "text-padding": 10,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#5792C2", "text-halo-width": 5, "text-halo-color": "#AAD5E9" },
  },
  {
    id: "toponyme numéro de route - autoroute",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_numero_lin",
    minzoom: 7,
    maxzoom: 16,
    filter: ["==", ["get", "txt_typo"], "Autoroute"],
    layout: {
      visibility: "visible",
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 15,
      "text-allow-overlap": false,
      "text-padding": 0,
      "text-anchor": "center",
      "text-font": ["Source Sans Pro Regular"],
      "icon-image": "Ecluse",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-text-fit": "both",
      "icon-size": 0,
    },
    paint: {
      "text-color": "#F0F0F0",
      "icon-color": "#646464",
      "text-halo-color": "rgba(80, 80, 80, 0.5)",
      "text-halo-width": 5,
    },
  },
  {
    id: "toponyme numéro de route - nationale",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_numero_lin",
    minzoom: 7,
    maxzoom: 16,
    filter: ["==", ["get", "txt_typo"], "Nationale"],
    layout: {
      visibility: "visible",
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 12,
      "text-allow-overlap": false,
      "text-padding": 0,
      "text-anchor": "center",
      "text-font": ["Source Sans Pro Regular"],
      "icon-image": "Ecluse",
      "icon-rotation-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-text-fit": "both",
      "icon-size": 0,
    },
    paint: {
      "text-color": "#F0F0F0",
      "icon-color": "#646464",
      "text-halo-color": "rgba(80, 80, 80, 0.5)",
      "text-halo-width": 4,
    },
  },
  {
    id: "toponyme numéro de route - départementale",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_numero_lin",
    minzoom: 11,
    maxzoom: 16,
    filter: ["==", ["get", "txt_typo"], "Départementale"],
    layout: {
      visibility: "visible",
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10.5,
      "text-allow-overlap": false,
      "text-padding": 2,
      "text-anchor": "center",
      "text-font": ["Source Sans Pro Semibold"],
      "text-rotation-alignment": "viewport",
    },
    paint: {
      "text-color": "#4D4D4D",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 4,
    },
  },
  {
    id: "toponyme - odonyme desabrégé",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_odonyme_lin",
    minzoom: 17,
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "nom_desabrege"]],
      "text-size": 11,
      "text-anchor": "center",
      "text-max-angle": 30,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#000000",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)",
    },
  },
  {
    id: "toponyme - odonyme abrégé",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_odonyme_lin",
    minzoom: 15,
    maxzoom: 17,
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "nom_gauche"]],
      "text-size": 10,
      "text-anchor": "center",
      "text-max-angle": 30,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": "#000000",
      "text-halo-width": 2,
      "text-halo-color": "rgba(255, 255, 255, 1)",
    },
  },
];
