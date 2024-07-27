les funicalaires souterrains n'ont qu'un trait voir pour plus tard

```json
{
  "id": "Ferre souterrain - 2 trait perpendic - funic/urbain",
  "type": "line",
  "source": "plan_ign",
  "source-layer": "ferre_sou",
  "maxzoom": 18,
  "filter": [
    "match",
    ["get", "symbo"],
    ["FUNI_CREMAILLERE_SOU", "TRANSPORT_URBAIN_SOU"],
    true,
    false
  ],
  "layout": {
    "visibility": "visible",
    "line-cap": "butt",
    "line-join": "round"
  },
  "paint": {
    "line-color": "#B4B4B4",
    "line-width": ["interpolate", ["linear"], ["zoom"], 10, 3.5, 17, 17],
    "line-dasharray": [0.1, 0.2, 0.1, 10]
  }
}
```


pas de distinction entre chemin souterrain et escalier souterrain.

-> pour les routes on va déjà faire la version non sous-terraine puis on avisera.

rest
```json

    {
      "id": "routierSouterrain - filet extérieur - route non revetu carrosable",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": ["==", ["get", "symbo"], "NON_REVETUE_CARRO_SOU"],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#AFAFAF",
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 3.2, 15, 5.4, 16, 7.7, 17, 16.8],
        "line-dasharray": [2, 2]
      }
    },
    {
      "id": "routierSouterrain - filet extérieur - bretelle autoroute",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "minzoom": 12,
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_AUTO_LIBRE_1_SOU",
          "BRET_AUTO_LIBRE_2_SOU",
          "BRET_AUTO_LIBRE_3_SOU",
          "BRET_AUTO_PEAGE_1_SOU",
          "BRET_AUTO_PEAGE_2_SOU",
          "BRET_AUTO_PEAGE_3_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(222, 70, 14, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          2.5,
          14,
          3.7,
          15,
          6.8,
          16,
          8.4,
          17,
          14
        ]
      }
    },
    {
      "id": "routierSouterrain - filet extérieur - route non classee restreint",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": ["==", ["get", "symbo"], "NON_CLASSEE_RESTREINT_SOU"],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#AFAFAF",
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 3.2, 15, 5.4, 16, 7.7, 17, 16.8]
      }
    },
    {
      "id": "routierSouterrain - filet extérieur - route non classee",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": ["match", ["get", "symbo"], ["NON_CLASSEE_4_SOU", "NON_CLASSEE_SOU"], true, false],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#AFAFAF",
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 3.2, 15, 5.4, 16, 7.7, 17, 16.8]
      }
    },
    {
      "id": "routierSouterrain - filet extérieur - route locale",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_LOCALE_SOU",
          "LOCALE_1_SOU",
          "LOCALE_2_SOU",
          "LOCALE_3_SOU",
          "LOCALE_4_SOU",
          "LOCALE_CONSTR_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["LOCALE_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(130, 130, 130, 0.5)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 9, 2, 14, 3.5, 15, 6, 16, 8.4, 17, 18.3]
      }
    },

    {
      "id": "routierSouterrain - filet extérieur - route regionale",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_REGIONALE_SOU",
          "REGIONALE_1_SOU",
          "REGIONALE_2_SOU",
          "REGIONALE_3_SOU",
          "REGIONALE_4_SOU",
          "REGIONALE_CONSTR_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["REGIONALE_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(130, 130, 130, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          1.5,
          9,
          2.3,
          14,
          5,
          15,
          8.1,
          16,
          11.2,
          17,
          22
        ]
      }
    },
    {
      "id": "routierSouterrain - filet extérieur - route principale",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "minzoom": 7,
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_PRINCIPALE_SOU",
          "PRINCIPALE_1_SOU",
          "PRINCIPALE_2_SOU",
          "PRINCIPALE_3_SOU",
          "PRINCIPALE_4_SOU",
          "PRINCIPALE_CONSTR_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["PRINCIPALE_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(222, 70, 14, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          1.8,
          9,
          2.7,
          14,
          5.9,
          15,
          9,
          16,
          12.2,
          17,
          22.5
        ]
      }
    },
    {
      "id": "routierSouterrain - filet extérieur - autoroute",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "minzoom": 7,
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        ["AUTOROU_LIBRE_SOU", "AUTOROU_PEAGE_SOU", "AUTOROU_CONSTR_SOU"],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["AUTOROU_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(222, 70, 14, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          2.5,
          9,
          3.5,
          14,
          7.5,
          15,
          11,
          16,
          15,
          17,
          26
        ]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - route non revetu carrosable",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": ["==", ["get", "symbo"], "NON_REVETUE_CARRO_SOU"],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#DCDCDC",
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.3, 15, 4.1, 16, 6.3, 17, 13.5]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - bretelle autoroute",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "minzoom": 12,
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_AUTO_LIBRE_1_SOU",
          "BRET_AUTO_LIBRE_2_SOU",
          "BRET_AUTO_LIBRE_3_SOU",
          "BRET_AUTO_PEAGE_1_SOU",
          "BRET_AUTO_PEAGE_2_SOU",
          "BRET_AUTO_PEAGE_3_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          1.5,
          14,
          2.6,
          15,
          5.2,
          16,
          6.7,
          17,
          10.8
        ]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - route non classee restreint",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": ["==", ["get", "symbo"], "NON_CLASSEE_RESTREINT_SOU"],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#F2F5FF",
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.3, 15, 4.1, 16, 6.3, 17, 13.5]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - route non classee",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": ["match", ["get", "symbo"], ["NON_CLASSEE_4_SOU", "NON_CLASSEE_SOU"], true, false],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#DCDCDC",
        "line-width": ["interpolate", ["linear"], ["zoom"], 14, 2.3, 15, 4.1, 16, 6.3, 17, 13.5]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - route locale",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_LOCALE_SOU",
          "LOCALE_1_SOU",
          "LOCALE_2_SOU",
          "LOCALE_3_SOU",
          "LOCALE_4_SOU",
          "LOCALE_CONSTR_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["LOCALE_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(255, 255, 255, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          9,
          1.3,
          14,
          2.3,
          15,
          4.1,
          16,
          6.1,
          17,
          13.1
        ]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - route regionale",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_REGIONALE_SOU",
          "REGIONALE_1_SOU",
          "REGIONALE_2_SOU",
          "REGIONALE_3_SOU",
          "REGIONALE_4_SOU",
          "REGIONALE_CONSTR_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["REGIONALE_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(255, 255, 255, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          1.4,
          9,
          1.5,
          14,
          3.2,
          15,
          5.8,
          16,
          8.3,
          17,
          16.2
        ]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - route principale",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        [
          "BRET_PRINCIPALE_SOU",
          "PRINCIPALE_1_SOU",
          "PRINCIPALE_2_SOU",
          "PRINCIPALE_3_SOU",
          "PRINCIPALE_4_SOU",
          "PRINCIPALE_CONSTR_SOU"
        ],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["PRINCIPALE_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(255, 255, 255, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          4,
          0.5,
          6,
          1.8,
          9,
          2.1,
          14,
          4.4,
          15,
          7.3,
          16,
          10,
          17,
          18.5
        ]
      }
    },
    {
      "id": "routierSouterrain - filet interieur - autoroute",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        ["AUTOROU_LIBRE_SOU", "AUTOROU_PEAGE_SOU", "AUTOROU_CONSTR_SOU"],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["AUTOROU_CONSTR_SOU"], 0.2, 1],
        "line-color": "rgba(255, 255, 255, 0.5)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          4,
          0.7,
          6,
          2.5,
          9,
          2.7,
          14,
          5.8,
          15,
          9,
          16,
          12,
          17,
          20.8
        ]
      }
    },
    {
      "id": "routierSouterrain - axe central - autoroute",
      "type": "line",
      "source": "plan_ign",
      "source-layer": "routier_route_sou",
      "minzoom": 13,
      "maxzoom": 22,
      "filter": [
        "match",
        ["get", "symbo"],
        ["AUTOROU_LIBRE_SOU", "AUTOROU_PEAGE_SOU", "AUTOROU_CONSTR_SOU"],
        true,
        false
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-opacity": ["match", ["get", "symbo"], ["AUTOROU_CONSTR_SOU"], 0.2, 1],
        "line-color": "#FFFFFF",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          9,
          0.6,
          14,
          0.7,
          15,
          1,
          16,
          1.2,
          17,
          2.1
        ]
      }
    }

```