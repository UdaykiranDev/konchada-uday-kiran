# Uday Kiran — Portfolio

Personal portfolio for **Uday Kiran Konchada**, a senior full-stack .NET developer based in Hyderabad, India. The site presents professional experience, technical skills, education, selected projects, and ways to get in touch.

**Repository:** [github.com/UdaykiranDev/konchada-uday-kiran](https://github.com/UdaykiranDev/konchada-uday-kiran)

**Live site:** [udaykirandev.github.io/konchada-uday-kiran](https://udaykirandev.github.io/konchada-uday-kiran/)

## Portfolio contents

- **Introduction** — professional headline, short summary, portrait, and links to the profile and contact sections.
- **Professional summary** — development background, core expertise, and grouped technical skills.
- **Experience** — roles at Infosys, RIG Enterprise Applications (OnBlick), and Technoxis.
- **Projects** — Manarural and EventBazar, with screenshots, descriptions, technology stacks, and links to their websites.
- **Education** — Bachelor of Technology in Electronics & Communication Engineering and additional learning.
- **Contact** — email and social profile links.

The interface includes responsive layouts, light/dark themes, SVG icons, hover and keyboard-focus labels, and a floating quick-navigation bar.

## Built with

- React 19
- Vite 8
- JavaScript and JSX
- CSS
- Oxlint

## Requirements

- Node.js **20.19+** or **22.12+**
- npm (included with Node.js)

## Run locally

```bash
git clone https://github.com/UdaykiranDev/konchada-uday-kiran.git
cd konchada-uday-kiran
npm install
npm run dev
```

Open the local URL printed by Vite (normally [http://localhost:5173](http://localhost:5173)).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot module replacement. |
| `npm run lint` | Run Oxlint on the project. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally for review. Run `npm run build` first. |

## Project structure

```text
public/
  images/         Portrait, company and school logos, project previews
  favicon*        Browser and device icons
src/
  App.jsx         Portfolio content, sections, navigation, and interactions
  App.css         Page layout, components, responsive styles, and motion
  index.css       Global styles and typography
  main.jsx        React application entry point
index.html        HTML shell, page title, and search/social metadata
```

## Updating the portfolio

- Edit the profile text, skills, experience, project details, social URLs, and section links in [`src/App.jsx`](./src/App.jsx).
- Replace images in [`public/images`](./public/images) while keeping the referenced filenames, or update the corresponding image paths in `src/App.jsx`.
- Adjust colors, layout, responsive breakpoints, and interaction styles in [`src/App.css`](./src/App.css) and [`src/index.css`](./src/index.css).
- Update the browser title, description, and social-sharing metadata in [`index.html`](./index.html).

## Production build and deployment

Run the following to create and inspect the production build:

```bash
npm run build
npm run preview
```

The generated static site is in `dist/`. Pushing to `master` or manually starting the **Deploy portfolio to GitHub Pages** workflow builds the site and deploys it. Vite's base path and the asset URLs are configured for the project Pages URL above.

To enable Pages for this repository, open **Settings → Pages** on GitHub and set **Build and deployment → Source** to **GitHub Actions**. The workflow requires the repository's Pages and Actions settings to allow deployments.

### Profile README

GitHub displays a separate profile README from the public repository named exactly after the GitHub username: [`UdaykiranDev`](https://github.com/UdaykiranDev/Udaykiran). It is rendered directly on the profile and does not use GitHub Pages. The portfolio site is linked above.
