# AGENTS.md

Repo-local guidance for Codex (and any other implementing agent) on this barber template repo. Pair with the global rules in `/home/cresp3/Portfolio/AI-WORKFLOW.md` and the writing rules in `docs/MASTER_RULES.md`.

## Repo Role

Sellable barber-shop template. Marketed by CSolutions to solo barbers and small shop owners (2 to 8 chairs) who currently run their entire web presence through a Calendly or Booksy link. Buyer pays, CSolutions swaps in their name, photos, services, hours, and booking link. The public template ships with placeholders so it stays cleanly resellable.

## Canonical Files

- `PRODUCT.md` and `DESIGN.md` at the repo root are the source of truth for tone, palette, layout, and motion. Read them before any visual change.
- `docs/MASTER_RULES.md` governs writing. No em dashes anywhere. No "delve / moreover / furthermore / albeit / indeed / certainly". No rule of three when it can be avoided.
- All buyer-facing copy and data lives in `src/data/site.js`. Buyers never touch JSX.
- Design tokens live in `src/index.css` under `@theme`. New colors or fonts go there as tokens, not as inline values.

## Recent Polish Pass (claude, 2026-05-05)

The site was inverted from a dark-dominant lead mockup into a light-dominant editorial template. Every component was rewritten. Branding was scrubbed off the previous lead. The Black + brass palette is intentional (most barber logos already use it; matches buyer expectations).

### What changed

| Area | Change |
|---|---|
| Tokens | New OKLCH palette in `src/index.css`: `bone`, `paper`, `rule`, `ink`, `ink-soft`, `graphite`, `graphite-light`, `brass`, `brass-deep`, `brass-soft`. Old `ink-950 / ink-900 / ink-100 / brass-300..600` tokens were removed. |
| Utilities | Added `.eyebrow`, `.eyebrow-on-ink`, `.hairline`, `.input-line`, `.btn` family (`btn-primary`, `btn-brass`, `btn-ghost`, `btn-ghost-on-ink`), `.reveal`, `.reveal-image`, `.fade-up`. Reduced-motion respected. |
| App.jsx | Default surface flipped to `bg-bone text-ink`. |
| Navbar | Light bar, sticky shrink from 80px to 64px on scroll, hairline divider on scroll, no glass blur, mobile menu animates max-height. |
| Hero | Ink slab. 7/5 grid with two-line italic headline. Bottom strip carries hours and phone. |
| About | Bone. Sticky title column. Stats moved to a typographic `dl` with a hairline above (the prior `border-l` side stripe is banned). |
| Services | Paper. Editorial numbered price list with hairline rules, mono numerals, mono prices. The prior 3-up identical card grid is banned. |
| Gallery | Ink slab. Clean 2-column grid (1-column on mobile), uniform `aspect-[4/3]` so tiles stay viewable without scroll. Drag-to-compare preserved. |
| Discount | Bone with a single ink offer card. The prior big-number / small-label hero-metric pattern was removed. |
| Contact | Paper. Underline inputs, labels above. The prior `border-l` block accent is banned. Mailto submission preserved. |
| Footer | Ink slab. Removed nested card-in-band. Four-column meta plus clear sales CTA. |
| Hooks | New `src/lib/useReveal.js` (IntersectionObserver helper). Wired in CSS but not yet attached to components, available for future motion. |
| Copy | All em dashes removed from `src/`, `PRODUCT.md`, `DESIGN.md`. Replaced with commas or restructured sentences per `docs/MASTER_RULES.md`. |

### Banned patterns now removed

- Side-stripe accent borders on About Stat and Contact Block.
- Identical 3-up service card grid.
- Hero-metric "Offer Here" pattern in Discount.
- Nested card-in-band in Footer.
- Glass blur on Navbar.
- Em dashes in user-facing copy and design docs.

## Codex To-Do (review and push)

1. **Visual walkthrough.** Run `npm run dev`. Walk every section at desktop, tablet, and mobile widths. Check focus rings on all interactive elements. Verify the gallery drag-compare on touch. Verify the navbar shrink does not cause layout jump.
2. **Lint repair.** `npm run lint` reports `no-undef` errors for `window`, `document`, `setTimeout`, `IntersectionObserver`. Pre-existing repo issue, not caused by this pass. Add browser globals to `eslint.config.js` (`languageOptions.globals: { ...globals.browser }` from the `globals` package, or `env: { browser: true }` if using legacy eslintrc shape). One-line fix.
3. **Image audit.** All gallery slots and hero use `/images/template-placeholder.svg` so the template stays resellable. The real photos in `public/images/` (headshot, studio, before/after) belong to the previous lead and should not appear in the public marketed version. Confirm none are referenced from the JSX layer.
4. **Accessibility check.** Run Lighthouse / axe on each section. Color contrast on `text-graphite-light` against `bone` is the most likely fail point. Adjust the token if it flags.
5. **Lock branch.** Suggested commit shape (split or squash to taste):
   - `chore(template): strip lead branding and add resellable placeholders`
   - `feat(design): light-dominant black + brass token system in OKLCH`
   - `refactor(components): rewrite hero, about, services, gallery, discount, contact, footer to editorial layout`
   - `docs: add PRODUCT.md, DESIGN.md, AGENTS.md and align writing rules`
6. **Open PR.** Title: `Polish barber template into resellable v1`. Body should link `PRODUCT.md` and `DESIGN.md` and call out the unresolved lint config gap as a follow-up issue.

## Conventions Worth Preserving

- Buyer-facing strings live only in `src/data/site.js`. Adding new copy to a JSX file is a regression.
- Tokens over hex. New colors go in the `@theme` block in `src/index.css`.
- Hairlines, never colored borders. Side-stripe accents are banned by `DESIGN.md`.
- One CTA per section. The whole site funnels to booking.
- Cormorant Garamond for serif, Inter for sans, JetBrains Mono for prices and numerals. Already loaded in `index.html`.

## Open Questions for the Next Pass

- Should the template support a buyer-supplied logo upload slot in `site.js`, or keep the wordmark as the lockup?
- Future variants (different brand identities the user mentioned) should branch off this base. A `themes/` folder under `src/` with named token sets is one route. Worth a brief design conversation before Codex implements.
- Booking integration: keep mailto for v1, or stub a Booksy/Calendly link slot and document the swap in `site.js`.
