import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "url";
import styleSyncPlugin from "./vite/style-sync-plugin";

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
const stylesDir = resolve(projectDir, `src/styles`);

export default defineConfig({
  resolve: {
    alias: {
      "~styles": stylesDir,
    },
  },
  publicDir: resolve(projectDir, "dist"),
  plugins: [styleSyncPlugin(stylesDir)],
});
