import React from 'react';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, Calendar, Layers, Database, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div
      onClick={() => onSelectProject(project)}
      className="group relative p-6 rounded-2xl glass-panel-interactive border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl"
    >
      <div>
        {/* Top Meta: Category + Year */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-slate-900 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-slate-800 group-hover:border-cyan-500/60 transition-colors font-medium">
            {project.category}
          </span>
          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
            <Calendar className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            <span>{project.timeline}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="font-display font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2 flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </h4>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {project.tagline}
        </p>
      </div>

      <div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
          <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 group-hover:underline flex items-center gap-1">
            <span>Explore Technical Details</span>
          </span>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label={`${project.title} GitHub Repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
