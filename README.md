# Javier Garrido WebSite

Code for [javiergarrido.dev](https://javiergarrido.dev).

## Development

Requires Node 22 (see `.nvmrc`).

```sh
nvm use
npm install
npm run dev      # dev server on http://localhost:3000
npm test         # jest + react testing library
npm run lint     # eslint
npm run build    # static export in ./out
npm run preview  # serve ./out locally
npm run deploy   # publish ./out to the gh-pages branch by hand
```

All the page copy lives in `src/locales/en.json` and `src/locales/es.json`. The
experience, skills, projects, education and languages sections are rendered from
the arrays in those files, so adding a job or a project is a content change, not
a code change. A test checks that both languages keep the same keys.

The previous version of the site is kept as a static snapshot in `public/v1`
(built from the last Create React App commit, with its base path set to `/v1`).
It is served at [javiergarrido.dev/v1/](https://javiergarrido.dev/v1/) for
comparison and can be deleted when it is no longer needed.

## How it is built

- [Next.js](https://nextjs.org/) with the App Router and `output: 'export'`, so the
  result is plain static files
- [React 19](https://react.dev/)
- [styled-components](https://styled-components.com/) 6, with the server-side
  style registry so the first paint is already styled
- Light and dark themes as CSS variables keyed off `data-theme` on `<html>`. An
  inline script applies the saved choice (or the OS preference) before paint.
- [react-i18next](https://react.i18next.com/) for English and Spanish. Pages are
  prerendered in English and the visitor's language is applied after hydration;
  the choice is kept in a cookie.
- [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) through
  `next/font`, self-hosted at build time
- The hero typewriter is a CSS animation; the digits that follow the mouse come
  from `public/scripts/bg-animation.js`

Tooling:

- [svgr](https://react-svgr.com/) to turn the SVG icons into components (`npm run svgr`)
- [ESLint](https://eslint.org/) with `eslint-config-next`
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)

Delivery:

- [GitHub Actions](.github/workflows/ci.yml): lint, test and build on every push and
  pull request; on `master` it also runs semantic-release and publishes `out/` to
  the `gh-pages` branch
- [semantic-release](https://semantic-release.gitbook.io/) tags each release and publishes its notes as a
  [GitHub Release](https://github.com/cibergarri/home/releases). Because `master` only accepts pull
  requests, the workflow then opens a `chore(release)` PR with the updated `CHANGELOG.md` and
  `package.json`; merge it to keep them in step with the tag
- [commitlint](https://commitlint.js.org/), [commitizen](http://commitizen.github.io/cz-cli/)
  and [husky](https://typicode.github.io/husky/) for conventional commits
- [GitHub Pages](https://pages.github.com/) on a [.dev domain](https://get.dev/)

Analytics: [Google Analytics](https://analytics.google.com/) and [Hotjar](https://www.hotjar.com/).
