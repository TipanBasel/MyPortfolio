import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { 
  Sun, 
  Moon, 
  Download, 
  Command 
} from 'lucide-react';

import tipanImg from '../../assets/tipan.jpg';

const NAV_LINKS = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ onOpenCommandPalette, onOpenResume }) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/60 py-2.5 shadow-lg shadow-black/5'
          : 'bg-transparent py-3 sm:py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col gap-2">
        
        {/* Top Header Row: Brand Logo & Actions */}
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-display font-bold text-base sm:text-lg tracking-tight shrink-0"
            aria-label="Tipan Basel Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/40 shadow-glow-sm group-hover:scale-105 transition-transform shrink-0">
              <img src={tipanImg} alt="Tipan Basel" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Tipan Basel
              </span>
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-medium tracking-wide">
                Computer Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Bar (Centered on md+ screens) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 rounded-full px-3 py-1 shadow-inner-glow backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-800 dark:text-cyan-300 bg-cyan-100/90 dark:bg-cyan-950/70 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Command Palette, Theme Toggle & Resume CTA */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1 px-2 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-md transition-colors"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span className="hidden sm:inline">Cmd+K</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all"
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Resume PDF Download CTA */}
            <button
              type="button"
              onClick={onOpenResume}
              className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-glow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Resume</span>
            </button>
          </div>
        </div>

        {/* Mobile Section Links Pill Bar (Visible directly on mobile & tablet, md:hidden) */}
        <div className="md:hidden w-full overflow-x-auto no-scrollbar pt-0.5 pb-1">
          <nav className="flex items-center gap-1.5 bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 rounded-full px-2.5 py-1 shadow-inner-glow backdrop-blur-md w-max mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1 text-[11px] font-mono rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-900 dark:text-cyan-300 bg-cyan-200/80 dark:bg-cyan-950/90 border border-cyan-300 dark:border-cyan-800/60 font-bold shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/40 font-medium'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
}
