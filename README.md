# The Barber Studio

A high-end marketing site for an independent barber. Built with Vite, React 19, and Tailwind CSS v4.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173/ in a browser.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serves the production build locally
```

## Editing content

All client-facing copy lives in `src/data/site.js`:

- Brand name, tagline, phone, email, address, and hours
- Service menu and pricing
- Before/after gallery captions

Replace these placeholder values with the client's real details before going live.

## Images

Images are served from `public/images/`:

- `studio-vertical.jpg` — hero background
- `headshot-owner.jpg` — about section portrait
- `military-discount.jpg` — discount section background
- `before/cut-1..3.jpg` and `after/cut-1..3.jpg` — gallery comparison sliders

To swap any image, drop a replacement into the same path with the same filename.

## Deploying to Vercel

1. Push the repo to GitHub:
   ```bash
   git add .
   git commit -m "Initial barber site"
   git push origin main
   ```
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Vite. Defaults are correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click Deploy. The first preview URL is live in about a minute.

## Connecting a custom domain

Once the client approves the design:

1. In the Vercel project, go to Settings → Domains and add the domain.
2. Vercel shows the DNS records to add (typically an `A` record on `@` and a `CNAME` on `www`).
3. Add those records at the domain registrar.
4. Wait for DNS to propagate. Vercel handles the SSL certificate.

## Tech stack

- React 19
- Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- ESLint 9 flat config

No backend, no database, no environment variables required.
