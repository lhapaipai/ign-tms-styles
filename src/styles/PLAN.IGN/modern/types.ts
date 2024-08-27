import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";

type Vars = typeof import("./vars");
export type LayerGroupFactory = (vars: Vars) => LayerSpecification[];
