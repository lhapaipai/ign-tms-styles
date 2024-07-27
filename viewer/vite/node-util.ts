import { glob } from "glob";
import { open } from "node:fs/promises";

export async function searchInDirectory(directory: string, searchString: string) {
  const files = await glob(`${directory}/**/*.ts`);

  for (const file of files) {
    const line = await getLine(file, searchString);
    if (line !== null) {
      return {
        file,
        line,
      };
    }
  }
  return null;
}

async function getLine(filePath: string, search: string) {
  const file = await open(filePath);
  let lineNumber = 0;
  for await (const line of file.readLines()) {
    lineNumber++;
    if (line.includes(search)) {
      return lineNumber;
    }
  }
  return null;
}
