import AnimatedText from "@/components/AnimatedText";
import Reveal from "@/components/Reveal";

const milestones = [
  {
    year: "2024",
    title: "Automation Engineer Intern - Intercom Enterprises",
    description: "Partnering with product and CX leads to design and deploy agentic support flows, automations, and data insights that scale with demand.",
  },
  {
    year: "2023",
    title: "Graduated - Ain Shams University",
    description: "B.Sc. in Computer Science with a focus on applied machine learning, reinforcement learning, and distributed systems.",
  },
  {
    year: "2022",
    title: "AI Project Fellowships",
    description: "Shipped open-source experiments with LangChain, contributed to ML communities, and facilitated workshops on automation orchestration.",
  },
];

const skillStack = [
  { category: "AI & ML", skills: ["LangChain", "LangGraph", "LLM orchestration", "Retrieval augmentation"] },
  { category: "Automation", skills: ["n8n", "Zapier", "Workflow design", "Systems integration"] },
  { category: "Engineering", skills: ["TypeScript", "Next.js", "Python", "Framer Motion"] },
];

const principles = [
  {
    title: "Lead with clarity",
    description: "Define success criteria upfront and translate ideas into measurable outcomes everyone can rally behind.",
  },
  {
    title: "Prototype in public",
    description: "Ship early, collect qualitative feedback quickly, and let the data guide the next iteration.",
  },
  {
    title: "Make it maintainable",
    description: "Operational excellence beats flash. I focus on resilient systems with the documentation and instrumentation operators need.",
  },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] -z-10 flex justify-center blur-3xl">
        <div className="h-[280px] w-[540px] bg-gradient-to-r from-indigo-300 via-violet-200 to-sky-200 opacity-60" />
      </div>
      <section className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-10 md:pt-20 lg:px-8">
        <header className="space-y-6">
          <AnimatedText
            text="Building systems that scale knowledge work"
            align="left"
            className="text-4xl font-semibold text-slate-900 md:text-5xl"
          />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            I am Moniem Ghazal, an AI and Automation Engineer focused on helping ambitious teams operationalise AI. I specialise in orchestrating agentic workflows, automating data-rich processes, and translating research into products that feel effortless to use.
          </p>
        </header>
        <section className="grid gap-8 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-slate-900">A quick snapshot</h2>
            <p className="text-base leading-relaxed text-slate-600">
              I focus on identifying the right level of automation, mapping the surrounding ecosystem, and ensuring every release actually lands with end users. My work spans strategy, experimentation, and production delivery.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Craft</p>
                <p className="mt-2 text-sm text-slate-600">Rapid prototyping, agent design, workflow orchestration, human-in-the-loop optimisation.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Industry focus</p>
                <p className="mt-2 text-sm text-slate-600">Customer support, product operations, go-to-market enablement, internal knowledge platforms.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-500 via-indigo-400 to-violet-400 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/80">Currently</p>
            <h3 className="text-2xl font-semibold">Intercom Enterprises - AI and Automation Engineer Intern</h3>
            <p className="text-sm leading-relaxed text-white/80">
              Translating support operations into a fully instrumented automation stack. Collaborating with designers, engineers, and go-to-market leads to deliver reliable experiences at scale.
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
