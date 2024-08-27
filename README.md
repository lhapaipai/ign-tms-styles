# Styles pour le service de tuiles vectorielles de l'IGN

<a href="https://ign-tms-styles.pentatrion.com">
<img src="https://raw.githubusercontent.com/lhapaipai/ign-tms-styles/main/screenshot.png" alt="IGN TMS styles" />
</a>

> [!IMPORTANT]
> Ces styles ne sont pas officiels.

## Usage

### Unpkg

Vous pouvez utiliser le style directement depuis `unpkg.com`.

l'url est de la forme :
- `https://unpkg.com/ign-tms-styles/{Layer}/{style}.json`
- `https://unpkg.com/ign-tms-styles@{version}/{Layer}/{style}.json`

- si vous ne précisez pas de `version` ce sera la dernière version disponible qui sera téléchargée.

Pour le choix entre `Layer`, `style`
```
.
└── PLAN.IGN
    ├── standard
    ├── modern
    └── modern-dark
```

```js
import { Map } from "maplibre-gl";
import "./style.css";
import "maplibre-gl/dist/maplibre-gl.css";

new Map({
  container: "map",
  center: [1.3, 46.9],
  zoom: 5,
  style: "https://unpkg.com/ign-tms-styles@0.0.2/PLAN.IGN/modern.json",
});
```

### npm

Vous pouvez aussi télécharger le module npm.

```bash
npm install ign-tms-styles
```

```js
import { Map } from "maplibre-gl";
import "./style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import style from "ign-tms-styles/PLAN.IGN/modern.json?url";

new Map({
  // mêmes options que ci-dessus
  style,
});
```


## Documentation

- [service TMS](https://geoservices.ign.fr/documentation/services/services-geoplateforme/diffusion#70064) de l'IGN

- [bibliothèque de styles](https://geoservices.ign.fr/documentation/services/api-et-services-ogc/tuiles-vectorielles-tmswmts/styles) de l'IGN


## Exécutables


```bash
pnpm tsx src/build-cli.ts --help
pnpm tsx src/sprites/build-cli.ts --help

# usages courants

# pour regénérer les png manquants et le sprite
pnpm tsx src/sprites/build-cli.ts

# pour forcer la regénération d'une icone donnée même si elle existe et le sprite
pnpm tsx src/sprites/build-cli.ts --icons parking

# pour forcer la regénération de plusieurs icônes même si elles existent
# et le sprite
pnpm tsx src/sprites/build-cli.ts --icons parking --icons phare

# pour regénérer toutes les icones et le sprite
pnpm tsx src/sprites/build-cli.ts --force
```
