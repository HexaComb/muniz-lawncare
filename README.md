# Muniz Lawn Care

TanStack Start + React, running locally with the Cloudflare Vite plugin. This is a design preview, not a deployed website.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Node 22.12 or newer is required.

```sh
npm run build
npm run check
npm run preview
```

The Cloudflare plugin runs the server in the local Workers runtime. It does not provision or deploy resources.

## Future Cloudflare CI

The user will set this up after approving the local design. No Worker, hosted CI, DNS record, or deployment has been created by this project.

- Worker name: `muniz-lawncare` (must match `wrangler.jsonc`).
- Build command: `npm run build`.
- Production deploy command: `npx wrangler deploy`.
- Enable preview builds for non-production branches in Cloudflare's Git integration.
- Current Cloudflare branch previews use `npx wrangler preview`; version-only URLs are also enabled by `preview_urls: true`.
- `npm run deploy:preview` builds and creates a branch preview when explicitly invoked after hosting is configured.
- Do not run deployment commands until explicitly requested.

Reference: https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/

## Content and launch checklist

- Hero: 14-second silent excerpt of Rodrigo’s “LawnCare Therapy” Instagram reel. Local H.264 video, 24fps, poster fallback, pause control, reduced-motion support. Source: https://www.instagram.com/p/DfF9mlPTOjx/
- Photos: the existing Muniz website. Optimized WebP derivatives strip EXIF metadata. Original provenance is in `research/media-sources.json`.
- Google rating: 4.9 / 30 reviews, checked October 30, 2026. Review excerpts are from Eric Halsted, James bodiford, and Brian Reyes. Refresh before launch.
- Contact form is deliberately local-only and clearly labeled; it validates inputs but does not transmit or persist information. Wire the owner-approved destination before launch. The Google listing links to the existing Jobber form, included as a fallback link.
- The comparison swiper uses two labeled sample photos of different properties. Replace with a verified matching before/after pair before launch. Supports horizontal and vertical swiping with a mower handle and grass clippings.
- Original business logo is used in the header, footer and favicon.
- Confirm exact surrounding service cities before naming them.
- Confirm final business copy and media use with the owner.
- The preview has `noindex, nofollow`. Replace with production indexing and canonical/OG metadata when a launch is explicitly requested.

No backend credentials are required for local design review.
