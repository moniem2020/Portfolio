import { projects } from "@/data/projects";
import AnimatedText from "@/components/AnimatedText";
import Reveal from "@/components/Reveal";

const spotlight = [
  {
    label: "Automation",
    body: "I design systems that shrink repetitive operations, keep humans in the loop, and surface the right context automatically.",
  },
  {
    label: "AI assistants",
    body: "From retrieval-augmented copilots to personalised routing agents, each project pairs LLMs with robust guardrails.",
  },
  {
    label: "Product velocity",
    body: "I ship quickly, validate with the team, and iterate until the experience becomes second nature.",
  },
];

export default function Projects() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f5f3ff] via-white to-[#e0f2fe] pt-24">
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
            Selected projects
          </span>
          <AnimatedText
            text="Work that pairs automation with measurable impact"
            align="left"
            className="text-4xl font-semibold text-slate-900 md:text-5xl"
          />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Each engagement starts with the desired business outcome. I partner with cross-functional teams to design the right agentic workflows, instrumentation, and handoffs that keep quality high while reducing operational drag.
          </p>
        </header>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spotlight.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm shadow-slate-900/5">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </section>
        <section className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold text-slate-900">Case studies</h2>
            <p className="max-w-xl text-sm text-slate-600">
              Explore the approach, tooling, and outcomes behind shipped automation projects. Each write-up includes what worked, what changed, and the next iteration planned.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                as="article"
                delay={index * 0.06}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-slate-900/5"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-indigo-50 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                  <span className="text-sm font-medium text-indigo-500">0{index + 1}</span>
                </div>

                {/* Tech Stack Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200/50"
                    >
                      <span className="text-indigo-500">🧩</span> {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-base leading-relaxed text-slate-600">{project.description}</p>

                {/* Challenge & Solution - Case Study Style */}
                {project.challenge && (
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenge</p>
                      <p className="mt-1 text-sm text-slate-600">{project.challenge}</p>
                    </div>
                    {project.solution && (
                      <div className="rounded-xl bg-indigo-50/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">Solution</p>
                        <p className="mt-1 text-sm text-slate-600">{project.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Impact */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-emerald-500">📈</span>
                  <p className="text-sm font-medium text-emerald-700">{project.impact}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
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
      </section>
    </div>
  );
}
