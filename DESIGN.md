---
name: Aladine Chetouani — academic site
description: White academic page, portrait column, plain-language Q&A, news with real photos, and the reader's own gaze traced on the page.
colors:
  page: "#ffffff"
  wash: "#f5f4f1"
  ink: "#1c1b1f"
  ink-soft: "#55545c"
  rule: "#e5e3de"
  rule-strong: "#c9c6bf"
  burgundy: "#8c1d2f"
  burgundy-deep: "#6a1222"
  burgundy-wash: "#f6eaec"
  dark-page: "#141316"
  dark-ink: "#ecebef"
  dark-burgundy: "#ee8f9e"
typography:
  body:
    fontFamily: "Charis SIL, Charter, 'Bitstream Charter', Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.62
  question:
    fontFamily: "Charis SIL, Charter, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1.2
  lede:
    fontFamily: "Charis SIL, Charter, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.25
  name:
    fontFamily: "Charis SIL, Charter, Georgia, serif"
    fontSize: "1.7rem"
    fontWeight: 700
    lineHeight: 1.12
  story-lead:
    fontFamily: "Charis SIL, Charter, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.25
  item-title:
    fontFamily: "Charis SIL, Charter, Georgia, serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.35
  meta:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.35
  interface:
    fontFamily: "Atkinson Hyperlegible Next Variable, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  sm: "2px"
  md: "4px"
spacing:
  section: "5rem"
  block: "2rem"
  row: "0.75rem"
components:
  link:
    textColor: "{colors.burgundy}"
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.page}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  fixation:
    strokeColor: "{colors.burgundy}"
---

# Design

## Overview

A professor's page written for a journalist or a curious reader first, specialists second. White page, a fixed left column with the portrait and the way around, and a reading column where every section answers a plain question ("What does he study?", "What's new?"). The single signature is the subject itself: while the visitor reads, their cursor is treated as gaze, numbered fixations and saccades appear on the page, and an attention heatmap can be shown on demand. News carries real, credited photos and paper figures.

## Colors

Restrained: white page, near-black ink, one burgundy for links, the live gaze trace and the primary action. A warm-grey wash is used only behind figures and the open-positions note. Dark theme follows the system or the toggle.

## Typography

- Reading text, questions and lede: **Charis SIL** (Charter design, a classic academic text face), regular and bold, no italic display.
- Interface (sidebar, dates, captions, credits, buttons, filters): **Atkinson Hyperlegible Next**, designed for low-vision legibility, chosen for a vision scientist's site.
- No monospace. Dates and years use tabular figures of the interface face.
- Hierarchy by size and weight; plain section titles, no uppercase tracked labels, no section numbers.

## Layout

- Max width 1200px. Left column 260px (sticky on desktop): portrait, name, role, affiliation, links, citation line, gaze controls as a plain row (switch, "Show heatmap" link, live count), then the section menu. Language and theme switches sit top right of the reading column. Right column ≤ 44rem of prose; figures may span the column.
- Home order: lede → gaze invitation → short bio → News (photo slider + short dated list) → Research → Selected publications → Gallery (horizontal photo strip with lightbox) → Supervision → Career → Contact. Join us, Blog and Service exist but are hidden.
- One spacing rhythm: 5rem between sections, 2rem between blocks, more space above a heading than below.

## Components

- **News slider**: items with a picture slide (3:2 frame, image contained so paper figures stay whole), date, headline, credit; arrows, dots, pause, swipe; auto-advance 7 s unless reduced motion. Then a short dated list.
- **Gallery strip**: horizontal snap-scrolling photos with captions, drag and arrows; click opens a dark lightbox.
- **Research answer**: theme title in bold serif + one plain sentence; one real figure from his papers beside the themes.
- **Publication**: venue abbreviation and year as a small interface-face line, title in bold serif, authors (his name bold), links as plain text.
- **Ledger**: conference leadership table (year, event and place, role).
- **Gaze trace**: burgundy circles sized by dwell, numbered, joined by thin saccade lines, fading after ~6 s. Heatmap uses the green–yellow–red ramp of eye-tracking software, shown at quarter resolution and smoothed.

## Motion

One authored moment: the gaze trace. Everything else is short colour transitions. Reduced motion turns the trace off by default.

## Do's and Don'ts

- Do explain before listing; do credit every photo.
- Don't use stat strips, section numbers, monospace costume, eyebrow labels, icon-plus-heading tiles, shadowed floating cards, gradients or glass.
- Don't invent images: no stock, no AI-generated pictures; real event photos or paper figures only.
