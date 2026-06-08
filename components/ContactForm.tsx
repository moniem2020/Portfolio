"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const defaultState = {
  name: "",
  email: "",
  company: "",
  projectSummary: "",
  timeline: "",
};

type FormState = typeof defaultState;
type Field = keyof FormState;
type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "mt-2 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-400 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/15";
const labelClasses = "block text-xs font-semibold uppercase tracking-[0.16em] text-ink-500";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField =
    (field: Field) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { value } = event.target;
      setFormState((current) => ({ ...current, [field]: value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json().catch(() => ({ success: false }));

      if (data.success) {
        setStatus("success");
        setFormState(defaultState);
      } else {
        setErrorMessage(data.message ?? "");
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          Message sent successfully
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-500">
          Thanks for reaching out. Your message landed in my inbox and I&apos;ll get back to you
          shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-1"
        >
          Send another message
        </button>
      </div>
    );
  }

  const isSubmitDisabled =
    status === "submitting" || !formState.email.trim() || !formState.projectSummary.trim();

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
          <option value="0 to 2 weeks">0 to 2 weeks (rapid)</option>
          <option value="1 to 2 months">1 to 2 months</option>
          <option value="Exploring options">Exploring options</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="btn-grad disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send project brief
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-xs text-rose-600">
          {errorMessage ? `${errorMessage} ` : "Something went wrong while sending. "}
          You can also email me directly at{" "}
          <a href="mailto:moniemghazal@gmail.com" className="font-semibold underline">
            moniemghazal@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
