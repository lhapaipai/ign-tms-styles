export function getStyleURL(styleID: string, search?: string) {
  const url = new URL(`http://localhost:3000/${styleID}.json`);
  if (search) {
    url.search = `?${search}`;
  }
  return url.toString();
}
