import React from 'react';
import { education } from '../../data/portfolioData';
import { GraduationCap, MapPin, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export default function EducationSection() {
  return (
    <div className="w-full">
      <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/50 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase block mb-1 font-bold">
                ACADEMIC FOUNDATION
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 self-start md:self-auto font-medium">
            <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{education.location}</span>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {education.description}
          </p>

          <div>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-2.5 font-semibold">
              CORE CURRICULUM & ENGINEERING DISCIPLINES:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {education.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
