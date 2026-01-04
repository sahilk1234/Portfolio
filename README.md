# Portfolio

Personal portfolio built with Next.js 15, React 19, Tailwind CSS v4, and Resend for the contact
form.

## Features

- Responsive layout with theme tokens in `src/app/globals.css`
- Data-driven sections for projects, testimonials, experience, and skills
- Server action contact form via Resend

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
```

## Content & Data

- `content/projects/*.json` for project cards (see `src/lib/types.d.ts`)
- `content/testimonials/testimonial.json` for recommendations
- `src/appData/index.ts` for services, experience, skills, and footer links
- `src/components` for UI sections and cards

## Updating Skills

Skills are grouped in `skillGroups` inside `src/appData/index.ts`:

```ts
export const skillGroups = [
  { title: "Frontend & Mobile", items: ["React", "Next.js"] },
  { title: "Backend & APIs", items: ["Node.js", "NestJS"] },
];
```

## Contact Form

- Update the recipient email in `src/actions/contact-form.ts`.
- Resend requires a verified domain for production delivery.

## Images

If you use remote images, add the hostnames in `next.config.ts`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
