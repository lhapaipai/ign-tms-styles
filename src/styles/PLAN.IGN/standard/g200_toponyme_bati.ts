import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const g200_toponyme_bati: LayerSpecification[] = [
  {
    id: "toponyme bati station de métro + bati ponctuel metro",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 14,
    filter: ["all", ["==", ["get", "txt_typo"], "TYPO_E_1"], ["==", ["get", "symbo"], "STATION_METRO"]],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-offset": [0.3, -0.25],
      "text-padding": 3,
      "text-anchor": "bottom-left",
      "text-font": ["Source Sans Pro"],
      "icon-image": "Metro",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 15, 0.33, 17, 0.6],
    },
    paint: { "text-color": "#3C3C3C", "icon-color": "#646464" },
  },
  {
    id: "toponyme religieux zoom 15 16",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 14,
    maxzoom: 16,
    filter: ["==", ["get", "txt_typo"], "religieux"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "designation"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme religieux zoom 17 à 19",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 16,
    filter: ["==", ["get", "txt_typo"], "religieux"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme parc d'attractions zoom 14",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 13,
    maxzoom: 14,
    filter: ["all", ["==", ["get", "txt_typo"], "divers_bati"], ["==", ["get", "symbo"], "PARC_ATTRACTIONS"]],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "designation"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme parc d'attractions zoom 15 à 19",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 14,
    filter: ["all", ["==", ["get", "txt_typo"], "divers_bati"], ["==", ["get", "symbo"], "PARC_ATTRACTIONS"]],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme bati divers zoom 15",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 14,
    maxzoom: 15,
    filter: [
      "all",
      ["==", ["get", "txt_typo"], "divers_bati"],
      ["match", ["get", "symbo"], ["CENTRALE_ELECTRIQUE", "HIPPODROME", "STADE"], true, false],
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "designation"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme bati divers zoom 16 à 19",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 15,
    filter: [
      "all",
      ["==", ["get", "txt_typo"], "divers_bati"],
      ["match", ["get", "symbo"], ["CENTRALE_ELECTRIQUE", "HIPPODROME", "STADE"], true, false],
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme chateau zoom 16",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 15,
    maxzoom: 16,
    filter: [
      "all",
      ["==", ["get", "txt_typo"], "divers_bati"],
      ["match", ["get", "symbo"], ["CHATEAU", "CHATEAU_FORT"], true, false],
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "designation"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme chateau zoom 17 à 19",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 16,
    filter: [
      "all",
      ["==", ["get", "txt_typo"], "divers_bati"],
      ["match", ["get", "symbo"], ["CHATEAU", "CHATEAU_FORT"], true, false],
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme station epuration, de pompage, usine de production eau",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 14,
    filter: ["==", ["get", "txt_typo"], "station"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "designation"]],
      "text-anchor": "left",
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#447FB3" },
  },
  {
    id: "toponyme bati ponc gare",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 15,
    filter: ["==", ["get", "txt_typo"], "gore"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "designation"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme bati ponc barrage",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 12,
    filter: ["==", ["get", "txt_typo"], "BARRAGE_PONC"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "left",
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: { "text-color": "#447FB3" },
  },
  {
    id: "toponyme bati ponc phare - niveau 13",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    maxzoom: 13,
    filter: ["==", ["get", "txt_typo"], "PHARE"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "right",
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: { "text-color": "#532A2A" },
  },
  {
    id: "toponyme bati ponc phare - niveau 14à19",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 13,
    filter: [
      "all",
      ["==", ["get", "symbo"], "PHARE"],
      ["match", ["get", "txt_typo"], ["TYPO_C_6", "TYPO_C_7", "TYPO_C_8", "TYPO_E_GE"], true, false],
    ],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "right",
      "text-size": ["interpolate", ["linear"], ["zoom"], 13, 12, 18, 18],
      "text-allow-overlap": false,
      "text-offset": [-2, 0],
      "text-padding": 3,
      "text-font": ["Source Sans Pro"],
    },
    paint: { "text-color": "#532A2A" },
  },
  {
    id: "toponyme bati ponc autre",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 12,
    filter: ["match", ["get", "txt_typo"], ["BAT_ACTIVITE", "BAT_FORTIF", "BAT_VILLAGE_DETRUIT"], true, false],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "center",
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: { "text-color": "#532A2A" },
  },
  {
    id: "toponyme bati ponc aerogare",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 14,
    maxzoom: 17,
    filter: ["all", ["==", ["get", "txt_typo"], "TYPO_E_GE"], ["==", ["get", "symbo"], "AEROGARE"]],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "center",
      "text-size": ["interpolate", ["linear"], ["zoom"], 12, 9, 16, 11],
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": "#120049",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 1,
    },
  },
  {
    id: "toponyme bati ponc aeroport 12",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 11,
    maxzoom: 12,
    filter: ["==", ["get", "txt_typo"], "AEROPORT_PONC"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "bottom",
      "text-offset": [0, -1.3],
      "text-size": 10.5,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: {
      "text-color": "#120049",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme bati ponc aeroport 13",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 12,
    maxzoom: 13,
    filter: ["==", ["get", "txt_typo"], "AEROPORT_PONC"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "bottom",
      "text-offset": [0, -2],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: {
      "text-color": "#120049",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme bati ponc aeroport",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 13,
    maxzoom: 17,
    filter: ["all", ["==", ["get", "txt_typo"], "TYPO_A_5"], ["==", ["get", "symbo"], "AEROPORT"]],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "center",
      "text-size": ["interpolate", ["linear"], ["zoom"], 12, 11, 16, 13],
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: {
      "text-color": "#120049",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme bati ponc aerodrome 12",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 11,
    maxzoom: 12,
    filter: ["==", ["get", "txt_typo"], "AERODROME_PONC"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "bottom",
      "text-offset": [0, -1.3],
      "text-size": 9.5,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: {
      "text-color": "#120049",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme bati ponc aerodrome 13",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 12,
    maxzoom: 13,
    filter: ["match", ["get", "txt_typo"], ["AERODROME_IMPORT_PONC", "AERODROME_PONC"], true, false],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "bottom",
      "text-offset": [0, -2],
      "text-size": 10,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: {
      "text-color": "#120049",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },
  {
    id: "toponyme bati ponc aerodrome",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 13,
    maxzoom: 17,
    filter: ["all", ["==", ["get", "txt_typo"], "TYPO_A_7"], ["==", ["get", "symbo"], "AERODROME"]],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-anchor": "center",
      "text-size": ["interpolate", ["linear"], ["zoom"], 12, 10, 16, 12],
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro"],
    },
    paint: {
      "text-color": "#120049",
      "text-halo-color": "rgba(255, 255, 255, 0.5)",
      "text-halo-width": 2,
    },
  },

  {
    id: "toponyme bati ponc zai zoom 17 et 18",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 16,
    filter: ["==", ["get", "txt_typo"], "zai"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
  {
    id: "toponyme bati ponc zai zoom 16",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_bati_ponc",
    minzoom: 15,
    maxzoom: 16,
    filter: ["==", ["get", "txt_typo"], "zai"],
    layout: {
      visibility: "visible",
      "symbol-placement": "point",
      "text-field": ["to-string", ["get", "designation"]],
      "text-size": 11,
      "text-allow-overlap": false,
      "text-padding": 1,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: { "text-color": "#000000" },
  },
];
