# Slide & Solve 🧩

A self-hosted sliding puzzle game. Zero external dependencies — no CDNs, no Google Fonts, no network calls at runtime. Works offline once deployed.

---

## Folder Structure

```
puzzle/
├── index.html          ← the game  (you never need to edit this)
├── images.js           ← your image list  (edit this to add images)
├── README.md           ← this file
└── images/
    ├── scenery/        ← landscapes, nature, sky
    ├── architecture/   ← buildings, bridges, interiors
    ├── cars/           ← vehicles of any kind
    ├── people/         ← portraits, crowds, street
    └── custom/         ← anything else you like
```

---

## How to Add Images

**Step 1** — Drop your image files into the right folder:

```
images/scenery/mountains.jpg
images/cars/red_ferrari.jpg
```

**Step 2** — Open `images.js` and add the path to the matching array:

```js
scenery: [
  'images/scenery/mountains.jpg',     // ← existing
  'images/scenery/red_canyon.jpg',    // ← you added this
],
```

That's it. Reload the page and the new image appears in the game.

### Tips for best results
- **Square images look best** — the game crops to a centred square automatically.
- Aim for at least **600 × 600 px** so tiles are sharp.
- Keep file sizes **under 500 KB** for fast loading on mobile.
- JPG, PNG, and WEBP all work.

---

## Hosting on GitHub Pages

1. Push the whole `puzzle/` folder to a GitHub repository (it can be the repo root or a subfolder).
2. Go to **Settings → Pages → Source** and set branch `main`, folder `/root` (or `/docs` if you put it there).
3. Your game is live at `https://<you>.github.io/<repo>/`

Because the images live in the same repo as `index.html`, they are served from the same origin — no CORS issues at all.

---

## Playing Locally (without a server)

Open `index.html` directly in a browser (`file://`). Images in the `images/` folder load fine because they are same-origin relative paths. The session-upload feature (drag & drop your own photos) also works because those become `data:` URLs inside the browser.

---

## Customising Categories

The five built-in category keys are: `scenery`, `architecture`, `cars`, `people`, `custom`.

To **rename** the "custom" category, find `custom:` in `images.js` and the matching `CAT_META` entry in `index.html` (search for `custom:`). Change both to the same new key, e.g. `animals`.

To **add a brand-new category**, add a new key to `IMAGES` in `images.js` and a matching entry to `CAT_META` in `index.html`.
