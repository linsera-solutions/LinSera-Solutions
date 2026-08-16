"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "AI Solution",
  "Software",
  "Website",
  "Automation",
  "SEO / Digital",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.message.trim()) errors.message = "Tell us a little about your project.";

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    // NOTE: integration point — no backend endpoint is configured yet.
    // Replace this block with a real submission (API route, email service,
    // or CRM webhook) before launch. Isolated here so the swap is a single change.
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      throw new Error("NO_ENDPOINT_CONFIGURED");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-border bg-soft p-8">
        <p className="text-base font-medium text-ink">Thanks — your project inquiry is in.</p>
        <p className="mt-2 text-sm text-muted">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" required error={errors.name}>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field label="Email" required error={errors.email}>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <Field label="Company">
        <input
          id="company"
          type="text"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <Field label="Project Type" required error={errors.projectType}>
        <select
          id="project-type"
          value={values.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          className={inputClass(Boolean(errors.projectType))}
        >
          <option value="">Select an option</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project" required error={errors.message}>
        <textarea
          id="tell-us-about-your-project"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass(Boolean(errors.message))}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. The contact form isn&apos;t connected to a
          backend yet — please email{" "}
          <a href="mailto:hello@linserasolutions.com" className="underline">
            hello@linserasolutions.com
          </a>{" "}
          directly in the meantime.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Project Inquiry →"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    hasError ? "border-red-400" : "border-border"
  );
}
