import React from 'react';
import { journeyMilestones } from '../../data/portfolioData';
import { 
  Sparkles, 
  Milestone, 
  Calendar, 
  Cpu, 
  Workflow, 
  ChevronRight, 
  Layers 
} from 'lucide-react';

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // EVOLUTION & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Engineering Journey
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            A progression of building practical AI systems—advancing from computer vision classifiers to multimodal voice & RAG architectures.
          </p>
        </div>

        {/* Visual Timeline Path */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800/80 ml-4 sm:ml-8 space-y-12 pb-4">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Pulsing Node Dot on Timeline */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 shadow-glow-sm flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 rounded-2xl glass-panel-interactive border border-slate-200 dark:border-slate-800/80 group-hover:border-cyan-500/50 transition-all shadow-sm">
                
                {/* Period & Focus Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800/50 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{milestone.period}</span>
                  </div>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
                    FOCUS: {milestone.focus}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 max-w-3xl">
                  {milestone.description}
                </p>

                {/* Key Skills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                  {milestone.keySkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
