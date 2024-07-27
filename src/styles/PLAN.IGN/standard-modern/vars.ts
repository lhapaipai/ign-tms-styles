import { DataDrivenPropertyValueSpecification, SymbolLayerSpecification } from "@maplibre/maplibre-gl-style-spec";

export const pont = {
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 9, 4, 14, 7.5, 16, 20, 17, 34],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 9, 3, 14, 6.5, 16, 13, 17, 24],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

/**
 * Important: la REGIONALE_4 n'existe que pour les zooms inférieurs à 7
 * elle se transformera en PRINCIPALE_2 ou PRINCIPALE_3
 * z3 -> z7: AUTOROUTE_PEAGE, PRINCIPALE_4, REGIONALE_4,
 *
 * changement de carte.
 * z7 -> z8  : AUTOROUTE_PEAGE, PRINCIPALE_1, PRINCIPALE_2, PRINCIPALE_3, PRINCIPALE_4,
 * z8 -> z9  : PRINCIPALE_1, PRINCIPALE_2, PRINCIPALE_3, PRINCIPALE_4, REGIONALE_1,REGIONALE_2 AUTOROUTE_PEAGE
 * z9 -> z9  : PRINCIPALE_1, PRINCIPALE_2, PRINCIPALE_3, PRINCIPALE_4, REGIONALE_1,REGIONALE_2, LOCALE_1, LOCALE_2 AUTOROUTE_PEAGE
 */

/**                              z3         z7         z9         z11        z13        z15          z17*/
export const cAutorouteExt =  [             "#DE460E",                                               "#F18800"];
export const cAutorouteInt =  [  "#fff",    "#F18800",                                               "#F2B230"];
export const cPrincipaleExt =               "#E2A52A"                                                          ;
export const cPrincipaleInt = [  "#fff",    "#F3C66D",                                               "#F2DDB3"];
export const cRegionaleExt =                "#B4B4B4"                                                          ;
export const cRegionaleInt =  [                        "#FDF28B",                                    "#FCF6BD"];
export const cLocaleExt =     [                        "#8C8C8C", "#B4B4B4"                                   ];
export const cLocaleInt =     [                        "#ffffff", "#FCF4A8",                         "#FCF6BD"];
export const cAutreExt =                                                     "#969696"                         ;
export const cAutreInt =                                                     "#ffffff"                         ;
export const cNonRevetueExt = [                                   "#646464",                         "#8c8c8c"];
export const cNontRevetueInt =                                    "#ffffff"                                    ;
export const cSentier =       [                                              "#a68e91", "#8c7274"             ];
export const cChemin =        [                                              "#bcaaac", "#8c7274"             ];

export const cHydro = "#aad5e9";
export const cHydroText = "#5792C2";

export const cNatureText = "#287B00";

export const cOroText = "#863831";
export const cOroMassifText = "#e18f88";

export const cText = "#1f2937";

export const cOroRelief = {
  bg: "#F7FAF5",
  hypso0: ["#D6E5BA", "#FCFDFC"],
  hypso100: ["#C7E2A1", "#F7FAF5"],
  hypso200: ["#B0D98F", "#EBF1E5"],
  hypso1000: ["#ebdebf", "#F3EBD8"],
  hypso3000: ["#DABE97", "#EBDEBF"],
  hypso4000: ["#B28773", "#D2B8AD"],
  hypso5000: ["#9E6A54", "#C19F8F"],
  glacier: "#fff",
};

/**
 * essayer de faire correspondre hypso200[1] avec cOcsVegetation.foret
 */
export const cOcsVegetation = {
  foret: "#dfe8d5" /* zoom faible -> toutes les forêts, zoom fort -> forêts mixe uniquement */,
  foretConi: "#c7d4b9",
  foretFeuil: "#e6edd8",
  foretOuverte: "#EDF2D9",
  peupleraie: "#DFE8D5",
  landeLigneuse: "#F2EECD",
  vigne: "#FFEDD9",
  verger: "#FAEDFA",
  canneBanane: "#FAEDFA",
  estran: "#C3DDE9",
  mangrove: "#85CCCB",
};

export const cOcsBati = {
  indusActi: "#D9D9D9",
};

export const toponymeHalo: SymbolLayerSpecification["paint"] = {
  "text-halo-color": "#fff",
  "text-halo-width": 1,
};

export const autoroute = {
  cFiletExt: ["interpolate", ["linear"], ["zoom"], 7, cAutorouteExt[0], 17, cAutorouteExt[1]],
  wFiletExtBretelle: ["interpolate", ["linear"], ["zoom"], 12, 2.5, 14, 3.7, 15, 6.8, 16, 8.4, 17, 14],

  wFiletExt: ["interpolate", ["linear"], ["zoom"], 9, 3.5, 14, 7.5, 15, 11, 16, 15, 17, 26],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 4, 0.7, 6, 2.5, 9, 2.7, 14, 5.8, 15, 9, 16, 12, 17, 20.8],

  cFiletInt: ["interpolate", ["linear"], ["zoom"], 5, cAutorouteInt[0], 7, cAutorouteInt[1], 17, cAutorouteInt[2]],
  wFiletIntBretelle: ["interpolate", ["linear"], ["zoom"], 12, 1.5, 14, 2.6, 15, 5.2, 16, 6.7, 17, 10.8],
  cAxeCentral: "#FFF",
  wAxeCentral: ["interpolate", ["linear"], ["zoom"], 9, 0.6, 14, 0.7, 15, 1, 16, 1.2, 17, 2.1],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routePrincipale = {
  cFiletExt: cPrincipaleExt,
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 9, 2.7, 14, 6, 16, 12, 17, 22],
  cFiletInt: ["interpolate", ["linear"], ["zoom"], 5, cPrincipaleInt[0], 7, cPrincipaleInt[1], 17, cPrincipaleInt[2]],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 4, 0.6, 6, 1.8, 9, 2.1, 14, 5, 16, 11, 17, 20],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routeRegionale = {
  /**
   * Les régionales ne sont censées apparaitre qu'au zoom 8, à l'exception de la REGIONALE_4
   * qui n'existe qu'aux zooms 1 à 7, c'est une PRINCIPALE peu empruntée, qui doit avoir un filet
   * fin mais doit être aux couleurs d'une principale. c'est pourquoi la régionale doit avoir les couleurs
   * de la principale jusqu'au zoom 8.
   *
   * à partir du zoom 8, plus de problème
   */
  cFiletExt: cRegionaleExt,
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 11, 2.3, 14, 5, 16, 11, 17, 22],
  cFiletInt: [
    "interpolate",
    ["linear"],
    ["zoom"],
    5,
    cPrincipaleInt[0],
    7,
    cPrincipaleInt[1],
    /* vrai début */
    9,
    cRegionaleInt[0],
    17,
    cRegionaleInt[1],
  ],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 4, 1.1, 6, 1.4, 9, 1.5, 14, 4, 16, 10, 17, 20],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routeLocale = {
  cFiletExt: ["interpolate", ["linear"], ["zoom"], 9, cLocaleExt[0], 11, cLocaleExt[1]],
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 11, 2, 14, 3.5, 16, 8.5, 17, 18],
  cFiletInt: ["interpolate", ["linear"], ["zoom"], 9, cLocaleInt[0], 11, cLocaleInt[1], 17, cLocaleInt[2]],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 9, 1.3, 14, 2.5, 16, 7.5, 17, 16],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routeNonClassee = {
  cFiletExt: cAutreExt,
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 14, 3.2, 16, 7.8, 17, 17],
  cFiletInt: cAutreInt,
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 14, 2.4, 16, 7, 17, 16.2],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routeNonClasseeRestreint = {
  cFiletExt: cAutreExt,
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 14, 2, 16, 5, 17, 9],
  cFiletInt: cAutreInt,
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 14, 1.2, 16, 4.2, 17, 8.2],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routeNonRevetue = {
  cFiletExt: ["interpolate", ["linear"], ["zoom"], 11, cNonRevetueExt[0], 17, cNonRevetueExt[1]],
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 14, 2, 16, 5, 17, 9],
  cFiletInt: cNontRevetueInt,
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 14, 1.2, 16, 4.2, 17, 8.2],
  dashArray: [0.5, 1.5] as any,
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const sentier = {
  c: ["interpolate", ["linear"], ["zoom"], 13, cSentier[0], 15, cSentier[1]],
  w: ["interpolate", ["linear"], ["zoom"], 14, 1, 17, 2, 18, 6],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const chemin = {
  c: ["interpolate", ["linear"], ["zoom"], 13, cChemin[0], 15, cChemin[1]],
  w: ["interpolate", ["linear"], ["zoom"], 14, 1.5, 17, 3, 18, 7],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};
