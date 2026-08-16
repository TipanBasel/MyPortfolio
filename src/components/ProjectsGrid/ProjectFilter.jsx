import { useState } from 'react';
import { projects } from '../../models/projects';
import ProjectGrid from './ProjectGrid';

const ProjectFilter = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const categories = ["All", "React", "Node", "Full Stack"];

    return (
        <section className="py-16 px-6 bg-bkg text-content transition-colors duration-300">
            <div className="container mx-auto">

                <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                    My Projects
                </h2>

                <div className="flex justify-center space-x-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                px-4 py-2 rounded-full font-medium transition-all duration-300
                ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg scale-105"
                                    : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"}
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <ProjectGrid
                    filteredProjects={filteredProjects}
                />

            </div>
        </section>
    );
};

export default ProjectFilter;