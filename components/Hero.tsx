import { heroContent } from '@/lib/content';

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl">
        {/* Greeting */}
        <h1 className="text-4xl md:text-5xl font-serif italic mb-8 text-primary">
          {heroContent.greeting}
        </h1>

        {/* Bio paragraph with inline badge links */}
        <p className="text-lg md:text-xl text-secondary leading-relaxed mb-12">
          {heroContent.bio}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-card border border-border text-primary hover:border-secondary transition-colors">
            <span>{heroContent.badges[0].icon}</span>
            <a 
              href={heroContent.badges[0].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {heroContent.badges[0].name}
            </a>
          </span>
          {heroContent.bioMiddle}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-card border border-border text-primary hover:border-secondary transition-colors">
            <span>{heroContent.badges[1].icon}</span>
            <a 
              href={heroContent.badges[1].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {heroContent.badges[1].name}
            </a>
          </span>
          {heroContent.bioEnd}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-card border border-border text-primary hover:border-secondary transition-colors">
            <span>{heroContent.badges[2].icon}</span>
            <a 
              href={heroContent.badges[2].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {heroContent.badges[2].name}
            </a>
          </span>
          .
        </p>

        {/* Bottom links with arrows */}
        <div className="flex flex-wrap gap-6">
          {heroContent.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-1 text-secondary hover:text-primary transition-colors"
            >
              <span>↗</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
