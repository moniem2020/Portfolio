import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

const navLinks = [
  { label: "Focus", href: "#focus" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    title: "Agentic systems",
    description: "Designing human-in-the-loop AI agents that handle research, summarisation, and execution across complex workflows.",
  },
  {
    title: "Automation playbooks",
    description: "Building resilient automation pipelines with n8n, LangChain, and custom orchestration to remove operational drag.",
  },
  {
    title: "Insightful tooling",
    description: "Shipping dashboards and internal tools that surface the right signal for product, GTM, and support teams.",
  },
];

const stats = [
  { label: "Automation launches", value: "20+" },
  { label: "Agent workflows shipped", value: "15" },
  { label: "Avg. time saved / project", value: "35%" },
];

const toolStack = [
  { name: "LangChain", descriptor: "Orchestration" },
  { name: "LangGraph", descriptor: "Agent memory" },
  { name: "n8n", descriptor: "Automation" },
  { name: "Python", descriptor: "Data ops" },
  { name: "TypeScript", descriptor: "Interfaces" },
];

const sprintHighlights = [
  {
    title: "Signal intake",
    description: "Connected Salesforce, Intercom, and Slack queues into a single triage feed.",
  },
  {
    title: "Agentic triage",
    description: "LangChain flows summarised tickets and proposed replies in under six seconds.",
  },
  {
    title: "Human QA loop",
    description: "CX leads reviewed edge cases weekly to retrain prompts and workflows.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f5f3ff] via-white to-[#e0f2fe]">
      <div className="pointer-events-none absolute inset-x-[10%] top-0 h-48 rounded-full bg-violet-200/50 blur-3xl" />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full border border-indigo-100 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700 shadow-sm shadow-indigo-500/5"
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1 text-white">MG</span>
          <span className="hidden text-indigo-500 sm:inline">Automation studio</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/projects"
            className="hidden rounded-full border border-indigo-100 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600 shadow-sm hover:bg-white/80 md:inline-flex"
          >
            Case studies
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-lg shadow-indigo-500/20 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </div>
      </header>
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-12 lg:px-8 lg:pt-20">
        <section id="top" className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-9">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-700">
              AI & Automation Engineer
            </span>
            <AnimatedText
              text="Moniem Ghazal"
              align="left"
              className="text-5xl font-semibold tracking-tight text-indigo-700 sm:text-6xl"
            />
            <div className="space-y-6 text-lg text-slate-600">
              <p className="max-w-xl leading-relaxed">
                I help teams move from ideas to production-ready AI experiences. From orchestrating multi-agent workflows to automating the unglamorous ops, I focus on shipping quickly without sacrificing reliability.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-[#1f254d] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(90deg, #a5b4fc 0%, #c4b5fd 50%, #bae6fd 100%)",
                    boxShadow: "0 12px 30px rgba(99, 102, 241, 0.18)",
                  }}
                >
                  Explore projects
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border border-[#a5b4fc] bg-white/35 px-6 py-3 text-sm font-semibold text-[#313284] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/55 hover:text-[#1f254d]"
                >
                  Schedule a chat
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-500">
              {toolStack.map((tool) => (
                <span
                  key={tool.name}
                  className="flex flex-col gap-1 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-2 shadow-sm shadow-slate-900/5"
                  title={`${tool.name} · ${tool.descriptor}`}
                >
                  <span className="text-sm font-semibold text-indigo-600">{tool.name}</span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{tool.descriptor}</span>
                </span>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm shadow-slate-900/5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-indigo-700">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal
            trigger="load"
            offset={40}
            duration={0.7}
            className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white/85 p-10 shadow-xl shadow-indigo-500/10"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-violet-100" />
            <div className="space-y-6 text-slate-700">
              <div className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-white/70 p-4 shadow-sm shadow-indigo-500/5">
                <div className="relative flex h-14 w-14 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-400 to-sky-400 opacity-80 blur" />
                  <Image src="/globe.svg" alt="Workflow orbit" width={52} height={52} className="relative z-10" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-400">Workflow snapshot</p>
                  <p className="text-sm font-medium text-indigo-700">Ops intake ? Agent routing ? Human QA</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-indigo-500">Latest sprint</p>
                <h3 className="text-2xl font-semibold text-indigo-700">
                  Shipping autonomous support flows at Intercom Enterprises
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Partnered with the CX org to launch a multi-modal workflow that triages inbound requests, synthesises context, and drafts responses in under six seconds.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-400">
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  6s responses
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  3 support queues
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  Human-in-the-loop
                </span>
              </div>
              <ol className="space-y-4">
                {sprintHighlights.map((item, index) => (
                  <li key={item.title} className="relative flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
                        {index + 1}
                      </span>
                      {index < sprintHighlights.length - 1 && (
                        <span className="mt-1 h-full w-px bg-indigo-100" aria-hidden="true" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>
        <section
          id="focus"
          className="grid gap-6 rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <h4 className="text-lg font-semibold text-indigo-700">{area.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
            </div>
          ))}
          <div className="flex flex-col gap-4 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-500 via-indigo-400 to-violet-400 p-6 text-white transition-transform duration-200 hover:-translate-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">How I work</p>
            <h4 className="text-lg font-semibold">Sprint, validate, scale.</h4>
            <p className="text-sm leading-relaxed text-white/80">
              My approach is tightly scoped experiments that ship within days, instrumented with the right analytics, and iterated until the impact compounds.
            </p>
          </div>
        </section>
        <section id="work" className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-indigo-700">Selected work</h2>
              <p className="text-sm text-slate-600">A snapshot of recent projects that pair automation with tangible business outcomes.</p>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              View all projects &gt;
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal
                key={project.title}
                as="article"
                delay={index * 0.08}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm shadow-slate-900/5"
              >
                {project.impact && (
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {project.impact}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-indigo-700">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-indigo-100 transition hover:bg-indigo-50"
                    >
                      See demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-white"
                    >
                      View GitHub
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 p-10 text-white shadow-xl shadow-indigo-900/20 scroll-mt-28 md:scroll-mt-36"
        >
          <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 translate-x-1/4 rounded-full bg-indigo-400/40 blur-3xl lg:block" />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Let&apos;s build</p>
              <h2 className="text-3xl font-semibold">Ready to unlock the next automation lever?</h2>
              <p className="text-base leading-relaxed text-white/80">
                Whether you need to prototype an AI assistant, automate mission-critical workflows, or audit an existing pipeline, I can help scope, build, and iterate alongside your team.
              </p>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Rapid discovery sprints to map the automation opportunity and define success metrics.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Build-and-measure loops so your team sees value before committing to long roadmaps.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Embedded collaboration with product, GTM, and ops to keep solutions grounded in reality.
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a
                  href="mailto:hello@moniemghazal.com"
                  className="rounded-full px-6 py-3 font-semibold text-[#303179] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(90deg, #a5b4fc 0%, #c4b5fd 50%, #bae6fd 100%)",
                    boxShadow: "0 12px 30px rgba(99, 102, 241, 0.18)",
                  }}
                >
                  Email Moniem
                </a>
                <Link
                  href="/projects"
                  className="rounded-full border border-white/65 bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/25"
                >
                  Browse portfolio
                </Link>
              </div>
              <p className="text-xs text-white/65">
                Prefer scheduling time directly? Drop a note in the form and I&apos;ll share calendar slots.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}