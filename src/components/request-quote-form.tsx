"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ArrowLeft, ArrowRight, CheckCircle2, Send } from "lucide-react";

type QuoteFormValues = {
  fullName: string;
  company: string;
  email: string;
  serviceType: string;
  message: string;
};

const serviceTypes = [
  "Air Freight",
  "Ocean Freight",
  "Land Freight",
  "Customs Brokerage",
  "Specialized Services",
  "Packing and Relocation",
];

const steps = ["Contact", "Service", "Message"];

export function RequestQuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      serviceType: "",
      message: "",
    },
  });

  const formValues = useWatch({ control });

  const validateStep = async () => {
    if (currentStep === 0) {
      return trigger(["fullName", "company", "email"], {
        shouldFocus: true,
      });
    }

    if (currentStep === 1) {
      return trigger(["serviceType"], { shouldFocus: true });
    }

    return trigger(["message"], { shouldFocus: true });
  };

  const goNext = async () => {
    const isValid = await validateStep();

    if (isValid) {
      setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    }
  };

  const onSubmit = (values: QuoteFormValues) => {
    setSubmittedName(values.fullName);
  };

  if (submittedName) {
    return (
      <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-6">
        <CheckCircle2 aria-hidden="true" className="size-10 text-secondary" />
        <h2 className="mt-5 text-2xl font-black text-foreground">
          Quote request received.
        </h2>
        <p className="mt-3 text-sm leading-6 text-cool-gray">
          Thank you, {submittedName}. A dedicated customer representative will
          review your shipment details and follow up with the next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-border-color bg-white p-5 shadow-lg shadow-deep-blue/5 sm:p-6 lg:p-8"
      noValidate
    >
      <div className="flex flex-wrap gap-2">
        {steps.map((step, index) => (
          <span
            key={step}
            className={`mono-accent rounded-md px-3 py-1.5 text-xs font-bold ${
              index === currentStep
                ? "bg-deep-blue text-white"
                : index < currentStep
                  ? "bg-secondary-100 text-accent"
                  : "bg-surface-soft text-cool-gray"
            }`}
          >
            {index + 1}. {step}
          </span>
        ))}
      </div>

      <div className="mt-8 min-h-[270px] sm:min-h-[330px]">
        {currentStep === 0 ? (
          <div className="grid gap-5">
            <FieldGroup
              id="fullName"
              label="Full Name"
              error={errors.fullName?.message}
            >
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                className="form-field"
                {...register("fullName", {
                  required: "Full name is required.",
                  minLength: {
                    value: 2,
                    message: "Full name must be at least 2 characters.",
                  },
                })}
              />
            </FieldGroup>

            <FieldGroup
              id="company"
              label="Company"
              error={errors.company?.message}
            >
              <input
                id="company"
                type="text"
                autoComplete="organization"
                className="form-field"
                {...register("company", {
                  required: "Company name is required.",
                  minLength: {
                    value: 2,
                    message: "Company must be at least 2 characters.",
                  },
                })}
              />
            </FieldGroup>

            <FieldGroup id="email" label="Email" error={errors.email?.message}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="form-field"
                {...register("email", {
                  required: "Email address is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
              />
            </FieldGroup>
          </div>
        ) : null}

        {currentStep === 1 ? (
          <div className="grid gap-5">
            <FieldGroup
              id="serviceType"
              label="Service Type"
              error={errors.serviceType?.message}
            >
              <select
                id="serviceType"
                className="form-field"
                {...register("serviceType", {
                  required: "Select a service type.",
                })}
              >
                <option value="">Select a service</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </FieldGroup>

            <div className="rounded-lg border border-border-color bg-surface-soft p-5">
              <p className="mono-accent text-sm font-bold uppercase tracking-[0.18em] text-secondary">
                Selected contact
              </p>
              <div className="mt-4 grid gap-2 text-sm text-cool-gray">
                <p>
                  <span className="font-bold text-foreground">Name:</span>{" "}
                  {formValues.fullName || "Pending"}
                </p>
                <p>
                  <span className="font-bold text-foreground">Company:</span>{" "}
                  {formValues.company || "Pending"}
                </p>
                <p>
                  <span className="font-bold text-foreground">Email:</span>{" "}
                  <span className="mono-accent">
                    {formValues.email || "Pending"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {currentStep === 2 ? (
          <div className="grid gap-5">
            <FieldGroup
              id="message"
              label="Message"
              error={errors.message?.message}
            >
              <textarea
                id="message"
                rows={7}
                className="form-field resize-none"
                {...register("message", {
                  required: "Message is required.",
                  minLength: {
                    value: 12,
                    message: "Message must be at least 12 characters.",
                  },
                })}
              />
            </FieldGroup>

            <div className="rounded-lg border border-border-color bg-surface-soft p-5">
              <p className="mono-accent text-sm font-bold uppercase tracking-[0.18em] text-secondary">
                Request summary
              </p>
              <div className="mt-4 grid gap-2 text-sm text-cool-gray">
                <p>
                  <span className="font-bold text-foreground">Service:</span>{" "}
                  {formValues.serviceType || "Pending"}
                </p>
                <p>
                  <span className="font-bold text-foreground">Company:</span>{" "}
                  {formValues.company || "Pending"}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border-color pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
          disabled={currentStep === 0}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border-color bg-white px-5 text-sm font-black text-deep-blue transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="cta-primary inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-primary/30 sm:w-auto"
          >
            Continue
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-primary inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            Submit Request
            <Send aria-hidden="true" className="size-4" />
          </button>
        )}
      </div>
    </form>
  );
}

function FieldGroup({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-bold text-foreground"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-2 text-sm font-semibold text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
