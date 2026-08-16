import React, { useEffect } from 'react';
import { GithubIcon } from '../common/Icons';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Code2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/60 font-semibold">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{project.timeline}</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-cyan-700 dark:text-cyan-400 font-mono mt-1 font-medium">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Tagline Box */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 mb-6">
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            "{project.tagline}"
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80">
            <h5 className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase mb-1.5 flex items-center gap-1.5">
              <span>Problem Statement</span>
            </h5>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem || project.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80">
            <h5 className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-1.5 flex items-center gap-1.5">
              <span>Solution & Approach</span>
            </h5>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution || (project.details && project.details.approach) || project.tagline}
            </p>
          </div>
        </div>

        {/* Technical Highlights / Learning Outcomes */}
        {project.highlights && (
          <div className="mb-6">
            <h5 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2.5 font-semibold">
              Key Engineering Highlights:
            </h5>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.details && project.details.learningOutcomes && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 mb-6">
            <h5 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase mb-1">
              Core Technical Competencies Developed:
            </h5>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.details.learningOutcomes}
            </p>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mb-8">
          <h5 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2.5 font-semibold">
            Integrated Tech Stack:
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/40 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs transition-colors border border-slate-200 dark:border-slate-700"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
