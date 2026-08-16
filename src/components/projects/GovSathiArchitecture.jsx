import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Cpu, 
  Search, 
  Database, 
  Sparkles, 
  Volume2, 
  ArrowRight, 
  Play, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

const ARCHITECTURE_NODES = [
  {
    id: 1,
    title: "1. Voice Input",
    role: "Multimodal Capture",
    tech: "Microphone Audio Stream",
    desc: "Citizen speaks public service query naturally in conversational Nepali.",
    icon: Mic,
    color: "from-cyan-500 to-blue-500",
    badge: "Audio Waveform"
  },
  {
    id: 2,
    title: "2. Speech Recognition",
    role: "STT Engine",
    tech: "OpenAI Whisper",
    desc: "Acoustic model transcribes audio stream into accurate Nepali text with dialect handling.",
    icon: Cpu,
    color: "from-blue-500 to-indigo-500",
    badge: "Nepali Acoustic Model"
  },
  {
    id: 3,
    title: "3. RAG Retrieval",
    role: "Vector Search",
    tech: "Embedding Space",
    desc: "Calculates dense semantic embeddings to query against indexed municipal document chunks.",
    icon: Search,
    color: "from-indigo-500 to-violet-500",
    badge: "Cosine Similarity"
  },
  {
    id: 4,
    title: "4. Knowledge Base",
    role: "Ground Truth",
    tech: "MySQL & Gov Doc Index",
    desc: "Curated store of legal procedures, citizen charter rules, and official requirements.",
    icon: Database,
    color: "from-violet-500 to-purple-500",
    badge: "Verified Data"
  },
  {
    id: 5,
    title: "5. AI Synthesis",
    role: "Contextual LLM",
    tech: "Prompt Grounding",
    desc: "Synthesizes retrieved chunks into a direct, step-by-step procedural explanation without hallucination.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    badge: "Grounded Synthesis"
  },
  {
    id: 6,
    title: "6. Voice & UI Output",
    role: "Dual Delivery",
    tech: "GTSS & React UI",
    desc: "Converts synthesized guide to spoken audio while React UI displays interactive checklist.",
    icon: Volume2,
    color: "from-emerald-500 to-cyan-500",
    badge: "Accessible Response"
  }
];

export default function GovSathiArchitecture() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= ARCHITECTURE_NODES.length ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="w-full rounded-2xl glass-panel p-6 sm:p-8 border border-slate-200 dark:border-cyan-500/20 shadow-2xl relative overflow-hidden">
      {/* Top Banner & Interactive Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
            <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              GovSathi End-to-End System Pipeline
            </h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-1">
            Voice-to-Speech Retrieval-Augmented Generation (RAG) Architecture
          </p>
        </div>

        {/* Step-through Controls */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors flex items-center gap-1.5 ${
              isAutoPlaying 
                ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/60 font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Play className={`w-3 h-3 ${isAutoPlaying ? 'animate-pulse text-cyan-600 dark:text-cyan-400' : ''}`} />
            <span>{isAutoPlaying ? 'Auto Flowing' : 'Paused'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            title="Restart flow"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid of Nodes in Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        {ARCHITECTURE_NODES.map((node) => {
          const IconComponent = node.icon;
          const isActive = activeStep === node.id;
          const isPassed = activeStep > node.id;

          return (
            <div
              key={node.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveStep(node.id);
              }}
              className={`p-5 rounded-xl transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                isActive
                  ? 'bg-cyan-50/90 dark:bg-slate-900/90 border-2 border-cyan-500 dark:border-cyan-400/80 shadow-glow-md scale-[1.02]'
                  : isPassed
                  ? 'bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 hover:border-cyan-300 dark:hover:border-slate-700 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/40 opacity-75 hover:opacity-100'
              }`}
            >
              {/* Header inside node card */}
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white bg-gradient-to-tr ${node.color} shadow-sm`}>
                  <IconComponent className="w-4 h-4" />
                </div>

                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isActive 
                    ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700/60 font-semibold' 
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                }`}>
                  {node.badge}
                </span>
              </div>

              <div>
                <h5 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <span>{node.title}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />}
                </h5>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 block mb-2 font-medium">
                  {node.tech}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {node.desc}
                </p>
              </div>

              {/* Progress Indicator inside node */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Phase {node.id}/6</span>
                {isActive ? (
                  <span className="text-cyan-700 dark:text-cyan-400 font-semibold flex items-center gap-1">
                    <span>PROCESSING</span>
                    <span className="animate-spin text-cyan-600 dark:text-cyan-400">◐</span>
                  </span>
                ) : isPassed ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>READY</span>
                  </span>
                ) : (
                  <span>STANDBY</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Summary Strip of the Active Phase */}
      <div className="mt-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 font-semibold">
            ACTIVE STAGE:
          </span>
          <span className="text-slate-900 dark:text-white font-semibold">
            {ARCHITECTURE_NODES[activeStep - 1].title} — {ARCHITECTURE_NODES[activeStep - 1].role}
          </span>
        </div>

        <div className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
          <span>Click any card to inspect layer</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
        </div>
      </div>
    </div>
  );
}
