// Mwangaza Library Catalogue - application script

document.addEventListener("DOMContentLoaded", function () {
  setupNavToggle();
  renderBooks(books);
  setupFilters();
});

function setupNavToggle() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}



function setupFilters() {
  var input = document.getElementById("searchInput");
  var select = document.getElementById("genreFilter");

  if (!input || !select) {
    return;
  }

  populateGenres(select);
  input.addEventListener("input", applyFilters);
  select.addEventListener("change", applyFilters);
}

function populateGenres(select) {
  var genres = [];

  books.forEach(function (book) {
    if (genres.indexOf(book.genre) === -1) {
      genres.push(book.genre);
    }
  });

  genres.sort().forEach(function (genre) {
    var option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    select.appendChild(option);
  });
}

function applyFilters() {
  var term = document.getElementById("searchInput").value.trim().toLowerCase();
  var genre = document.getElementById("genreFilter").value;

  var matches = books.filter(function (book) {
    var matchesTerm =
      book.title.toLowerCase().indexOf(term) !== -1 ||
      book.author.toLowerCase().indexOf(term) !== -1;
    var matchesGenre = genre === "all" || book.genre === genre;

    return matchesTerm && matchesGenre;
  });

  renderBooks(matches);
}