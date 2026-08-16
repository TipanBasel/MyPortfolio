import React from 'react';
import { featuredProjects } from '../../data/portfolioData';
import RetinopathyPipeline from './RetinopathyPipeline';
import { GithubIcon } from '../common/Icons';
import { 
  Eye, 
  ExternalLink, 
  Calendar, 
  FileCode2, 
  Activity,
  Layers
} from 'lucide-react';

export default function RetinopathyProject({ onSelectProject }) {
  const project = featuredProjects.find((p) => p.id === 'diabetic-retinopathy');
  if (!project) return null;

  return (
    <div className="w-full flex flex-col gap-8 pt-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-700/50 text-blue-800 dark:text-blue-300 text-xs font-mono mb-2 shadow-sm">
            <Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>DEEP LEARNING & COMPUTER VISION // 02</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
          <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>{project.timeline}</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Problem, Solution & Stack */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 shadow-sm">
            <h4 className="text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2 font-semibold">
              Clinical Objective
            </h4>
            <p className="text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              "{project.tagline}"
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-sm">
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold block mb-1.5">
                [CLINICAL CHALLENGE]
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 shadow-sm">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold block mb-1.5">
                [COMPUTER VISION SOLUTION]
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Badges */}
          <div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-2.5 font-medium">
              TECHNOLOGY STACK:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-glow-sm transition-all"
            >
              <FileCode2 className="w-4 h-4" />
              <span>Project Details</span>
            </button>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 font-mono text-xs transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository</span>
            </a>
          </div>

        </div>

        {/* Right Column: Pipeline Interactive Flow */}
        <div className="lg:col-span-7 w-full">
          <RetinopathyPipeline />
        </div>

      </div>
    </div>
  );
}
