# Haoyuan Li — Academic & Technical Website

A responsive, static, English personal website. No build step, database, API key or paid service required.

## Preview
Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Visit http://localhost:8080.

## Publish publicly (GitHub Pages)
1. Create a new **public** GitHub repository named `nine-mink.github.io` in your account if available (or any repo name).
2. Upload **index.html**, **styles.css**, and **script.js** to the repository root.
3. Navigate to **Settings → Pages → Build and deployment** and set **Deploy from a branch**, `main`, `/ (root)`.
4. After GitHub reports a published site, visit `https://nine-mink.github.io/` (for this exact repository name). If you used another repo name, visit `https://nine-mink.github.io/REPOSITORY_NAME/`.
5. Optionally configure a custom domain later.

## Editorial notes
- The site's public identity is limited to research and technology. It deliberately excludes psychology/healing services, community events, and venture titles.
- The user-supplied academic source distinguishes published work from unpublished submissions. Do not upgrade preprints or in-review work to accepted without proof.
- The FACT research is presented as research in progress, not a published conference paper.
- Two private commercial projects are anonymised / not all shown; no proprietary screenshots or customer identities are included.
- Profile photo is omitted by design until one is provided.
- Verify any paper's latest acceptance status before editing `script.js`.
- The 4-paper highlight refers to WWW 2026, AAMAS 2026 and two EMNLP 2026 main papers. Findings EMNLP 2025 is additionally displayed.

## Update content
- Edit descriptions, sections, affiliations, links in `index.html`.
- Edit paper records in the `papers` array inside `script.js`.
- Edit theme in `styles.css`.
