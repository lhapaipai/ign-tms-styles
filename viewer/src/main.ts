import { Map } from "maplibre-gl";
import "./style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-compare/dist/maplibre-gl-compare.css";
import "@maplibre/maplibre-gl-compare";

import InspectorControl from "./controls/InspectorControl";
import ViewInEDIControl from "./controls/ViewInEDIControl";
import { getStyleURL } from "./util";
import LayersControl from "./controls/LayersControl";

const beforeStyleDir = "PLAN.IGN/standard";
const afterStyleDir = "PLAN.IGN/standard-modern";

const initialCenter: [number, number] = [1.3, 46.9];
const initialZoom = 5;

const layersControl = new LayersControl();

const beforeMap = new Map({
  container: "before-map",
  style: getStyleURL(beforeStyleDir, layersControl.getSearch()),
  center: initialCenter,
  zoom: initialZoom,
  hash: true,
});
const afterMap = new Map({
  container: "after-map",
  style: getStyleURL(afterStyleDir, layersControl.getSearch()),
  center: initialCenter,
  zoom: initialZoom,
  hash: true,
});
new window.maplibregl.Compare(beforeMap, afterMap, "#comparison-container");

layersControl.addConfig(beforeMap, beforeStyleDir);
layersControl.addConfig(afterMap, afterStyleDir);
layersControl.addFilter("routes", ["g051_routier_souterrain", "g090_routier_a_niveau", "g120_routier_aerien"]);
layersControl.addFilter("toponymes", [
  "g200_toponyme_bati",
  "g210_toponyme_hydro",
  "g220_toponyme_limite",
  "g240_toponyme_ocs",
  "g250_toponyme_oro",
  "g260_toponyme_routier_ferre",
  "g270_toponyme_localite",
]);

const inspector = new InspectorControl();
inspector.addTo(beforeMap, afterMap);

const viewInEdi1 = new ViewInEDIControl();
viewInEdi1.addTo(beforeMap, beforeStyleDir);

const viewInEdi2 = new ViewInEDIControl();
viewInEdi2.addTo(afterMap, afterStyleDir);

function refreshInfobox() {
  document.querySelector<HTMLDivElement>("#zoom")!.innerHTML = (Math.round(beforeMap.getZoom() * 10) / 10).toString();
}
beforeMap.on("zoomend", refreshInfobox);
refreshInfobox();
