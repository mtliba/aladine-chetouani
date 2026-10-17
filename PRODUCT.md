# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: press and the general public — journalists, science writers and curious readers who arrive from a talk, an article or a search about eye tracking, visual attention, art perception or autism research. They need to understand in a minute who Prof. Aladine Chetouani is, what his research does, and what is happening now.

Also served (confirmed earlier, secondary on the page): PhD/postdoc candidates, research peers and evaluation committees, who need publications, supervision, service and open positions.

## Product Purpose

Personal academic website of Aladine Chetouani, Full Professor at Université Sorbonne Paris Nord (L2TI, Institut Galilée), head of the Multimedia team. It explains his research on how people look at and judge images (visual attention, eye tracking, perceptual quality, medical imaging, cultural heritage), shows current news with photos, and keeps the full academic record (163 publications, supervision, conference leadership) one click away. Success: a non-specialist leaves knowing what he studies and why it matters; a specialist finds the record without friction.

## Positioning

His work is about where human eyes go and how people judge what they see; the site lets the visitor experience that directly — their own reading is traced as fixations and saccades and can be shown as an attention heatmap.

## Operating Context

- Static site on GitHub Pages (Astro), bilingual EN / FR (English default, `/fr/`).
- Content edited by the professor in Sveltia CMS (French labels) at `/admin/`; every recurring item must stay CMS-editable.
- Weekly HAL sync adds publications automatically.

## Capabilities and Constraints

- Sections: news (updates + articles), research themes and projects, publications (full filterable page), service, supervision, recruiting, blog, career, contact.
- Eye-tracking demo runs only for fine pointers, respects reduced motion, stores nothing outside the browser.
- No server, no tracking, no database.

## Brand Commitments

- White page, academic register, burgundy accent (user-approved base).
- Sticky left identity column with his portrait.
- Live gaze trace and attention heatmap must stay (the creative touch the user asked for).
- Different from the sister site for Prof. Tedjani Mesbahi (blue accent, banner card layout).
- User rejects "AI slop": generic fonts, stat strips, section numbering, decorative monospace, eyebrow labels everywhere.
- Plain section titles, not questions; a few highlights, not the full CV (like the Tedjani Mesbahi site). News as a photo slider and a photo gallery.

## Evidence on Hand

- Portrait: `public/uploads/profile/aladine-chetouani.jpg` (600×600).
- CV: `~/Desktop/CV_Beghdadi_EU/CV_Chetouani_EU/cv_chetouani_eu.tex`; theses.fr records; HAL/OpenAlex publications in `src/content/publications/`.
- News photos: to be sourced from public event pages (credited) and paper figures; none fabricated.
- Metrics: Google Scholar 2,438 citations, h 26, i10 70 (as of 2026-10).

## Product Principles

1. Explain before listing: a reader outside the field understands the research before meeting the record.
2. Show the work happening now: dated news with real images, not claims.
3. Let the visitor feel the subject: the gaze trace is the one signature, used with restraint.
4. Keep the professor in control: anything that changes over time is editable in the CMS.

## Accessibility & Inclusion

WCAG AA contrast, keyboard access, reduced-motion respect; the gaze demo is optional and never blocks reading.
