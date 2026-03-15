function animateSiteTitle() {
  const title = document.querySelector(".site-title .strange");

  if (!title) {
    return;
  }

  title.classList.add("stretched");
  window.setTimeout(() => title.classList.remove("stretched"), 800);
}

window.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(animateSiteTitle, 250);
});
