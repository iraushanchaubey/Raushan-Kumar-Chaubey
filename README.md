# Raushan Chaubey - Portfolio website

A one-page portfolio website made with plain HTML, CSS and JavaScript.
It has no framework, no build step and nothing to `npm install`. It follows your Mac's Light or Dark appearance
(Dark mode gives the black and red look), and it is responsive on phones and tablets.

Sections: Hero, Stats, About, Projects, Training and experience, Education, Skills, Raushan Hacks (YouTube), Learning and goals, Contact.

## What is inside

```
raushan-portfolio/
├── index.html            all page content
├── css/styles.css        all styling (colours are variables at the top)
├── js/
│   ├── animations.js     scroll animations, count-up stats, floating shapes, marquee
│   ├── photo.js          shows assets/photo.jpg if you add it
│   └── contact.js        contact form (opens your mail app)
├── assets/
│   ├── favicon.svg
│   └── photo.jpg         you add this (optional)
├── .vscode/              suggests the Live Server extension
├── package.json          only needed for the optional `npm start`
└── README.md
```

`index.html` must always stay next to the `css`, `js` and `assets` folders. If you move it alone, the page loses its styling.

## Run it on your MacBook with VS Code

### 0. Unzip
1. Open **Finder > Downloads** and double-click `raushan-portfolio.zip`.
2. A folder called `raushan-portfolio` appears next to it. Move that folder somewhere permanent, for example Documents.

### 1. Install VS Code (skip if you have it)
Go to https://code.visualstudio.com, click **Download for Mac**, unzip it and drag **Visual Studio Code** into **Applications**.

### 2. Open the folder in VS Code
1. Open VS Code.
2. Press **Cmd + O** (or File > Open Folder).
3. Select the `raushan-portfolio` folder (the one that contains `index.html`) and click **Open**.
4. If VS Code asks "Do you trust the authors", click **Yes, I trust the authors**.

### 3. Install Live Server
1. Press **Cmd + Shift + X** to open Extensions.
2. Search for **Live Server** (publisher: Ritwick Dey) and click **Install**.
   (VS Code may also show a pop-up recommending it. Click Install there.)

### 4. Start the website
1. In the left Explorer panel, click `index.html`.
2. Click **Go Live** in the blue bar at the bottom right of VS Code.
3. Your browser opens http://127.0.0.1:5500 with the website. When you save any file, the page reloads by itself.

To stop, click **Port: 5500** in the bottom bar.

## Other ways to run it (no extension)

**Finder:** open the unzipped folder and double-click `index.html`. This works as long as the css, js and assets folders are beside it.

**Terminal inside VS Code:** press **Ctrl + `** (backtick), then run:

```
python3 -m http.server 5500
```

Open http://localhost:5500 in your browser. Press **Ctrl + C** to stop.
If macOS asks to install the Command Line Developer Tools, click Install and run the command again.
If you have Node.js, `npm start` does the same thing.

## Light and dark theme

The site follows your Mac. For the dark look, set **System Settings > Appearance > Dark**.
To force one theme whatever the Mac setting is, change the first line of `index.html`:

```
<html lang="en" data-theme="dark">
```

Use `data-theme="light"` for the light version.

## Fonts and internet

The headings use **Anton** and the text uses **Inter**, loaded from Google Fonts, so you need internet the first time.
Offline, the browser falls back to Impact and the system font and everything else still works.
To make fonts fully offline, download Anton and Inter from https://gwfh.mranftl.com/fonts, put the files in `assets/fonts/`, add `@font-face` rules at the top of `css/styles.css`, and delete the Google Fonts `<link>` lines in `index.html`.

## Add your photo

Save your picture as `assets/photo.jpg` (portrait, around 900 x 1200) and refresh. Until you add it, your browser console may show a harmless "photo.jpg not found" message.

## Edit your content

- Text: search `index.html` for the section id: `about`, `projects`, `experience`, `education`, `tools` (Skills), `youtube`, `learning`, `contact`.
- Stats numbers: in `index.html`, `data-n` is the number that counts up and `data-s` is the suffix.
- Colour: change `--acc` in the three colour blocks at the top of `css/styles.css`.
- Email: change `EMAIL` in `js/contact.js` and the `mailto:` links in `index.html`.
- YouTube link: replace `href='#youtube'` in the footer and in the Raushan Hacks card with your channel URL.

## Troubleshooting

- **Plain white page, blue underlined links, huge circle of text:** the CSS did not load. `index.html` is not beside the `css` folder, or you opened it from inside the zip or from a preview. Unzip first and open the whole folder as in step 2. A red bar at the top of the page also tells you this.
- **Nothing animates:** macOS has Reduce motion turned on (System Settings > Accessibility > Display). The site respects it and shows everything without motion.
- **Live Server button missing:** the extension is not installed (step 3), or you opened a single file instead of the folder.
- **Contact form does nothing:** it opens your default mail app. If none is set up, use the email link in the footer.

## Publish

It is a static site. Drag the `raushan-portfolio` folder into https://app.netlify.com/drop, or push it to GitHub and enable GitHub Pages.
