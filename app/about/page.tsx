import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Award, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Moniem Ghazal",
  description:
    "Moniem Ghazal — AI, Automation & Full-Stack Developer in Cairo. Milestones, certifications, and how I approach building software for teams.",
};

const POP = ["#2563eb", "#8b5cf6", "#f43f5e", "#f59e0b", "#65a30d"];

const certifications = [
  {
    provider: "McKinsey & Company",
    badge: "Forward",
    color: "#f59e0b",
    course: "McKinsey.org Forward Program",
    year: "Jul 2025",
    highlight: "Leadership labs, issue prioritisation, and decision sprints for fast-moving teams.",
  },
  {
    provider: "DeepLearning.AI",
    badge: "LangChain",
    color: "#8b5cf6",
    course: "LangChain for LLM Application Development",
    year: "Aug 2025",
    highlight: "Retrieval-augmented workflows, guardrails, and evaluation harnesses for production LLM apps.",
  },
];

const milestones = [
  {
    year: "Jul 2025 — Present",
    role: "AI & Automation Intern",
    company: "Intercom Enterprises",
    description:
      "Designing automation workflows with n8n and internal AI tools, building RAG-powered assistants with LangChain and prompt engineering, and integrating LLMs into business solutions.",
  },
  {
    year: "Jul — Sep 2024",
    role: "Data Scientist Intern",
    company: "Phoenix Consulting",
    description:
      "Collected, cleaned, and structured datasets in SQL, built Power BI dashboards for real-estate trends, and trained a property-price prediction model with regression and feature selection.",
  },
  {
    year: "Jul — Sep 2023",
    role: "Data Scientist Intern",
    company: "Phoenix Consulting",
    description:
      "Strengthened foundations in Python, web scraping for data acquisition, and data preprocessing; automated data-collection workflows and contributed to early-stage model design.",
  },
  {
    year: "2021 — 2025",
    role: "B.Sc. Computer Science",
    company: "Ain Shams University",
    description: "Graduated with a focus on AI, machine learning, and software engineering.",
  },
  {
    year: "In progress",
    role: "M.Sc. Scientific Computing",
    company: "Ain Shams University",
    description: "Deepening the mathematical and computational foundations behind modern AI systems.",
  },
];

const craft = [
  { text: "Automation workflows with n8n & internal AI tools", color: "#2563eb" },
  { text: "RAG assistants with LangChain & prompt engineering", color: "#8b5cf6" },
  { text: "ML models & Power BI dashboards", color: "#f43f5e" },
  { text: "Full-stack Next.js apps shipped to production", color: "#f59e0b" },
];

export default function About() {
  return (
    <div className="pt-28">
      <section className="container-x max-w-5xl pb-24">
        {/* Header */}
        <header className="space-y-5">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#8b5cf6" }} />
            About
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Building software that <span className="text-pop">matters</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-500">
            I&apos;m Moniem Ghazal — I work on AI &amp; automation at Intercom Enterprises and build
            full-stack web apps as a freelancer. With a B.Sc. in Computer Science from Ain Shams
            University, I help teams work smarter not harder — solving problems, automating the
            repetitive, and shipping software that delivers practical impact end-to-end.
          </p>
        </header>

        {/* Snapshot + currently */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="card p-8">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              A quick snapshot
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-500">
              I pair automation pilots with clear operators, measurable telemetry, and documentation
              people actually use. Whether it&apos;s an automation workflow, a RAG copilot, or a
              full-stack web app, I translate messy needs into reliable software.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {craft.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: item.color }} />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink p-8 text-white">
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#2563eb] via-[#8b5cf6] to-[#f43f5e]" />
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                Currently
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                AI &amp; Automation
              </h3>
              <p className="mt-1 text-sm text-white/60">Intercom Enterprises · Cairo</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Building software that helps teams work smarter through automation across multiple
              departments — and turning technology into practical impact.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <section className="mt-20">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5" style={{ color: "#f59e0b" }} />
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Certified &amp; <span className="text-pop">always learning</span>
            </h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-ink-500">
            Cohort-based programs and labs that keep my leadership, experimentation, and LLM delivery
            sharp.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.course} className="card card-hover relative overflow-hidden p-5">
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: cert.color }} />
                <div className="flex items-center justify-between pl-1.5">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.badge}
                  </span>
                  <span className="text-xs text-ink-400">{cert.year}</span>
                </div>
                <p className="mt-3 pl-1.5 text-sm font-semibold text-ink">{cert.course}</p>
                <p className="pl-1.5 text-xs font-medium text-ink-500">{cert.provider}</p>
                <p className="mt-2 pl-1.5 text-xs leading-relaxed text-ink-500">{cert.highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Milestones</h2>
          <div className="mt-8 space-y-3">
            {milestones.map((milestone, i) => {
              const c = POP[i % POP.length];
              return (
                <Reveal
                  key={`${milestone.role}-${milestone.year}`}
                  as="article"
                  delay={i * 0.05}
                  className="card relative grid gap-3 overflow-hidden p-6 md:grid-cols-[260px_1fr] md:items-start md:gap-8"
                >
                  <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: c }} />
                  <div className="pl-1.5">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400">
                      {milestone.year}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                      {milestone.role}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: c }}>{milestone.company}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-500">{milestone.description}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              Have something in mind?
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              I&apos;m available for freelance AI, automation, and web projects.
            </p>
          </div>
          <Link href="/#contact" className="btn-grad shrink-0">
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
