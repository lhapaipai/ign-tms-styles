import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import {
  cAutorouteExt,
  cHydro,
  toponymeHalo,
  cToponyme,
  toponymeRoutierHalo,
  autoroute,
  routePrincipale,
  routeRegionale,
} from "./vars";

export const g260_toponyme_routier_ferre: LayerSpecification[] = [
  {
    id: "toponyme ferre lineaire",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_ferre_lin",
    minzoom: 12,
    maxzoom: 13,
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10,
      "text-anchor": "center",
      "text-offset": [0, -1],
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": cToponyme.default,
      ...toponymeHalo,
    },
  },
  {
    id: "toponyme - liaison maritime",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_liaison_lin",
    minzoom: 8,
    maxzoom: 13,
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 15,
      "text-max-angle": 45,
      "text-padding": 10,
      "text-font": ["Source Sans Pro Italic"],
    },
    paint: {
      "text-color": cHydro.text,
      "text-halo-width": 5,
      "text-halo-color": cHydro.default[0],
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
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 10.5,
      "text-padding": 10,
      "text-anchor": "bottom",
      "text-offset": ["step", ["zoom"], ["literal", [0, 0.1]], 12, ["literal", [0, 0.3]], 14, ["literal", [0, 0.5]]],
      /**
       * avec des noms court comme D302 on peut rapidement avoir des caractères
       * qui se chevauchent
       */
      "text-max-angle": 20,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      ...toponymeRoutierHalo,
      "text-color": routeRegionale.cText,
    },
  },
  {
    id: "toponyme numéro de route - nationale",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_numero_lin",
    minzoom: 9,
    maxzoom: 16,
    filter: ["==", ["get", "txt_typo"], "Nationale"],
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 11,
      "text-padding": 10,
      "text-anchor": "bottom",
      "text-offset": ["step", ["zoom"], ["literal", [0, 0.1]], 12, ["literal", [0, 0.3]], 14, ["literal", [0, 0.5]]],
      "text-max-angle": 15,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      ...toponymeRoutierHalo,
      "text-color": routePrincipale.cText,
    },
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
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "texte"]],
      "text-size": 12,
      "text-padding": 10,
      "text-anchor": "bottom",
      "text-offset": ["step", ["zoom"], ["literal", [0, 0.1]], 12, ["literal", [0, 0.3]], 14, ["literal", [0, 0.5]]],
      "text-max-angle": 15,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      ...toponymeRoutierHalo,
      "text-color": autoroute.cText,
    },
  },
  /**
   * odonyme: nom des rues, avenues
   */
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
      "text-color": cToponyme.default,
      ...toponymeHalo,
    },
  },
  {
    id: "toponyme - odonyme desabrégé",
    type: "symbol",
    source: "plan_ign",
    "source-layer": "toponyme_routier_odonyme_lin",
    minzoom: 17,
    maxzoom: 20,
    layout: {
      "symbol-placement": "line",
      "text-field": ["to-string", ["get", "nom_desabrege"]],
      "text-size": 11,
      "text-anchor": "center",
      "text-max-angle": 30,
      "text-font": ["Source Sans Pro Regular"],
    },
    paint: {
      "text-color": cToponyme.default,
      ...toponymeHalo,
    },
  },
];
