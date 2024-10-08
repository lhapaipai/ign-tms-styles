import { LayerGroupFactory } from "./types";

/**
 * ZAI : Zone d'activité ou d'intérêt
 */

/**
 * l'icône du batiment doit être dessinée dans g160_bati_ponctuel
 * le calque `toponyme_bati_ponc` ne nous donne pas assez d'infos
 * exemple avec un hôpital:
 *
 *  toponyme_bati_ponc
 *  désignation:Hôp.
 *  texte: Urgences Médicale de la Vallée de l'Arve
 *  txt_typo: zai
 *
 *  bati_zai (surfacique)
 *  nature: Hôpital
 *
 *  bati_ponc
 *  symbo: HOPITAL_PONC
 *
 * pour le moment je n'utilise plus l'icône culte, on n'a plus que le texte.
 */

export const g200_toponyme_bati: LayerGroupFactory = (vars) => {
  const { bati, toponymeHalo } = vars;
  return [
    {
      /**
       * les éléments de type bati_ponc qui bénificient d'une entrée dans toponyme_bati_ponc
       * sont d'après ce que j'ai vu affiché pour des zooms plus faible
       *
       * ex:
       * zoom: 12
       * bati_ponc: symbo -> GARE_VOYAGEURS (z10 à z12)
       * toponyme_bati_ponc : designation -> Gare, symbo -> GARE_VOYAGEURS (z13 et plus)
       *
       * il n'est donc pas nécessaire de déplacer le toponyme sur le dessus pour laisser de la place
       * pour l'icône.
       */
      id: "toponyme bati ponc",
      type: "symbol",
      source: "plan_ign",
      "source-layer": "toponyme_bati_ponc",
      minzoom: 14,
      layout: {
        visibility: "visible",
        "symbol-placement": "point",
        "text-field": ["step", ["zoom"], ["to-string", ["get", "designation"]], 16, ["to-string", ["get", "texte"]]],
        "text-size": 11,
        "text-padding": 1,
        "text-font": ["Source Sans Pro Italic"],
      },
      paint: {
        "text-color": [
          "match",
          ["get", "symbo"],
          ["GARE_VOYAGEURS", "STATION_METRO"],
          bati.gare.cText,
          [
            "CATHEDRALE",
            "ABBAYE",
            "COUVENT",
            "BASILIQUE",
            "PRIEURE",
            "CULTE_MUSULMAN",
            "CHAPELLE",
            "CULTE_ISRAELITE",
            "CULTE_CHRETIEN",
          ],
          bati.culte.cText,
          ["AEROPORT", "AEROGARE", "AERODROME"],
          bati.aeroport.cText,
          ["USINE_PRODUCTION_EAU", "STATION_EPURATION", "STATION_DE_POMPAGE"],
          bati.hydro.cText,
          ["CHATEAU_FORT", "CHATEAU"],
          bati.monument.cText,
          "ZAI",
          bati.public.cText,
          "yellow", // stone 800
        ],
        ...toponymeHalo,
      },
    },
  ];
};
