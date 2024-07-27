import { LayerSpecification, SpriteSpecification, StyleSpecification } from "@maplibre/maplibre-gl-style-spec";

/**
const terrariumTiles = ["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"];
const terrariumSource = {
  type: "raster-dem",
  tiles: terrariumTiles,
  tileSize: 256,
  encoding: "terrarium",
  maxzoom: 15,
};
const hillshadeLayer = {
  id: "hillshade",
  type: "hillshade",
  source: "terrarium",
  paint: {
    "hillshade-exaggeration": 0.2,
  },
};
*/

export function generateStyle(layers: LayerSpecification[], sprite?: SpriteSpecification): StyleSpecification {
  return {
    version: 8,
    name: "PLAN IGN",
    glyphs: "https://data.geopf.fr/annexes/ressources/vectorTiles/fonts/{fontstack}/{range}.pbf",
    sprite,
    sources: {
      plan_ign: {
        type: "vector",
        tiles: ["https://data.geopf.fr/tms/1.0.0/PLAN.IGN/{z}/{x}/{y}.pbf"],
        attribution: '© <a href="https://www.ign.fr/">IGN</a>',
        maxzoom: 19,
      },
    },
    transition: { duration: 300, delay: 0 },
    layers,
  };
}
