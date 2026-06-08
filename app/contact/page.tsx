import type { Metadata } from "next";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Moniem Ghazal",
  description:
    "Get in touch with Moniem Ghazal, AI, Automation & Full-Stack Developer in Cairo. Send a project brief and I'll reply shortly.",
};

const details = [
  { icon: Mail, label: "Email", value: "moniemghazal@gmail.com", href: "mailto:moniemghazal@gmail.com", color: "#2563eb" },
  { icon: Phone, label: "Phone", value: "+20 100 944 1336", href: "tel:+201009441336", color: "#f97316" },
  { icon: MapPin, label: "Location", value: "Nasr City, Cairo · Remote friendly", color: "#2563eb" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/moniem-ghazal-49617438a/" },
  { icon: Github, label: "GitHub", href: "https://github.com/moniem2020" },
];

export default function Contact() {
  return (
    <div className="pt-28">
      <section className="container-x grid gap-12 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* Left: intro + details */}
        <div className="space-y-7">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#2563eb" }} />
            Contact
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Tell me what you <span className="text-pop">want to build</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-500">
            Whether it&apos;s an AI assistant, a RAG copilot, an automation pipeline, or a
            full-stack web app, share the outcome you&apos;re after. I&apos;ll reply with how
            I&apos;d approach it, a rough timeline, and next steps.
          </p>

          <div className="space-y-3 border-t border-line pt-6 text-sm">
            {details.map((d) => {
              const inner = (
                <>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: d.color }}
                  >
                    <d.icon className="h-4 w-4" />
                  </span>
                  <span>{d.value}</span>
                </>
              );
              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  className="flex items-center gap-3 text-ink-700 transition-colors hover:text-ink"
                >
                  {inner}
                </a>
              ) : (
                <p key={d.label} className="flex items-center gap-3 text-ink-700">
                  {inner}
                </p>
              );
            })}
          </div>

          <div className="flex gap-2.5 pt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-700 transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </section>
    </div>
  );
}
