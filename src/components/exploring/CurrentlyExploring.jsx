import React from 'react';
import { currentlyExploring } from '../../data/portfolioData';
import { Sparkles, Layers, Cpu, Zap, Server, Compass, ArrowUpRight } from 'lucide-react';

const ICON_MAP = {
  Layers: Layers,
  Cpu: Cpu,
  Zap: Zap,
  Server: Server,
};

export default function CurrentlyExploring() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>05 // TECHNICAL TRAJECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Currently Exploring
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Active domains of study and engineering experimentation shaping my growth toward full-stack AI engineering.
          </p>
        </div>

        {/* Grid of Frontier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyExploring.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel-interactive border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-slate-800 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="font-semibold">ACTIVE R&D</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
