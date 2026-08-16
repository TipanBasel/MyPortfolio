import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import FeaturedProject from '../components/projects/FeaturedProject';
import RetinopathyProject from '../components/projects/RetinopathyProject';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectModal from '../components/projects/ProjectModal';
import CapabilityGraph from '../components/capabilities/CapabilityGraph';
import SkillsSection from '../components/skills/SkillsSection';
import JourneyTimeline from '../components/journey/JourneyTimeline';
import EducationSection from '../components/education/EducationSection';
import CurrentlyExploring from '../components/exploring/CurrentlyExploring';
import ContactSection from '../components/contact/ContactSection';
import { Sparkles } from 'lucide-react';

export default function Home({ onOpenResume }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero onOpenResume={onOpenResume} />

      {/* 2. About & Interactive Terminal */}
      <About />

      {/* 3. Comprehensive Projects Section */}
      <section id="projects" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          
          {/* Section Header */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 // ENGINEERED SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured AI & Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Production-grade applications combining multimodal speech recognition, Retrieval-Augmented Generation, and deep convolutional neural networks.
            </p>
          </div>

          {/* Featured Hero Project: GovSathi */}
          <FeaturedProject onSelectProject={(p) => setSelectedProject(p)} />

          {/* Second Major Project: Diabetic Retinopathy */}
          <div id="retinopathy-section">
            <RetinopathyProject onSelectProject={(p) => setSelectedProject(p)} />
          </div>

          {/* Other Projects Grid: Recommender & Library System */}
          <ProjectGrid onSelectProject={(p) => setSelectedProject(p)} />

        </div>
      </section>

      {/* 4. AI/ML Capability System ("What I Build") */}
      <CapabilityGraph />

      {/* 5. Interactive Skills Toolbelt */}
      <SkillsSection />

      {/* 6. Technical Milestones Journey */}
      <JourneyTimeline />

      {/* 7. Academic Foundation (Education) */}
      <section id="education" className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EducationSection />
        </div>
      </section>

      {/* 8. Frontier Exploration ("Currently Exploring") */}
      <CurrentlyExploring />

      {/* 9. Contact Section */}
      <ContactSection />

      {/* Modal for Project Deep-Dives */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}