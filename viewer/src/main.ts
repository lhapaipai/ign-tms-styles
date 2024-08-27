import { Map } from "maplibre-gl";
import "./style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-compare/dist/maplibre-gl-compare.css";
import "@maplibre/maplibre-gl-compare";

import InspectorControl from "./controls/InspectorControl";
import ViewInEDIControl from "./controls/ViewInEDIControl";
import { getStyleURL } from "./util";
import LayersControl from "./controls/LayersControl";

const beforeConfigId = "PLAN.IGN/modern";
const afterConfigId = "PLAN.IGN/modern-dark";

const initialCenter: [number, number] = [1.3, 46.9];
const initialZoom = 5;

const layersControl = new LayersControl();

const beforeMap = new Map({
  container: "before-map",
  style: getStyleURL(beforeConfigId, layersControl.getSearch()),
  center: initialCenter,
  zoom: initialZoom,
  hash: true,
});
const afterMap = new Map({
  container: "after-map",
  style: getStyleURL(afterConfigId, layersControl.getSearch()),
  center: initialCenter,
  zoom: initialZoom,
  hash: true,
});

// @ts-ignore
new window.maplibregl.Compare(beforeMap, afterMap, "#comparison-container");

layersControl.addConfig(beforeMap, beforeConfigId);
layersControl.addConfig(afterMap, afterConfigId);
layersControl.addFilter("routes", [
  "g042_routier_surf",
  "g051_routier_souterrain",
  "g090_routier_a_niveau",
  "g120_routier_aerien",
]);
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
viewInEdi1.addTo(beforeMap, beforeConfigId);

const viewInEdi2 = new ViewInEDIControl();
viewInEdi2.addTo(afterMap, afterConfigId);

function refreshInfobox() {
  document.querySelector<HTMLDivElement>("#zoom")!.innerHTML = (Math.round(beforeMap.getZoom() * 10) / 10).toString();
}
beforeMap.on("zoomend", refreshInfobox);
refreshInfobox();
