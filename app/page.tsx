import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FloatingPhoto from '@/components/FloatingPhoto';
import Experiences from '@/components/Experiences';
import Education from '@/components/Education';
import PublishedPapers from '@/components/PublishedPapers';
import ArticlesCard from '@/components/ArticlesCard';
import Resources from '@/components/Resources';
import ToolsSection from '@/components/ToolsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 md:px-12">
        <Hero />
        <FloatingPhoto />
        <Experiences />
        <Education />
        <PublishedPapers />
        <ArticlesCard />
        <Resources />
        <ToolsSection />
      </main>
      <Footer />
    </>
  );
}
