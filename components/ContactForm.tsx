"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const defaultState = {
  name: "",
  email: "",
  company: "",
  projectSummary: "",
  timeline: "",
};

type FormState = typeof defaultState;
type Field = keyof FormState;

const inputClasses =
  "mt-2 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-400 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/15";
const labelClasses = "block text-xs font-semibold uppercase tracking-[0.16em] text-ink-500";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const updateField =
    (field: Field) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { value } = event.target;
      setFormState((current) => ({ ...current, [field]: value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formState.projectSummary
      ? `Project inquiry: ${formState.projectSummary.slice(0, 60)}`
      : "Freelance project inquiry";

    const bodyLines = [
      "Hi Moniem,",
      "",
      formState.name
        ? `I'm ${formState.name}${formState.company ? ` from ${formState.company}` : ""}.`
        : formState.company
          ? `I'm reaching out from ${formState.company}.`
          : "I'm reaching out about a freelance project.",
      "",
      formState.projectSummary ? `Project context: ${formState.projectSummary}` : undefined,
      formState.timeline ? `Desired timeline: ${formState.timeline}` : undefined,
      formState.email ? `You can reach me at ${formState.email}.` : undefined,
      "",
      "Looking forward to connecting!",
    ].filter(Boolean);

    const mailtoUrl = `mailto:moniemghazal@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
    setHasSubmitted(true);
  };

  const isSubmitDisabled = !formState.email.trim() || !formState.projectSummary.trim();

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClasses}>
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            value={formState.name}
            onChange={updateField("name")}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClasses}>
            Company
          </label>
          <input
            id="cf-company"
            type="text"
            name="company"
            value={formState.company}
            onChange={updateField("company")}
            placeholder="Where you work"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className={labelClasses}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          required
          value={formState.email}
          onChange={updateField("email")}
          placeholder="you@company.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="cf-summary" className={labelClasses}>
          Project context <span className="text-accent">*</span>
        </label>
        <textarea
          id="cf-summary"
          name="projectSummary"
          required
          rows={4}
          value={formState.projectSummary}
          onChange={updateField("projectSummary")}
          placeholder="What are you hoping to build or improve?"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="cf-timeline" className={labelClasses}>
          Timeline
        </label>
        <select
          id="cf-timeline"
          name="timeline"
          value={formState.timeline}
          onChange={updateField("timeline")}
          className={inputClasses}
        >
          <option value="">Select an option</option>
          <option value="0-2 weeks">0–2 weeks (rapid)</option>
          <option value="1-2 months">1–2 months</option>
          <option value="Exploring options">Exploring options</option>
        </select>
      </div>

      <button type="submit" disabled={isSubmitDisabled} className="btn-accent disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-400">
        Send project brief
        <ArrowUpRight className="h-4 w-4" />
      </button>

      {hasSubmitted && (
        <p className="text-xs text-ink-500">
          Thanks for the details — your email client should have opened. If not, reach me at{" "}
          <a href="mailto:moniemghazal@gmail.com" className="font-semibold text-accent">
            moniemghazal@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
