import { Map } from "maplibre-gl";

declare global {
  interface Window {
    maplibregl: {
      Compare: {
        new (beforeMap: Map, afterMap: Map, selector: string | HTMLDivElement): void;
      };
    };
  }
}
