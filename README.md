# Daniel Mangasarian - Personal Website

A minimalist, professional personal website built with [Next.js](https://nextjs.org/) (App Router) and [Tailwind CSS](https://tailwindcss.com/).

**Live:** [https://danielmangasarian.com](https://danielmangasarian.com)

## Overview

This website showcases professional experience, education, published papers, articles, and tools/projects. It features a clean, newspaper-inspired design with a warm beige and navy color scheme.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Single Content File** - Update all website text in one place (`lib/content.ts`)
- **Dark Theme** - Navy background with warm tan typography
- **Dynamic Tools Section** - Organized by category with collapsible interface
- **SEO Optimized** - Metadata, semantic HTML, and fast performance

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Hosting:** (Ready for Vercel, Netlify, or any Node.js host)

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

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Production Build

```bash
npm run build
npm start
```

## Customization Guide

### Update All Website Content

**File:** `lib/content.ts`

This single file contains all text on your website. Edit the sections below:

#### Site Metadata
```typescript
export const siteMetadata = {
  name: 'Your Name',
  title: 'Your Headline',
  description: 'Short description',
};
```

#### Hero Section
```typescript
export const heroContent = {
  headline: 'Engineer, researcher, developer.',
  description: 'Your bio and description...',
};
```

#### Work Experience
```typescript
export const experiences = [
  {
    role: 'Your Role',
    organization: 'Company Name',
    period: '2024 - Present',
  },
  // Add more roles...
];
```

#### Education
```typescript
export const education = [
  {
    degree: 'Degree Name',
    institution: 'University',
    period: '2021 - Present',
    details: 'GPA, honors, etc.',
  },
  // Add more degrees...
];
```

#### Published Papers
```typescript
export const publishedPapers = [
  {
    title: 'Paper Title',
    authors: 'You, et al.',
    journal: 'Journal Name',
    year: '2024',
    doi: 'https://doi-link',
  },
  // Add more papers...
];
```

#### Articles
```typescript
export const articles = {
  featured: {
    title: 'Featured Article Title',
    description: 'Article description...',
    date: 'Dec 2025',
    link: 'https://article-link',
  },
  seeAllLink: 'https://blog-url',
};
```

#### Resources & Connect
```typescript
export const resources = [
  {
    icon: '📄',
    label: 'Resume',
    href: 'https://resume-link',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
  },
  // Add more links (email, GitHub, portfolio, etc.)
];
```

#### Tools / Projects
```typescript
export const toolsData = [
  {
    name: 'Tool Name',
    description: 'What it does.',
    status: 'Planned', // or 'In progress' or 'Live'
    category: 'Category Name',
    subcategory: 'Optional Subcategory',
    href: 'https://tool-link', // Optional - omit if not live
  },
  // Add more tools...
];
```

#### Footer
```typescript
export const footerContent = {
  copyrightName: 'Your Name',
  links: [
    { label: 'LinkedIn', href: 'https://...' },
    { label: 'GitHub', href: 'https://...' },
    { label: 'Email', href: 'mailto:your@email.com' },
  ],
};
```

### Update Profile Photos

**Profile Photo (Hero Section):**
- Replace `/public/profile.jpg` with your photo (recommended: 800x1000px)

**Floating Cutout Photo:**
- Replace `/public/me.png` with a PNG with transparent background (recommended: 400x400px)

**Browser Tab Icon (Favicon):**
- Edit `/public/favicon.svg` to customize the "DM" initials or add your logo

### Connect Custom Domain

1. **Update `app/layout.tsx` metadata:**
   ```typescript
   export const metadata: Metadata = {
     title: 'Daniel Mangasarian',
     description: 'Your description',
     metadataBase: new URL('https://danielmangasarian.com'),
   };
   ```

2. **Point Your Domain:**
   - **Vercel:** Add domain in Vercel Dashboard → Settings → Domains
   - **Netlify:** Add domain in Site Settings → Domain Management
   - Update DNS records with your domain registrar

3. **SSL Certificate:** Automatically provided by most hosting platforms

### Customize Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  background: '#323a43',  // Navy background
  card: '#ebe7dc',        // Tan card background
  primary: '#d4cfc0',     // Light tan text
  secondary: '#a89f94',   // Muted tan text
}
```

### Adjust Typography

The site uses a serif "newsreader" font (Georgia/Garamond). To change:

1. Edit `tailwind.config.mjs` fontFamily
2. Modify `app/layout.tsx` className

## File Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout, metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Tailwind imports
├── components/             # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── FloatingPhoto.tsx
│   ├── Experiences.tsx
│   ├── Education.tsx
│   ├── PublishedPapers.tsx
│   ├── ArticlesCard.tsx
│   ├── Resources.tsx
│   ├── ToolsSection.tsx
│   └── Footer.tsx
├── lib/
│   └── content.ts          # ALL WEBSITE TEXT & DATA
├── public/
│   ├── favicon.svg         # Browser tab icon
│   ├── profile.jpg         # Hero photo
│   └── me.png              # Floating cutout
├── tailwind.config.mjs     # Tailwind configuration
├── tsconfig.json
├── next.config.ts
└── package.json
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live in seconds with automatic deployments on git push.

### Netlify

```bash
npm run build
```

Connect your GitHub repo for automatic deployment on every push.

### Self-Hosted

```bash
npm run build
npm start
```

Deploy to any Node.js hosting (AWS, DigitalOcean, Heroku, etc.).

## Performance

- **Fast Rendering:** Next.js server-side rendering and static generation
- **Optimized Images:** Next.js Image component with automatic optimization
- **Minimal CSS:** Only necessary Tailwind classes compiled
- **SEO Ready:** Metadata, semantic HTML, Open Graph tags

## License

Personal website - all rights reserved to Daniel Mangasarian.

---

**Built with ❤️ using Next.js**
