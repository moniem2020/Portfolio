# Moniem Ghazal - AI & Automation Portfolio

> A production-ready Next.js portfolio for AI automation engineers, designed to launch quickly with polished visuals, interactive storytelling, and content geared toward high-impact client work.

## Why This Repo Exists
- Open-source starter: clone or fork to ship a credible personal brand in hours, not weeks.
- Story-first design: dynamic hero modules, animated stats, and reveal-on-scroll sections keep the narrative engaging.
- Automation-focused messaging: copy and structure tailor-made for consultants and builders in the AI and automation space.

## Highlights
- Interactive hero with persona toggles, animated tech marquee, and floating gradients.
- Modular section components for focus areas, project highlights, and call-to-action blocks.
- TypeScript, Tailwind CSS, and component-level motion utilities for a modern developer experience.
- Fully responsive layout, tuned for high-density content without sacrificing readability.

## Clone & Install
```bash
git clone https://github.com/moniem2020/Portfolio.git
cd Portfolio
npm install
```
If you plan to customize it publicly, fork the repo first and clone your fork instead.

## Getting Started
```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```
Visit http://localhost:3000 to preview, and edit the content in portfolio/app/page.tsx or the supporting portfolio/data files to personalize the copy.

## Customize Fast
- Hero personas: update the profile cards in portfolio/app/page.tsx to match your roles, metrics, and proof points.
- Projects: curate entries in portfolio/data/projects.ts to showcase client work or experiments.
- Branding: adjust color tokens and gradients via Tailwind classes directly in the JSX.
- Animations: tweak timing or easing in the inline @keyframes definitions at the bottom of portfolio/app/page.tsx.

## Deployment
This site ships cleanly to any platform that supports Node.js builds. Common options:
- Vercel: zero-config deployments, preview URLs, and image optimization out of the box.
- Netlify: configure npm run build as the build command and out as the publish directory.

Before deploying, run a production build to catch TypeScript or ESLint issues:
```bash
npm run lint
npm run build
```

## Tech Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Custom motion components (AnimatedText, Reveal) for staggered reveals and text animations

## Contributing
Issues and pull requests are welcome. If you extend the starter with new components, templates, or deployment guides, feel free to open a PR so others can benefit.

## License
No explicit license is included yet. If you plan to reuse this template publicly, add the license that matches your use case or reach out to discuss.

---
Maintained by Moniem Ghazal (moniemghazal@gmail.com). If this saves you time, consider starring the repo or sharing it with another builder.
