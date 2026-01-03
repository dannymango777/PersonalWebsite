import { experiences } from '@/lib/content';

export default function Experiences() {
  return (
    <section id="experiences" className="py-12 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Experiences</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-card/20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{exp.role}</h3>
                <p className="text-gray-600">{exp.organization}</p>
              </div>
              <span className="text-base text-gray-600 md:text-right">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
