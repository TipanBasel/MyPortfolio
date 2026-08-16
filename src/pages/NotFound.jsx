import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Home, ArrowLeft, Bot, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-slate-800 text-center shadow-2xl flex flex-col items-center">
        
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-6 shadow-glow-sm">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 text-red-400 border border-red-800/60 text-xs font-mono mb-3">
          <span>HTTP 404 // NODE NOT FOUND</span>
        </div>

        <h1 className="text-3xl font-display font-extrabold text-white mb-2">
          Knowledge Base Miss
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed mb-6">
          The requested vector index or route could not be resolved in Tipan's portfolio environment.
        </p>

        <div className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left font-mono text-[11px] text-slate-400 mb-6">
          <span className="text-cyan-400">tipan@portfolio:~$</span> lookup --route <span className="text-red-400">404</span><br />
          <span className="text-slate-400">Error: Zero embedding similarity score match.</span>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs font-mono shadow-glow-sm transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home Base</span>
        </Link>

      </div>
    </div>
  );
}
