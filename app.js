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
    nav.classList.toggle("is-open");
  });
}

function renderBooks(list) {
  var grid = document.getElementById("bookGrid");
  var count = document.getElementById("resultCount");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  list.forEach(function (book) {
    var card = document.createElement("article");
    var initials = book.title.charAt(0) + book.author.charAt(0);
    var status = book.available ? "Available" : "Out on loan";
    var badgeClass = book.available ? "badge badge--in" : "badge badge--out";

    card.className = "book-card";
    card.innerHTML =
      '<div class="book-cover">' + initials + "</div>" +
      '<div class="book-body">' +
      "<h3>" + book.title + "</h3>" +
      '<p class="book-author">' + book.author + "</p>" +
      '<p class="book-meta">' + book.genre + " &middot; " + book.year + "</p>" +
      '<span class="' + badgeClass + '">' + status + "</span>" +
      "</div>";

    grid.appendChild(card);
  });

  if (count) {
    count.textContent = list.length + " titles in the collection";
  }
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