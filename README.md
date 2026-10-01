# dominionnwakanma.cv

Dominion Nwakanma's portfolio. Next.js 16, React 19 and TypeScript, deployed on Vercel. The typography and palette follow Samuel Kraft's site; the two project rows use the scrolling behaviour Dominion specified.

## Run

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm build
pnpm start
```

Development and production servers use port 3330. For a separate review server, use `pnpm exec next dev -p 3331`.

## Content and layout

- `lib/data.ts`: project evidence, experience, community roles, writing, videos and public vouches. Dated metrics are the 1 October 2026 snapshot.
- `components/Stage.tsx`: two full-size project rows in one pinned scene. Downward scrolling reveals the first row and moves it left. The intro fades during the handoff; the second row takes the centre and moves right. Phones, short windows and reduced motion use native swipe rows.
- `components/CVDoc.tsx`: general, Mobile and Product CVs with role-specific project order and copy. All include community and volunteering.
- `app/globals.css`: Samuel Kraft-inspired styling and A4 print layout.
- `app/nous/page.tsx`: application film, role-specific proof and sourced endorsements. This page and the tailored CV routes are excluded from indexing.
- `public/media/manifest.json`: the mapping from project slugs to real media. Media source notes remain in `media-src/` locally.
- `app/manifest.ts`, `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`: browser and device identity.
- `public/og.png` and `public/og/`: social previews. `scripts/generate-social-images.mjs` regenerates the CV and Nous cards using an external Playwright install and Chrome.

## Documents

The general CV lives at `/cv`; the tailored versions at `/cv/mobile` and `/cv/product`. Print these in light mode with CSS page size, tagged PDF output, and no browser header/footer. Wait for `document.fonts.ready` before printing. The output files belong in `public/`:

- `Dominion-Nwakanma-CV.pdf`
- `Dominion-Nwakanma-CV-Mobile.pdf`
- `Dominion-Nwakanma-CV-Product.pdf`

The two application emails, editable cover letters, matching PDF attachments and sending instructions are in `../application/`. Employer requirements and primary-source writing research are in `../research/application-research.md`.

After any CV change, regenerate its PDF and visually check every page. After metadata or asset changes, verify the built pages, download links and social previews before deploying.

## Deployment

The existing Vercel project is `dominionnwakanma-cv`; `.vercel/project.json` stores the local linkage and is not committed. Production serves `dominionnwakanma.cv`, `www.dominionnwakanma.cv` and `dominionnwakanma-cv.vercel.app`.

```sh
pnpm build
vercel --prod --yes
```

Keep private research and application working files outside `public/`. Application sending is a separate action from site deployment.
