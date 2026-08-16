import React, { useState } from 'react';
import { personalInfo, education, featuredProjects, otherProjects, skillCategories } from '../../data/portfolioData';
import { 
  FileText, 
  Download, 
  Printer, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  GraduationCap,
  Code2
} from 'lucide-react';

export default function ResumeSection() {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3500);
    // Trigger print dialog as PDF exporter
    window.print();
  };

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>06 // CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Engineering Resume
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              A comprehensive technical overview of education, engineered systems, and technical proficiencies.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700/80 font-mono text-xs transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Print CV</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-glow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {downloadNotice && (
          <div className="mb-6 p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-200 text-xs font-mono text-center animate-in fade-in font-medium">
            ✓ Preparing print dialog. You can select "Save as PDF" to download Tipan's resume.
          </div>
        )}

        {/* Formatted In-Browser Document Preview */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/90 shadow-2xl bg-white dark:bg-slate-950/90 text-slate-900 dark:text-slate-100 font-sans max-w-4xl mx-auto print:border-none print:shadow-none print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-mono text-cyan-700 dark:text-cyan-400 mt-1 font-semibold">
                Computer Engineering Student • AI/ML Enthusiast
              </p>
            </div>

            <div className="flex flex-col text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline text-cyan-700 dark:text-cyan-300"
                  title="Open in Gmail"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-slate-800/80 pb-1 mb-3">
              EDUCATION
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {education.degree}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {education.location}
              </span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
              {education.institution}
            </p>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-slate-800/80 pb-1 mb-4">
              TECHNICAL PROJECTS
            </h4>

            {/* GovSathi */}
            <div className="space-y-4">
              {featuredProjects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {proj.title} — <span className="font-normal text-slate-600 dark:text-slate-300">{proj.subtitle}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {proj.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proj.tagline}
                  </p>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400/90 font-medium">
                    <span className="text-slate-500">Stack: </span>{proj.technologies.join(', ')}
                  </p>
                </div>
              ))}

              {otherProjects.map((proj) => (
                <div key={proj.id} className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {proj.title}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {proj.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proj.tagline}
                  </p>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400/90 font-medium">
                    <span className="text-slate-500">Stack: </span>{proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Breakdown */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-slate-800/80 pb-1 mb-3">
              TECHNICAL TOOLBELT
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="flex items-start gap-2">
                  <span className="font-semibold text-slate-800 dark:text-slate-300 shrink-0 font-mono">
                    {cat.name}:
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
