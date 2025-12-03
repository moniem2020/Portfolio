'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CircularProgress from '@/components/CircularProgress';

const skills = [
  { name: 'LangChain', percentage: 95, color: '#6366f1', category: 'AI/ML' },
  { name: 'Python', percentage: 92, color: '#3b82f6', category: 'Programming' },
  { name: 'TypeScript', percentage: 90, color: '#06b6d4', category: 'Programming' },
  { name: 'LangGraph', percentage: 88, color: '#8b5cf6', category: 'AI/ML' },
  { name: 'n8n', percentage: 93, color: '#10b981', category: 'Automation' },
  { name: 'Power BI', percentage: 85, color: '#f59e0b', category: 'Analytics' },
  { name: 'RAG Systems', percentage: 90, color: '#ec4899', category: 'AI/ML' },
  { name: 'ARIS BPM', percentage: 87, color: '#6366f1', category: 'Automation' },
];

const projects = [
  {
    title: 'AI Support Agent',
    description: 'Multi-agent workflow automating customer support with 6s response time',
    impact: '65% ticket deflection',
    tags: ['LangChain', 'RAG', 'n8n'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Remotized Platform',
    description: 'Remote talent marketplace connecting GCC SMEs with Egyptian specialists',
    impact: 'Startup Power Egypt Winner 2025',
    tags: ['Product', 'Growth', 'Ops'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'ECM Automation Suite',
    description: 'Document generation and retrieval pipelines for enterprise workflows',
    impact: '40% time saved',
    tags: ['ARIS', 'LangGraph', 'Gemini'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'ML Pricing Model',
    description: 'Real-estate pricing analytics with Power BI and Python ML models',
    impact: '3-month pilot success',
    tags: ['Python', 'Power BI', 'ML'],
    gradient: 'from-amber-500 to-orange-600',
  },
];

const experiences = [
  {
    role: 'AI & Automation Intern',
    company: 'Intercom Enterprises',
    period: 'Current',
    description: 'Building autonomous support workflows with LangChain, LangGraph, and Gemini API',
    icon: '🤖',
  },
  {
    role: 'Co-Founder & CEO',
    company: 'Remotized',
    period: '2024',
    description: 'Led product and ops for award-winning remote talent platform',
    icon: '🚀',
  },
  {
    role: 'Data Scientist',
    company: 'Phoenix Consulting',
    period: '2023',
    description: 'Power BI dashboards and ML pricing models for real-estate',
    icon: '📊',
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-mesh opacity-30" />

      {/* Cursor Glow Effect */}
      <motion.div
        className="pointer-events-none fixed -z-10 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Hero Section */}
      <section className="container-custom section-spacing relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                <span className="text-sm font-semibold text-indigo-600">Available for opportunities</span>
              </motion.div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-gradient bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Abdelmoniem Ghazal
                </span>
              </h1>

              <p className="text-xl text-slate-600 md:text-2xl">
                AI & Automation Engineer crafting intelligent systems that scale
              </p>

              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Specializing in <span className="font-semibold text-indigo-600">LangChain</span>,{' '}
                <span className="font-semibold text-purple-600">RAG pipelines</span>, and{' '}
                <span className="font-semibold text-cyan-600">workflow automation</span>. Building AI agents that deliver real business value.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="btn-primary z-10">
                <span className="relative z-10">View My Work</span>
              </Link>
              <Link href="#contact" className="btn-secondary">
                Let's Connect
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: '20+', label: 'Projects Shipped' },
                { value: '15', label: 'AI Workflows' },
                { value: '1', label: 'Startup Award' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - 3D Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="glass card-hover rounded-3xl p-8">
              {/* Floating Orbs */}
              <div className="absolute -right-4 -top-4 h-24 w-24 animate-float rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 animate-float rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-2xl" style={{ animationDelay: '1s' }} />

              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl shadow-lg">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Current Role</h3>
                    <p className="text-lg font-semibold text-slate-900">AI & Automation Intern</p>
                    <p className="text-sm text-slate-600">Intercom Enterprises</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Recent Highlight</h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Shipped autonomous support agent processing 1000+ tickets/day with 65% deflection rate using LangChain + RAG
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['LangChain', '6s Response', 'RAG', 'Gemini API'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-3 py-1 text-xs font-semibold text-indigo-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                    <span className="animate-pulse">●</span>
                    Building production-ready AI systems
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container-custom section-spacing bg-white/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">Experience</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">Building AI systems across industries</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass card-hover group rounded-2xl p-6"
              >
                <div className="mb-4 text-4xl">{exp.icon}</div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">{exp.period}</div>
                <h3 className="mb-1 text-xl font-bold text-slate-900">{exp.role}</h3>
                <p className="mb-3 font-semibold text-purple-600">{exp.company}</p>
                <p className="text-sm leading-relaxed text-slate-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">Technical Expertise</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">Proficiency across the AI & automation stack</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass card-hover rounded-2xl p-6"
              >
                <CircularProgress
                  percentage={skill.percentage}
                  label={skill.name}
                  size={120}
                  strokeWidth={8}
                  delay={i * 100}
                  color={skill.color}
                />
                <div className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects - Bento Grid */}
      <section id="projects" className="container-custom section-spacing bg-white/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">Featured Projects</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">Real-world AI solutions with measurable impact</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass card-hover group relative overflow-hidden rounded-3xl p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 transition-opacity group-hover:opacity-10`} />

                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <div className="text-2xl">✨</div>
                  </div>

                  <p className="leading-relaxed text-slate-600">{project.description}</p>

                  <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2">
                    <div className="text-sm font-semibold text-emerald-700">
                      Impact: {project.impact}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 text-white md:p-16"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

          <div className="relative text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Let's Build Something Amazing</h2>
            <p className="mb-8 text-xl text-white/90">
              Open to AI engineering roles, automation projects, and innovative collaborations
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:moniemghazal@gmail.com"
                className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-600 transition-all hover:scale-105 hover:shadow-2xl"
              >
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/abdelmoniem-ghazal-40613925a"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-8 text-sm text-white/80">
              <div>📍 Cairo, Egypt</div>
              <div>📧 moniemghazal@gmail.com</div>
              <div>📞 +20 100 944 1336</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container-custom py-12 text-center text-sm text-slate-600">
        <p>© 2025 Abdelmoniem Ghazal. Crafted with passion for AI & automation.</p>
      </footer>
    </div>
  );
}
