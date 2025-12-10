'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Rocket, Bot, BarChart3, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import SkillsBentoGrid from '@/components/SkillsBentoGrid';



const projects = [
  {
    title: 'AutoBella',
    description: 'Modern mobile car services platform with booking and membership management',
    impact: 'Live at autobella-eg.com',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'MRI Tumor Detection',
    description: 'AI-powered brain tumor classification system for automated medical imaging',
    impact: 'Graduation Project',
    techStack: ['Python', 'TensorFlow', 'DenseNet', 'Flask'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'AI Support Agent',
    description: 'Multi-agent RAG system automating customer support with 6s response time',
    impact: '65% ticket deflection',
    techStack: ['Python', 'LangChain', 'RAG', 'Gemini API', 'FAISS'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Plant Disease Detection',
    description: 'Few-Shot Learning with Siamese Networks for agricultural disease detection',
    impact: 'Accurate with limited data',
    techStack: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    gradient: 'from-amber-500 to-orange-600',
  },
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Intercom Enterprises',
    period: 'Nov 2025 - Present',
    description: 'Building software solutions that help teams work smarter through automation and practical technology impact',
    icon: Rocket,
  },
  {
    role: 'AI & Automation',
    company: 'Intercom Enterprises',
    period: 'Jul - Oct 2025',
    description: 'Delivered automation solutions, ARIS BPM scripts, and RAG pipelines with LangChain, LangGraph, and Gemini API',
    icon: Bot,
  },
  {
    role: 'Data Scientist',
    company: 'Phoenix Consulting',
    period: '2023 - 2024',
    description: 'Power BI dashboards and ML pricing models for real-estate market analysis',
    icon: BarChart3,
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
      <section className="container-custom relative min-h-screen flex items-center pt-20 pb-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-5"
          >
            <div className="space-y-3">
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
                Software Engineer building solutions that make teams work smarter
              </p>

              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                I build software that helps teams work smarter not harder, solving problems, <span className="font-semibold text-indigo-600">automating tasks</span>, and turning <span className="font-semibold text-purple-600">technology</span> into <span className="font-semibold text-cyan-600">practical impact</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary z-10">
                <span className="relative z-10">View My Work</span>
              </Link>
              <Link href="/#contact" className="btn-secondary">
                Let&apos;s Connect
              </Link>
            </div>

          </motion.div>

          {/* Right Column - 3D Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative mt-12"
          >
            <div className="glass card-hover rounded-3xl p-8">
              {/* Floating Orbs */}
              <div className="absolute -right-4 -top-4 h-24 w-24 animate-float rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 animate-float rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-2xl" style={{ animationDelay: '1s' }} />

              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Current Role</h3>
                    <p className="text-lg font-semibold text-slate-900">Software Engineer</p>
                    <p className="text-sm text-slate-600">Intercom Enterprises</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">What I Do</h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Building full-stack web applications and AI-powered automation systems that streamline workflows and deliver real business value.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Express.js', 'LangChain', 'RAG', 'TypeScript'].map((tag) => (
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
                    Building web apps & AI systems
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
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass card-hover group rounded-2xl p-6"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <exp.icon className="h-8 w-8 text-white" />
                </div>
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

          <SkillsBentoGrid compact />
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
                    <Sparkles className="h-6 w-6 text-indigo-600" />
                  </div>

                  <p className="leading-relaxed text-slate-600">{project.description}</p>

                  <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-4 py-2">
                    <div className="text-sm font-semibold text-emerald-700">
                      Impact: {project.impact}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50"
                      >
                        <span className="text-indigo-500">🧩</span> {tech}
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
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Let&apos;s Build Something Amazing</h2>
            <p className="mb-8 text-xl text-white/90">
              Open to AI engineering roles, automation projects, and innovative collaborations
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:moniemghazal@gmail.com?subject=Collaboration%20Inquiry&body=Hi%20Abdelmoniem%2C%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20collaboration.%0A%0ABest%20regards"
                target="_blank"
                rel="noopener noreferrer"
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
              <a
                href="https://github.com/moniem2020"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                GitHub
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>moniemghazal@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+20 100 944 1336</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
