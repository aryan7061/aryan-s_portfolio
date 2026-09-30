# Aryan Gupta — Portfolio

Personal portfolio of **Aryan Gupta**, Full Stack Developer (React · TypeScript · Node.js · NestJS · GraphQL · PostgreSQL).

**Live:** [aryangupta.dev](https://aryangupta.dev)

A single-page site built with React and Vite, with no UI framework and no CSS framework: plain CSS per component, a light/dark theme, keyboard-accessible navigation, and shareable per-section URLs (`/about`, `/projects`, …).

## Features

- **Section URLs** — the address bar follows the section you are reading, and links like `aryangupta.dev/projects` open straight at that section.
- **Light / dark theme** — follows the visitor's OS setting until they pick one with the toggle; the choice is remembered. No flash of the wrong theme on load.
- **Email options** — one click on any email link opens a chooser: Gmail, Outlook, Yahoo Mail, the default mail app, or copy the address.
- **Accessible** — full keyboard support (tabs with arrow keys, menus close on Escape and return focus), WCAG AA text contrast in both themes, and respects `prefers-reduced-motion`.
- **Fast** — blur effects only on floating UI, decorative animations pause while off-screen, unused font weights removed, compressed assets.

## Tech stack

| Area    | Choice                                                                                      |
| ------- | ------------------------------------------------------------------------------------------- |
| UI      | React 19                                                                                    |
| Build   | Vite 8                                                                                      |
| Styling | Plain CSS, one file per component, BEM-style class names, CSS custom properties for theming |
| Icons   | [devicon](https://devicon.dev), [simple-icons](https://simpleicons.org)                     |
| Linting | ESLint 10 with `eslint-plugin-react-hooks`                                                  |
| Hosting | Vercel                                                                                      |

## Getting started

Requires **Node.js 20.19+ or 22.12+** (Vite 8 requirement).

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with hot reload            |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint (must pass with no output) |

## Project structure

```
public/                 Static files served as-is (resume PDF, favicons, og-image, robots.txt, sitemap.xml)
src/
  main.jsx              Entry point
  App.jsx               Page layout: renders every section in order
  index.css             Theme tokens (colors, fonts, spacing) and global styles
  data/portfolio.js     ALL site content: profile, facts, skills, experience, projects, quote
  lib/
    sections.js         The list of sections (id, nav label, heading) — single source of truth
    sectionPaths.js     Section id ⇄ URL path, scrolling, section link clicks
    email.js            Email chooser links (Gmail, Outlook, Yahoo, mailto)
  hooks/                Reusable behaviour (theme, active section, dismiss on Escape/outside, in-view, …)
  components/           One component per section/widget, each with its own .css file
  assets/               Images and icons bundled by Vite
vercel.json             Rewrites so section URLs load the app on Vercel
```

## Updating content

Almost everything you see on the page lives in **`src/data/portfolio.js`** — edit text, skills, experience or projects there; no component changes needed.

**Replacing the resume:** overwrite `public/aryan-gupta-resume.pdf`, keeping the same file name. The name visitors see when downloading is `profile.resumeFileName` in `portfolio.js`.

## Adding a section

1. Add an entry to `SECTIONS` in `src/lib/sections.js` (in page order).
2. Create the component — its root element must be `<section id="your-id" className="wrap">` — and render it in `src/App.jsx`.
3. Use `<SectionHeading sectionId="your-id" title="…" />` — the `0X — Name` label is numbered automatically.
4. Add the id to the `source` pattern in `vercel.json`, otherwise `aryangupta.dev/your-id` returns 404 in production.

The navbar, the floating jump menu and URL tracking pick the new section up automatically.

## Deployment

Deployed on **Vercel** (Git integration): pushes to `main` go to production, and every other branch gets its own preview URL.

`vercel.json` rewrites only the known section paths (`/about`, `/stack`, `/experience`, `/projects`, `/contact`) to `index.html`. Unknown paths deliberately still return a real 404.

Recommended workflow: create a branch → push → check the Vercel preview → merge into `main`.
