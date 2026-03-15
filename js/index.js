const PALETTES = [
  {
    accent: "rgba(126, 54, 109, 0.9)",
    accentSoft: "rgba(126, 54, 109, 0.32)",
    grid: "rgba(126, 54, 109, 0.24)",
    gridFill: "rgba(126, 54, 109, 0.05)",
  },
  {
    accent: "rgba(0, 100, 150, 0.9)",
    accentSoft: "rgba(0, 100, 150, 0.32)",
    grid: "rgba(0, 100, 150, 0.24)",
    gridFill: "rgba(0, 100, 150, 0.05)",
  },
  {
    accent: "rgba(0, 130, 60, 0.9)",
    accentSoft: "rgba(0, 130, 60, 0.32)",
    grid: "rgba(0, 130, 60, 0.24)",
    gridFill: "rgba(0, 130, 60, 0.05)",
  },
  {
    accent: "rgba(180, 90, 0, 0.9)",
    accentSoft: "rgba(180, 90, 0, 0.32)",
    grid: "rgba(180, 90, 0, 0.24)",
    gridFill: "rgba(180, 90, 0, 0.05)",
  },
  {
    accent: "rgba(200, 50, 50, 0.9)",
    accentSoft: "rgba(200, 50, 50, 0.32)",
    grid: "rgba(200, 50, 50, 0.24)",
    gridFill: "rgba(200, 50, 50, 0.05)",
  },
];

function applyPalette(palette) {
  const root = document.documentElement;

  root.style.setProperty("--color-accent", palette.accent);
  root.style.setProperty("--color-accent-soft", palette.accentSoft);
  root.style.setProperty("--color-grid", palette.grid);
  root.style.setProperty("--color-grid-fill", palette.gridFill);
}

function selectPalette() {
  const paletteIndex = Math.floor(Math.random() * PALETTES.length);

  return PALETTES[paletteIndex];
}

function animateSiteTitle() {
  const title = document.querySelector(".site-title .strange");

  if (!title) {
    return;
  }

  title.classList.add("stretched");
  window.setTimeout(() => title.classList.remove("stretched"), 800);
}

applyPalette(selectPalette());

window.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(animateSiteTitle, 250);
});
