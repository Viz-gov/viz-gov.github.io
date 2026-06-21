# viz-gov.github.io

Personal site + side-project hub. Dark/cinematic; the hero is a live point cloud.
Built with [Astro](https://astro.build), deployed free to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the built site
```

## Add a note (blog post)

Drop a `.md` or `.mdx` file in `src/content/notes/`. Frontmatter:

```yaml
---
title: "Your title"
date: 2026-06-21
summary: "Optional one-liner for the index."
tags: ["post-training", "chips"]
draft: false   # true = visible in `npm run dev`, hidden in the live build
---
```

## Add a film

Edit `src/pages/films.astro`. Set a card's `embed` to a YouTube/Vimeo/Instagram
**embed URL**. Do **not** commit raw `.mp4` files — GitHub Pages caps files at
100 MB and the site at ~1 GB. Host video off-site and embed it.

## Project / experience content

All in `src/pages/work.astro` and `src/pages/about.astro` as plain data arrays — edit in place.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. One-time setup: repo **Settings → Pages → Build and
deployment → Source → GitHub Actions**.

## TODO

- Footer + Films: replace the `#` placeholders with your real Instagram + GitHub URLs.
- Swap the placeholder film embeds for real ones.
