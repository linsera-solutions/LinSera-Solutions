"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "AI Solution",
  "Software Development",
  "Website / Web Solution",
  "Automation",
  "SEO / Digital Growth",
  "Research / Product Development",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
  _gotcha: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
  _gotcha: "",
};

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please describe your project (at least 10 characters).";
  } else if (values.message.trim().length > 3000) {
    errors.message = "Description cannot exceed 3,000 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setServerErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setServerErrorMessage(
          data.message ||
            "We couldn't send your inquiry right now. Please try again or email us directly at linsera.solutions@gmail.com."
        );
      }
    } catch {
      setStatus("error");
      setServerErrorMessage(
        "We couldn't send your inquiry right now. Please try again or email us directly at linsera.solutions@gmail.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-accent/20 bg-softBlue/40 p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto text-xl font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-ink">Thank you for reaching out.</h3>
        <p className="text-sm leading-relaxed text-muted max-w-md mx-auto">
          We&apos;ve received your project inquiry and will get back to you soon.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setValues(initialState);
              setStatus("idle");
              setErrors({});
            }}
            className="text-xs font-semibold text-accent hover:underline"
          >
            Submit Another Inquiry →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field for bot spam protection */}
      <div className="sr-only aria-hidden='true' tabIndex={-1}">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input
          id="_gotcha"
          type="text"
          name="_gotcha"
          value={values._gotcha}
          onChange={(e) => update("_gotcha", e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" required error={errors.name}>
          <input
            id="name"
            type="text"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your full name"
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field label="Email" required error={errors.email}>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@company.com"
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
          placeholder="Your company or organization name (optional)"
          className={inputClass(false)}
        />
      </Field>

      <Field label="Project Type" required error={errors.projectType}>
        <select
          id="project-type"
          required
          value={values.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
          className={inputClass(Boolean(errors.projectType))}
        >
          <option value="">Select a project category</option>
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
          required
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Describe your goals, requirements, timeline, or business challenge..."
          className={inputClass(Boolean(errors.message))}
        />
      </Field>

      {status === "error" && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {serverErrorMessage || (
            <>
              We couldn&apos;t send your inquiry right now. Please try again or email us directly at{" "}
              <a href="mailto:linsera.solutions@gmail.com" className="font-semibold underline">
                linsera.solutions@gmail.com
              </a>.
            </>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending Inquiry..." : "Send Project Inquiry →"}
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
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <div>{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    hasError ? "border-red-400 focus-visible:outline-red-500" : "border-border"
  );
}
