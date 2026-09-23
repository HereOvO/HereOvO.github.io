# HereOvO / personal site

Personal portfolio website for Huang Fengfan, focused on embedded systems, firmware, control, and robotics.

## Local preview

This is a static GitHub Pages site. Open `index.html` directly, or serve the folder with any static server:

```powershell
py -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

The included workflow publishes the repository to GitHub Pages whenever `main` is updated. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.

## Updating projects

Project data is kept in `app.js` in the `projects` array. Add a project there and update the filter counts in `index.html`.
