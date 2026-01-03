'use client';

import { useState } from 'react';
import { toolsData, toolsIntro, organizeTools, Tool, ToolStatus } from '@/lib/content';

const statusColors: Record<ToolStatus, string> = {
  Planned: 'bg-secondary/20 text-secondary',
  'In progress': 'bg-blue-100 text-blue-700',
  Live: 'bg-green-100 text-green-700',
};

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-card rounded-xl p-4 shadow-sm border border-card/20 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start gap-3 mb-2">
        <h4 className="text-base font-semibold text-gray-900 flex-1">{tool.name}</h4>
        <span
          className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
            statusColors[tool.status]
          }`}
        >
          {tool.status}
        </span>
      </div>
      <p className="text-base text-gray-600 mb-3">{tool.description}</p>
      {tool.href ? (
        <a
          href={tool.href}
          className="inline-block text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors"
        >
          View tool →
        </a>
      ) : (
        <button
          disabled
          className="text-xs text-gray-500 cursor-not-allowed"
        >
          Coming soon
        </button>
      )}
    </div>
  );
}

export default function ToolsSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const categories = organizeTools(toolsData);

  return (
    <section id="tools" className="py-12 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{toolsIntro.heading}</h2>
      <p className="text-secondary mb-12">
        {toolsIntro.description}
      </p>

      {openCategory ? (
        // Expanded view for single category
        <div>
          <button
            onClick={() => setOpenCategory(null)}
            className="mb-6 text-base text-secondary hover:text-primary transition-colors"
          >
            ← Back to all tools
          </button>
          {categories.map((category) => {
            if (category.name !== openCategory) return null;
            return (
              <div key={category.name} className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">{category.name}</h3>

                {/* Direct tools */}
                {category.tools.length > 0 && (
                  <div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {category.tools.map((tool, index) => (
                        <ToolCard key={index} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Subcategories */}
                {category.subcategories?.map((subcategory) => (
                  <div key={subcategory.name}>
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      {subcategory.name}
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {subcategory.tools.map((tool, index) => (
                        <ToolCard key={index} tool={tool} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        // Collapsed view - side by side categories
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setOpenCategory(category.name)}
              className="bg-card rounded-2xl p-8 shadow-sm border border-card/20 hover:shadow-md transition-all hover:-translate-y-1 text-left"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {category.name}
              </h3>
              {category.description && (
                <p className="text-gray-600 mb-4">{category.description}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-gray-600">
                  {category.tools.length + (category.subcategories?.reduce((acc, sub) => acc + sub.tools.length, 0) || 0)} tools
                </span>
                <span className="text-2xl">→</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
