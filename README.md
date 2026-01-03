# Personal Website

A minimalist personal website built with Next.js (App Router) and Tailwind CSS.

## Features

- Clean, beige-themed design with lots of whitespace
- Responsive single-page layout
- Sections: Hero, Articles, Experiences, Resources, and Tools
- Floating photo cutout effect
- Dynamic tools section with categories and subcategories
- Smooth scroll navigation

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Replace placeholder images:**
   - Add your profile photo at `/public/profile.jpg`
   - Add a PNG cutout at `/public/me.png` (transparent background recommended)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Customization

### Adding Tools

Edit `/lib/toolsData.ts` to add new tools. Simply add to the `toolsData` array:

```typescript
{
  name: 'Your Tool',
  description: 'Description here',
  status: 'Planned', // or 'In progress' or 'Live'
  category: 'Your Category',
  subcategory: 'Optional Subcategory', // omit if not needed
  href: 'https://link-if-live.com', // optional
}
```

### Updating Content

- **Hero text**: Edit `/components/Hero.tsx`
- **Experiences**: Edit the `experiences` array in `/components/Experiences.tsx`
- **Resources**: Edit the `resources` array in `/components/Resources.tsx`
- **Articles**: Edit `/components/ArticlesCard.tsx`

### Design Tokens

Colors are defined in `/tailwind.config.mjs`:
- `background`: Main page background (#f5f2ea)
- `card`: Card backgrounds (#ebe7dc)
- `primary`: Main text color (#1a1a1a)
- `secondary`: Secondary text color (#6b6b6b)

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

