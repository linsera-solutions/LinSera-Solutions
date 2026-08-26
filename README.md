# LinSera Solutions — Official Platform

> **Technology That Solves Real Problems.**  
> Official corporate website and engineering platform for **LinSera Solutions** — built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Resend transactional email integration.

🌐 **Live Deployment**: [https://lin-sera-solution.vercel.app/](https://lin-sera-solution.vercel.app/)

---

## 🦅 About LinSera Solutions

LinSera Solutions is a technology firm specializing in practical **AI & Intelligent Systems**, **Software Development**, **Web Solutions**, and **Digital Growth Solutions**. We partner with businesses, emerging ventures, and research initiatives to transform complex operational challenges into scalable, high-performance software.

Our philosophy is simple: **We build technology around real business problems — grounded in research, clarity, and sound engineering standards.**

---

## ✨ Key Platform Highlights & Architecture

- **Official Brand System**: Native integration of the LinSera Solutions logo, custom SVG bird favicon (`/icon.svg`), and cohesive Open Graph social sharing metadata.
- **Editorial Visual Design**: High-contrast corporate palette utilizing Deep Navy (`#07111F`), Midnight (`#0B1630`), Primary Blue (`#2563EB`), Soft Blue (`#EAF2FF`), and Cool Gray (`#F4F7FB`).
- **Interactive Technology Visual**: Custom interactive engineering pipeline diagram (`Problem → Research → Strategy → Engineering → Solution`).
- **Connected Process Roadmap**: Step-by-step 7-stage engineering methodology (`Discover`, `Research`, `Strategize`, `Design`, `Build`, `Test & Launch`, `Evolve`).
- **Secure Transactional Contact API**:
  - Server-side Resend API email delivery targeting `linsera.solutions@gmail.com`.
  - In-memory sliding window IP rate limiting (5 requests per 10 minutes per IP).
  - Honeypot anti-spam protection (`_gotcha` field).
  - Multi-tier client and server-side input validation.
- **Transparent Case Studies**: Authentic project tracking (*Research Project*, *Internal Product*, *Client Project*) with zero fabricated statistics, fake revenue claims, or placeholder testimonials.
- **Technical SEO & Accessibility**:
  - Automatic dynamic Sitemap (`/sitemap.xml`) and Robots (`/robots.txt`) routes.
  - Canonical URLs powered by `NEXT_PUBLIC_SITE_URL`.
  - 100% WCAG-compliant keyboard focus navigation, ARIA attributes, skip-to-content links, and semantic HTML5.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
|----------|------------|-------------|
| **Framework** | [Next.js 14](https://nextjs.org/) | App Router, Static Site Generation (SSG) & Dynamic API Routes |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type safety across components, data, and API payloads |
| **UI Library** | [React 18](https://react.dev/) | Modular, server and client component architecture |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Curated visual design system & custom design tokens |
| **Email Service** | [Resend API](https://resend.com/) | Transactional email delivery with HTML email templates |
| **Typography** | [Inter](https://fonts.google.com/specimen/Inter) | Google Fonts optimized web typography |
| **Deployment** | [Vercel](https://vercel.com/) | Global edge network & continuous integration |

---

## 📁 Repository Directory Structure

```text
linsera-solutions/
├── public/
│   └── images/
│       ├── brand/
│       │   └── linsera-logo.png       # Official LinSera Solutions logo asset
│       └── icons/
│           └── favicon.svg            # LinSera bird emblem vector favicon
├── src/
│   ├── app/
│   │   ├── about/                     # About page route & metadata
│   │   ├── api/
│   │   │   └── contact/               # Contact submission API route (Resend + Rate Limit)
│   │   ├── contact/                   # Contact page route & form container
│   │   ├── services/                  # Capabilities & services route
│   │   ├── work/                      # Project directory & case study routes
│   │   │   └── [slug]/                # Dynamic case study viewer
│   │   ├── globals.css                # Global CSS utilities & design variables
│   │   ├── icon.svg                    # Dynamic SVG favicon handler
│   │   ├── layout.tsx                 # Root layout, metadata & viewport config
│   │   ├── not-found.tsx              # Custom branded 404 error page
│   │   ├── page.tsx                   # Homepage route
│   │   ├── robots.ts                  # Technical SEO robots.txt generator
│   │   └── sitemap.ts                 # Dynamic sitemap.xml generator
│   ├── components/
│   │   ├── about/                     # About sections (CompanyStory, MissionVision, Values, Team)
│   │   ├── contact/                   # Contact form & feedback handling
│   │   ├── home/                      # Homepage sections (Hero, Problem, Solutions, Process, etc.)
│   │   ├── layout/                    # Layout primitives (Navbar, MobileMenu, Footer)
│   │   ├── services/                  # Detailed service breakdown views
│   │   ├── ui/                        # Reusable primitives (Button, Container, SectionHeading)
│   │   └── work/                      # Case study components & project cards
│   ├── data/                          # Data sources (projects, services, team, technologies)
│   ├── lib/                           # Utility functions & global constants
│   └── types/                         # TypeScript interface definitions
├── .env.example                       # Environment configuration template
├── tailwind.config.ts                 # Design tokens & color palette
├── next.config.mjs                    # Next.js build configuration
├── tsconfig.json                      # Strict TypeScript configuration
└── package.json                       # Dependencies & project scripts
```

---

## 🔑 Environment Variables Configuration

Create a `.env.local` file in the root directory for local development:

```env
# Transactional Email Service (Resend)
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=linsera.solutions@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev

# Production Base URL
NEXT_PUBLIC_SITE_URL=https://lin-sera-solution.vercel.app
```

> [!IMPORTANT]
> `RESEND_API_KEY` is referenced strictly server-side inside `src/app/api/contact/route.ts` and is never bundled into client-side JavaScript.

---

## 🚦 Getting Started Locally

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 1. Clone Repository

```bash
git clone https://github.com/laiba09Saleem/LinSera_Solution.git
cd LinSera_Solution
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Production Build Verification

To run TypeScript type-checks and verify the static production build:

```bash
# Type Check
npx tsc --noEmit

# Production Build
npm run build

# Start Production Server Locally
npm run start
```

---

## 📬 Company Leadership & Contact

- **Website**: [https://lin-sera-solution.vercel.app/](https://lin-sera-solution.vercel.app/)
- **Inquiries**: [linsera.solutions@gmail.com](mailto:linsera.solutions@gmail.com)
- **LinkedIn**: [LinSera Solutions on LinkedIn](https://www.linkedin.com/company/linsera-solutions)

**Core Team**:
- **Laiba Saleem** — Founder & Full-Stack / AI Engineer
- **Muhammad Awais** — Co-Founder — Frontend & SEO
- **Nida Karamat** — Frontend Developer

---

© 2026 **LinSera Solutions**. All rights reserved.  
*Technology That Solves Real Problems.*
