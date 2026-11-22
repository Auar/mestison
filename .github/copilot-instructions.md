# Copilot Instructions

## Project structure

This is the static, multi-page website of the band Mestisòn, generated in `site/` from the requirements in `requisiti/analisi.md` and the content in `materiale/sezioni/<sezione>/`. `site/index.html` is the home; each section is a sub-page at `site/<sezione>/index.html` (`storia`, `musicisti`, `gallery`, `video`, `shop`, `contatti`) and is reached via the directory URL `/<sezione>/`. `site/css/style.css` provides the visual system and responsive layouts, and `site/script.js` contains the small interactions. Optimized images live in `site/assets/images/<sezione>/` and the promo video in `site/assets/video/`. Keep asset paths relative to each page (`../` from sub-pages) and keep DOM selectors in `script.js` aligned with the corresponding HTML IDs and classes.

## Build and validation

There is no build step, package manager, or configured test/lint runner. Serve `site/` with `python -m http.server 8000` (run from `site/`) and visit `http://localhost:8000`; directory URLs such as `/storia/` require a server and do not resolve when opening files directly.

For a focused JavaScript syntax check, run `node --check .\site\script.js`. No automated test files or single-test runner are configured.

## Codebase conventions

- Keep the implementation framework-free and split markup, presentation, and behavior across HTML pages, `css/style.css`, and `script.js`.
- Use semantic HTML sections; mark the current page in the menu with `aria-current="page"`. Preserve the existing accessible labels and expanded state on the mobile menu.
- Shared colors and typography tokens are defined in `:root` in `css/style.css` and mirror `requisiti/prompt/css/style.css`. `--accent` (#C65D2E) is decorative only; text links and buttons use `--accent-ink` (#A84A20) so that every text/background pair stays at or above a 4.5:1 contrast ratio. Use the `768px` breakpoint for responsive layout changes.
- The mobile navigation is controlled by `.menu-toggle`, `aria-expanded`, and `.site-nav.is-open`; when changing it, keep the button state, accessible label, and menu visibility synchronized. The same script updates the footer year and drives the gallery lightbox (`.gallery button` → `dialog.lightbox`).
- Page header, nav, and footer markup is duplicated in every page; when editing one, apply the same change to all seven pages.
- Photos are copies of `materiale/` resized to max 1600px (1200px for musician portraits); add new images under `site/assets/images/<sezione>/` with lowercase, hyphenated names.
