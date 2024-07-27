import { searchInDirectory } from "./node-util";
import { exec } from "child_process";
import { resolve } from "node:path";
import { PluginOption } from "vite";

export default function styleSyncPlugin(stylesDir: string): PluginOption {
  return {
    name: "style-refresh",
    configureServer({ watcher, ws }) {
      watcher.add(stylesDir);
      watcher.on("change", function () {
        ws.send("style:refresh");
      });

      ws.on("open:file", async ({ layer, style }) => {
        const result = await searchInDirectory(resolve(stylesDir, style), layer);
        result && exec(`code -g ${result.file}:${result.line}`);
      });
    },
  };
}
