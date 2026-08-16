import SkillCard from './SkillCard.jsx';
import { skills } from '../../models/skills';

const SkillGrid = () => {
    return (
        <section className="py-16 px-6 bg-bkg text-content transition-colors duration-300">
            <div className="container mx-auto">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        Technical Skills
                    </h2>
                    <p className="text-secondary max-w-xl mx-auto">
                        A showcase of the technologies and tools I use to build digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.id}
                            name={skill.name}
                            level={skill.level}
                            icon={skill.icon}
                            color={skill.color}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SkillGrid;