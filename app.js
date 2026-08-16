// Mwangaza Library Catalogue - application script

document.addEventListener("DOMContentLoaded", function () {
  setupNavToggle();
});

function setupNavToggle() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    nav.classList.toggle("is-open");
  });
}