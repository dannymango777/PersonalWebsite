'use client';

import { useState } from 'react';
import { toolsData, toolsIntro, organizeTools, Tool, ToolStatus } from '@/lib/content';

const statusColors: Record<ToolStatus, string> = {
  Planned: 'bg-secondary/20 text-secondary border border-border',
  'In progress': 'bg-blue-900/30 text-blue-400 border border-blue-800',
  Live: 'bg-green-900/30 text-green-400 border border-green-800',
};

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors">
      <div className="flex justify-between items-start gap-3 mb-2">
        <h4 className="text-base font-semibold text-primary flex-1">{tool.name}</h4>
        <span
          className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
            statusColors[tool.status]
          }`}
        >
          {tool.status}
        </span>
      </div>
      <p className="text-sm text-secondary mb-3">{tool.description}</p>
      {tool.href ? (
        <a
          href={tool.href}
          className="inline-block text-xs font-medium text-primary hover:text-secondary transition-colors"
        >
          View tool →
        </a>
      ) : (
        <button
          disabled
          className="text-xs text-secondary/50 cursor-not-allowed"
        >
          Coming soon
        </button>
      )}
    </div>
  );
}

export default function ToolsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubcategories, setOpenSubcategories] = useState<Set<string>>(new Set());
  const categories = organizeTools(toolsData);

  const toggleSubcategory = (subcategoryName: string) => {
    const newSet = new Set(openSubcategories);
    if (newSet.has(subcategoryName)) {
      newSet.delete(subcategoryName);
    } else {
      newSet.add(subcategoryName);
    }
    setOpenSubcategories(newSet);
  };

  return (
    <section id="tools" className="py-12 scroll-mt-20">
      {/* Tools heading - collapsible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 mb-6 hover:text-secondary transition-colors"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {toolsIntro.heading}
        </h2>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-90' : ''}`}>
          →
        </span>
      </button>

      {/* Collapsible content with smooth animation */}
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        {openCategory ? (
          // Expanded view for single category
          <div className="fade-in">
            <button
              onClick={() => {
                setOpenCategory(null);
                setOpenSubcategories(new Set());
              }}
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.tools.map((tool, index) => (
                        <ToolCard key={index} tool={tool} />
                      ))}
                    </div>
                  )}

                  {/* Subcategories with collapse/expand */}
                  {category.subcategories?.map((subcategory) => (
                    <div key={subcategory.name} className="border-t border-border pt-4">
                      <button
                        onClick={() => toggleSubcategory(subcategory.name)}
                        className="flex items-center gap-2 mb-4 hover:text-secondary transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-primary">
                          {subcategory.name}
                        </h4>
                        <span className={`text-lg transition-transform ${openSubcategories.has(subcategory.name) ? 'rotate-90' : ''}`}>
                          →
                        </span>
                      </button>
                      <div className={`collapsible-content ${openSubcategories.has(subcategory.name) ? 'open' : ''}`}>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {subcategory.tools.map((tool, index) => (
                            <ToolCard key={index} tool={tool} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          // Category cards view
          <div className="grid md:grid-cols-2 gap-6 fade-in">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setOpenCategory(category.name)}
                className="bg-card rounded-lg p-6 border border-border hover:border-secondary transition-all text-left"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-secondary mb-4">{category.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">
                    {category.tools.length + (category.subcategories?.reduce((acc, sub) => acc + sub.tools.length, 0) || 0)} tools
                  </span>
                  <span className="text-xl text-secondary">→</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
