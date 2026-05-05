# DESIGN.md

## Color Strategy

**Committed.** Light-dominant editorial canvas with deliberate dark slabs for atmosphere and contrast. Black + brass-gold is the brand palette, chosen for marketability against existing barber logos. The bone background is the room's natural light; the ink slabs are the chair, the mirror, the night.

### Palette (OKLCH)

```
--color-bone:           oklch(0.972 0.008 75)   /* warm off-white, page bg */
--color-paper:          oklch(0.942 0.012 75)   /* secondary surface */
--color-rule:           oklch(0.86 0.010 75)    /* hairline borders */

--color-ink:            oklch(0.165 0.012 60)   /* warm near-black ink + dark slabs */
--color-ink-soft:       oklch(0.235 0.012 60)   /* hover for primary */
--color-graphite:       oklch(0.44 0.014 60)    /* secondary body text */
--color-graphite-light: oklch(0.62 0.012 60)    /* meta, captions */

--color-brass:          oklch(0.705 0.135 75)   /* warm brass, primary accent */
--color-brass-deep:     oklch(0.55 0.125 70)    /* hover/pressed */
--color-brass-soft:     oklch(0.84 0.090 80)    /* tinted brass for headers */
```

**Why warm brass over casino yellow:** brass at chroma 0.135 / lightness 0.7 reads as pomade-tin gold. Yellow at chroma 0.17+ reads Vegas. Brass photographs against bone without screaming, and against ink with weight.

**Surface map:**
- Hero, ink slab (the room at night)
- About, bone (the morning light)
- Services, paper (a small surface shift, no slab)
- Gallery, ink slab (lets cuts read like a magazine spread)
- Discount, bone (with a single ink card holding the offer)
- Contact, paper
- Footer, ink slab

**Accent rule:** brass earns weight. Used on: section eyebrows, the "After" gallery label, the offer headline number, footer CTAs against ink. Not used on: borders, dividers, body text, hover halos. CTAs on bone use ink primary; CTAs on ink use brass primary.

## Typography

```
--font-serif: "Cormorant Garamond", ui-serif, Georgia, serif    /* H1, H2, brand wordmark, accent body */
--font-sans:  "Inter", ui-sans-serif, system-ui, sans-serif     /* body, nav, UI */
--font-mono:  "JetBrains Mono", ui-monospace, monospace         /* prices, hours, numbering */
```

- Cormorant at weights 400 / 500 / 600 / 700, slight negative tracking on display sizes (`-0.012em` to `-0.02em`).
- Inter at 300 / 400 / 500 / 600. Body 16–18px, line-height 1.55, max ~68ch.
- Italic Cormorant carries the secondary line of every two-part headline, a deliberate editorial cadence.
- Mono numerals in: service prices, gallery numbering ("No. 01"), hours.
- Loaded via `<link>` in `index.html` with `preconnect` and `display=swap`.

## Layout

- 12-col grid on lg+, 24px gutters. Mobile reflows to single-column with 16px gutters.
- Section vertical rhythm: `py-28 lg:py-40` (112px → 160px). Generous, magazine-paced.
- Headlines anchor to a 7/5 split (heading on left, supporting copy on right), never centered SaaS-style stacks.
- Services renders as a numbered editorial list with hairline rules between rows. No card grid.
- Gallery uses a clean 2-column editorial grid (1-col on mobile) with a uniform 4/3 landscape aspect on every cut. Tile heights stay viewable without scroll; the drag-compare slider does the heavy lifting.

## Elevation & Surfaces

- Two surfaces only: `bone` (default) and `paper` (subtle shift). Plus `ink` slab.
- One real shadow: the gallery slider handle (`0 8px 24px -8px rgba(0,0,0,0.5)`). No card drop shadows.
- Borders are 1px hairlines in `--rule` (light) or `bone/10` (on ink). No colored borders.
- Banned: side-stripe accents, decorative gradients on edges, glass blur cards.

## Motion

- Ease-out-quart `cubic-bezier(0.25, 1, 0.5, 1)` everywhere. 200–360ms.
- Hero uses `.fade-up` on initial mount with one staggered delay. No scroll-triggered chains.
- Navbar shrinks 80px → 64px on scroll past 24px, with a hairline appearing, no color flash, no glass blur.
- Image reveals respect `prefers-reduced-motion`, collapse to opacity-only at 1ms.
- Buttons translate 1px on `:active` for tactile press. No hover scale.

## Components

### Buttons (`.btn`)
- Square shoulders (2px radius), tracked-up uppercase labels, 13px / weight 600 / letter-spacing 0.28em.
- `btn-primary`, ink fill on bone surfaces (default CTA).
- `btn-brass`, brass fill on ink surfaces (Hero, Footer).
- `btn-ghost`, ink outline on bone.
- `btn-ghost-on-ink`, bone outline on ink.

### Inputs (`.input-line`)
- Underline-only. No boxed fields. Label above (uppercase tracked, 11px). Border darkens to ink on focus.

### Eyebrow (`.eyebrow`, `.eyebrow-on-ink`)
- 11px / 0.32em / brass-deep on bone, brass on ink. Single inline-block, no decorative rules.

### Service row
- 3-col grid: `[2.5rem | content | price]`. Number in mono (01–06), title in serif, body in sans, mono price right-aligned. Hairline rules above and below. Hover lifts the row to bone.

### Gallery card
- Drag-compare with a 1px bone divider and bone disk handle (no brass on the slider, keeps the photos as the loudest element).
- Eyebrow labels: "Before" in bone/85, "After" in brass.

## Imagery

- Default placeholder: `/images/template-placeholder.svg`. Used everywhere until buyer's photos arrive.
- Real client photos staged in `public/images/` are reserved for buyers, the public template ships with placeholders to keep the asset cleanly resellable.
- No filters. No gradient overlays on photos except a subtle scrim when type sits over them.

## Anti-patterns banned for this site

- Side-stripe borders (`border-l` color accents).
- Gradient text (`background-clip: text`).
- Glassmorphism, no blurred cards, no semi-transparent floating panes.
- Identical card grids for services.
- The hero-metric template (big number + small label as the section centerpiece).
- Wood textures, leather textures, smoke overlays, vintage paper.
- Animated barber poles, spinning scissors, hover-flip cards.
- Em dashes in copy (use commas, colons, periods).
- Pure black (`#000`) or pure white (`#fff`), every neutral carries a warm tint.

## Voice

- Confident, lived-in, masculine without aggression. Talks like a barber, not a brand manager.
- Every word earns its place. No restated headings. Hero headline carries the proposition; sub-line lands the tone.
- Two-line headlines are deliberate; the second line is italic and softer.
