import { Map } from "maplibre-gl";
import "./style.css";
import "maplibre-gl/dist/maplibre-gl.css";

import style from "ign-tms-styles/PLAN.IGN/modern.json?url";

new Map({
  container: "map",
  center: [1.3, 46.9],
  zoom: 5,
  style,
});
