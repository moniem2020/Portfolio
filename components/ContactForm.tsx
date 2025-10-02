"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const defaultState = {
  name: "",
  email: "",
  company: "",
  projectSummary: "",
  timeline: "",
};

type FormState = typeof defaultState;

type Field = keyof FormState;

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const updateField = (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value } = event.target;
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formState.projectSummary
      ? `Automation project: ${formState.projectSummary.slice(0, 60)}`
      : "Automation project inquiry";

    const bodyLines = [
      "Hi Moniem,",
      "",
      formState.name
        ? `I'm ${formState.name}${formState.company ? ` from ${formState.company}` : ""}.`
        : formState.company
        ? `I'm reaching out from ${formState.company}.`
        : "I'm reaching out about automation work.",
      "",
      formState.projectSummary ? `Project context: ${formState.projectSummary}` : undefined,
      formState.timeline ? `Desired timeline: ${formState.timeline}` : undefined,
      formState.email ? `You can reach me at ${formState.email}.` : undefined,
      "",
      "Looking forward to connecting!",
    ].filter(Boolean);

    const mailtoUrl = `mailto:hello@moniemghazal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
    setHasSubmitted(true);
  };

  const isSubmitDisabled = !formState.email.trim() || !formState.projectSummary.trim();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg shadow-indigo-900/20 backdrop-blur"
    >
      <div className="flex flex-wrap gap-4">
        <label className="flex-1 min-w-[12rem] text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          Name
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={updateField("name")}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none focus:ring-0"
          />
        </label>
        <label className="flex-1 min-w-[12rem] text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          Company
          <input
            type="text"
            name="company"
            value={formState.company}
            onChange={updateField("company")}
            placeholder="Where you work"
            className="mt-2 w-full rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none focus:ring-0"
          />
        </label>
      </div>
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
        Email<span className="text-white/60"> *</span>
        <input
          type="email"
          name="email"
          required
          value={formState.email}
          onChange={updateField("email")}
          placeholder="you@company.com"
          className="mt-2 w-full rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none focus:ring-0"
        />
      </label>
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
        Project context<span className="text-white/60"> *</span>
        <textarea
          name="projectSummary"
          required
          value={formState.projectSummary}
          onChange={updateField("projectSummary")}
          placeholder="What are you hoping to build or improve?"
          rows={4}
          className="mt-2 w-full rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none focus:ring-0"
        />
      </label>
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
        Timeline
        <select
          name="timeline"
          value={formState.timeline}
          onChange={updateField("timeline")}
          className="mt-2 w-full rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-sm text-white focus:border-white/60 focus:outline-none focus:ring-0"
        >
          <option value="" className="text-slate-600">Select an option</option>
          <option value="0-2 weeks" className="text-slate-600">0-2 weeks (rapid)</option>
          <option value="1-2 months" className="text-slate-600">1-2 months</option>
          <option value="Exploring options" className="text-slate-600">Exploring options</option>
        </select>
      </label>
      <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">* Required fields</p>
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600 shadow-md shadow-indigo-900/20 transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-white/40 disabled:text-white/60"
      >
        Share project brief
      </button>
      {hasSubmitted && (
        <p className="text-xs text-white/70">
          Thanks for the details! Your email client should have opened - if not, reach me at hello@moniemghazal.com.
        </p>
      )}
    </form>
  );
}