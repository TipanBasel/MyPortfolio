import React, { useState } from 'react';
import { 
  Eye, 
  Sliders, 
  Network, 
  Activity, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Info
} from 'lucide-react';

const PIPELINE_STAGES = [
  {
    id: 1,
    title: "1. Retinal Acquisition",
    subtitle: "High-Res Fundus Photography",
    icon: Eye,
    tag: "Digital Input",
    color: "from-amber-500 to-orange-500",
    details: "Standardized retinal fundus photographs showing macula, optic disc, and retinal blood vessels.",
    techSpecs: ["RGB Color Space", "Resolution Standardized", "Artifact Identification"]
  },
  {
    id: 2,
    title: "2. OpenCV Processing",
    subtitle: "CLAHE & Morphological Filter",
    icon: Sliders,
    tag: "Computer Vision",
    color: "from-cyan-500 to-blue-500",
    details: "Applies Contrast Limited Adaptive Histogram Equalization (CLAHE) on the green channel to sharpen microaneurysms and exudate boundaries.",
    techSpecs: ["Green Channel Isolation", "CLAHE Contrast Boost", "Circular Masking & Normalization"]
  },
  {
    id: 3,
    title: "3. Deep Feature Extraction",
    subtitle: "ResNet101 Residual Backbone",
    icon: Network,
    tag: "Deep Learning",
    color: "from-blue-500 to-indigo-600",
    details: "101-layer convolutional residual network with bottleneck residual blocks, allowing deep gradient propagation without vanishing gradient degradation.",
    techSpecs: ["101 Convolutional Layers", "Residual Skip Connections", "Global Average Pooling"]
  },
  {
    id: 4,
    title: "4. Classification & Triage",
    subtitle: "Dense Layer + Softmax",
    icon: Activity,
    tag: "Model Inference",
    color: "from-emerald-500 to-teal-600",
    details: "Dense classification head maps high-dimensional spatial embeddings to pathology severity categories for early screening assistance.",
    techSpecs: ["Softmax Output", "Pathology Severity Grading", "Assistive Diagnostic Flag"]
  }
];

export default function RetinopathyPipeline() {
  const [selectedStage, setSelectedStage] = useState(PIPELINE_STAGES[1]); // Default to OpenCV

  return (
    <div className="w-full rounded-2xl glass-panel p-5 sm:p-7 border border-slate-200 dark:border-blue-500/20 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
            <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Computer Vision & Deep Learning Pipeline
            </h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-1">
            TensorFlow • ResNet101 • OpenCV • Python
          </p>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 font-semibold shrink-0">
          Medical Imaging Pipeline
        </span>
      </div>

      {/* Pipeline Visual Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-5">
        {PIPELINE_STAGES.map((stage) => {
          const IconComp = stage.icon;
          const isSelected = selectedStage.id === stage.id;

          return (
            <div
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={`p-3.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-50/90 dark:bg-slate-900/90 border-2 border-blue-500 dark:border-blue-400/80 shadow-glow-sm scale-[1.01]'
                  : 'bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/60 hover:border-blue-300 dark:hover:border-slate-700 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white bg-gradient-to-tr ${stage.color}`}>
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 font-semibold">
                    Step 0{stage.id}
                  </span>
                </div>

                <h5 className="font-display font-bold text-xs text-slate-900 dark:text-slate-100 mb-0.5 leading-snug">
                  {stage.title}
                </h5>
                <p className="text-[11px] text-blue-700 dark:text-blue-400 font-mono mb-2 font-medium truncate">
                  {stage.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>{stage.tag}</span>
                {isSelected ? (
                  <span className="text-blue-700 dark:text-blue-400 font-bold">ACTIVE</span>
                ) : (
                  <span>INSPECT</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Stage Deep-Dive Drawer */}
      <div className="mt-5 p-4 sm:p-5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col gap-3.5 shadow-sm overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h5 className="font-display font-bold text-sm text-slate-900 dark:text-white">
              {selectedStage.title}: {selectedStage.subtitle}
            </h5>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
              {selectedStage.details}
            </p>
          </div>
        </div>

        {/* Tech Badges Container - Clean wrapping inside padding */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 w-full">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold mr-1 shrink-0">
            Tech Specs:
          </span>
          {selectedStage.techSpecs.map((spec, sIdx) => (
            <span
              key={sIdx}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-950 text-cyan-800 dark:text-cyan-300 border border-slate-300 dark:border-slate-800 font-medium shadow-xs"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
