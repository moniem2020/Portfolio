'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'ai' | 'tools';
    level: number; // 1-100
}

const skillsData: Skill[] = [
    { name: 'Python', icon: '🐍', category: 'backend', level: 95 },
    { name: 'Next.js', icon: '⚡', category: 'frontend', level: 90 },
    { name: 'Express.js', icon: '🚀', category: 'backend', level: 85 },
    { name: 'TypeScript', icon: '📘', category: 'frontend', level: 88 },
    { name: 'LangChain', icon: '🔗', category: 'ai', level: 92 },
    { name: 'Machine Learning', icon: '🧠', category: 'ai', level: 85 },
    { name: 'RAG Systems', icon: '📚', category: 'ai', level: 90 },
    { name: 'n8n', icon: '⚙️', category: 'tools', level: 88 },
    { name: 'LangGraph', icon: '📊', category: 'ai', level: 85 },
    { name: 'React', icon: '⚛️', category: 'frontend', level: 92 },
    { name: 'Flask', icon: '🌶️', category: 'backend', level: 88 },
];

const categoryColors = {
    frontend: 'from-cyan-500 to-blue-600',
    backend: 'from-emerald-500 to-teal-600',
    ai: 'from-violet-500 to-purple-600',
    tools: 'from-amber-500 to-orange-600',
};

const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    ai: 'AI & ML',
    tools: 'Tools',
};

interface SkillsBentoGridProps {
    compact?: boolean;
}

export default function SkillsBentoGrid({ compact = false }: SkillsBentoGridProps) {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredSkills = activeCategory
        ? skillsData.filter((skill) => skill.category === activeCategory)
        : skillsData;

    const categories = ['frontend', 'backend', 'ai', 'tools'] as const;

    return (
        <div className="space-y-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(null)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${activeCategory === null
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                        : 'bg-white/80 text-slate-600 hover:bg-white hover:shadow-md ring-1 ring-slate-200/50'
                        }`}
                >
                    All Skills
                </motion.button>
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${activeCategory === category
                            ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg`
                            : 'bg-white/80 text-slate-600 hover:bg-white hover:shadow-md ring-1 ring-slate-200/50'
                            }`}
                    >
                        {categoryLabels[category]}
                    </motion.button>
                ))}
            </div>

            {/* Skills Bento Grid */}
            <motion.div
                layout
                className={`grid gap-4 ${compact
                    ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
                    }`}
            >
                {filteredSkills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group relative"
                    >
                        <div
                            className={`relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200/50 transition-all duration-300 ${hoveredSkill === skill.name
                                ? 'scale-105 shadow-xl ring-2 ring-indigo-300'
                                : 'hover:shadow-lg'
                                }`}
                        >
                            {/* Gradient Background on Hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${categoryColors[skill.category]} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                            />

                            {/* Skill Content */}
                            <div className="relative flex flex-col items-center text-center">
                                <motion.span
                                    className="text-3xl mb-2"
                                    animate={{
                                        scale: hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
                                        rotate: hoveredSkill === skill.name ? [0, -10, 10, 0] : 0,
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {skill.icon}
                                </motion.span>
                                <span className="font-semibold text-slate-800 text-sm">{skill.name}</span>

                                {/* Skill Level Bar */}
                                <div className="w-full mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
                                        className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                                    />
                                </div>

                                {/* Category Badge */}
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{
                                        opacity: hoveredSkill === skill.name ? 1 : 0,
                                        y: hoveredSkill === skill.name ? 0 : 5,
                                    }}
                                    className={`absolute -top-1 -right-1 rounded-full bg-gradient-to-r ${categoryColors[skill.category]} px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm`}
                                >
                                    {categoryLabels[skill.category]}
                                </motion.span>
                            </div>

                            {/* Floating Particles on Hover */}
                            {hoveredSkill === skill.name && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 0.5, scale: 1, y: [-5, 5, -5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-400"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 0.3, scale: 1, y: [5, -5, 5] }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                        className="absolute bottom-3 left-2 h-1.5 w-1.5 rounded-full bg-purple-400"
                                    />
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Skills Stats Summary */}
            {!compact && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center gap-8 pt-4"
                >
                    {categories.map((category) => {
                        const count = skillsData.filter((s) => s.category === category).length;
                        return (
                            <div key={category} className="text-center">
                                <div
                                    className={`text-2xl font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}
                                >
                                    {count}
                                </div>
                                <div className="text-xs text-slate-500 font-medium">
                                    {categoryLabels[category]}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            )}
        </div>
    );
}
