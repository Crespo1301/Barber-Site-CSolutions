# Barber Site Template

Reusable proposal template for an independent barber brand.

## Role In The Business

- This repo is a sales asset and reusable mockup, not a main production client site right now.
- It exists to help pitch a higher-end visual direction quickly.
- Reuse it as a proposal template, but clear stale lead details before sharing it again.

## Shared Docs

- `CLAUDE.md`
- `AI-WORKFLOW.md`
- `SECURITY-CHECKLIST.md`

## Stack

- React 19
- Vite 7
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

Useful build commands:

```bash
npm run build
npm run lint
npm run preview
```

## Main Editing Surfaces

- `src/data/site.js` for brand copy, service pricing, phone, email, address, and hours
- `public/images/` for approved client hero, owner, and gallery assets

## Working Rules

- Keep this repo in the proposal lane unless it gets promoted to real client work.
- Replace placeholder content, contact details, and imagery before any live presentation to a prospect.
- Use it as a reusable structure for local-service grooming or style-driven businesses.

## Security Notes

Run `SECURITY-CHECKLIST.md` before demos or deploys. The main risks are stale lead data, unsafe form endpoints, and unnecessary third-party embeds.
