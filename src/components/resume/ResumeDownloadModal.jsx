import React, { useEffect } from 'react';
import { 
  Download, 
  FileText, 
  X, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

import tipanImg from '../../assets/tipan.jpg';

const RESUME_PDF_PATH = '/Tipan_Basel_Resume.pdf';

export default function ResumeDownloadModal({ isOpen, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Direct 1-click download of the permanent packaged PDF
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF_PATH;
    link.download = 'Tipan_Basel_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open permanent PDF directly in new browser tab
  const handleOpenInNewTab = () => {
    window.open(RESUME_PDF_PATH, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="w-full max-w-4xl h-[90vh] sm:h-[820px] max-h-[92vh] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/40 shadow-glow-sm shrink-0">
              <img src={tipanImg} alt="Tipan Basel" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="resume-modal-title" className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Tipan Basel — Official Resume (PDF)
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/80 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>Verified CV</span>
                </span>
              </div>
              <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                Permanent Profile Edition • Computer Engineering @ ACEM
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Interactive In-Browser PDF Viewer */}
        <div className="flex-1 w-full h-full flex flex-col bg-slate-100 dark:bg-slate-950/70 overflow-hidden">
          <iframe
            src={RESUME_PDF_PATH}
            title="Tipan Basel Resume PDF Viewer"
            className="flex-1 w-full h-full border-0 bg-slate-100 dark:bg-slate-900"
          />
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <span>Package File:</span>
            <span className="text-cyan-700 dark:text-cyan-300 font-semibold truncate max-w-xs">
              Tipan_Basel_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleOpenInNewTab}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Open in New Tab</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-glow-sm flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
