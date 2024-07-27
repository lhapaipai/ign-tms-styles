import { type Map } from "maplibre-gl";
import * as standardLayerGroups from "~styles/PLAN.IGN/standard";
import { getStyleURL } from "../util";

export default class LayersControl {
  private formContainer: HTMLFormElement;
  private configs: {
    map: Map;
    styleDir: string;
  }[] = [];
  private extraElt: HTMLDivElement;

  constructor() {
    this.formContainer = document.createElement("form");
    this.formContainer.classList.add("maplibregl-custom-ctrl", "maplibregl-style-switcher");

    const initialGroups = Array.from(new URL(window.location.toString()).searchParams.keys());

    document.body.append(this.formContainer);
    Object.keys(standardLayerGroups)
      .sort((a, b) => (a > b ? -1 : 1))
      .map((groupID) => {
        const labelElt = document.createElement("label");
        labelElt.innerText = groupID;
        const checkboxElt = document.createElement("input");
        checkboxElt.type = "checkbox";
        checkboxElt.name = groupID;
        checkboxElt.checked = initialGroups.includes(groupID);

        labelElt.prepend(checkboxElt);
        checkboxElt.addEventListener("change", this.refreshStyle);

        this.formContainer.prepend(labelElt);
      });

    this.extraElt = document.createElement("div");
    this.extraElt.classList.add("extra");
    this.formContainer.append(this.extraElt);

    const checkAll = document.createElement("button");
    checkAll.type = "button";
    checkAll.innerText = "Tout cocher";
    checkAll.addEventListener("click", this.handleClickCheckAll);

    const unCheckAll = document.createElement("button");
    unCheckAll.type = "button";
    unCheckAll.innerText = "Tout décocher";
    unCheckAll.addEventListener("click", this.handleClickUnCheckAll);

    this.extraElt.append(checkAll, unCheckAll);

    if (import.meta.hot) {
      import.meta.hot.on("style:refresh", this.refreshStyle);
    }
  }

  getSearch() {
    const formData = new FormData(this.formContainer);

    // we don't have files
    const groups = Object.fromEntries(formData.entries()) as Record<string, string>;
    const search = new URLSearchParams(groups).toString();
    return search;
  }

  refreshStyle = () => {
    const search = this.getSearch();
    const nextUrl = new URL(window.location.toString());
    nextUrl.search = `?${search}`;
    window.history.replaceState(window.history.state, "", nextUrl);
    this.configs.forEach(({ map, styleDir }) => {
      map.setStyle(getStyleURL(styleDir, search));
    });
  };

  addConfig(map: Map, styleDir: string) {
    this.configs.push({
      map,
      styleDir,
    });
  }

  handleClickCheckAll = () => {
    Array.from(this.formContainer.elements).forEach((inputElement) => {
      if ((inputElement as HTMLInputElement).type === "checkbox") {
        (inputElement as HTMLInputElement).checked = true;
      }
    });
    this.refreshStyle();
  };

  handleClickUnCheckAll = () => {
    Array.from(this.formContainer.elements).forEach((inputElement) => {
      if ((inputElement as HTMLInputElement).type === "checkbox") {
        (inputElement as HTMLInputElement).checked = false;
      }
    });
    this.refreshStyle();
  };

  handleClickFilter = (e: MouseEvent) => {
    const groups = (e.target as HTMLInputElement).value.split(",");
    let firstElementIsChecked: boolean;

    Array.from(this.formContainer.elements).forEach((inputElement) => {
      const checkboxElement = inputElement as HTMLInputElement;
      if (checkboxElement.type !== "checkbox") {
        return;
      }
      if (groups.includes(checkboxElement.name)) {
        if (typeof firstElementIsChecked === "undefined") {
          firstElementIsChecked = checkboxElement.checked;
        }
        checkboxElement.checked = !firstElementIsChecked;
      }
    });
    this.refreshStyle();
  };

  addFilter(title: string, layers: string[]) {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = title;
    button.value = layers.join(",");
    button.addEventListener("click", this.handleClickFilter);

    this.extraElt.append(button);
  }
}
