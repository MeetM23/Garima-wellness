# Garima Wellness Center — Website

A production-ready, mobile-first wellness brand website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Designed for Vercel deployment.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3 |
| Language | TypeScript |
| Font | Poppins (via `next/font/google`) |
| Deployment | Vercel |

---

## Project Structure

```
Website/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (font, metadata, global providers)
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles & typography classes
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # sitemap.xml generation
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── gallery/page.tsx
│   └── transformations/page.tsx
│
├── components/
│   ├── brand/
│   │   └── Logo.tsx        # Official brand logo component
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed top navigation with mobile drawer
│   │   └── Footer.tsx      # Footer with logo, links, WhatsApp
│   ├── sections/           # Page sections (Hero, Approach, Testimonials…)
│   └── ui/
│       └── WhatsAppFloatingButton.tsx
│
├── context/
│   └── LanguageContext.tsx # English / Gujarati toggle
│
├── data/
│   ├── siteData.ts         # Nav links, site config
│   ├── transformations.ts  # Transformation case study data
│   └── faq.ts              # FAQ accordion data
│
├── lib/
│   ├── constants.ts        # Shared constants (phone, WhatsApp URL, address)
│   └── utils.ts            # Utility helpers (cn, formatPhone, scrollToSection)
│
├── types/
│   └── index.ts            # Shared TypeScript types
│
├── public/
│   ├── images/
│   │   ├── brand/          # Logo files
│   │   └── transformations/# Before/after client images
│   └── favicon.png
│
├── tailwind.config.ts      # Brand tokens (primary, sage, ivory, terracotta, charcoal)
└── preview.html            # Standalone CDN preview (not production)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```powershell
# Windows PowerShell
npm.cmd run dev
# or allow scripts once:
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
npm run start
```

---

## Deployment (Vercel)

1. Push the project to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. No environment variables required for the base site.
5. Click **Deploy**.

> `robots.txt` and `sitemap.xml` are auto-generated at build time. Update the `baseUrl` in `app/sitemap.ts` to match your production domain before deploying.

---

## Brand Assets

| Asset | Path |
|---|---|
| Primary logo (transparent) | `public/images/brand/garima-logo-transparent.png` |
| Favicon | `public/favicon.png` |

---

## WhatsApp Integration

All WhatsApp links point to:

```
https://wa.me/919913662102?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20wellness%20programs.
```

Update `lib/constants.ts` to change the number or message.

---

## Typography System

All typography uses **Poppins** loaded via `next/font/google`. Global utility classes are defined in `app/globals.css`:

| Class | Usage |
|---|---|
| `.heading-hero` | Hero H1 |
| `.heading-section` | Section H2 |
| `.heading-card` | Card titles |
| `.text-subtitle` | Lead / subtitle text |
| `.text-body` | Body paragraphs |
| `.text-label` | Small labels, tags |
| `.btn-primary` | Primary CTA button |
| `.btn-secondary` | Secondary outline button |

---

## License

Private — Garima Wellness Center. All rights reserved.
