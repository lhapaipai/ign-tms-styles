```json
{
  "id": "routier_chemin_sou",
  "geometry": "GEOMETRY",
  "maxzoom": "18",
  "minzoom": "12",
  "fieldsCount": "4",
  "fields": {
    "symbo": {
      "attribute": "symbo",
      "count": 6.0,
      "type": "character varying",
      "values": ["ESCALIER_SOU", "SENTIER_SOU", "RUE_PIETONNE_SOU", "SENTIER_FICTIF_SOU", "CHEMIN_SOU", "PISTE_CYCLABLE_SOU"]
    },
    "niveau": { "attribute": "niveau", "count": 1.0, "type": "text", "values": ["n0"] },
    "sens_circu": {
      "attribute": "sens_circu",
      "count": 3.0,
      "type": "character varying",
      "values": ["Sans objet", "Double sens", "Sens direct"]
    },
    "territoire": {
      "attribute": "territoire",
      "count": 4.0,
      "type": "character varying",
      "values": ["GLP", "MTQ", "REU", "FXX"]
    }
  }
},
{
  "id": "routier_route_sou",
  "geometry": "GEOMETRY",
  "maxzoom": "18",
  "minzoom": "8",
  "fieldsCount": "6",
  "fields": {
    "symbo": {
      "attribute": "symbo",
      "count": 20.0,
      "type": "character varying",
      "values": [
        "NON_REVETUE_CARRO_SOU",
        "NON_CLASSEE_RESTREINT_SOU",
        "NON_CLASSEE_SOU",

        "LOCALE_1_SOU",
        "LOCALE_2_SOU"
        "LOCALE_3_SOU",
        "LOCALE_CONSTR_SOU",

        "REGIONALE_1_SOU",
        "REGIONALE_2_SOU",
        "REGIONALE_3_SOU",
        "REGIONALE_CONSTR_SOU",

        "PRINCIPALE_1_SOU",
        "PRINCIPALE_2_SOU",
        "PRINCIPALE_3_SOU",
        "PRINCIPALE_CONSTR_SOU",

        "AUTOROU_LIBRE_SOU",
        "AUTOROU_PEAGE_SOU",
        "BRET_AUTO_LIBRE_1_SOU",
        "BRET_AUTO_PEAGE_1_SOU",
        "BRET_AUTO_PEAGE_2_SOU",
      ]
    },
    "fictif": { "attribute": "fictif", "count": 2.0, "type": "boolean", "values": ["0", "1"] },
    "niveau": { "attribute": "niveau", "count": 1.0, "type": "text", "values": ["n0"] },
    "rond_point": { "attribute": "rond_point", "count": 2.0, "type": "boolean", "values": ["0", "1"] },
    "sens_circu": { "attribute": "sens_circu", "count": 3.0, "type": "character varying", "values": ["Double sens", "Sens direct", "Sens inverse"] },
    "territoire": { "attribute": "territoire", "count": 4.0, "type": "character varying", "values": ["GLP", "MTQ", "REU", "FXX"] }
  }
}
```