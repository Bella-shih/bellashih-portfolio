# bellashih.com

Bella Shih's portfolio website. Built with Astro + plain CSS, deployed on Cloudflare Pages.

---

## 📖 How to use this site (for Bella)

This file is your reference manual. Bookmark it.

### Where things live

```
bellashih-portfolio/
├── src/
│   ├── pages/           ← The actual web pages (work.astro, about.astro, etc.)
│   ├── components/      ← Reusable pieces (header, footer, logo, cursor)
│   ├── layouts/         ← The wrapper used by every page
│   ├── styles/          ← global.css — change site-wide colors/fonts here
│   └── content/
│       ├── work/        ← Drop a .md file here for each commercial project
│       ├── personal/    ← Drop a .md file here for each personal project
│       └── playground/  ← Drop a .md file here for each experiment
└── public/              ← Static files (images, fonts, favicon)
    └── images/projects/ ← Upload project images & video files here
```

You will mostly edit two things:
1. **Project files** in `src/content/work/`, `src/content/personal/`, `src/content/playground/`
2. **Images & video files** in `public/images/projects/`

Everything else changes rarely. Ask Claude when you want to touch it.

---

## ✏️ Adding a new project (most common task)

### Quick version
1. Upload your media to `public/images/projects/` (a thumbnail image + optional hover video)
2. Create a new `.md` file in `src/content/work/`, `personal/`, or `playground/`
3. Fill in the template (copy from an existing project)
4. Save / Commit
5. Wait ~60 seconds — the site rebuilds automatically

### Step-by-step in GitHub's web editor

**Step 1 — Upload images**
- Go to `github.com/Bella-shih/bellashih-portfolio`
- Click into the `public` folder → `images` folder → `projects` folder
- Click "Add file → Upload files"
- Drag in your thumbnail image (e.g. `my-new-project-thumb.jpg`)
- Scroll down, click "Commit changes"

**Step 2 — Create the project file**
- Go back to the root of the repo
- Click into `src` → `content` → `work` (or `personal` / `playground`)
- Click "Add file → Create new file"
- Name it like `my-new-project.md` (use dashes, no spaces, all lowercase)
- Paste in the template below, fill in the blanks
- Scroll down, click "Commit changes"

**Step 3 — Wait**
- Cloudflare will see the change and rebuild your site in ~60 seconds
- Refresh bellashih.com — your new project is live

---

## 📄 Project file template

Copy-paste this when creating a new project. Anything between `---` is structured data; everything below is freeform Markdown for the body.

```markdown
---
title: "Project Name Here"
client: "Client Name"           # Optional — leave out for personal work
year: 2025
role: "Designer & Animator"
tags:
  - "Motion Graphics"
  - "Brand"

thumbnail: "/images/projects/my-project-thumb.jpg"
hoverVideo: "/images/projects/my-project-hover.mp4"   # Optional — short loop for hover
vimeoId: "123456789"            # Just the number from vimeo.com/123456789

size: "medium"                   # Tile size — see options below
order: 5                         # Lower = appears first in the grid
featured: true                   # Set true to show on the homepage
draft: false                     # Set true to hide the project temporarily

description: "One-sentence summary that appears under the title."
objective: "Two or three sentences about what the project was trying to do."

credits:
  - role: "Creative Director"
    name: "Person Name"
  - role: "Producer"
    name: "Person Name"
---

## Process

Write whatever you want here using Markdown. You can include:

- Bullet points
- **Bold text** and *italics*
- [Links](https://example.com)
- Images: `![Alt text](/images/projects/your-image.jpg)`

### Subheadings work too

### Image gallery

To show images in a grid, wrap them in `<div class="gallery">`:

<div class="gallery">

![Frame 1](/images/projects/frame-1.jpg)
![Frame 2](/images/projects/frame-2.jpg)
![Frame 3](/images/projects/frame-3.jpg)

</div>

### Extra videos

To embed another Vimeo video in the middle of the case study:

<div class="video-embed">
<iframe src="https://player.vimeo.com/video/VIMEO-ID-HERE" frameborder="0" allowfullscreen></iframe>
</div>
```

---

## 🎛️ Common tweaks

### Resize a tile in the grid
Open the project's `.md` file. Change the `size:` line. Options:
- `size: "small"` — 1 column × 1 row (compact)
- `size: "medium"` — 1 column × 2 rows (default)
- `size: "tall"` — 1 column × 3 rows (vertical hero)
- `size: "wide"` — 2 columns × 2 rows (horizontal feature)
- `size: "feature"` — 2 columns × 3 rows (the big hero tile)

The grid auto-arranges itself for a clean mosaic. Pages collapse to single column on mobile.

### Hide a project (without deleting)
Open the project's `.md` file. Change `draft: false` to `draft: true`. Commit. Project disappears.

### Reorder projects
Open the project file. Change the `order: 5` number. Lower numbers come first. So:
- `order: 1` shows up first
- `order: 100` shows up last (the default if you don't set it)

### Feature on homepage
Set `featured: true` in the project file. Only featured projects show on the homepage grid.

### Update the reel video
Open `src/pages/reel.astro`. Find the line that says `const REEL_VIMEO_ID = '...'`. Replace with your new Vimeo ID.

### Update your bio / About page
Open `src/pages/about.astro`. Edit the text in the `bio` array near the top.

### Add a new social link in the footer
Open `src/components/Footer.astro`. Find the `footer-links` list and add a new `<li>` with your URL.

---

## 🆘 When to ask Claude

Ask Claude in chat for help with anything that feels too technical, including:
- Changing site colors site-wide
- Changing fonts
- Adding a new page or section
- Changing the layout
- Anything not working as expected
- "I want a new project added — here's the info and assets"

Claude will give you the exact files to update and where to paste each thing.

---

## 🚀 Local preview (optional)

If you want to preview the site on your own Mac before publishing changes:

1. Open Terminal (or VS Code's built-in terminal)
2. Navigate to this folder: `cd ~/path/to/bellashih-portfolio`
3. First time only: `npm install` (this installs dependencies — takes ~1 min)
4. Run `npm run dev`
5. Open `http://localhost:4321` in your browser
6. Make changes — they appear instantly
7. Press `Ctrl + C` in the terminal to stop

You don't need to do this — it's just convenient if you're doing a lot of changes in one session.

---

## 🌐 Deployment

The site auto-deploys via Cloudflare Pages whenever you push to GitHub's `main` branch. No manual steps needed.

- Live: https://bellashih.com
- Preview: https://bellashih-portfolio.pages.dev

---

## 🎨 Brand quick-reference

| Element | Value |
| --- | --- |
| Background | Pale Linen `#FAF7E8` |
| Text | Deep Forest `#184027` |
| Primary accent | Olive `#B8BC59` |
| Secondary accent | Tangerine `#FF6B2B` |
| Display font | Fraunces |
| Body font | Plus Jakarta Sans |
