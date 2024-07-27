type SpriteItem = {
  x: number;
  y: number;
  width: number;
  height: number;
  pixelRatio: number;
  src: string;
  searchAndReplace?: [string | RegExp, string][];
};

type ManifestItem = Omit<SpriteItem, "src">;

type SpriteItems = {
  [key: string]: SpriteItem;
};
type Manifest = {
  [key: string]: ManifestItem;
};

type Sprite = {
  name: string;
  items: SpriteItems;
  width: number;
  height: number;
};
