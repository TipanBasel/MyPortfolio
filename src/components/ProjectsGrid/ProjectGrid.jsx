
const ProjectGrid = (props) => {
    const { filteredProjects } = props;
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 group"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xl font-bold text-content">{project.title}</h3>
                                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            <p className="text-secondary mb-4">
                                {project.description}
                            </p>

                            <button className="w-full py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                View Code
                            </button>
                        </div>
                    </div>
                ))}

                {filteredProjects.length === 0 && (
                    <p className="text-center col-span-full text-secondary">
                        No projects found in this category.
                    </p>
                )}

            </div>
        </>
    );
}

export default ProjectGrid;