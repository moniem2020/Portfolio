'use client';
import { motion } from 'framer-motion';
import { Bot, Rocket, BarChart3 } from 'lucide-react';

const experiences = [
    {
        role: 'AI & Automation Intern',
        company: 'Intercom Enterprises',
        period: 'Current',
        description: 'Building autonomous support workflows with LangChain, LangGraph, and Gemini API',
        icon: Bot,
        highlights: [
            'Developed autonomous support agent processing 1000+ tickets/day',
            'Achieved 65% ticket deflection rate with 6s average response time',
            'Implemented RAG pipelines for enterprise knowledge bases',
            'Designed multi-agent workflows for complex customer queries',
        ],
    },
    {
        role: 'Data Scientist',
        company: 'Phoenix Consulting',
        period: '2023',
        description: 'Power BI dashboards and ML pricing models for real-estate',
        icon: BarChart3,
        highlights: [
            'Developed ML pricing models for real-estate analytics',
            'Created comprehensive Power BI dashboards',
            'Completed successful 3-month pilot program',
            'Delivered actionable insights through data visualization',
        ],
    },
];

export default function Experience() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50">
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
                            Experience
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
                        Building AI systems and automation solutions across industries
                    </p>
                </motion.div>
            </section>

            {/* Experience Timeline */}
            <section className="container-custom pb-32">
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="glass card-hover rounded-3xl overflow-hidden"
                        >
                            <div className="md:flex">
                                {/* Icon Section */}
                                <div className="md:w-1/4 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col items-center justify-center">
                                    <div className="h-24 w-24 flex items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm mb-4">
                                        <exp.icon className="h-12 w-12 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs font-semibold uppercase tracking-wide text-white/80 mb-1">
                                            {exp.period}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-sm font-semibold text-white/90">{exp.company}</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="md:w-3/4 p-8">
                                    <p className="text-lg text-slate-700 mb-6">{exp.description}</p>

                                    <h4 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-3">
                                        Key Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                                                <span className="text-slate-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
