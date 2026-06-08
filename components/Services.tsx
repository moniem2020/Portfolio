"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Search, Code2, BarChart3, Check, ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/data/services";

const iconMap = {
  bot: Bot,
  search: Search,
  code: Code2,
  chart: BarChart3,
} as const;

const colors = ["#2563eb", "#f97316", "#2563eb", "#f97316"];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon];
  const color = colors[index % colors.length];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="card card-hover group relative flex flex-col overflow-hidden p-7"
    >
      {/* color top bar */}
      <span className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: color }} />

      <div className="flex items-center justify-between pt-1.5">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-105"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span className="font-mono text-2xl font-semibold" style={{ color }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.tagline}</p>

      <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-y scroll-mt-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#2563eb" }} />
              What I can build for you
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Freelance services, <span className="text-pop">shipped end-to-end</span>
            </h2>
            <p className="text-base leading-relaxed text-ink-500">
              I partner with founders and teams to design, build, and ship AI and automation
              that pays for itself — scoped to your outcome, not billable hours.
            </p>
          </div>
          <Link href="/#contact" className="btn-grad w-fit shrink-0">
            Get a quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
