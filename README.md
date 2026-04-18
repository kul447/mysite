# My Antigravity Personal Site

A full-stack personal website with floating antigravity background,
built with Node.js + Express on the backend and plain HTML/CSS/JS on
the frontend.

---

## Project structure

```
mysite/
├── server.js          ← backend (Express API)
├── package.json
└── public/
    └── index.html     ← frontend (all HTML, CSS, JS in one file)
```

---

## Setup (run once)

```bash
npm install
```

---

## Run the site

**Dev mode** (auto-restarts when you edit server.js):
```bash
npm run dev
```

**Normal mode**:
```bash
npm start
```

Then open → http://localhost:3000

---

## How to edit

### Change your personal info
Open `server.js` and find the `/api/profile` route (~line 12).

Edit:
- `name`      → your name
- `tagline`   → your one-liner
- `about`     → paragraph about you
- `links`     → your GitHub / LinkedIn / email
- `skills`    → list of your skills
- `projects`  → your projects (title, desc, tech, url)

Save the file — if using `npm run dev`, the server restarts automatically.

### Change the frontend design
Open `public/index.html`.

- Colors → edit CSS variables at the top (`:root { ... }`)
- Fonts  → swap the Google Fonts import link
- Layout → edit the `<section>` blocks
- Animation → find the `ANTIGRAVITY BACKGROUND CANVAS` script block

### Add new backend routes
In `server.js`, add routes like:

```js
app.get('/api/blog', (req, res) => {
  res.json({ posts: [...] });
});
```

Then fetch them in `index.html`:
```js
const res = await fetch('/api/blog');
const data = await res.json();
```

---

## Deploy (free options)

| Platform  | Command / Steps                         |
|-----------|-----------------------------------------|
| Railway   | Connect GitHub repo → auto deploy       |
| Render    | Connect GitHub repo → Build: npm install, Start: npm start |
| Vercel    | Works but needs serverless config       |

---

## Quick color palette reference

| Variable    | Default     | What it controls      |
|-------------|-------------|-----------------------|
| `--bg`      | `#08080f`   | Page background       |
| `--surface` | `#111120`   | Cards / panels        |
| `--accent`  | `#c8f04b`   | Green-yellow highlight|
| `--accent2` | `#7b61ff`   | Purple highlight      |
| `--text`    | `#eeeef0`   | Main text             |
| `--muted`   | 42% white   | Secondary text        |
