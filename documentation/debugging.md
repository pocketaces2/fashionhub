---
layout: null
published: false
---

# Useful notes on debugging/common issues


To build Jeykll only

    bundle exec jekyll build

If webrick not found run:

    bundle add webrick

## Notes on scss

To run scss

    sass _sass/main.scss css/style.css
OR

    sass --watch _sass/main.scss css/style.css

Scss fix (higher than 2.1.0 has a bug for @import!)

    gem "jekyll-sass-converter", "~> 2.1.0