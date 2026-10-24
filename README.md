# Victoria Ainodion — professional portfolio

A complete static career portfolio for an Executive Assistant, Virtual Assistant and Administrative & Operations Support Professional. Built with HTML, CSS and JavaScript; no subscriptions, backend, packages, API keys or build step.

## What is included

| File | Purpose |
| --- | --- |
| `index.html` | Complete website: homepage, About, services, eight practical case studies with reconstructed visuals, a six-card gallery of submitted screenshots, experience, tools, two certificate images, education and contact |
| `styles.css` | Responsive design, mobile layout, visual work samples and accessible focus styles |
| `script.js` | Mobile menu, portfolio category filters, case-study pop-ups and personal asset loading |
| `config.js` | **Edit this file first** to update your email, LinkedIn URL, phone number, headshot and CV file |
| `assets/favicon.svg` | VA initials favicon |
| `assets/social-preview.png` | Sharing image for social link previews |
| `.nojekyll` | Tells GitHub Pages to serve this static site without a Jekyll build |

The eight case studies describe relevant executive and administrative tasks drawn from Victoria's professional experience. Their on-page visuals are **recreated layouts using sample information**, not original employer documents. The expenditure graphic uses sample figures (₦2.50m released, ₦2.18m reported, ₦1.92m receipts matched and ₦260,000 awaiting receipt support), which must not be described as verified transaction amounts or employer outcomes. A separate gallery contains **selected screenshots supplied by Victoria**: calendar booking, event reminders, a task board, expense reporting, an agenda, research and a spreadsheet chart. These show examples of documents and tools without claiming audited employer results. Private inboxes, named contact lists and old live-price comparisons were excluded.

The site includes **two uploaded virtual assistance certificate images**. It now includes Victoria's phone number, **+234 913 502 0887**, with her express approval and a working `tel:` link. The LinkedIn and email links are included. A **public-facing copy** of the supplied CV is bundled as `assets/victoria-ainodion-cv.pdf`, with the private client's name anonymised, the phone number normalised and unconfirmed additional certifications/tool claims omitted. Victoria's original uploaded CV has not been changed.

Victoria's submitted professional portrait is included at `assets/victoria-portrait.webp` and appears in the homepage hero. The visual palette uses warm coffee, cocoa-brown and cream tones.

## See the website on your own computer first

1. Download and extract the ZIP file.
2. Open the extracted `victoria-ainodion-portfolio` folder.
3. Double-click `index.html` to open the website in your browser.
4. Try the work filters and any **Explore this example** button. Scroll to the submitted screenshots and training certificates; each image opens at full size. Check the site on your phone after publishing.

You can also open the site with a local development server, but **no server is required** to use or upload it.

## Publish at your personal github.io address (beginners)

**Important:** A personal GitHub Pages repository MUST be named **exactly** `<your-github-username>.github.io` to publish at `https://<your-github-username>.github.io/`. Do not add your username twice and do not put the files inside another folder on GitHub.

1. Sign in to [GitHub](https://github.com/).
2. Click your avatar in the upper-right corner. Your actual username is visible on your profile page. It is not necessarily your display name.
3. Click the **+** button at the top and choose **New repository**, or open [github.com/new](https://github.com/new).
4. In **Repository name**, type `<your-actual-username>.github.io` (replace the entire placeholder with your account's actual username). Example: if your username were `victoria-example`, the repository would be `victoria-example.github.io`.
5. Choose **Public**. If GitHub offers **Add a README file**, you may leave it unchecked; you already have a README in this package. Click **Create repository**.
6. Extract the website ZIP on your computer. Inside the extracted project folder, select the **contents**: `index.html`, `styles.css`, `script.js`, `config.js`, `.nojekyll`, `README.md` and the `assets` folder. **Upload those items, not the ZIP file and not the enclosing project folder.**
7. On the new GitHub repository page, click **uploading an existing file** (or **Add file → Upload files**). Drag the selected files and `assets` folder into GitHub. If your browser does not upload folders correctly, use the folder method described below.
8. Enter a commit message such as `Add Victoria portfolio` and select **Commit changes**.
9. In the repository, check that `index.html` is visible in the topmost file list, next to `styles.css`. You should **not** need to open a `victoria-ainodion-portfolio` folder first.
10. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch** as the Source, `main` as the Branch and `/(root)` as the folder. Click **Save**.
11. Once GitHub finishes publishing, the link will be **`https://<your-actual-username>.github.io/`**. On the Pages screen, use **Visit site** to confirm the published address. Deployment may take several minutes.
12. Open the live URL on a computer and a phone. Check the portrait area, project filters, case study dialogs, email and LinkedIn links.

**If dragging the assets folder does not preserve it:** On GitHub, use **Add file → Upload files** and upload the contents of `assets` after first opening or creating an `assets` directory in the repository. Alternatively, GitHub Desktop can upload the entire unzipped folder structure safely. The final file layout must include `assets/favicon.svg`, `assets/social-preview.png`, the bundled PDF CV, all sample `.webp` images and the four main code files at the correct relative paths.

**If you already created a repository with the wrong name:** GitHub repository **Settings → General → Repository name → Rename** lets you correct it; make sure the repository name matches your GitHub username exactly. Check the correct URL in **Settings → Pages** after publishing.

For GitHub's official instructions, see [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart) and [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Update your contact details (no rebuilding required)

Open `config.js` in any text editor and update these values:

```js
window.PORTFOLIO_CONFIG = {
  email: 'victoriaainodion@gmail.com',
  linkedin: 'https://www.linkedin.com/in/victoria-ainodion-va',
  phone: '+234 913 502 0887',
  portraitFile: './assets/victoria-portrait.webp',
  cvFile: './assets/victoria-ainodion-cv.pdf'
};
```

- Changing `email` updates all email buttons and the visible address in the Contact section.
- Changing `linkedin` updates all LinkedIn links.
- Changing `phone` updates the visible Contact number and click-to-call links. Use the format `+234 913 502 0887`.
- You can update the live file in GitHub by opening `config.js`, clicking the pencil **Edit** icon, saving the change and committing it to `main`.
- Your number is intentionally public in this version because you requested it. To remove it, delete the phone link markup in `index.html` and the `phone` setting in `config.js`.

## Change or replace your professional portrait

1. Choose a professional picture that you own or have permission to publish.
2. Ideally prepare it as a portrait-orientation WebP or JPG, around 1000–1600 pixels tall. Retain your natural appearance; the site only crops the image.
3. Place it into `assets/` with the filename `victoria-portrait.webp` (or change the extension to match your file).
4. In `config.js`, set: `portraitFile: './assets/victoria-portrait.webp'`.
5. Save and upload both the new image and `config.js`. The initials placeholder disappears automatically when the image loads successfully.
6. If the crop isn't ideal, edit `.portrait-photo { object-position: center 22%; }` in `styles.css`. For example, `center 10%` shifts the area of interest towards the top of the photo.

Do not link to private cloud-storage images that a visitor might be unable to access.

## Update the downloadable CV

A public-facing PDF version is already present at `assets/victoria-ainodion-cv.pdf`. The **Download CV** buttons should already work on the homepage and Contact section.

1. Review the included PDF for accuracy before publishing. It removes the unapproved private-client name and unconfirmed certification/tool claims.
2. To replace it later, overwrite `assets/victoria-ainodion-cv.pdf` with your approved PDF.
3. Keep the same name and path, or update `cvFile` in `config.js` if the new filename differs.
4. Upload and commit the replacement file to GitHub.

Do not enter a CV link to a file that has not been uploaded.

## Update the submitted-screenshot gallery

The gallery lives in `index.html` inside the `.evidence-block` with `id="samples"`. Its images are under `assets/sample-*.webp`. Replace an image with a permission-cleared, redacted file, keeping its filename, and update its accompanying caption. Removing private information must be permanent: do not cover it with easily removable website text.

Some examples are training exercises rather than verified paid-client deliverables. Keep that distinction clear. The original full screenshots of inboxes and contact lists are intentionally not part of this public ZIP.

## Replace a case-study visual with an approved work sample

1. Obtain permission to publish any genuine employer or client work. Remove names, personal data, confidential amounts, internal instructions and anything else private.
2. Use a PNG, JPG or PDF sample, preferably under a descriptive filename in `assets/`.
3. Edit the relevant project's visual inside `index.html` (each project begins with `<article class="work-card"` and has a `data-project` identifier such as `finance`). Replace or add an appropriate `<img src="./assets/your-sample.png" alt="...">` with descriptive alt text and responsive styles.
4. Edit the matching case description in `script.js` inside the `cases` object, keeping the problem, approach, output, practical value and tools accurate.
5. Describe the origin of the exhibit accurately. Label an approved original screenshot as **Work sample**; label recreated examples as **Illustrative example** or **Sample figures**, as appropriate.
6. Test locally and commit the changes to GitHub.

The example projects are `calendar`, `meetings`, `finance`, `records`, `travel`, `inbox`, `tasks` and `writing`. Do not upload original membership lists, private correspondence or receipts merely to prove experience.

## Update your experience, education or skills

- **Experience:** Edit the text in the `<section id="experience">` area of `index.html`.
- **Education:** Find the `<section id="education">` area; update the descriptions or duplicate an `<div class="education-item">` for a newly confirmed certificate. Never invent an issuer or completion date.
- **Tools:** Find `<section id="skills">` and edit the relevant `<span>` names.
- **Homepage and About:** Edit the visible text in the `hero` and `about` sections.
- **SEO/social description:** Update the `<title>`, `<meta name="description">` and Open Graph text near the top of `index.html` if your professional identity changes. Change `assets/social-preview.png` if you want the social graphic to match. **After your GitHub username is known and the site is live**, replace the relative `og:image` value with the complete public image address (`https://YOUR-USERNAME.github.io/assets/social-preview.png`) for more reliable social sharing; you can also add an `og:url` tag containing the confirmed live homepage URL.

Files are plain text. The only update process is **edit → save → upload/commit → refresh your GitHub Pages URL**.

## How this website protects accuracy

- No testimonials, unsupported percentages, invented organisations or invented outcomes.
- New York remote client is anonymised.
- Recreated visuals use clearly labelled sample names, dates, amounts, fares and tasks. These are examples, not disclosed private client records or verified historical figures.
- Phone is included after Victoria explicitly authorised public display.
- The separate public CV excludes the private client’s name and unconfirmed additional certifications and Canva/CapCut.
- Certificates shown are photographed uploads. No training year was invented for the 49-day bootcamp.
- No functional-looking contact form without a backend. The Email button uses `mailto:` to open the visitor's email application.
- No analytics scripts or trackers.

## If something does not work

| Problem | Check |
| --- | --- |
| GitHub shows README instead of website | Confirm `index.html` is in the repository **root**, and Pages uses `main` + `/(root)` |
| URL has an extra directory after `.github.io` | Repository is not named exactly `<username>.github.io`, or you are viewing a project site |
| Styles missing | Confirm `styles.css` is at the same root level as `index.html` |
| Portfolio examples do not open | Ensure `script.js` uploaded and check the browser's developer console |
| Photo remains VA initials | Verify the photo filename, extension, letter case and `portraitFile` path |
| CV button is missing | This is expected until `cvFile` points to a real uploaded PDF |
| Social image not updating | Social platforms cache previews; allow the platform time to refresh its cache |

---

**Contact**: [victoriaainodion@gmail.com](mailto:victoriaainodion@gmail.com) · [LinkedIn](https://www.linkedin.com/in/victoria-ainodion-va)

## Using ChatGPT Work for publishing

If Work mode is available in your ChatGPT account, choose **Work** from the mode selector and connect GitHub there. Ask Work to publish this **unzipped project** to your exact `<github-username>.github.io` repository. Connection and any account permissions require your explicit approval. Chat mode can prepare and test these files without publishing them to an account. A ZIP download alone is **not** an active public website.
