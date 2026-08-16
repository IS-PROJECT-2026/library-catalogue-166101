// Mwangaza Library Catalogue - application script

document.addEventListener("DOMContentLoaded", function () {
  setupNavToggle();
  renderBooks(books);
  setupSearch(books);
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
    var status = book.available ? "Out on loan" : "Available";

    card.className = "book-card";
    card.innerHTML =
      '<div class="book-cover">' + initials + "</div>" +
      '<div class="book-body">' +
      "<h3>" + book.title + "</h3>" +
      '<p class="book-author">' + book.author + "</p>" +
      '<p class="book-meta">' + book.genre + " &middot; " + book.year + "</p>" +
      '<span class="badge">' + status + "</span>" +
      "</div>";

    grid.appendChild(card);
  });

  if (count) {
    count.textContent = list.length + " titles in the collection";
  }
}
function setupSearch() {
  var input = document.getElementById("searchInput");

  if (!input) {
    return;
  }

  input.addEventListener("input", function () {
    var term = input.value.trim().toLowerCase();

    var matches = books.filter(function (book) {
      return (
        book.title.toLowerCase().indexOf(term) !== -1 ||
        book.author.toLowerCase().indexOf(term) !== -1
      );
    });

    renderBooks(matches);
  });
}