import { CircleLayerSpecification, DataDrivenPropertyValueSpecification, SymbolLayerSpecification } from "@maplibre/maplibre-gl-style-spec";


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
export const cAutorouteExt =  [             "#FF8C00",                                               "#FFA500"]; // orange foncé à orange
export const cAutorouteInt =  [  "#000000", "#FFA500",                                               "#FFB732"]; // noir à orange
export const cPrincipaleExt =               "#FFD700"; // or
export const cPrincipaleInt = [  "#000000", "#FFD700",                                               "#FFE066"]; // noir à or
export const cRegionaleExt =                           "#A9A9A9"; // gris foncé
export const cRegionaleInt =  [                        "#FFD700",                                    "#FFE066"]; // or à or clair
export const cLocaleExt =     [                        "#696969", "#A9A9A9"]; // gris
export const cLocaleInt =     [                        "#000000", "#FFD700",                         "#FFE066"]; // noir à or clair
export const cAutreExt =                                                     "#808080"; // gris
export const cAutreInt =                                                     "#000000"; // noir
export const cNonRevetueExt = [                                   "#4B4B4B",                         "#696969"]; // gris foncé
export const cNontRevetueInt =                                    "#000000"; // noir
export const cPisteCyclable =                                                "#BA55D3"; // orchidée moyen
/**
 * chemin est plus large que sentier
 * sentier = sentier rando ou rue piétonne
 */
export const cChemin =        [                                              "#BC8F8F", "#8B0000"]; // bois rosé à rouge foncé
export const cSentier =       [                                              "#A0522D", "#8B0000"]; // terre de sienne brûlée à rouge foncé

export const routeSurface = {
  cParking: "#2F4F4F", // gris ardoise foncé
  cDefaut: "#2F4F4F", // gris ardoise foncé
  cOut: "#696969", // gris
}

export const pont = {
  cFiletExt: "#808080", // gris
  cFiletInt: "#000000", // noir
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 9, 4, 14, 7.5, 16, 20, 17, 34],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 9, 3, 14, 6.5, 16, 13, 17, 24],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};


export const ferre = {
  c: "#B0C4DE", // gris clair
  w: ["interpolate", ["linear"], ["zoom"], 10, 0.8, 17, 2.5]
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

/**
 * pour les routes souterraines qui ont un filet intérieur et extérieur
 * le résultat est meilleur en utilisant une couleur très claire comme #ffffff avec une
 * opacité de .5
 * qu'un cXXXInt avec opacité de .5 car la couleur du filet intérieur va foncir la couleur
 * finale
 */
export const cSouterrainFiletInterieur = "#000000"; // noir
export const cAutorouteAxeCentral = "#000000"; // noir
export const cEscalierFiletInterieur = "#000000"; // noir

export const cOroText = "#FF4500"; // orange rouge
export const cOroMassifText = "#FFA07A"; // saumon clair

export const cText = "#DCDCDC"; // gris clair

export const cOroRelief = {
  bg:        ["#2E2E2E", "#000000"], // gris très foncé à noir
  hypso0:    ["#3E3E3E", "#2E2E2E"], // gris foncé
  hypso100:  ["#4E4E4E", "#3E3E3E"], // gris
  hypso200:  ["#5E5E5E", "#4E4E4E"], // gris
  hypso1000: ["#6E6E6E", "#5E5E5E"], // gris
  hypso3000: ["#7E7E7E", "#6E6E6E"], // gris
  hypso4000: ["#8E8E8E", "#7E7E7E"], // gris
  hypso5000: ["#9E9E9E", "#8E8E8E"], // gris
  glacier:    "#DCDCDC", // gris clair
};

export const cOroCourbe = {
  talus: "#808080", // gris
  sol: {
    maitresse: "#808080", // gris
    normale:   "#696969", // gris foncé
    text:      "#DCDCDC" // gris clair
  },
  rocher: {
    maitresse: "#A9A9A9", // gris
    normale:   "#A9A9A9", // gris
    text:      "#DCDCDC" // gris clair
  },
  glacier: {
    maitresse: "#87CEFA", // bleu ciel
    normale:   "#87CEFA", // bleu ciel
    text:      "#4682B4" // bleu acier
  }
}
/**
 * essayer de faire correspondre hypso200[1] avec cOcsVegetation.foret
 */
export const cOcsVegetation = {
  foret:           ["#556B2F", "#2E8B57"], /* vert olive foncé à vert de mer */
  foretConi:       ["#2E8B57", "#006400"], // vert de mer à vert foncé
  foretFeuil:      ["#556B2F", "#6B8E23"], // vert olive foncé à vert olive
  foretOuverte:     "#556B2F", // vert olive foncé
  peupleraie:       "#556B2F", // vert olive foncé
  landeLigneuse:   ["#6B8E23", "#556B2F"], // vert olive
  vigne:            "#6B8E23", // vert olive
  verger:           "#556B2F", // vert olive foncé
  canneBanane:      "#556B2F", // vert olive foncé
  estran:           "#2E8B57", // vert de mer
  mangrove:         "#20B2AA", // vert menthe
  sable:           ["#FFD700", "#FFA500"], // or à orange
  sableHumide:     ["#FFA500", "#20B2AA"], // orange à vert menthe
  marais:          ["#556B2F", "#2E8B57"], // vert olive foncé à vert de mer
  maraisSalant:    ["#2E8B57", "#20B2AA"], // vert de mer à vert menthe
  graviers:        ["#A9A9A9", "#808080"], // gris foncé à gris
  graviersHumides: ["#2E8B57", "#4682B4"], // vert de mer à bleu acier
  rocherHydro:     ["#4682B4", "#5F9EA0"] // bleu acier à vert de cadet
};

export const cOcsBati = {
  indusActi: "#2E2E2E", // gris très foncé
};

export const cHydro = {
  default:       ["#2B7EAD", "#0A4178"], // bleu foncé
  estran:        "#315E73", // bleu gris foncé
  marais:        "#3C6351", // vert foncé
  eauTemporaire: "#2F5765", // bleu gris
  text:          "#88B9D8", // bleu clair
  textOcean:     "#FFFFFF", // blanc
}

export const bati = {
  // zones (pas associée à un batiments à proprement parler)
  zai: {
    // surface qui englobe les batiments publics
    cFillDefaut: "#5A3A29", // marron foncé
    cFillCommandement: "#FF4D4D" // rouge vif
  },
  aeroport: {
    cText: "#B0BEC5" // gris bleu clair
  },
  // bati surfacique
  mairie: {
    cFill: "#A52A2A", // rouge brique
    cLine: "#D32F2F", // rouge vif
  },
  commerce: {
    cFill: "#455A64", // gris bleu foncé
    cLine: "#90A4AE", // gris bleu clair
  },
  sportif: {
    cFill: "#2E7D32", // vert foncé
    cLine: "#66BB6A", // vert clair
    cText: "#004D40", // vert très foncé
  },
  sportifAutre: {
    cFill: "#76FF03", // vert citron
    cLine: "#CDDC39", // vert lime
    cText: "#33691E", // vert olive foncé
  },
  gare: {
    cFill: "#7E57C2", // violet foncé
    cLine: "#B39DDB", // violet clair
    cText: "#311B92", // indigo foncé
  },
  public: {
    cFill: "#FF6F00", // orange foncé
    cLine: "#FF8F00", // orange vif
    cText: "#E65100", // orange brûlé
  },
  culte: {
    cFill: "#7B1FA2", // violet foncé
    cLine: "#AB47BC", // violet clair
    cText: "#4A148C", // violet très foncé
  },
  pecherie: {
    cFill: "#42A5F5", // bleu clair
    cLine: "#64B5F6", // bleu plus clair
  },
  ecluse: {
    cFill: "#558B2F", // vert foncé
    cLine: cHydro.default[1], // bleu foncé
  },
  barrage: {
    cFill: "#ECEFF1", // gris très clair
    cLine: "#263238", // bleu gris très foncé
  },
  hydro: {
    cFill: "#ECEFF1", // gris très clair
    cLine: cHydro.default[1], // bleu foncé
    cText: cHydro.default[1], // bleu foncé
  },
  silo: {
    cFill: "#8E8D8D", // gris foncé
    cLine: "#616161", // gris très foncé
  },
  reservoirIndustriel: {
    cFill: "#4E555A", // gris bleu foncé
    cLine: "#263238", // bleu gris très foncé
  },
  serre: {
    cFill: "#B0BEC5", // gris bleu clair
    cLine: "#78909C", // gris bleu foncé
  },
  monument: {
    cFill: "#D81B60", // rose foncé
    cLine: "#EC407A", // rose vif
    cText: "#880E4F", // rose très foncé
  },
  piste: {
    cFill: "#424242", // gris foncé
    cLine: "#B0BEC5", // gris bleu clair
  },
  cimetiere: {
    cFill: "#546E7A", // gris bleu foncé
    cLine: "#90A4AE", // gris bleu clair
  },
  posteElectrique: {
    cFill: "#1C313A", // bleu gris très foncé
    cLine: "#000000", // noir
  },
  quelconque: {
    cFill: "#9E9E9E", // gris moyen
    cLine: "#616161", // gris foncé
    cText: "#BDBDBD", // gris clair
  },
  autre: {
    cFill: "#757575", // gris moyen foncé
    cLine: "#616161", // gris foncé
    cText: "#9E9E9E", // gris moyen
  },
  refuge: {
    cText: "#B0BEC5", // gris bleu clair
  },
  hopital: {
    cText: "#D32F2F", // rouge vif
  },
}

export const limite = {
  bandeau: "#1B1B1B", // noir charbon
  admin: {
    cLine: ["#9C27B0", "#D1C4E9"], // violet foncé à violet clair
  },
  militaire: {
    cLine: "#E57373", // rouge clair
    cText: "#FFCDD2", // rouge très clair
  },
  parcNaturel: {
    cLine: "#4CAF50", // vert
    cText: "#388E3C", // vert foncé
  },
  parcMarin: {
    cLine: "#0288D1", // bleu
    cText: "#0288D1", // bleu
  },
  layon: "#D32F2F", // rouge vif
  zoneNaturelle: "#388E3C", // vert foncé
  cote: "#0277BD", // bleu
  cloture: "#FFFFFF", // blanc
}

export const aerien = {
  cLigneElec: "#424242", // gris foncé
  cLigneAutre: ["interpolate", ["linear"], ["zoom"], 11, "#424242", 15, "#B0BEC5"], // gris foncé à gris bleu clair
  cPylone: ["interpolate", ["linear"], ["zoom"], 13, "#9E9E9E", 15, "#616161"], // gris moyen à gris foncé
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const cToponyme = {
  defaultFadeIn: "#F5F5F5", // blanc cassé
  default: "#FFFFFF", // blanc
  bornePostale: "#FFC107", // jaune
}

export const toponymeHalo: SymbolLayerSpecification["paint"] = {
  "text-halo-color": "#000", // noir
  "text-halo-width": 1,
};

export const toponymeRoutierHalo: SymbolLayerSpecification["paint"] = {
  "text-halo-color": "#000", // noir
  "text-halo-width": 2,
};

export const toponymeHydroHalo: SymbolLayerSpecification["paint"] = {
  "text-halo-color": "rgba(0, 0, 0, 0.75)", // noir avec opacité
  "text-halo-width": 2,
};

export const circleDefaultPaint: CircleLayerSpecification["paint"] = {
  "circle-color": "#DCDCDC", // gris clair
  "circle-stroke-color": "#696969", // gris foncé
  "circle-stroke-width": 1,
};

export const autoroute = {
  cText: cAutorouteExt[0],

  cFiletExt: ["interpolate", ["linear"], ["zoom"], 7, cAutorouteExt[0], 17, cAutorouteExt[1]],
  wFiletExtBretelle: ["interpolate", ["linear"], ["zoom"], 12, 2.5, 14, 3.7, 15, 6.8, 16, 8.4, 17, 14],

  wFiletExt: ["interpolate", ["linear"], ["zoom"], 9, 3.5, 14, 7.5, 15, 11, 16, 15, 17, 26],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 4, 0.7, 6, 2.5, 9, 2.7, 14, 5.8, 15, 9, 16, 12, 17, 20.8],

  cFiletInt: ["interpolate", ["linear"], ["zoom"], 5, cAutorouteInt[0], 7, cAutorouteInt[1], 17, cAutorouteInt[2]],
  wFiletIntBretelle: ["interpolate", ["linear"], ["zoom"], 12, 1.5, 14, 2.6, 15, 5.2, 16, 6.7, 17, 10.8],
  cAxeCentral: cAutorouteAxeCentral,
  wAxeCentral: ["interpolate", ["linear"], ["zoom"], 9, 0.6, 14, 0.7, 15, 1, 16, 1.2, 17, 2.1],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routePrincipale = {
  cText: cPrincipaleExt,

  cFiletExt: cPrincipaleExt,
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 9, 2.7, 14, 6, 16, 12, 17, 22],
  cFiletInt: ["interpolate", ["linear"], ["zoom"], 5, cPrincipaleInt[0], 7, cPrincipaleInt[1], 17, cPrincipaleInt[2]],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 4, 0.6, 6, 1.8, 9, 2.1, 14, 5, 16, 11, 17, 20],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const routeRegionale = {
  /**
   * cRegionaleInt[0] est illisible
   */
  cText: cPrincipaleExt,
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

export const chemin = {
  c: ["interpolate", ["linear"], ["zoom"], 13, cChemin[0], 15, cChemin[1]],
  w: ["interpolate", ["linear"], ["zoom"], 14, 1.5, 17, 3, 18, 7],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};


export const sentier = {
  c: ["interpolate", ["linear"], ["zoom"], 13, cSentier[0], 15, cSentier[1]],
  w: ["interpolate", ["linear"], ["zoom"], 14, 1, 17, 2, 18, 6],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const escalier = {
  /**
   * prolongement de rue piétonne
   */
  cFiletExt: sentier.c,
  cFiletInt: cEscalierFiletInterieur,
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 14, 1.75, 15, 3, 16, 4.2, 17, 9.5],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 14, 1, 15, 1.9, 16, 2.7, 17, 5.8]
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

