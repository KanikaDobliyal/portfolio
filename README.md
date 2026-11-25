# kanika-portfolio

Personal portfolio built with React + Vite.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (kanikadobliyal.github.io/portfolio)
The repo name on GitHub must be `portfolio` (matches `base` in `vite.config.js`).
```bash
npm run deploy
```

## Edit your content
All text lives in `src/data.js` (about, skills, experience, projects, education).

## Profile photo
Save your photo as `public/profile.jpg`. It appears in the About section.
Until then, a "KD" placeholder is shown.

## Light / dark mode
The toggle in the header switches themes and remembers the choice. Colours are CSS variables at the top of `src/styles.css`.

## Project screenshots
By default each card shows a live preview of the site. To use your own screenshot,
save it in `public/projects/` and set `image: "projects/your-file.png"` for that project in `src/data.js`.
