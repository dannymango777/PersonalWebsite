# Daniel Mangasarian - Personal Website

A minimalist, professional personal website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

**Live:** [https://danielmangasarian.com](https://danielmangasarian.com)

## Overview

This website showcases professional experience with inline badge links, external links, and a collapsible tools section. It features a sophisticated navy blue and tan color scheme with smooth animations.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Single Content File** - Update all website text in one place (`src/config.ts`)
- **Navy & Tan Theme** - Navy blue background (#1a2332) with tan text (#d4c4a8)
- **Smooth Animations** - Buttery smooth collapsible sections with CSS transitions
- **Inline Badge Links** - Clickable badges with organization logos
- **Resume Access Control** - Protected resume with phone notification approval
- **SEO Optimized** - Metadata, semantic HTML, sitemap generation
- **Weekly Dependabot Updates** - Automated dependency management

## Tech Stack

- **Framework:** Astro 5.3
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript 5.7
- **Hosting:** Ready for Vercel, Netlify, Cloudflare Pages, or GitHub Pages

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/dannymango777/PersonalWebsite.git
cd PersonalWebsite
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see your site.

### Production Build

```bash
npm run build
npm run preview
```

## Customization Guide

### Update All Website Content

**File:** `src/config.ts`

This single file contains all text on your website. Edit the sections below:

#### Site Configuration
```typescript
export const siteConfig = {
  title: "Your Name",
  description: "Your headline and description",
  author: "Your Name",
  url: "https://yourwebsite.com",
  themeColor: "#1a2332", // navy blue
};
```

#### Personal Configuration
```typescript
export const personalConfig = {
  name: "yourname",
  emoji: "👋",
  // Use [text](url) syntax for inline badge links
  description: `
  I currently work as a Role at [Organization](https://org.com/). 
  I previously worked at [Company](https://company.com/) as a Title.
  
  I'm currently studying Subject at [University](https://university.edu/).`,
  
  // Bottom links - Easy to reorder/add/remove
  externalLinks: [
    { href: "/resume-access", text: "resume" },  // Protected resume
    { href: "https://linkedin.com/in/yourprofile/", text: "linkedin" },
    { href: "https://github.com/yourusername", text: "github" },
    { href: "mailto:your@email.com", text: "email" },
  ],
};
```

#### Tools Section
```typescript
export const toolsConfig = {
  enabled: true,  // Toggle entire section on/off
  heading: "Tools",
  description: "Useful web apps and utilities I'm building.",
  categories: [
    {
      name: "Category Name",
      description: "Category description",
      subcategories: [
        {
          name: "Subcategory Name",
          tools: [
            { name: "Tool Name", description: "What it does", status: "Planned" },
            { name: "Another Tool", description: "What it does", status: "Live" },
          ]
        }
      ]
    },
    {
      name: "Another Category",
      description: "Description",
      tools: [
        { name: "Tool Name", description: "What it does", status: "In Progress" },
      ]
    }
  ]
};
```

#### Resume Access Control
```typescript
export const resumeConfig = {
  enabled: true,  // Toggle protection on/off
  pdfPath: "/resume.pdf",
  notificationTopic: "your-unique-secret-topic-12345",  // ntfy.sh topic
  timeoutMinutes: 5,
  messages: {
    requesting: "Requesting access from owner...",
    approved: "Access granted! Loading resume...",
    denied: "Access was denied.",
    timeout: "Request timed out. Please try again.",
  }
};
```

**Important:** See `RESUME_ACCESS_NOTES.md` for production implementation details.

### Add/Update Logos

Place logo SVG files in `src/assets/logos/` with the organization name (no spaces):
- `CalSol.astro`
- `Ferrari.astro`
- `UniversityofCaliforniaBerkeley.astro`

The logo name should match the text in brackets from your description (spaces and commas removed).

### Update Favicon

Replace `/public/favicon.svg` with your logo or initials.

### Update Font

The site uses the Geist font. To change:
1. Replace `/public/fonts/Geist.woff2` with your font
2. Update `src/styles/globals.css` @font-face and theme definitions

## File Structure

```
.
├── .github/
│   ├── dependabot.yml          # Weekly npm updates
│   └── workflows/              # Optional CI/CD
├── public/
│   ├── fonts/Geist.woff2       # Web font
│   ├── favicon.svg             # Browser icon
│   └── resume.pdf              # Your resume (if using)
├── src/
│   ├── assets/
│   │   ├── External.astro      # Arrow icon for external links
│   │   └── logos/              # Organization logos
│   ├── components/
│   │   ├── Badge.astro         # Inline clickable badge links
│   │   ├── ExternalLink.astro  # Bottom links with arrow
│   │   └── ToolsSection.astro  # Collapsible tools
│   ├── layouts/
│   │   └── Layout.astro        # Main HTML layout
│   ├── lib/
│   │   └── utils.ts            # parseDescription utility
│   ├── pages/
│   │   ├── index.astro         # Main homepage
│   │   ├── 404.astro           # 404 page
│   │   ├── resume-access.astro # Resume request page
│   │   └── api/                # API routes
│   ├── styles/
│   │   └── globals.css         # Global styles + Tailwind
│   └── config.ts               # ALL EDITABLE CONTENT
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
└── tailwind.config.mjs         # Tailwind config
```

## Color Customization

The custom navy and tan color scheme is defined directly in components and layouts:

- **Background:** `#1a2332` (navy blue)
- **Text:** `#d4c4a8` (tan/cream)
- **Muted text:** `#a89884` (light brown)
- **Badge background:** `#243041` (darker navy)
- **Badge border:** `#2a3b52` (subtle navy)

To change colors, update the Tailwind classes in:
- `src/layouts/Layout.astro`
- `src/components/Badge.astro`
- `src/components/ExternalLink.astro`
- `src/components/ToolsSection.astro`
- `src/pages/index.astro`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Vercel will auto-detect Astro and configure everything.

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Cloudflare Pages

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Build output directory: `dist`

### GitHub Pages

See Astro documentation for GitHub Pages deployment.

## Resume Access Control

The resume access control system sends notifications to your phone when someone requests access. See `RESUME_ACCESS_NOTES.md` for:

- Production implementation guide
- Server-side validation setup
- KV store integration
- Security recommendations
- Cost considerations

**Current implementation uses localStorage (demo only) - upgrade to server-side for production use.**

## Performance

- **Lightning Fast:** Astro generates static HTML at build time
- **Zero JS by Default:** Only ships JavaScript when needed
- **Optimized Images:** Automatic image optimization
- **SEO Ready:** Metadata, sitemap, semantic HTML
- **Smooth Animations:** CSS-only transitions (no JS)

## Weekly Maintenance

Dependabot is configured to automatically open PRs for npm dependency updates every week. Review and merge these PRs to keep your site secure and up-to-date.

## License

Personal website - all rights reserved to Daniel Mangasarian.

---

**Built with ❤️ using Astro**
