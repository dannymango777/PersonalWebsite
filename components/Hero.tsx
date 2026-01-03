import Image from 'next/image';
import { heroContent } from '@/lib/content';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-primary">
          {heroContent.headline}
        </h1>
        <p className="text-lg text-primary leading-relaxed">
          {heroContent.description}
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-lg bg-card">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
