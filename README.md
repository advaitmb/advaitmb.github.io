# advaitmb.com

Static source for `advaitmb.com` and the accompanying LaTeX CV.

## Structure

- `index.html`, `*.html`, `style.css`, `js/index.js`: site pages and shared frontend assets
- `img/`, `files/`, `fonts/`: site assets
- `cv/`: LaTeX CV source

## Authoring notes

- Project pages are plain HTML files that share the global stylesheet.
- The website and CV should be updated together when publication status changes.
- Local machine artifacts such as `.DS_Store` and `.claude/settings.local.json` are ignored.

## CV build

From `cv/`:

```sh
lualatex cv.tex
```
