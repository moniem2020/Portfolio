'use client';
import { useState } from "react";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import Reveal from "@/components/Reveal";
import CircularProgress from "@/components/CircularProgress";
import { projects } from "@/data/projects";

const focusAreas = [
  {
    title: "Operational automations",
    description:
      "Mapping customer support, ECM, and talent workflows to spot the highest-leverage automation loops.",
  },
  {
    title: "RAG knowledge systems",
    description:
      "Shipping retrieval pipelines with LangChain and LangGraph that keep answers current, governed, and observable.",
  },
  {
    title: "Remote team enablement",
    description:
      "Designing playbooks and analytics so distributed teams can deliver without micromanagement.",
  },
];

const stats = [
  { label: "Automation pilots delivered", value: "6" },
  { label: "Startup awards", value: "1" },
  { label: "Cohort programs completed", value: "3" },
];

const logos = [
  "LangChain",
  "LangGraph",
  "Gemini API",
  "ARIS BPM",
  "n8n",
  "Power BI",
  "RAG Systems",
  "Remote Ops",
];

const heroProfiles = [
  {
    id: "intern",
    label: "Intercom intern",
    headline: "Automating ECM and support operations with LangChain, LangGraph, and Gemini.",
    description:
      "Document generation, retrieval pipelines, and n8n orchestration that keep analysts in the loop.",
    signal: "Automation delivered across CX, ECM, and analytics teams.",
    highlights: [
      { label: "Stack", value: "ARIS BPM / LangChain / n8n" },
      { label: "Focus", value: "ECM & support automation" },
    ],
  },
  {
    id: "founder",
    label: "Remotized founder",
    headline: "Built a remote talent platform connecting GCC SMEs with Egyptian specialists.",
    description:
      "Led product, growth, and ops automation to get Remotized from MVP to award-winning marketplace.",
    signal: "Winner of Startup Power Egypt 2025.",
    highlights: [
      { label: "Team enablement", value: "Remote playbooks & analytics" },
      { label: "Acquisition", value: "Zero paid marketing" },
    ],
  },
  {
    id: "analyst",
    label: "Data scientist",
    headline: "Power BI dashboards and ML pricing models for real-estate decisions.",
    description:
      "Combined Python, machine learning, and BI storytelling to surface market signals for Phoenix Consulting clients.",
    signal: "Interactive pricing models piloted within 3 months.",
    highlights: [
      { label: "Tooling", value: "Power BI / Python / ML" },
      { label: "Outcome", value: "Faster pricing iteration" },
    ],
  },
];

const skills = [
  { name: "LangChain", percentage: 95, color: "#6366f1" },
  { name: "LangGraph", percentage: 90, color: "#8b5cf6" },
  { name: "Python", percentage: 92, color: "#3b82f6" },
  { name: "TypeScript", percentage: 88, color: "#06b6d4" },
  { name: "n8n Automation", percentage: 93, color: "#10b981" },
  { name: "Power BI", percentage: 85, color: "#f59e0b" },
  { name: "RAG Systems", percentage: 90, color: "#ec4899" },
  { name: "ARIS BPM", percentage: 87, color: "#6366f1" },
];

export default function Home() {
  const [activeProfile, setActiveProfile] = useState(heroProfiles[0]);
  const activeIndex = heroProfiles.findIndex((profile) => profile.id === activeProfile.id);
  const progress = ((activeIndex + 1) / heroProfiles.length) * 100;
  const marqueeLogos = [...logos, ...logos];

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f5f3ff] via-white to-[#e0f2fe]">
        <span
          className="pointer-events-none absolute -left-24 top-20 hidden h-64 w-64 rounded-full bg-violet-200/70 blur-3xl sm:block"
          style={{ animation: "float-slow 24s ease-in-out infinite" }}
        />
        <span
          className="pointer-events-none absolute -right-24 top-1/3 hidden h-72 w-72 rounded-full bg-sky-200/70 blur-3xl lg:block"
          style={{ animation: "float-medium 28s ease-in-out infinite" }}
        />
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-20 overflow-hidden px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-10 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-700 shadow-sm shadow-indigo-500/10">
                AI & Automation Intern
                <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400/80" />
              </div>
              <AnimatedText
                text="Abdelmoniem Ghazal"
                align="left"
                className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl"
              />
              <div className="space-y-6 text-lg text-slate-600">
                <p className="max-w-xl leading-relaxed">
                  I help ECM, CX, and remote talent teams automate the repetitive work so people stay focused on decisions, delivery, and people.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="rounded-full px-6 py-3 text-sm font-semibold text-[#1f254d] transition-transform duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(90deg, #a5b4fc 0%, #c4b5fd 50%, #bae6fd 100%)",
                      boxShadow: "0 18px 40px rgba(99, 102, 241, 0.18)",
                    }}
                  >
                    Explore projects
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-full border border-[#a5b4fc] bg-white/40 px-6 py-3 font-semibold text-[#313284] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/55 hover:text-[#1f254d]"
                  >
                    Schedule a chat
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-600">
                    Cairo, Egypt
                  </span>
                  <a
                    href="mailto:moniemghazal@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-600 transition hover:border-indigo-200 hover:bg-white"
                  >
                    moniemghazal@gmail.com
                  </a>
                  <a
                    href="tel:+201009441336"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-600 transition hover:border-indigo-200 hover:bg-white"
                  >
                    +20 100 944 1336
                  </a>
                </div>
              </div>



              <div className="relative overflow-hidden rounded-3xl border border-indigo-100/70 bg-white/75 p-6 shadow-xl shadow-indigo-500/10 backdrop-blur-sm">
                <span
                  className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-200/60 blur-2xl"
                  style={{ animation: "float-medium 20s ease-in-out infinite" }}
                />
                <div className="flex flex-wrap items-center gap-2">
                  {heroProfiles.map((profile) => {
                    const isActive = profile.id === activeProfile.id;
                    return (
                      <button
                        key={profile.id}
                        type="button"
                        onClick={() => setActiveProfile(profile)}
                        className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 ${isActive
                          ? "border-indigo-500/60 bg-indigo-500/10 text-indigo-700 shadow-sm shadow-indigo-500/20"
                          : "border-slate-200 bg-white/70 text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                          }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full transition ${isActive ? "bg-indigo-500" : "bg-slate-300 group-hover:bg-indigo-300"
                            }`}
                        />
                        {profile.label}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-6 space-y-4 text-left">
                  <p className="text-base font-semibold uppercase tracking-[0.28em] text-indigo-500/80">{activeProfile.signal}</p>
                  <h2 className="text-2xl font-semibold text-slate-900">{activeProfile.headline}</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{activeProfile.description}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeProfile.highlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-indigo-500/10"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500/80">{highlight.label}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-900">{highlight.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 h-1.5 w-full rounded-full bg-indigo-100/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-sky-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.26em] text-indigo-400">
                  Now viewing: {activeProfile.label}
                </p>
              </div>

              <div className="relative w-full overflow-hidden rounded-full border border-indigo-100 bg-white/70 px-6 py-3 shadow-sm">
                <div
                  className="flex w-max items-center whitespace-nowrap text-sm font-medium text-slate-600 will-change-transform"
                  style={{ animation: "marquee 22s linear infinite", minWidth: "200%" }}
                >
                  {marqueeLogos.map((logo, index) => (
                    <span key={`${logo}-${index}`} className="inline-flex items-center gap-2 px-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                      {logo}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/90 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/90 to-transparent" />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white/90 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <span className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-indigo-100/80 opacity-0 blur-2xl transition group-hover:opacity-100" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <Reveal
              trigger="load"
              offset={40}
              duration={0.7}
              className="relative min-w-0 overflow-hidden rounded-3xl border border-indigo-100 bg-white/80 p-10 shadow-xl shadow-indigo-500/10"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-violet-100" />
              <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-indigo-200/50 blur-3xl" />
              <div className="absolute -left-16 bottom-6 h-36 w-36 rounded-full bg-sky-200/50 blur-3xl" />
              <div className="space-y-4 text-slate-700">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-indigo-500">Latest sprint</p>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Shipping autonomous support flows at Intercom Enterprises
                </h3>
                <p className="leading-relaxed">
                  Partnered with the CX org to launch a multi-modal workflow that triages inbound requests, synthesises context, and drafts responses in under six seconds.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    AI agent intercepts inbound tickets, surfaces relevant CRM context, and suggests next actions in a single operator view.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    Guardrails with human-in-the-loop approvals ensure critical comms stay on-brand while repetitive questions auto-resolve.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                    Live dashboards track precision, deflection rate, and time saved, feeding the next iteration cycle.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl border border-indigo-100 bg-white/70 p-4 text-sm font-medium text-slate-600">
                  &ldquo;Abdelmoniem helped us move from an unwieldy ops backlog to a self-serve automation engine in weeks, not months. The team finally has bandwidth to focus on high-touch moments.&rdquo;
                </div>
              </div>
            </Reveal>
          </div>

          <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="space-y-6 min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-500/80">Where I focus</p>
              <h2 className="text-3xl font-semibold text-slate-900">From messy processes to measurable automation wins</h2>
              <p className="text-base leading-relaxed text-slate-600">
                Every engagement pairs deep discovery with fast experimentation. I meet teams where they are, co-design the right guardrails, and deliver automation people actually adopt.
              </p>
            </div>
            <div className="grid min-w-0 w-full gap-4">
              {focusAreas.map((area) => (
                <Reveal
                  key={area.title}
                  delay={0.1}
                  className="flex h-full w-full min-w-0 flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-900/5"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{area.title}</h3>
                  <p className="flex-1 min-w-0 text-sm leading-relaxed text-slate-600">{area.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    Built for humans first
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Skills Section with Circular Progress */}
          <section className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8 shadow-xl shadow-indigo-500/10 sm:p-12">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="relative space-y-8">
              {/* Section Header */}
              <div className="text-center">
                <Reveal>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-500/80">Technical Expertise</p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Skills &amp; Proficiency</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                    Hands-on experience building production-ready AI systems and automation workflows
                  </p>
                </Reveal>
              </div>

              {/* Circular Progress Bars Grid */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill, index) => (
                  <Reveal key={skill.name} delay={index * 0.1}>
                    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:bg-white/80 hover:shadow-lg hover:shadow-indigo-500/20">
                      <CircularProgress
                        percentage={skill.percentage}
                        label={skill.name}
                        size={120}
                        strokeWidth={8}
                        delay={index * 100}
                        color={skill.color}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Bottom CTA */}
              <Reveal delay={0.5}>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-6 py-3 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-sm transition hover:bg-white hover:shadow-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
                    Always learning and expanding my toolkit
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Selected work</h2>
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
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="flex-1 min-w-0 text-sm leading-relaxed text-slate-600">{project.description}</p>
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
            className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-500 p-10 text-white"
          >
            <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 translate-x-1/4 rounded-full bg-indigo-400/40 blur-3xl lg:block" />
            <div className="relative max-w-3xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Let&apos;s build</p>
              <h2 className="text-3xl font-semibold">Ready to launch your next automation sprint?</h2>
              <p className="text-base leading-relaxed text-white/80">
                From ECM scripting to RAG copilots and remote ops dashboards, I can help scope the opportunity, build the automation, and hand it over with clarity.
              </p>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Process walkthroughs to map ECM and CX flows, document tooling, and define success metrics.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  RAG pipelines, document generators, and n8n automations delivered with observability and guardrails.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Remote-first playbooks and enablement so your teams keep shipping after hand-off.
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a
                  href="mailto:moniemghazal@gmail.com"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-[#1f254d] transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(90deg, #a5b4fc 0%, #c4b5fd 50%, #bae6fd 100%)",
                    boxShadow: "0 12px 30px rgba(99, 102, 241, 0.18)",
                  }}
                >
                  Email Abdelmoniem
                </a>
                <Link
                  href="/projects"
                  className="rounded-full border border-white/65 bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/25"
                >
                  Browse portfolio
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
      <style jsx global>{`
        html, body {
          overflow-x: hidden !important;
        }
      `}</style>
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate3d(0px, 0px, 0px) scale(1);
          }
          50% {
            transform: translate3d(18px, -24px, 0px) scale(1.05);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translate3d(0px, 0px, 0px) scale(1);
          }
          50% {
            transform: translate3d(-16px, 20px, 0px) scale(1.03);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
