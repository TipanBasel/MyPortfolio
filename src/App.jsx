import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { useCommandPalette } from './hooks/useCommandPalette';
import ScrollProgress from './components/navbar/ScrollProgress';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CommandPalette from './components/command-palette/CommandPalette';
import ResumeDownloadModal from './components/resume/ResumeDownloadModal';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function MainLayout() {
  const { isOpen: isCmdOpen, open: openCmd, close: closeCmd } = useCommandPalette();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 bg-grid-pattern transition-colors duration-200">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <Navbar
        onOpenCommandPalette={openCmd}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenResume={() => setIsResumeOpen(true)}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={closeCmd}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Resume Download & Upload Manager Modal */}
      <ResumeDownloadModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}
