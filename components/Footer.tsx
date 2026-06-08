"use client";

import Link from "next/link";
import { Linkedin, Github, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/moniem-ghazal-49617438a/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/moniem2020", icon: Github },
  { name: "Email", href: "mailto:moniemghazal@gmail.com", icon: Mail },
];

const quickLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#f97316]" />
      <div className="bg-grid absolute inset-0 opacity-[0.08]" />
      <div className="container-x relative">
        {/* CTA band */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">
              Available for freelance
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Have a workflow worth automating?
            </h2>
            <p className="text-sm leading-relaxed text-white/60">
              Tell me what&apos;s slowing your team down — I&apos;ll tell you how I&apos;d ship it.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-white"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Main */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <span className="font-display text-lg font-semibold">Moniem Ghazal</span>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              AI, Automation &amp; Full-Stack Developer building RAG copilots, AI automations, and
              web apps that turn messy operations into reliable software.
            </p>
            <div className="flex gap-2.5 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white hover:bg-white hover:text-ink"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">Navigate</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">Get in touch</h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-white/40" />
                Nasr City, Cairo
              </li>
              <li>
                <a href="mailto:moniemghazal@gmail.com" className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-white/40" />
                  moniemghazal@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+201009441336" className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-white/40" />
                  +20 100 944 1336
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Moniem Ghazal. Built with Next.js &amp; Tailwind.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Building software that matters</p>
        </div>
      </div>
    </footer>
  );
}
