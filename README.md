# Aladine Chetouani — academic website

Bilingual (English / French) personal website of Prof. Aladine Chetouani, Université Sorbonne Paris Nord (L2TI, Institut Galilée).

- **Static site:** [Astro](https://astro.build), no server, no database.
- **Hosting:** GitHub Pages (free), deployed by GitHub Actions on every push.
- **CMS:** [Sveltia CMS](https://sveltiacms.app) at `/admin/` (free, Git-based, French labels). Every save is a commit; the site rebuilds in 1–2 minutes.
- **Publications:** one YAML file per publication, seeded from HAL and OpenAlex. A weekly job adds new HAL records (never overwrites edits).
- **Eye-tracking demo:** on desktop, the visitor's cursor is treated as gaze (numbered fixations, saccades) and can be shown as an attention heatmap. Nothing is stored or sent; off for touch screens and reduced motion.

Editor's guide (French): [GUIDE-EDITION.md](GUIDE-EDITION.md). Product and design records: [PRODUCT.md](PRODUCT.md), [DESIGN.md](DESIGN.md).

## Structure

```
public/admin/        Sveltia CMS (index.html + config.yml)
public/uploads/      Images and files uploaded from the CMS
src/content/
  settings/          site.yml (profile), sections.yml (home order, menu labels, questions),
                     about.yml, research.yml, service.yml, team.yml, teaching.yml
  updates/           dated news items, optional photo (shown first when they have one)
  news/              longer news articles with their own page
  positions/         recruiting offers (PhD, postdoc, internship)
  blog/              one Markdown file per post
  projects/          one YAML file per project
  publications/      one YAML file per publication
  gallery/           photo gallery (section hidden by default)
src/components/      Astro components (Sidebar, GazeLayer, home sections, pages)
src/pages/           English routes at /, French routes at /fr/
scripts/             sync-publications.mjs (HAL), setup-repo.mjs (CMS repo)
.github/workflows/   deploy.yml (build + deploy + weekly HAL sync)
```

English text falls back to French when an English field is empty.

## Local development

```bash
npm install
```

```bash
npm run dev
```

Site: http://localhost:4321 · CMS: http://localhost:4321/admin/index.html (click **Work with Local Repository** in Chrome/Edge to edit local files).

## Publish on GitHub Pages

1. Create a **public** GitHub repository.
2. Point the CMS at it:

   ```bash
   npm run setup -- --repo <owner>/<repository>
   ```

3. Push, then in the repository: **Settings → Pages → Source: GitHub Actions**.
4. Invite the professor: **Settings → Collaborators → Add people** (role *Write*).

## CMS sign-in

**Sign In Using Access Token** (fine-grained personal access token with *Contents: read and write* on the repository). Steps are in the French guide.

## Publications sync

```bash
npm run sync:publications
```

Adds HAL records missing from `src/content/publications/` (matched by HAL id, DOI or title + year). Also runs every Monday in GitHub Actions and on manual **Run workflow**.
