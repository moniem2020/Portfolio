import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work — Moniem Ghazal",
  description:
    "Selected projects by Moniem Ghazal — AI assistants, RAG copilots, automation pipelines, and full-stack web apps with measurable impact.",
};

const spotlight = [
  {
    label: "Automation",
    body: "Systems that shrink repetitive operations, keep humans in the loop, and surface the right context automatically.",
  },
  {
    label: "AI assistants",
    body: "From retrieval-augmented copilots to routing agents — each project pairs LLMs with robust guardrails.",
  },
  {
    label: "Product velocity",
    body: "I ship quickly, validate with the team, and iterate until the experience becomes second nature.",
  },
];

export default function Projects() {
  return (
    <div className="pt-28">
      <section className="container-x pb-24">
        {/* Header */}
        <header className="max-w-3xl space-y-5">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Selected work
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Work that pairs automation with measurable impact
          </h1>
          <p className="text-lg leading-relaxed text-ink-500">
            Every engagement starts with the business outcome. I partner with teams to design the
            right agentic workflows, instrumentation, and handoffs that keep quality high while
            reducing operational drag.
          </p>
        </header>

        {/* Spotlight */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {spotlight.map((item) => (
            <div key={item.label} className="card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="mt-16 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Case studies
          </h2>
          <span className="font-mono text-xs text-ink-400">{projects.length} projects</span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              as="article"
              delay={index * 0.06}
              className="card card-hover flex flex-col p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <span className="font-mono text-sm text-ink-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-base leading-relaxed text-ink-500">{project.description}</p>

              {project.challenge && (
                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-line bg-paper p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                      Challenge
                    </p>
                    <p className="mt-1.5 text-sm text-ink-700">{project.challenge}</p>
                  </div>
                  {project.solution && (
                    <div className="rounded-xl border border-accent/20 bg-accent-soft p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                        Solution
                      </p>
                      <p className="mt-1.5 text-sm text-ink-700">{project.solution}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-5 flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm font-medium text-ink-700">{project.impact}</p>
              </div>

              {(project.demo || project.github) && (
                <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" /> Live site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      <Github className="h-4 w-4" /> View code
                    </a>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Want results like these?
            </h2>
            <p className="mt-1.5 text-sm text-white/60">
              I take on a limited number of freelance projects at a time.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
