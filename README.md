# site-a01

A work-in-progress portfolio site for showcasing my projects, with a retro, window-style look. Page text is in Portuguese and English.

## Project status

The site is in its early stages.

**Done:**

- Bilingual welcome page
- Dashboard layout with a project navigation bar
- About page with a placeholder for a portrait photo
- Tabuada project page, which embeds a site in a styled window

**Still to do:**

- Add the real Tabuada project to its page (the embed currently loads another website)
- Build the page for the second navigation item (`/dashboard/teste`), which doesn't exist yet
- Replace the default page title and description

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- React Icons

## Getting started

You need Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
