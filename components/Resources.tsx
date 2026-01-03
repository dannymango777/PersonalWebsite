import { resources } from '@/lib/content';

export default function Resources() {
  return (
    <section id="resources" className="py-12 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Resources & Connect</h2>
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-card/20">
        <div className="flex flex-wrap gap-4 items-center justify-start">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.href}
              className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <span className="text-2xl">{resource.icon}</span>
              <span className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {resource.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
