import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  Volume2, 
  Eye, 
  Layers, 
  Code2, 
  Sparkles, 
  Network, 
  CheckCircle, 
  ArrowRight,
  Database
} from 'lucide-react';

const CAPABILITY_NODES = [
  {
    id: "rag",
    title: "RAG Systems",
    icon: Search,
    color: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/40",
    badge: "Information Retrieval",
    description: "Vector embedding indexes and dense retrieval pipelines connecting domain knowledge to LLM generation without hallucinations.",
    application: "GovSathi Nepali public charter search & regulation retrieval.",
    keyTech: ["Vector Embeddings", "Cosine Similarity", "Semantic Chunking"]
  },
  {
    id: "voice-ai",
    title: "Voice AI & STT",
    icon: Volume2,
    color: "from-blue-500 to-indigo-500",
    border: "border-blue-500/40",
    badge: "Speech Processing",
    description: "Speech-to-text transcription and text-to-speech synthesis pipelines facilitating vernacular accessibility.",
    application: "OpenAI Whisper Nepali audio transcription & Google Text-to-Speech synthesis in GovSathi.",
    keyTech: ["OpenAI Whisper", "GTSS", "Audio Stream Processing"]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    icon: Eye,
    color: "from-indigo-500 to-violet-500",
    border: "border-indigo-500/40",
    badge: "Visual Perception",
    description: "Automated image processing, contrast enhancement filters, and deep convolutional classification.",
    application: "OpenCV CLAHE preprocessing & retinal lesion detection for Diabetic Retinopathy screening.",
    keyTech: ["OpenCV", "CLAHE", "Medical Fundus Processing"]
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    icon: Network,
    color: "from-purple-500 to-pink-500",
    border: "border-purple-500/40",
    badge: "Neural Architectures",
    description: "Multi-layer deep residual networks with skip connections for high-dimensional feature representations.",
    application: "TensorFlow ResNet101 deep residual backbone for pathological ocular classification.",
    keyTech: ["ResNet101", "TensorFlow", "Transfer Learning"]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    icon: Layers,
    color: "from-amber-500 to-emerald-500",
    border: "border-emerald-500/40",
    badge: "Statistical Learning",
    description: "Feature extraction, vector similarity scoring, and statistical tabular model construction.",
    application: "Movie Recommender System with Cosine Similarity and content-based recommendation logic.",
    keyTech: ["Scikit-learn", "Pandas", "NumPy"]
  },
  {
    id: "software-dev",
    title: "Software Engineering",
    icon: Code2,
    color: "from-emerald-500 to-teal-500",
    border: "border-teal-500/40",
    badge: "Full-Stack Systems",
    description: "Responsive component architectures, relational schema design, transactional integrity, and REST APIs.",
    application: "React / Next.js interfaces, MySQL database normalization, and PHP backend workflows.",
    keyTech: ["React", "FastAPI", "MySQL", "PHP"]
  }
];

export default function CapabilityGraph() {
  const [activeNode, setActiveNode] = useState(CAPABILITY_NODES[0]);

  return (
    <section id="capabilities" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // ARCHITECTURAL SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            What I Build
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            A cohesive engineering matrix connecting foundation models, data preprocessing pipelines, and user-facing applications.
          </p>
        </div>

        {/* Central Root Hub + Branch Nodes Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Capability Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPABILITY_NODES.map((node) => {
              const IconComp = node.icon;
              const isSelected = activeNode.id === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-50/90 dark:bg-slate-900/90 border-2 border-cyan-500 dark:border-cyan-400/80 shadow-glow-sm scale-[1.02]'
                      : 'glass-panel border-slate-200 dark:border-slate-800/60 hover:border-cyan-400/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white bg-gradient-to-tr ${node.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 font-medium">
                      {node.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100 mb-1 flex items-center justify-between">
                      <span>{node.title}</span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {node.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500">{node.keyTech[0]}</span>
                    <span className={isSelected ? 'text-cyan-700 dark:text-cyan-400 font-bold' : 'text-slate-500'}>
                      {isSelected ? 'INSPECTING' : 'CLICK TO VIEW'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Deep Dive Inspection Card */}
          <div className="lg:col-span-5 w-full">
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-200 dark:border-cyan-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr ${activeNode.color} shadow-glow-sm`}>
                    {React.createElement(activeNode.icon, { className: 'w-6 h-6' })}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 font-semibold">
                    System Layer Active
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                  {activeNode.title}
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {activeNode.description}
                </p>

                {/* Practical Portfolio Application */}
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 mb-6 shadow-sm">
                  <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold block mb-1">
                    [REAL-WORLD PORTFOLIO IMPLEMENTATION]
                  </span>
                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    {activeNode.application}
                  </p>
                </div>
              </div>

              {/* Technologies Array */}
              <div>
                <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block mb-2 font-medium">
                  ASSOCIATED TECHNOLOGIES & CONCEPTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.keyTech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-cyan-800 dark:text-cyan-300 border border-slate-300 dark:border-slate-800 font-medium shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
