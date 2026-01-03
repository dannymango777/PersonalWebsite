import { publishedPapers } from '@/lib/content';

export default function PublishedPapers() {
  return (
    <section id="papers" className="py-12 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Published Papers</h2>
      <div className="space-y-6">
        {publishedPapers.map((paper, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-card/20"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{paper.title}</h3>
            <p className="text-base text-gray-600 mb-1">{paper.authors}</p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <p className="text-base text-gray-600">
                <span className="italic">{paper.journal}</span> • {paper.year}
              </p>
              <a
                href={paper.doi}
                className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                View Paper →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
