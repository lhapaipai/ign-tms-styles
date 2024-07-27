import { Map, MapMouseEvent, Popup } from "maplibre-gl";

export default class ViewInEDIControl {
  private declare map: Map;
  private declare styleDir: string;
  addTo(map: Map, styleDir: string) {
    this.map = map;
    this.styleDir = styleDir;
    map.on("click", this.onMouseClick);
  }

  onMouseClick = (e: MapMouseEvent) => {
    const map = e.target;

    const features = map.queryRenderedFeatures(e.point);

    const popupContent = document.createElement("div");

    // uniq
    const layersId = Array.from(new Set(features.map((f) => f.layer.id)));

    layersId.map((layerId) => {
      const anchor = document.createElement("a");
      anchor.dataset.layer = layerId;
      anchor.href = "#";
      anchor.innerHTML = layerId;
      anchor.addEventListener("click", this.handleClickLayer);

      popupContent.append(anchor);
    });

    new Popup({
      closeOnMove: true,
    })
      .setLngLat(e.lngLat)
      .setDOMContent(popupContent)
      .addTo(map);
  };

  handleClickLayer = (e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    if (target && target.tagName === "A" && import.meta.hot) {
      e.preventDefault();
      import.meta.hot?.send("open:file", {
        layer: target.dataset.layer,
        style: this.styleDir,
      });
    }
  };
}
