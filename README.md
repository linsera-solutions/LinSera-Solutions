# LinSera Solutions — V2 Redesign

> **Technology That Solves Real Problems.**  
> Official corporate website and digital platform for **LinSera Solutions** — built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

🌐 **Live Deployment**: [https://lin-sera-solution.vercel.app/](https://lin-sera-solution.vercel.app/)

---

## 🚀 Overview

LinSera Solutions is a technology company focused on AI, software engineering, web applications, and digital growth solutions built around real business challenges.

This repository contains the V2 brand, UI/UX, and visual system redesign of LinSera Solutions — engineered for high performance, visual credibility, full accessibility, and modern responsive design.

---

## ✨ Key Features & V2 Visual System

- **Official Brand Integration**: Seamless integration of the real LinSera Solutions logo across Navbar, Footer, OG meta branding, and browser branding.
- **Deliberate Visual Rhythm**: Purposeful section-by-section color contrast utilizing a curated LinSera palette:
  - `Deep Navy` (`#07111F`) & `Midnight` (`#0B1630`)
  - `Primary Blue` (`#2563EB`) & `Electric Blue` (`#3B82F6`)
  - `Soft Blue` (`#EAF2FF`) & `Cool Gray` (`#F4F7FB`)
- **LinSera Technology Visual Pipeline**: Custom technology flow visualization communicating:  
  `Problem → Research → Strategy → Engineering → Solution`
- **Editorial Layout System**: Replaced card dependency with typography-led asymmetric layouts, dividers, and compact principle lists.
- **Connected Process Timeline**: Connected step-by-step engineering timeline (horizontal on desktop, vertical on mobile) on Deep Navy.
- **Engineering Stack Presentation**: Capability presentation for Frontend, Backend, Data, Engineering, and AI/ML capabilities.
- **Honest Project Case Studies**: Transparent project presentation with type distinction (*Research Project*, *Internal Product*, *Client Project*) without fabricated client claims.
- **Accessibility & Performance**: Built with semantic HTML5, skip-to-content links, `prefers-reduced-motion` support, keyboard focus indicators, and 100% static page generation.

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, SSG) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Library** | [React 18](https://react.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **Typography** | [Inter](https://fonts.google.com/specimen/Inter) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) |

---

## 📁 Project Architecture

```text
linsera-solutions/
├── public/
│   └── images/
│       └── brand/
│           └── linsera-logo.png       # Official LinSera logo
├── src/
│   ├── app/
│   │   ├── about/                     # About page route
│   │   ├── contact/                   # Contact page route
│   │   ├── services/                  # Services page route
│   │   ├── work/                      # Work & case studies routes
│   │   │   └── [slug]/                # Dynamic case study page
│   │   ├── globals.css                # Custom global styles & layer utilities
│   │   ├── layout.tsx                 # Root layout, metadata & viewport
│   │   ├── page.tsx                   # Homepage route
│   │   ├── robots.ts                  # SEO Robots configuration
│   │   └── sitemap.ts                 # Dynamic Sitemap generation
│   ├── components/
│   │   ├── about/                     # About page components (CompanyStory, MissionVision, Values, Team)
│   │   ├── contact/                   # Contact page components (ContactForm)
│   │   ├── home/                      # Homepage components (Hero, ProblemSection, Solutions, WhyLinsera, Process, Technologies, FeaturedWork, ProductHighlight, TeamPreview, CTA)
│   │   ├── layout/                    # Layout components (Navbar, MobileMenu, Footer)
│   │   ├── services/                  # Services components (AISection, SoftwareSection, WebSection, DigitalSection, ServiceDetail)
│   │   ├── ui/                        # Reusable UI primitives (Container, Button, Badge, AnimatedSection, SectionHeading)
│   │   └── work/                      # Work components (ProjectCard, CaseStudy)
│   ├── data/                          # Truthful data files (projects, services, team, technologies)
│   ├── lib/                           # Utility functions & constants
│   └── types/                         # TypeScript interfaces (Project, Service, TeamMember)
├── tailwind.config.ts                 # V2 design tokens & color palette
├── next.config.mjs                    # Next.js configuration
└── package.json
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### 1. Clone the repository

```bash
git clone https://github.com/laiba09Saleem/LinSera_Solution.git
cd LinSera_Solution
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application locally.

### 4. Build for production

To test the optimized production build locally:

```bash
npm run build
npm run start
```

---

## 📑 Pages & Navigation

- **Home (`/`)**: Hero visualization, Problem section, Solutions, Philosophy, Process timeline, Technologies, Featured work, Product highlight, Team preview, and CTA.
- **About (`/about`)**: Company story (*Why We Exist*), Mission & Vision, Core Values, and Team leadership.
- **Services (`/services`)**: In-depth breakdowns of AI Solutions, Software Development, Web Solutions, and Digital Growth capabilities.
- **Work (`/work`)**: Project directory with individual case studies (`/work/[slug]`).
- **Contact (`/contact`)**: Project inquiry form with client-side validation, error handling, and accessible status messages.

---

## 📬 Contact & Connect

- **Website**: [https://lin-sera-solution.vercel.app/](https://lin-sera-solution.vercel.app/)
- **Email**: [linsera.solutions@gmail.com](mailto:linsera.solutions@gmail.com)
- **LinkedIn**: [LinSera Solutions on LinkedIn](https://www.linkedin.com/company/linsera-solutions)

---

© 2026 **LinSera Solutions**. All rights reserved.  
*Technology That Solves Real Problems.*
