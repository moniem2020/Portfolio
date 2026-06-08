"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Award,
  Sparkles,
  GraduationCap,
  BarChart3,
  ExternalLink,
  Github,
} from "lucide-react";
import Services from "@/components/Services";
import SkillsMatrix from "@/components/SkillsMatrix";
import ContactForm from "@/components/ContactForm";
import { NextjsMark, PythonMark, TailwindMark, VercelMark, N8nMark } from "@/components/BrandMarks";
import { projects } from "@/data/projects";

const POP = ["#2563eb", "#8b5cf6", "#f43f5e", "#f59e0b", "#65a30d", "#06b6d4"];

const stats = [
  { value: "3+", label: "Years building", color: "#2563eb" },
  { value: "7", label: "Projects shipped", color: "#f43f5e" },
  { value: "2", label: "Live products", color: "#8b5cf6" },
];

const experiences = [
  {
    period: "Jul 2025 — Present",
    role: "AI & Automation",
    company: "Intercom Enterprises",
    description:
      "Designing automation workflows with n8n, building RAG-powered assistants with LangChain and prompt engineering, and integrating LLMs into business solutions.",
    icon: Sparkles,
    current: true,
  },
  {
    period: "Jul — Sep 2024",
    role: "Data Scientist Intern",
    company: "Phoenix Consulting",
    description:
      "Collected and structured datasets in SQL, built Power BI dashboards for real-estate trends, and trained an ML model for property-price prediction.",
    icon: BarChart3,
  },
  {
    period: "Jul — Sep 2023",
    role: "Data Scientist Intern",
    company: "Phoenix Consulting",
    description:
      "Strengthened Python, web scraping, and data preprocessing; automated data-collection workflows and contributed to early-stage model design.",
    icon: BarChart3,
  },
  {
    period: "2021 — 2025",
    role: "B.Sc. Computer Science",
    company: "Ain Shams University",
    description: "Graduated with a focus on artificial intelligence, machine learning, and software engineering.",
    icon: GraduationCap,
  },
  {
    period: "In progress",
    role: "M.Sc. Scientific Computing",
    company: "Ain Shams University",
    description: "Deepening the mathematical and computational foundations behind modern AI systems.",
    icon: GraduationCap,
  },
];

const brands = [
  { name: "Python", Mark: PythonMark },
  { name: "n8n", Mark: N8nMark },
  { name: "Next.js", Mark: NextjsMark },
  { name: "Tailwind CSS", Mark: TailwindMark },
  { name: "Vercel", Mark: VercelMark },
];

const featured = projects.slice(0, 4);

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== Hero ===== */}
      <section className="relative">
        <div className="bg-blobs pointer-events-none absolute inset-0 -z-10" />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="container-x pb-16 pt-32 md:pt-40">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for freelance projects
              </span>

              <div className="space-y-5">
                <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                  <span className="text-ink">AI, Automation</span>
                  <br />
                  <span className="text-pop">&amp; Full-Stack.</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-ink-500">
                  I&apos;m Moniem — a developer building RAG copilots, AI automations, and{" "}
                  <span className="font-semibold text-ink">full-stack web apps</span> that make teams
                  work smarter, not harder.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/projects" className="btn-grad">
                  View my work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#contact" className="btn-outline">
                  Book a call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <dl className="grid max-w-md grid-cols-3 gap-6 border-t border-line pt-7">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-3xl font-semibold tracking-tight" style={{ color: stat.color }}>
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-ink-500">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Right — profile card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="card relative overflow-hidden p-7"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#2563eb] via-[#8b5cf6] to-[#f43f5e]" />
              <div className="flex items-center justify-between pt-1.5">
                <span className="eyebrow">Currently</span>
                <span className="flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" /> Cairo, Egypt
                </span>
              </div>

              <div className="mt-4 space-y-1">
                <p className="font-display text-xl font-semibold tracking-tight text-ink">
                  AI &amp; Automation
                </p>
                <p className="text-sm text-ink-500">Intercom Enterprises</p>
              </div>

              <div className="mt-6 rounded-2xl border border-line bg-paper p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#f59e0b" }}>
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">McKinsey Forward Program</p>
                    <p className="text-xs text-ink-500">Certified · 2025 · McKinsey &amp; Company</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-400">
                Focus areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["RAG", "LangChain", "n8n", "Next.js", "Power BI", "Python"].map((tag, i) => {
                  const c = POP[i % POP.length];
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                      style={{ color: c, borderColor: `${c}40`, backgroundColor: `${c}0d` }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Stack strip ===== */}
      <section className="border-y border-line bg-surface">
        <div className="container-x flex flex-col items-center gap-6 py-8 md:flex-row md:gap-10">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
            Tools I build with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {brands.map(({ name, Mark }) => (
              <span
                key={name}
                title={name}
                className="text-ink-700 opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
              >
                <Mark className="h-7 w-auto" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <Services />

      {/* ===== Experience ===== */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl space-y-4">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#8b5cf6" }} />
              The path so far
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Experience &amp; <span className="text-pop">education</span>
            </h2>
          </div>

          <ol className="mt-12 space-y-3">
            {experiences.map((exp, i) => {
              const c = POP[i % POP.length];
              return (
                <motion.li
                  key={`${exp.role}-${exp.period}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card card-hover grid gap-4 p-6 md:grid-cols-[200px_1fr] md:items-start md:gap-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white" style={{ backgroundColor: c }}>
                      <exp.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">
                      {exp.period}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium" style={{ color: c }}>{exp.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{exp.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ===== Featured work ===== */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#f43f5e" }} />
                Selected work
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Projects with <span className="text-pop">measurable impact</span>
              </h2>
            </div>
            <Link href="/projects" className="btn-outline w-fit shrink-0">
              All projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((project, i) => {
              const c = POP[i % POP.length];
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="card card-hover relative flex flex-col overflow-hidden p-7"
                >
                  <span className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: c }} />
                  <div className="flex items-start justify-between gap-4 pt-1.5">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xl font-semibold" style={{ color: c }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.description}</p>

                  <div className="mt-4 flex items-center gap-2 rounded-xl px-3 py-2" style={{ backgroundColor: `${c}12` }}>
                    <Sparkles className="h-4 w-4 shrink-0" style={{ color: c }} />
                    <p className="text-xs font-medium" style={{ color: c }}>{project.impact}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.demo || project.github) && (
                    <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-70"
                        >
                          <ExternalLink className="h-4 w-4" /> Live site
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-70"
                        >
                          <Github className="h-4 w-4" /> Code
                        </a>
                      )}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl space-y-4">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
              Toolkit
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The stack I <span className="text-pop">reach for</span>
            </h2>
          </div>
          <div className="mt-12">
            <SkillsMatrix />
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="section-y scroll-mt-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#2563eb" }} />
              Let&apos;s work together
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Tell me what you <span className="text-pop">want to build</span>
            </h2>
            <p className="text-base leading-relaxed text-ink-500">
              Whether it&apos;s an AI assistant, a RAG copilot, an automation pipeline, or a
              full-stack web app — share the outcome you&apos;re after and I&apos;ll come back with
              how I&apos;d approach it, a rough timeline, and next steps.
            </p>
            <div className="space-y-3 border-t border-line pt-6 text-sm">
              <a href="mailto:moniemghazal@gmail.com" className="flex items-center gap-3 text-ink-700 transition-colors hover:text-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#2563eb" }}>@</span>
                moniemghazal@gmail.com
              </a>
              <a href="tel:+201009441336" className="flex items-center gap-3 text-ink-700 transition-colors hover:text-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg font-mono text-[10px] text-white" style={{ backgroundColor: "#f43f5e" }}>+20</span>
                +20 100 944 1336
              </a>
              <p className="flex items-center gap-3 text-ink-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#8b5cf6" }}>
                  <MapPin className="h-4 w-4" />
                </span>
                Nasr City, Cairo · Remote-friendly
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
