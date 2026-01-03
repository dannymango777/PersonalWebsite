import { articles } from '@/lib/content';

export default function ArticlesCard() {
  return (
    <section id="articles" className="py-12 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Articles</h2>
      <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-card/20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            {articles.featured.title}
          </h3>
          <span className="text-base text-gray-600">{articles.featured.date}</span>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {articles.featured.description}
        </p>
        <a
          href={articles.seeAllLink}
          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
        >
          See all articles →
        </a>
      </div>
    </section>
  );
}
