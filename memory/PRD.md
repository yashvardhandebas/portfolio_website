# Yashvardhan Debas — Portfolio Website (PRD)

## Original problem statement
Modern, premium, minimalistic personal portfolio for Yashvardhan Debas (IT student — UI/UX × Front-End × ML × Data Analytics). Design inspired by Hostinger portfolio template but with own identity (Apple / Framer / Linear / Notion vibe). Dark theme, editorial typography, Framer Motion micro-interactions.

## User choices (verbatim)
- No backend — frontend only
- Provide project images (currently editorial SVG covers)
- Provided photo (face.img) and resume PDF
- Dark background, developer's colour choice
- React (not Next.js)

## Architecture
- **Frontend**: React 19 (CRA + craco), Tailwind, Framer Motion, Shadcn Dialog, sonner, lucide-react
- **Data**: `/app/frontend/src/lib/data.js` (single source of truth)
- **No backend**; contact form uses `mailto:` handoff
- **Assets**: Resume + photo hosted on Emergent public asset CDN

## Design system
- Theme: "Editorial Tech" dark charcoal (#0A0A0A / #121212 / #1A1A1A)
- Accent: Molten Orange (#FF4D00) — deliberately avoided AI-slop purple/blue
- Type: Playfair Display (headings, italics) + Manrope (body) + JetBrains Mono (data/eyebrows)
- Motion: staggered fade-up, scroll reveal (whileInView), cursor-follow spotlight cards, marquee, portrait grayscale-to-color hover

## Sections implemented (Dec 2025)
- Sticky blur navigation (desktop + mobile)
- Hero (asymmetric split, editorial portrait, floating meta badges)
- About (bento layout + 4 stat cards)
- Selected Work (6 projects, editorial SVG covers, Shadcn Dialog modal with outcomes/stack/GitHub)
- Experience (vertical timeline — Infinite Computer Solutions, To The New)
- Skills (4 grouped pill grids + marquee band)
- Resume (PDF preview + View/Download CTAs)
- Certifications (4 items with icon cards)
- Leadership (CodeChef-VIT + impact card)
- Contact (form → mailto handoff, sonner toasts, socials)
- Footer (back-to-top)

## Testing
- Testing agent iteration_1: 100% frontend pass (nav, modal, contact toast, mobile menu, footer scroll).

## Prioritized backlog
- **P0**: Replace editorial SVG project covers with real project screenshots when user provides them
- **P1**: Wire contact form to a real submission (Resend/Formspree) so recruiters don't need a mail client
- **P1**: Add project detail pages (dedicated route per case study for SEO)
- **P2**: Add blog / writing section
- **P2**: OG image + rich SEO meta / sitemap
- **P2**: Lenis / smooth-scroll library for buttery scrolling (currently native `scroll-behavior: smooth`)
- **P2**: Add UI/UX case-study section (Figma embeds)
