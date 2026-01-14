# zwem.coach - Start to Crawl Vilvoorde

A modern, professional website for zwem.coach swimming programs in Vilvoorde, Belgium, built with Next.js 15, Tailwind CSS, and Stripe integration.

## Overview

This is the official website for zwem.coach, offering professional crawl swimming lessons and coaching in Vilvoorde, Belgium. The website is designed for Dutch-speaking audiences (nl_BE) and features coaches Pieter Timmers and Ward Pellegrims. The site provides comprehensive program information and enables online registration through Stripe Payment Links.

## Tech Stack

- **Framework:** Next.js 15 (App Router) with Turbopack
- **React:** React 19
- **Styling:** Tailwind CSS with ocean/athletic theme
- **Animations:** Framer Motion
- **Testing:** Playwright E2E tests
- **Code Formatting:** Prettier
- **Analytics:** Vercel Analytics & Speed Insights
- **Payment:** Stripe Payment Links
- **Language:** Dutch (nl_BE)

## Features

- 🎨 Modern, responsive one-page design
- 🌊 Ocean/athletic themed color palette
- ✨ Smooth animations with Framer Motion
- 💳 Stripe Payment Links integration for multiple groups
- 📱 Fully responsive for all devices
- 🧪 Comprehensive E2E tests with Playwright
- ⚡ Optimized for performance and SEO
- 🌍 Dutch language interface (nl_BE)
- 📄 Legal pages (Privacy Policy & Terms and Conditions)

## Installation

### Requirements

- Node.js 20 or higher
- npm or yarn

### Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd zwem.coach
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (see below)

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your Stripe Payment Links and video url:

```env
NEXT_PUBLIC_SITE_URL=https://www.zwem.coach
NEXT_PUBLIC_OG_IMAGE_URL=https://www.zwem.coach/og-image.jpg
NEXT_PUBLIC_STRIPE_MONDAY_2_LINK=https://buy.stripe.com/your-monday-link
NEXT_PUBLIC_STRIPE_WEDNESDAY_2_LINK=https://buy.stripe.com/your-wednesday-link
NEXT_PUBLIC_HERO_VIDEO_URL=https://your-vercel-blob-url.vercel-storage.com/your-video.mp4
```

## Scripts

```bash
# Development server (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Run E2E tests
npm run test:e2e

# Run E2E tests in headed mode
npm run test:e2e:headed

# Run E2E tests in UI mode
npm run test:e2e:ui
```

## Project Structure

```
zwem.coach/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout with fonts & analytics
│   │   ├── page.tsx                      # Homepage
│   │   ├── globals.css                   # Global styles
│   │   ├── privacybeleid/
│   │   │   └── page.tsx                  # Privacy policy page
│   │   └── algemene-voorwaarden/
│   │       └── page.tsx                  # Terms and conditions page
│   ├── components/
│   │   ├── CTAButton.tsx                 # CTA button with modal
│   │   ├── HeroSection.tsx               # Hero section
│   │   ├── ProgramSection.tsx            # Program information
│   │   ├── CoachesSection.tsx            # Coaches bios
│   │   ├── ScheduleSection.tsx           # Dates, times & location
│   │   ├── PricingSection.tsx            # Pricing & requirements
│   │   └── Footer.tsx                    # Footer with contact info
│   └── lib/
│       ├── legal-content.ts              # Legal content (terms & privacy)
│       └── site-config.ts                # Site configuration constants
├── tests/
│   └── homepage.spec.ts                  # E2E tests
├── public/                               # Static assets
├── tailwind.config.js                    # Tailwind configuration
├── playwright.config.ts                  # Playwright configuration
├── next.config.mjs                       # Next.js configuration
└── package.json                          # Dependencies
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and import your repository

3. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_STRIPE_MONDAY_2_LINK`
   - `NEXT_PUBLIC_STRIPE_WEDNESDAY_2_LINK`
   - `NEXT_PUBLIC_HERO_VIDEO_URL`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_OG_IMAGE_URL`

4. Deploy!

## Testing

The website includes comprehensive E2E tests for:

- ✅ Hero section and CTA functionality
- ✅ All content sections visibility
- ✅ Modal for group selection
- ✅ Responsive design on mobile
- ✅ Contact information
- ✅ Metadata and SEO
- ✅ Legal pages (Privacy Policy & Terms)

Run tests:

```bash
npm run test:e2e
```

## Styling & Design

The project uses an ocean/athletic theme:

- **Primary Color:** Deep ocean blue (#0369a1)
- **Secondary Color:** Coastal blue (#0ea5e9)
- **Accent Color:** Bright cyan (#06b6d4)
- **Fonts:** Inter (body text), Poppins (headings), Jua (hero branding)
- **Animations:** Framer Motion for smooth transitions

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- ⚡ Lighthouse Score: 95+
- 📦 Optimized bundle size
- 🖼️ Image optimization with Next.js
- 🚀 Fast page loads with Vercel Edge Network

## Support & Contact

For questions or issues about the website, create an issue in this GitHub repository.

## License

Copyright (c) 2026 zwem.coach (Ward Pellegrims CV)

All rights reserved.
