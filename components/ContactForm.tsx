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

  const updateField =
    (field: Field) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { value } = event.target;
      setFormState((current) => ({ ...current, [field]: value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formState.projectSummary
      ? `Automation project: ${formState.projectSummary.slice(0, 60)}`
      : "Automation project inquiry";

    const bodyLines = [
      "Hi Abdelmoniem,",
      "",
      formState.name
        ? `I'm ${formState.name}${formState.company ? ` from ${formState.company}` : ""}.`
        : formState.company
          ? `I'm reaching out from ${formState.company}.`
          : "I'm reaching out about automation work.",
      "",
      formState.projectSummary
        ? `Project context: ${formState.projectSummary}`
        : undefined,
      formState.timeline
        ? `Desired timeline: ${formState.timeline}`
        : undefined,
      formState.email ? `You can reach me at ${formState.email}.` : undefined,
      "",
      "Looking forward to connecting!",
    ].filter(Boolean);

    const mailtoUrl = `mailto:moniemghazal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
    setHasSubmitted(true);
  };

  const isSubmitDisabled =
    !formState.email.trim() || !formState.projectSummary.trim();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-indigo-100 bg-white p-6 shadow-xl shadow-indigo-200/40 sm:p-8"
    >
      <div className="flex flex-wrap gap-5">
        <label className="flex-1 min-w-[12rem] text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
          Name
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={updateField("name")}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="flex-1 min-w-[12rem] text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
          Company
          <input
            type="text"
            name="company"
            value={formState.company}
            onChange={updateField("company")}
            placeholder="Where you work"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      </div>
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
        Email<span className="text-indigo-400"> *</span>
        <input
          type="email"
          name="email"
          required
          value={formState.email}
          onChange={updateField("email")}
          placeholder="you@company.com"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </label>
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
        Project context<span className="text-indigo-400"> *</span>
        <textarea
          name="projectSummary"
          required
          value={formState.projectSummary}
          onChange={updateField("projectSummary")}
          placeholder="What are you hoping to build or improve?"
          rows={4}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
      </label>
      <label className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
        Timeline
        <select
          name="timeline"
          value={formState.timeline}
          onChange={updateField("timeline")}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
        >
          <option value="" className="text-slate-500">
            Select an option
          </option>
          <option value="0-2 weeks" className="text-slate-500">
            0-2 weeks (rapid)
          </option>
          <option value="1-2 months" className="text-slate-500">
            1-2 months
          </option>
          <option value="Exploring options" className="text-slate-500">
            Exploring options
          </option>
        </select>
      </label>
      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
        * Required fields
      </p>
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-md shadow-indigo-300/40 transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:from-slate-200 disabled:via-slate-200 disabled:to-slate-200 disabled:text-slate-400"
      >
        Share project brief
      </button>
      {hasSubmitted && (
        <p className="text-xs text-slate-500">
          Thanks for the details! Your email client should have opened - if not,
          reach me at moniemghazal@gmail.com.
        </p>
      )}
    </form>
  );
}
