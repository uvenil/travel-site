# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is "Clear View Escapes" — a static single-page marketing website built with Gulp 3, PostCSS, and Webpack 3. No backend, no database, no API.

### Node.js version requirement

This project requires **Node.js v10** (specifically v10.24.1). The dependencies (Gulp 3.x, Webpack 3.x, Babel 6.x) are incompatible with Node.js 12+. The environment uses nvm to manage the Node version.

### Running commands

Always source nvm before running any Node/npm/gulp commands:

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

### Key commands

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Compile CSS (one-off) | `npx gulp styles` |
| Watch files for changes | `npx gulp watch` |
| Serve the site | `cd app && python3 -m http.server 8080` |

### Development workflow

1. Run `npx gulp watch` — watches `app/assets/styles/**/*.css` and recompiles PostCSS on change.
2. Serve the `app/` directory with any HTTP server (e.g. `python3 -m http.server 8080`).
3. Open `http://localhost:8080/` in a browser to view the site.

### Notes

- There is no linter or test suite configured in this project. The `package.json` has no `scripts` section.
- The `gulp styles` task compiles PostCSS (with variables, nesting, autoprefixer) from `app/assets/styles/styles.css` to `app/temp/styles.css`.
- BrowserSync is listed as a dev dependency but is not wired up in the current `gulpfile.js`.
