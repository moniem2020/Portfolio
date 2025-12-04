'use client';
import { motion } from 'framer-motion';
import RotatingSkills from '@/components/RotatingSkills';

const skills = [
    'Python',
    'LangChain',
    'TensorFlow',
    'n8n',
    'Power BI',
    'RAG Systems',
    'SQL',
];

export default function Skills() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 pt-24">
            {/* Animated Mesh Gradient Background */}
            <div className="fixed inset-0 -z-10 bg-mesh opacity-30" />

            {/* Hero Section */}
            <section className="container-custom section-spacing relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                        <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">
                            Technical Expertise
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                        Proficiency across the AI & automation stack, combining cutting-edge
                        technologies with practical implementation experience
                    </p>
                </motion.div>
            </section>

            {/* Rotating Skills Display */}
            <section className="container-custom pb-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <RotatingSkills skills={skills} />
                </motion.div>
            </section>

            {/* Skills Details */}
            <section className="container-custom pb-32">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            category: 'Programming',
                            items: ['Python', 'C++', 'Java', 'C#', 'Scala', 'TypeScript'],
                            color: 'from-cyan-500 to-blue-600',
                        },
                        {
                            category: 'AI & ML',
                            items: ['LangChain', 'RAG Systems', 'TensorFlow', 'DenseNet', 'Few-Shot Learning'],
                            color: 'from-violet-500 to-purple-600',
                        },
                        {
                            category: 'Automation & Tools',
                            items: ['n8n', 'Power BI', 'SQL', 'Git', 'VS Code'],
                            color: 'from-emerald-500 to-teal-600',
                        },
                        {
                            category: 'Web & Frameworks',
                            items: ['React', 'Next.js', 'Flask', 'Full-Stack Development'],
                            color: 'from-amber-500 to-orange-600',
                        },
                    ].map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="glass card-hover rounded-2xl p-6"
                        >
                            <div className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${skillGroup.color} px-4 py-2`}>
                                <span className="text-sm font-semibold text-white">
                                    {skillGroup.category}
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="text-slate-700 flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
