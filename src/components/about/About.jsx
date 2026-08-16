import React from 'react';
import { personalInfo, education } from '../../data/portfolioData';
import { 
  Cpu, 
  Sparkles, 
  GraduationCap, 
  Workflow, 
  Compass
} from 'lucide-react';
import tipanImg from '../../assets/tipan.jpg';

export default function About() {
  const engineeringAttributes = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Bachelor in Computer Engineering",
      sub: "ACEM • Kathmandu, Nepal",
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/70 border-cyan-200 dark:border-cyan-800/80"
    },
    {
      icon: Cpu,
      label: "AI / ML Specialization",
      value: "Deep Learning, RAG, Computer Vision",
      sub: "Practical systems deployment",
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 border-blue-200 dark:border-blue-800/80"
    },
    {
      icon: Workflow,
      label: "Development Paradigm",
      value: "End-to-End AI Engineering",
      sub: "From raw data & models to UI",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-800/80"
    },
    {
      icon: Compass,
      label: "Current Direction",
      value: "Production AI & Research",
      sub: "Scalable inference & intelligent agents",
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 border-indigo-200 dark:border-indigo-800/80"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering Real-World AI Systems
          </h2>
        </div>

        {/* Profile Card & Narrative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Formal Profile Portrait Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative group rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800/80 p-2.5 sm:p-3 shadow-xl bg-white/90 dark:bg-slate-900/90 transition-all duration-300 max-w-md mx-auto lg:max-w-none w-full">
              {/* Glowing subtle backlight */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 pointer-events-none" />

              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={tipanImg}
                  alt="Tipan Basel"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Attributes */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              <p>
                I am a Computer Engineering graduate from Advanced College of Engineering and Management (ACEM) in Kathmandu, with a strong interest in Artificial Intelligence, Machine Learning, and software engineering.
              </p>
              <p>
                I enjoy turning AI concepts into practical solutions that solve real-world problems. My projects include GovSathi, a voice-enabled RAG assistant designed to make government services more accessible in Nepali, and a Diabetic Retinopathy Detection System using ResNet101 for medical image analysis.
              </p>
              <p>
                I focus on building complete AI solutions, from data preprocessing and model training to backend development with FastAPI and user interfaces with React and Next.js. My goal is to create AI systems that are practical, reliable, and genuinely useful.
              </p>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {engineeringAttributes.map((attr, idx) => {
                const IconComponent = attr.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-panel-interactive flex items-start gap-3.5 border border-slate-200 dark:border-slate-800 shadow-xs"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${attr.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        {attr.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {attr.value}
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-500 truncate">
                        {attr.sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
