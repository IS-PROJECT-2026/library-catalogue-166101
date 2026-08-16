# Mwangaza Library Catalogue

A static, database-free library catalogue for the fictional Mwangaza
Community Library in Nairobi. Members can browse the collection, search by
title or author, filter by genre, and check whether a title is on the shelf
before travelling to the library.

## Live Deployment

https://is-project-2026.github.io/library-catalogue-166101/

## Features

- Responsive landing page with a collapsing navigation menu
- Catalogue grid rendered dynamically from a JavaScript data source
- Live case-insensitive search across title and author
- Genre filter that combines with the active search term
- Availability badges distinguishing shelved and on-loan titles
- Accessible controls with labels, aria attributes and visible focus states

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure across three pages |
| CSS3 | Custom properties, Flexbox and Grid layout, responsive breakpoints |
| JavaScript (ES5/ES6) | Dynamic rendering, search and filtering logic |
| Git | Version control, feature branching, conflict resolution |
| GitHub | Issues, milestones, project board, pull requests |
| GitHub Pages | Static hosting and continuous deployment from `main` |

## Project Structure

```
.
├── index.html
├── catalogue.html
├── about.html
├── css/
│   ├── style.css
│   └── theme.css
├── js/
│   ├── app.js
│   └── books.js
├── evidence/
│   ├── conflict_evidence_1.png
│   ├── conflict_evidence_2.png
│   └── conflict_evidence_3.png
├── submission.md
└── README.md
```

## Running Locally

Clone the repository and open `index.html` in any modern browser. No build
step or server is required.

## Author

Ochieng' Glen Kipchumba — 166101 — ICS 4E
BSc Informatics and Computer Science, Strathmore University