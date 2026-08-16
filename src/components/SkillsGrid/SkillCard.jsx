import styles from './SkillCard.module.css';

const SkillCard = ({ name, level, icon, color }) => {
    return (
        // 1. DYNAMIC STYLING:
        // We mix global Tailwind classes with the dynamic 'color' prop passed from data.
        // 'group' allows child elements (like the text) to react when the parent is hovered.
        <div className={`p-6 rounded-xl border-2 ${color} bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default`}>

            <div className="flex flex-col items-center">
                {/* The Icon */}
                <span className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                    {icon === 'octocat' ? '🐙' : icon}
                </span>

                {/* The Name */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    {name}
                </h3>

                {/* The Level Badge */}
                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium">
                    {level}
                </span>
            </div>

        </div>
    );
};

export default SkillCard;