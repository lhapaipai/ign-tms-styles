pourquoi ce calque était placé bien en amont ?

```json
{
  "id": "zone d'activité",
  "type": "fill",
  "source": "plan_ign",
  "source-layer": "bati_zone_surf",
  "filter": ["==", ["get", "symbo"], "ZONE_INDUS_ACTI"],
  "layout": { "visibility": "visible" },
  "paint": { "fill-color": "#D9D9D9" }
}
```