# Optimisation des styles des tuiles vectorielles de l'IGN pour le web


## Documentation

service TMS
https://geoservices.ign.fr/documentation/services/services-geoplateforme/diffusion#70064

bibliothèque de styles de l'IGN
https://geoservices.ign.fr/documentation/services/api-et-services-ogc/tuiles-vectorielles-tmswmts/styles

## URLs

Accès aux métadonnées du service
https://data.geopf.fr/tms/1.0.0

Accès aux métadonnées d'une donnée
https://data.geopf.fr/tms/1.0.0/{Layer}/metadata.json

Accès à une tuile
https://data.geopf.fr/tms/1.0.0/{Layer}/{z}/{x}/{y}.pbf

Accès aux styles vectoriels
https://data.geopf.fr/annexes/ressources/vectorTiles/styles/{Layer}/{style}.json

```
annexes|ressources|vectorTiles|styles|PLAN.IGN|standard.json
.
├── ADMIN_EXPRESS
│   └── adminexpress.json
├── BDTOPO
│   ├── classique.json
│   ├── bati.json
│   ├── hydrographie.json
│   ├── routier.json
│   ├── bati_date.json
│   └── bati_etages.json
├── ISOHYPSE
│   ├── isohypse_multicolore.json
│   ├── isohypse_monochrome_marron.json
│   └── isohypse_monochrome_orange.json
├── OCSGE
│   ├── ocsge_couverture.json
│   ├── ocsge_usage.json
│   └── ocsge_occupation.json
├── PCI
│   ├── noir_et_blanc.json
│   └── pci.json
└── PLAN.IGN
    ├── standard.json
    ├── attenue.json
    ├── gris.json
    ├── sans_toponymes.json
    ├── toponymes.json
    ├── accentue.json
    ├── classique.json
    └── epure.json
```

## Corriger les dépréciations

```bash
pnpm add -D @maplibre/maplibre-gl-style-spec
pnpm exec gl-style-migrate public/styles/PLAN.IGN/standard.original.json > public/styles/PLAN.IGN/standard.v1.json
```

```diff
{
-  "filter": ["==", "symbo", "HYPSO_3000"]
+  "filter": ["==", ["get", "symbo"], "HYPSO_3000"]

       "filter": [
-        "in",
-        "symbo",
-        "ZONE_BOISEE",
-        "ZONE_FORET_FERMEE_FEUIL",
-        "ZONE_FORET_FERMEE_CONI",
-        "ZONE_FORET_FERMEE_MIXTE",
-        "ZONE_PEUPLERAIE"
+        "match",
+        ["get", "symbo"],
+        [
+          "ZONE_BOISEE",
+          "ZONE_FORET_FERMEE_CONI",
+          "ZONE_FORET_FERMEE_FEUIL",
+          "ZONE_FORET_FERMEE_MIXTE",
+          "ZONE_PEUPLERAIE"
+        ],
+        true,
+        false
       ],


       "paint": {
-        "fill-color": {
-          "stops": [
-            [9, "#85CCCB"],
-            [10, "#90CCCB"]
-          ]
-        }
+        "fill-color": ["interpolate", ["linear"], ["zoom"], 9, "#85CCCB", 10, "#90CCCB"]
       }

}
```

## ocs

regroupement de toutes les règles du calque `ocs_vegetation_surf` dans une seule.

suppression du calque

```diff
- {
-   "id": "hydro surfacique - marais",
-   "type": "fill",
-   "source": "plan_ign",
-   "source-layer": "hydro_surf",
-   "filter": ["==", ["get", "symbo"], "ZONE_MARAIS"],
-   "layout": { "visibility": "visible" },
-   "paint": { "fill-pattern": "Marais" }
- },
```
`ZONE_MARAIS` est présent dans `ocs_vegetation_surf` mais pas dans `hydro_surf`.

contrairement à ce qui est annoncé dans les metadata

```json
{
  "id": "hydro_surf",
  "geometry": "GEOMETRY",
  "maxzoom": "19",
  "minzoom": "0",
  "fieldsCount": "4",
  "fields": {
    "niveau": { "attribute": "niveau", "count": 1.0, "type": "text", "values": ["n1"] },
    "toponyme": { "attribute": "toponyme", "count": 15652.0, "type": "character varying" },
    "symbo": {
      "attribute": "symbo",
      "count": 7.0,
      "type": "character varying",
      "values": [
        "ZONE_MARAIS",
        "ZONE_MARINE",
        "SURFACE_D_EAU",
        "ZONE_D_ESTRAN",
        "BASSIN",
        "SURFACE_D_EAU_TEMP",
        "SURFACE_D_EAU_SOU"
      ]
    },
    "territoire": {
      "attribute": "territoire",
      "count": 7.0,
      "type": "character varying",
      "values": ["MYT", "SPM", "REU", "MTQ", "GLP", "GUF", "FXX"]
    }
  }
},
{
  "id": "ocs_vegetation_surf",
  "geometry": "GEOMETRY",
  "maxzoom": "19",
  "minzoom": "8",
  "fieldsCount": "3",
  "fields": {
    "territoire": {
      "attribute": "territoire",
      "count": 7.0,
      "type": "character varying",
      "values": ["MYT", "SPM", "MTQ", "REU", "GLP", "GUF", "FXX"]
    },
    "symbo": {
      "attribute": "symbo",
      "count": 12.0,
      "type": "character varying",
      "values": [
        "ZONE_LANDE_LIGNEUSE",
        "ZONE_CANNE_BANANE",
        "HOUBLONNIERE",
        "ZONE_VIGNE",
        "ZONE_FORET_OUVERTE",
        "ZONE_FORET_FERMEE_FEUIL",
        "ZONE_BOISEE",
        "ZONE_FORET_FERMEE_CONI",
        "ZONE_MANGROVE",
        "ZONE_FORET_FERMEE_MIXTE",
        "ZONE_VERGER",
        "ZONE_PEUPLERAIE"
      ]
    },
    "niveau": { "attribute": "niveau", "count": 1.0, "type": "text", "values": ["n0"] }
  }
}
```


API endpoints

http://localhost:3000/all?version=${version}
http://localhost:3000/static-style?filename=standard.${version}.${layer}
http://localhost:3000/dynamic-style?layers=${layers}&sprite=${sprite}



à faire 
g070 -> surface cimetière


ok g010_oro.ts
ok g020_ocs.ts -> todo un peu plus foncé le mixe
ok g030_oro.ts
ok g040_hydro_souterrain_et_surface.ts
ok g050_ferre_souterrain.ts
ok g051_routier_souterrain.ts
ok g060_hydro_a_niveau.ts
ok g070_bati_surf.ts
   g080_bati_lineaire.ts voir marseille -> todo icone barrage goutte d'eau avec éclair
ok g090_routier_a_niveau.ts
ok g100_ferre_a_niveau.ts
ok g110_hydro_aerien.ts
ok g120_routier_aerien.ts
ok g130_ferre_aerien.ts
ok g140_limite_lineaire.ts
ok g150_autre_aerien.ts
   g160_bati_ponctuel.ts
ok g170_routier_borne.ts
ok g200_toponyme_bati.ts
ok g210_toponyme_hydro.ts
ok g220_toponyme_limite.ts
ok g240_toponyme_ocs.ts
ok g250_toponyme_oro.ts
ok g260_toponyme_routier.ts
ok g270_toponyme_localite.ts



tuto:
limite parc naturel: duplication de code, un calque par niveau de zoom.
éviter les lignes avec une transparence (limite de département) car si la ligne n'est pas droite on va avoir une surimpression
au niveau de la courbe.

préciser le zoom minimum

todo

routier_surf : PARKING_SURF

ordre des calques: batiment de péage.

curseur en pointeur
div.maplibregl-canvas-container.maplibregl-interactive {
  cursor: pointer;
}