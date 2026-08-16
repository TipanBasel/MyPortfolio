import React, { useState } from 'react';
import { otherProjects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import { Sparkles, Layers, Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Machine Learning', 'Software Development'];

export default function ProjectGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = otherProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="w-full flex flex-col gap-6 pt-10">
      {/* Grid Subheader & Category Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 text-xs font-mono mb-1 border border-slate-200 dark:border-slate-800">
            <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>ADDITIONAL ENGINEERING PROJECTS</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
            Algorithms & Systems Development
          </h4>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/70 p-1 rounded-xl border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                activeCategory === cat
                  ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/60 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </div>
  );
}
