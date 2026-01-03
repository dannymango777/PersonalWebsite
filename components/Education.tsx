import { education } from '@/lib/content';

export default function Education() {
  return (
    <section id="education" className="py-12 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-card/20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <span className="text-base text-gray-600 md:text-right">{edu.period}</span>
            </div>
            <p className="text-base text-gray-600 mt-3">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
