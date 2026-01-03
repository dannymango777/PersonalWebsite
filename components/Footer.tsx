import { footerContent } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 py-12 border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-secondary">
            © {currentYear} {footerContent.copyrightName}. All rights reserved.
          </p>
          <nav className="flex gap-6 text-base">
            {footerContent.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
