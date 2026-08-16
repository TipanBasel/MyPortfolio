import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import NeuralCanvas from './NeuralCanvas';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  ChevronDown 
} from 'lucide-react';

import tipanImg from '../../assets/tipan.jpg';

const TITLES = [
  "AI Engineer in the Making",
  "RAG Systems Builder",
  "Deep Learning & Vision Specialist",
  "Computer Engineering Graduate"
];

export default function Hero({ onOpenResume }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation for roles
  useEffect(() => {
    const currentText = TITLES[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (subIndex < currentText.length) {
          setSubIndex((prev) => prev + 1);
        } else {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, titleIndex]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Profile Avatar & Status Pill */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src={tipanImg} 
                  alt="Tipan Basel" 
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top border-2 border-white dark:border-slate-900 shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 shadow-xs" title="Available for Opportunities" />
              </div>

              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-mono shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold tracking-wider uppercase text-[11px]">
                    {personalInfo.status}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1 pl-1">
                  Kathmandu, Nepal • ACEM
                </span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-500">{personalInfo.name}</span>.
            </h1>

            {/* Animated Title */}
            <div className="h-10 sm:h-12 flex items-center mb-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                <span>{TITLES[titleIndex].substring(0, subIndex)}</span>
                <span className="w-0.5 h-6 sm:h-8 bg-cyan-500 dark:bg-cyan-400 inline-block ml-1 animate-pulse" />
              </h2>
            </div>

            {/* Domain Badges */}
            <p className="text-xs sm:text-sm font-mono text-cyan-700 dark:text-cyan-400 mb-5 tracking-wide flex items-center gap-2 flex-wrap font-medium">
              <span>Machine Learning</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span>Deep Learning</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span>RAG</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span>Software Development</span>
            </p>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* Primary 1: View My Work */}
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Primary 2: Download Resume (PDF) */}
              <button
                type="button"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-slate-800 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </button>

              {/* Secondary: Let's Connect */}
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium hover:bg-slate-200/60 dark:hover:bg-slate-800/30 transition-colors"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Quick Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/60 w-full">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-500">PROFILES:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/50 transition-colors"
                aria-label="Open Gmail directly"
                title="Send Email via Gmail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Neural Node Canvas */}
          <div className="lg:col-span-5 w-full">
            <NeuralCanvas />
          </div>

        </div>
      </div>

      {/* Down Scroll Arrow Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-500 dark:text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
}