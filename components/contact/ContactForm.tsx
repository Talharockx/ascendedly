"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { services, type ServiceSlug } from "@/data/servicesData";
import {
  ESTIMATE_STORAGE_KEY,
  type StoredEstimate,
} from "@/lib/calculators";
import {
  budgetBrackets,
  budgetLabels,
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { isServiceSlug } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const steps = [
  { id: 1, title: "Identity", copy: "Who should we brief the team about?" },
  { id: 2, title: "Scope", copy: "Which capability and capital range?" },
  { id: 3, title: "Brief", copy: "What does success look like in 90 days?" },
] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [estimate, setEstimate] = useState<StoredEstimate | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "seo",
      budget: "50k-100k",
      message: "",
      estimateNote: "",
    },
    mode: "onTouched",
  });

  useEffect(() => {
    const paramService = searchParams.get("service");
    const paramEstimate = searchParams.get("estimate");
    const paramTimeline = searchParams.get("timeline");

    if (paramService && isServiceSlug(paramService)) {
      form.setValue("service", paramService);
    }

    try {
      const raw = sessionStorage.getItem(ESTIMATE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredEstimate;
        setEstimate(parsed);
        if (isServiceSlug(parsed.service)) {
          form.setValue("service", parsed.service);
        }
        form.setValue(
          "estimateNote",
          `Locked estimate: ${parsed.investmentLabel}. Timeline: ${parsed.timeline}. ${parsed.summary}`
        );
      } else if (paramEstimate) {
        form.setValue(
          "estimateNote",
          `Locked estimate: ${paramEstimate}${paramTimeline ? `. Timeline: ${paramTimeline}` : ""}`
        );
      }
    } catch {
      if (paramEstimate) {
        form.setValue("estimateNote", `Locked estimate: ${paramEstimate}`);
      }
    }
  }, [form, searchParams]);

  async function onSubmit(values: ContactFormValues) {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    sessionStorage.removeItem(ESTIMATE_STORAGE_KEY);
    void values;
  }

  async function nextStep() {
    const fields: (keyof ContactFormValues)[] =
      step === 1 ? ["name", "email"] : ["service", "budget"];
    const valid = await form.trigger(fields);
    if (valid) setStep((current) => current + 1);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8 text-center shadow-glow backdrop-blur-xl">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-300" />
        <h2 className="mt-4 text-2xl font-semibold">Brief received. Partners are assembling.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you. A principal from the relevant practice will reply within one business day with
          proposed discovery times. Check the inbox for {form.getValues("email")}.
        </p>
      </div>
    );
  }

  const errors = form.formState.errors;
  const selectedService = form.watch("service") as ServiceSlug;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <ol className="grid grid-cols-3 gap-2">
        {steps.map((item) => (
          <li
            key={item.id}
            className={`rounded-xl border px-3 py-3 text-left ${
              item.id === step
                ? "border-primary/50 bg-primary/15"
                : item.id < step
                  ? "border-cyan-300 bg-cyan-50"
                  : "border-border/70 bg-white"
            }`}
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Step {item.id}
            </p>
            <p className="mt-1 text-sm font-medium">{item.title}</p>
          </li>
        ))}
      </ol>

      {estimate ? (
        <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4 text-sm">
          <p className="font-medium text-indigo-800">Estimate locked from {estimate.serviceName}</p>
          <p className="mt-1 text-muted-foreground">
            {estimate.investmentLabel} · {estimate.timeline} · {estimate.teamSize}
          </p>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" autoComplete="name" placeholder="Jordan Hale" {...form.register("name")} />
            {errors.name ? <p className="text-sm text-red-400">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="jordan@company.com"
              {...form.register("email")}
            />
            {errors.email ? <p className="text-sm text-red-400">{errors.email.message}</p> : null}
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Service selection</Label>
            <Select
              value={selectedService}
              onValueChange={(value) => form.setValue("service", value as ServiceSlug, { shouldValidate: true })}
            >
              <SelectTrigger aria-label="Service selection">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.shortName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service ? <p className="text-sm text-red-400">{errors.service.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label>Budget bracket</Label>
            <Select
              value={form.watch("budget")}
              onValueChange={(value) =>
                form.setValue("budget", value as ContactFormValues["budget"], { shouldValidate: true })
              }
            >
              <SelectTrigger aria-label="Budget bracket">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {budgetBrackets.map((bracket) => (
                  <SelectItem key={bracket} value={bracket}>
                    {budgetLabels[bracket]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budget ? <p className="text-sm text-red-400">{errors.budget.message}</p> : null}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Share the product, the constraint, and what a successful first quarter looks like."
              {...form.register("message")}
            />
            {errors.message ? <p className="text-sm text-red-400">{errors.message.message}</p> : null}
          </div>
          {form.watch("estimateNote") ? (
            <p className="rounded-lg border border-border/50 bg-slate-50 p-3 text-xs text-muted-foreground">
              {form.watch("estimateNote")}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-3">
        {step > 1 ? (
          <Button type="button" variant="outline" onClick={() => setStep((current) => current - 1)}>
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <Button type="button" onClick={nextStep}>
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {submitting ? "Sending brief" : "Submit inquiry"}
          </Button>
        )}
      </div>
    </form>
  );
}
