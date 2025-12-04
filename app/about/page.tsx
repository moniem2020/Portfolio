import AnimatedText from "@/components/AnimatedText";
import Reveal from "@/components/Reveal";

const certifications = [
  {
    provider: "McKinsey Forward",
    badge: "Forward",
    course: "Forward Program",
    year: "Jul 2025",
    highlight: "Leadership labs, issue prioritisation, and decision sprints for fast-moving teams.",
    credentialId: "122c2c51-df55-4169-924f-1a0fba322cdc",
  },
  {
    provider: "DeepLearning.AI",
    badge: "Replit",
    course: "Vibe Coding 101 with Replit",
    year: "2024",
    highlight: "Creative coding experiments that combine prompt design with realtime feedback loops.",
  },
  {
    provider: "DeepLearning.AI",
    badge: "LangChain",
    course: "LangChain for LLM Application Development",
    year: "2024",
    highlight: "Built retrieval-augmented workflows, guardrails, and evaluation harnesses for production LLM apps.",
  },
];

const milestones = [
  {
    year: "2025",
    title: "AI & Automation Intern - Intercom Enterprises",
    description: "Delivering cross-department automations: RAG-powered AI assistants, n8n workflows, and LangChain/LangGraph pipelines.",
  },
  {
    year: "2024",
    title: "Data Science Intern - Phoenix Consulting",
    description: "Built Power BI dashboards, ML pricing models for real-estate analytics, and property-price prediction systems.",
  },
  {
    year: "2023",
    title: "Data Science Intern - Phoenix Consulting",
    description: "Enhanced Python proficiency, web scraping, data preprocessing, and supported early-stage model design.",
  },
  {
    year: "2021-2025",
    title: "MSc in Scientific Computing - Ain Shams University",
    description: "In progress. Specializing in AI, machine learning, and computational methods.",
  },
];

const skillStack = [
  {
    category: "AI & Automation",
    skills: [
      "LangChain",
      "LangGraph",
      "Gemini API",
      "Retrieval-augmented generation",
      "Prompt engineering",
    ],
  },
  {
    category: "Automation & Ops",
    skills: ["ARIS BPM", "n8n", "Workflow design", "Document generation"],
  },
  {
    category: "Data & Strategy",
    skills: ["Power BI", "Machine learning", "Lean startup", "Cross-team facilitation"],
  },
];

const principles = [
  {
    title: "Start with the operator",
    description: "Understand the people in the loop before designing the agent. Clear roles unlock adoption.",
  },
  {
    title: "Ship transparent automation",
    description: "Every workflow needs observability, guardrails, and documentation so teams trust it on day two.",
  },
  {
    title: "Iterate in the open",
    description: "Prototype quickly, share learnings, and let data and conversations steer the roadmap.",
  },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] -z-10 flex justify-center blur-3xl">
        <div className="h-[280px] w-[540px] bg-gradient-to-r from-indigo-300 via-violet-200 to-sky-200 opacity-60" />
      </div>
      <section className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8">
        <header className="space-y-6">
          <AnimatedText
            text="Learning fast, shipping faster"
            align="left"
            className="text-4xl font-semibold text-slate-900 md:text-5xl pb-2"
          />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            I&apos;m Abdelmoniem Ghazal, pursuing an MSc in Scientific Computing at Ain Shams University while working as an AI & Automation intern at Intercom Enterprises. I build retrieval-augmented generation systems, automation workflows, and data-driven solutions. Previously interned at Phoenix Consulting, developing Power BI dashboards and ML pricing models.
          </p>
        </header>

        <section className="rounded-3xl border border-indigo-100 bg-white/70 px-6 py-10 shadow-sm shadow-indigo-200/30 sm:px-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-5 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-500">Certified by</span>
            <h2 className="text-2xl font-semibold text-slate-900">Continuous learning that keeps my automation stack current</h2>
            <p className="text-sm text-slate-600">
              Cohort-based programs and labs that sharpen leadership, experimentation, and LLM delivery.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4 pt-4">
              {certifications.map((cert) => (
                <div key={cert.course} className="group relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 group-hover:border-indigo-200 group-hover:bg-white"
                  >
                    <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.26em] text-indigo-500">
                      {cert.badge}
                    </span>
                    {cert.provider}
                  </button>
                  <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 hidden w-64 -translate-x-1/2 rounded-xl border border-slate-200 bg-white/95 p-4 text-left shadow-xl shadow-indigo-300/20 transition group-hover:block group-focus-within:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-400">{cert.provider}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{cert.course}</p>
                    <p className="text-xs text-slate-500">{cert.year}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{cert.highlight}</p>
                    {cert.credentialId && (
                      <p className="mt-2 text-[11px] text-slate-400">Credential ID: {cert.credentialId}</p>
                    )}
                  </div>
                  <div className="mt-3 space-y-1 rounded-xl border border-slate-200/70 bg-white/80 p-4 text-left text-xs text-slate-600 sm:hidden">
                    <p className="font-semibold text-slate-900">{cert.course}</p>
                    <p className="text-slate-500">{cert.year}</p>
                    <p>{cert.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-slate-900">A quick snapshot</h2>
            <p className="text-base leading-relaxed text-slate-600">
              I focus on pairing automation pilots with clear operators, measurable telemetry, and documentation people will actually use. Whether it&apos;s ECM scripting, RAG copilots, or remote talent ops, I translate messy needs into reliable workflows.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Craft</p>
                <p className="mt-2 text-sm text-slate-600">Automation audits, LangChain/LangGraph builds, ARIS BPM scripting, and n8n orchestration.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Impact zones</p>
                <p className="mt-2 text-sm text-slate-600">Customer support, ECM, remote talent operations, and analytics-driven decision support.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-500 via-indigo-400 to-violet-400 p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/80">Currently</p>
            <h3 className="text-2xl font-semibold">AI & Automation Intern - Intercom Enterprises</h3>
            <p className="text-sm leading-relaxed text-white/80">
              Delivering automation for ECM and CX teams: ARIS BPM scripts, LangChain/LangGraph retrieval systems, Gemini-powered document pipelines, and n8n hand-offs that keep humans in control.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">Milestones</h2>
          <div className="space-y-6">
            {milestones.map((milestone) => (
              <Reveal
                key={milestone.title}
                as="article"
                className="flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm shadow-slate-900/5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">{milestone.year}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{milestone.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 md:max-w-xl">{milestone.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm shadow-slate-900/5">
            <h2 className="text-2xl font-semibold text-slate-900">Principles</h2>
            <div className="space-y-5">
              {principles.map((principle) => (
                <div key={principle.title} className="space-y-2 rounded-2xl border border-slate-200 bg-white/70 p-5">
                  <h3 className="text-base font-semibold text-slate-900">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm shadow-slate-900/5">
            <h2 className="text-2xl font-semibold text-slate-900">Toolkit</h2>
            <div className="space-y-4">
              {skillStack.map((stack) => (
                <div key={stack.category} className="space-y-2 rounded-2xl border border-slate-200 bg-white/70 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
