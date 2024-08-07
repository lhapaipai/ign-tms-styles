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
export const cAutorouteExt =  [             "#DE460E",                                               "#F18800"];
export const cAutorouteInt =  [  "#ffffff", "#F18800",                                               "#F2B230"];
export const cPrincipaleExt =               "#E2A52A"                                                          ;
export const cPrincipaleInt = [  "#ffffff", "#F3C66D",                                               "#F2DDB3"];
export const cRegionaleExt =                           "#B4B4B4"                                               ;
export const cRegionaleInt =  [                        "#FDF28B",                                    "#FCF6BD"];
export const cLocaleExt =     [                        "#8C8C8C", "#B4B4B4"                                   ];
export const cLocaleInt =     [                        "#ffffff", "#FCF4A8",                         "#FCF6BD"];
export const cAutreExt =                                                     "#969696"                         ;
export const cAutreInt =                                                     "#ffffff"                         ;
export const cNonRevetueExt = [                                   "#646464",                         "#8c8c8c"];
export const cNontRevetueInt =                                    "#ffffff"                                    ;
export const cPisteCyclable =                                                "#9b5ccc";
/**
 * chemin est plus large que sentier
 * sentier = sentier rando ou rue piétonne
 */
export const cChemin =        [                                              "#bcaaac", "#8c7274"             ];
export const cSentier =       [                                              "#a68e91", "#8c7274"             ];

export const routeSurface = {
  cParking: "#f0f0f0",
  cDefaut: "#f0f0f0",
  cOut: "#ddd",
}

export const pont = {
  cFiletExt: "#c8c8c8",
  cFiletInt: "#ffffff",
  wFiletExt: ["interpolate", ["linear"], ["zoom"], 9, 4, 14, 7.5, 16, 20, 17, 34],
  wFiletInt: ["interpolate", ["linear"], ["zoom"], 9, 3, 14, 6.5, 16, 13, 17, 24],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const ferre = {
  c: "#787878",
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
export const cSouterrainFiletInterieur = "#ffffff";
export const cAutorouteAxeCentral = "#ffffff";
export const cEscalierFiletInterieur = "#ffffff";



export const cOroText = "#863831";
export const cOroMassifText = "#e18f88";

export const cText = "#1f2937";

export const cOroRelief = {
  bg:        ["#F7FAF5", "#ffffff"],
  hypso0:    ["#D6E5BA", "#FCFDFC"],
  hypso100:  ["#C7E2A1", "#F7FAF5"],
  hypso200:  ["#B0D98F", "#EBF1E5"],
  hypso1000: ["#ebdebf", "#F3EBD8"],
  hypso3000: ["#DABE97", "#EBDEBF"],
  hypso4000: ["#B28773", "#D2B8AD"],
  hypso5000: ["#9E6A54", "#C19F8F"],
  glacier:    "#ffffff",
};

export const cOroCourbe = {
  talus: "#d9c8a9",
  sol: {
    maitresse: "#D9C8A9",
    normale:   "#d9d1c2",
    text:      "#604a2f"
  },
  rocher: {
    maitresse: "#aaaaaa",
    normale:   "#AAAAAA",
    text:      "#333333"
  },
  glacier: {
    maitresse: "#A4BFD9",
    normale:   "#A4BFD9",
    text:      "#629FD9"
  }
}
/**
 * essayer de faire correspondre hypso200[1] avec cOcsVegetation.foret
 */
export const cOcsVegetation = {
  foret:           ["#dfe8d5", "#b1bfa3"], /* zoom faible -> toutes les forêts, zoom fort -> forêts mixe uniquement */
  foretConi:       ["#c7d4b9", "#a1af8e"],
  foretFeuil:      ["#e6edd8", "#bcc1a6"],
  foretOuverte:     "#EDF2D9",
  peupleraie:       "#DFE8D5",
  landeLigneuse:   ["#F2EECD", "#93b685"],
  vigne:            "#FFEDD9",
  verger:           "#FAEDFA",
  canneBanane:      "#FAEDFA",
  estran:           "#C3DDE9",
  mangrove:         "#85CCCB",
  sable:           ["#fefefe", "#da8e4c"],
  sableHumide:     ["#f6f6f6", "#54aace"],
  marais:          ["#d6e6d3", "#a4bfa0"],
  maraisSalant:    ["#ecf5f4", "#d6e4e3"],
  graviers:        ["#e5e5e5", "#b3b3b3"],
  graviersHumides: ["#e4f0f6", "#8aa2a9"],
  rocherHydro:     ["#d7e8f4", "#b0d5e8"]
};

export const cOcsBati = {
  indusActi: "#D9D9D9",
};

export const cHydro = {
  default:       ["#aad5e9", "#1466b2"],
  estran:        "#c3dde9",
  marais:        "#d6e6d3",
  eauTemporaire: "#d4e5ee",
  
  text:          "#5792C2",
  textOcean:     "#ffffff",
}


export const bati = {
  // zones (pas associée à un batiments à proprement parler)
  zai: {
    // surface qui englobe les batiments publics

    // ex: collège, Hôpital, Musée, Police
    cFillDefaut: "#ffedd5", // orange 100

    // ex: préfecture, Hôtel de région
    cFillCommandement: "#FF0000"
  },
  aeroport: {
    cText: "#4b5563"
  },
  // bati surfacique
  mairie: {
    cFill: "#fecaca", // red 200
    cLine: "#f87171", // red 400
  },
  commerce: {
    cFill: "#e2e8f0", // slate 200
    cLine: "#94a3b8", // slate 400
  },
  sportif: {
    cFill: "#a7f3d0", // emerald 200
    cLine: "#34d399", // emerald 400
    cText: "#047857", // emerald 700
  },
  sportifAutre: {
    // "FOOT_SURF", "MULTI_SPORT_SURF", "NATATION_SURF", "PISTE_SPORT_SURF", "SPORT_INDIF_SURF", "TENNIS_SURF"
    cFill: "#ECFCCB", // lime 100
    cLine: "#BEF264", // lime 300
    cText: "#4d7c0f", // lime 700
  },
  gare: {
    cFill: "#c7d2fe", // indigo 200
    cLine: "#818cf8", // indigo 400
    cText: "#4338CA", // indigo 700
  },
  public: {
    cFill: "#fed7aa", // orange 200
    cLine: "#fb923c", // orange 400
    cText:  "#9a3412", // orange 800
  },
  culte: {
    cFill: "#e9d5ff", // purple 200
    cLine: "#c084fc", // purple 400
    cText:  "#7e22ce", // purple 700
  },
  pecherie: {
    cFill: "#bfdbfe", // blue 200
    cLine: "#60a5fa", // blue 400
  },
  ecluse: {
    cFill: "#ADCCD9",
    cLine: cHydro.default[1],
  },
  barrage: {
    cFill: "#FFFFFF",
    cLine: "#464646",
  },
  hydro: {
    /**
     * batiment lié à l'eau mais l'eau en elle-même
     * n'est pas accessible
     * puits, abreuvoir
     */
    cFill: "#ffffff",
    cLine: cHydro.default[1],
    /**
     * différent de cHydro.text
     * le texte du batiment doit être contrasté
     */
    cText: cHydro.default[1],
  },


  silo: {
    cFill: "#C7A9AA",
    cLine: "#696969",
  },
  reservoirIndustriel: {
    cFill: "#8D9DAA",
    cLine: "#464646",
  },
  serre: {
    cFill: "#CAD6D9",
    cLine: "#8C8C8C",
  },
  monument: {
    cFill: "#fbcfe8", // pink 200
    cLine: "#f472b6", // pink 400
    cText: "#be185d", // pink 700
  },
  piste: {
    cFill: "#DBDBDB",
    cLine: "#808080",
  },
  cimetiere: {
    cFill: "#F0F0F0",
    cLine: "#a8a29e", // stone 400
  },
  posteElectrique: {
    cFill: "#e1e5ec",
    cLine: "#000000",
  },
  quelconque: {
    cFill: "#e7e5e4", // stone 200
    cLine: "#a8a29e", // stone 400
    cText: "#78716c", // stone 500
  },
  autre: {
    cFill: "#e7e5e4", // stone 200
    cLine: "#a8a29e", // stone 400
    cText: "#44403c", // stone 700
  },
  refuge: {
    cText: "#246138"
  },
  hopital: {
    cText: "#bf0000"
  },
}

export const limite = {
  bandeau: "#f1f1f6",
  admin: {
    /**     z2         z8         */
    cLine: ["#605780", "#9f9cb8"]
  },
  militaire: {
    cLine: "#e5997a",
    cText: "#0d2000"
  },
  parcNaturel: {
    cLine: "#42a266",
    cText: "#287b00"
  },
  parcMarin: {
    cLine: "#2a81a2",
    cText: "#2a81a2"
  },
  layon: "#b3989a",
  zoneNaturelle: "#FFC2CB",
  cote: "#82a3b2",
  cloture: "#000000",
}

export const aerien = {
  /**
   * différent de cLigneAutre pour rester discret
   * on met plus en valeur cLigneAutre car peut-être associé à remontée mécanique.
   */
  cLigneElec: "#d6d3d1",
  cLigneAutre: ["interpolate", ["linear"], ["zoom"], 11, "#d6d3d1", 15, "#a8a29e"],
  /**
   * les pylones des remontées mécaniques sont accessibles dès le zoom 11
   * ceux des lignes électriques à partir du zoom 13.
   */
  cPylone: ["interpolate", ["linear"], ["zoom"], 13, "#78716c", 15, "#57534e"],
} satisfies {
  [key: string]: DataDrivenPropertyValueSpecification<string>;
};

export const cToponyme = {
  defaultFadeIn: "#444",
  default: "#000",
  bornePostale: "#79654f",
}


export const toponymeHalo: SymbolLayerSpecification["paint"] = {
  "text-halo-color": "#fff",
  "text-halo-width": 1,
};

export const toponymeRoutierHalo: SymbolLayerSpecification["paint"] = {
  "text-halo-color": "#fff",
  "text-halo-width": 2,
};

export const toponymeHydroHalo: SymbolLayerSpecification["paint"] = {
  "text-halo-color": "rgba(255, 255, 255, .75)",
  "text-halo-width": 2,
};

export const circleDefaultPaint: CircleLayerSpecification["paint"] = {
  "circle-color": "#fff",
  "circle-stroke-color": "#555",
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

