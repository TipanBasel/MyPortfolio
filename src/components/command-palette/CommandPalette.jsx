import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { 
  Search, 
  Command, 
  Home, 
  User, 
  Code2, 
  Cpu, 
  Sparkles, 
  Layers, 
  Download, 
  Mail, 
  Sun, 
  Moon, 
  ArrowRight,
  X
} from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const ALL_COMMANDS = [
    {
      id: 'home',
      name: 'Go to Home / Hero',
      category: 'Navigation',
      icon: Home,
      action: () => scrollToSection('hero')
    },
    {
      id: 'about',
      name: 'About Tipan & Engineering Philosophy',
      category: 'Navigation',
      icon: User,
      action: () => scrollToSection('about')
    },
    {
      id: 'govsathi',
      name: 'Explore GovSathi (Nepali Voice RAG Assistant)',
      category: 'Projects',
      icon: Sparkles,
      action: () => scrollToSection('projects')
    },
    {
      id: 'retinopathy',
      name: 'Diabetic Retinopathy Detection (ResNet101)',
      category: 'Projects',
      icon: Cpu,
      action: () => scrollToSection('retinopathy-section')
    },
    {
      id: 'capabilities',
      name: 'View "What I Build" Capability Matrix',
      category: 'Architecture',
      icon: Layers,
      action: () => scrollToSection('capabilities')
    },
    {
      id: 'skills',
      name: 'Explore Technical Skills & Toolbelt',
      category: 'Skills',
      icon: Code2,
      action: () => scrollToSection('skills')
    },
    {
      id: 'journey',
      name: 'Engineering Journey & Milestones',
      category: 'Journey',
      icon: Layers,
      action: () => scrollToSection('journey')
    },
    {
      id: 'resume',
      name: 'View & Download Official Resume (PDF)',
      category: 'Resume',
      icon: Download,
      action: () => {
        onClose();
        if (onOpenResume) onOpenResume();
      }
    },
    {
      id: 'contact',
      name: 'Initiate Contact / Send Message',
      category: 'Contact',
      icon: Mail,
      action: () => scrollToSection('contact')
    },
    {
      id: 'theme',
      name: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    }
  ];

  const filteredCommands = ALL_COMMANDS.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or action..."
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none border-none p-0 focus:ring-0 font-mono"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const IconComp = cmd.icon;
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full p-2.5 rounded-xl flex items-center justify-between text-left transition-colors ${
                    isSelected
                      ? 'bg-cyan-100 dark:bg-cyan-950/70 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/60 font-medium'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-200/80 dark:bg-cyan-900/60 text-cyan-900 dark:text-cyan-300' : 'bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400'}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-medium block">
                        {cmd.name}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>•</span>
            <span>↵ Select</span>
          </div>
          <span>Tipan Portfolio Shell</span>
        </div>
      </div>
    </div>
  );
}
