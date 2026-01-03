'use client';

import { siteMetadata } from '@/lib/content';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold text-primary">{siteMetadata.name}</div>
        <nav className="flex gap-6 md:gap-8 text-base">
          <button
            onClick={() => scrollToSection('experiences')}
            className="text-secondary hover:text-primary transition-colors"
          >
            Experiences
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-secondary hover:text-primary transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('papers')}
            className="text-secondary hover:text-primary transition-colors"
          >
            Papers
          </button>
          <button
            onClick={() => scrollToSection('articles')}
            className="text-secondary hover:text-primary transition-colors"
          >
            Articles
          </button>
          <button
            onClick={() => scrollToSection('resources')}
            className="text-secondary hover:text-primary transition-colors"
          >
            Resources
          </button>
          <button
            onClick={() => scrollToSection('tools')}
            className="text-secondary hover:text-primary transition-colors"
          >
            Tools
          </button>
        </nav>
      </div>
    </header>
  );
}
