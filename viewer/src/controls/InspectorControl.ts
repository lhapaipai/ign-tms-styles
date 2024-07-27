import { Map, MapMouseEvent } from "maplibre-gl";

export default class InspectorControl {
  private declare beforeMap: Map;
  private declare afterMap: Map;
  private inspectorElt: HTMLDivElement;

  constructor() {
    this.inspectorElt = document.createElement("div");
    this.inspectorElt.classList.add("maplibregl-custom-ctrl", "maplibregl-inspect");
    document.body.append(this.inspectorElt);
  }

  addTo(beforeMap: Map, afterMap: Map) {
    this.beforeMap = beforeMap;
    this.afterMap = afterMap;

    beforeMap.on("mousemove", this.onMouseMove);
    afterMap.on("mousemove", this.onMouseMove);
    // beforeMap.on("mouseout", (e) => {
    //   console.log("on mouse leave");
    // });
  }

  onMouseMove = (e: MapMouseEvent) => {
    const map = e.target;
    const features = map.queryRenderedFeatures(e.point);

    this.inspectorElt.innerHTML = "";

    features.map((f) => {
      const featureElement = document.createElement("div");
      featureElement.className = "feature";

      const title = document.createElement("b");
      title.innerText = f.layer.id;

      const source = document.createElement("div");
      source.innerText = f.sourceLayer || "";

      const details = document.createElement("pre");
      details.innerText = Object.entries(f.properties)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");

      featureElement.append(title, source, details);
      this.inspectorElt.append(featureElement);
    });
  };
}
