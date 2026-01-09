import Hero from '@/components/Hero';
import ToolsSection from '@/components/ToolsSection';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-12">
      <Hero />
      <ToolsSection />
    </main>
  );
}
