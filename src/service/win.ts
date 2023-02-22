export function getWinWidth() {
  if (!global.window) return 0;
  return window.document.body.offsetWidth;
}
