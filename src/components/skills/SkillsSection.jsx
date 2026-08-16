import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { 
  Sparkles, 
  Search, 
  Code2, 
  Cpu, 
  Layers, 
  Database, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

const CATEGORY_ICONS = {
  'ai-ml': Cpu,
  'programming': Code2,
  'frameworks': Layers,
  'databases-tools': Database,
  'soft-skills': Users,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryName: cat.name }))
  );

  const filteredCategories = skillCategories.filter(
    (cat) => activeCategory === 'all' || cat.id === activeCategory
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.categoryId === activeCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // TECHNICAL TOOLBELT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Skills & Engineering Ecosystem
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Grounded, practical proficiencies spanning neural networks, modern web architectures, and system algorithms.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full pl-9 pr-4 py-2 text-xs font-mono rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700/80 font-semibold shadow-xs'
                : 'bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            All Disciplines ({allSkills.length})
          </button>

          {skillCategories.map((cat) => {
            const IconComp = CATEGORY_ICONS[cat.id] || Sparkles;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700/80 font-semibold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <IconComp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        {searchQuery ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-panel-interactive border border-slate-200 dark:border-slate-800/80 flex items-center justify-between shadow-sm"
              >
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                    {skill.tag}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-cyan-800 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 font-medium">
                  {skill.categoryName}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => {
              const IconComp = CATEGORY_ICONS[cat.id] || Sparkles;

              return (
                <div
                  key={cat.id}
                  className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/40">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-slate-900 dark:text-slate-100">
                          {cat.name}
                        </h3>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2.5 mt-5">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/60 flex items-center justify-between hover:border-cyan-400/40 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                            <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            {skill.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{cat.skills.length} Capabilities Verified</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-semibold">PRACTICAL STACK</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
