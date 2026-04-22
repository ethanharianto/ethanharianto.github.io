# ethanharianto.com

Personal portfolio and writing site. Built with Next.js 16 (App Router) and
Tailwind CSS v4, deployed on Vercel.

- **Live**: `https://ethanharianto.vercel.app` (custom domain in progress)
- **Résumé**: [`/Ethan_Harianto_Resume.pdf`](public/Ethan_Harianto_Resume.pdf)
- **Email**: `eharianto@stanford.edu`

## Stack

- **Framework**: Next.js 16 · React 19 · TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first tokens via `@theme`)
- **Motion**: Framer Motion · Lenis smooth scroll
- **Content**: MDX (via `next-mdx-remote`) with `gray-matter` frontmatter and
  `rehype-pretty-code` for syntax highlighting
- **Fonts**: Geist Sans / Geist Mono via `geist` package (self-hosted)
- **Commands**: `cmdk` command palette
- **OG images**: dynamic via `next/og`
- **Deploy**: Vercel

## Structure

```
app/              App Router pages + route-level metadata/OG
components/       UI (chrome, brand, home, work, mdx, ui primitives)
content/          MDX sources
  work/           Case studies (one file per study)
  writing/        Essays and notes
lib/              Typed content loaders, site config, project metadata
public/           Static assets (résumé, previews)
```

## Local development

```bash
npm install
npm run dev           # http://localhost:3000
npm run build         # Production build
npm run typecheck     # Strict TypeScript check
```

## Authoring

- **New case study**: add `content/work/<slug>.mdx` with frontmatter (`title`,
  `description`, `role`, `year`, `stack`, optional `metrics`, `projectSlug`).
  Add a matching entry in `lib/projects.ts` with the same `slug` so the card
  links into the case study.
- **New essay**: add `content/writing/<slug>.mdx` with frontmatter (`title`,
  `description`, `date`). Optional: `tags`, `draft: true` to hide.
- **Now / Uses / CV**: edit `app/now/page.tsx`, `app/uses/page.tsx`,
  `app/cv/page.tsx` respectively.

MDX components available in-content: `<Metric>`, `<Pullquote>`, `<Gallery>`,
`<Kicker>`. See `components/mdx/MdxComponents.tsx`.

## Deployment

The project is configured for Vercel (`vercel.json`). To link and deploy:

```bash
npx vercel link
npx vercel --prod
```

Push to `main` → Vercel builds and deploys production. Every branch and PR
gets a preview URL.

## Contact

- Email: `eharianto@stanford.edu`
- GitHub: `github.com/ethanharianto`
- LinkedIn: `linkedin.com/in/ethan-harianto`
