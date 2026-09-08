"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock3, UsersRound, Wallet } from "lucide-react";

import type { CalculatorField, ServiceData } from "@/data/servicesData";
import {
  calculateEstimate,
  serializeEstimate,
  type CalculatorValues,
  ESTIMATE_STORAGE_KEY,
} from "@/lib/calculators";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { SectionBackdrop } from "@/components/layout/SectionBackdrop";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function defaultsFromFields(fields: CalculatorField[]): CalculatorValues {
  return fields.reduce<CalculatorValues>((acc, field) => {
    if (field.type === "slider") acc[field.id] = field.defaultValue;
    if (field.type === "select") acc[field.id] = field.defaultValue;
    if (field.type === "multiselect") acc[field.id] = [...field.defaultValue];
    return acc;
  }, {});
}

function formatFieldValue(field: Extract<CalculatorField, { type: "slider" }>, value: number) {
  if (field.format === "currency") return formatCurrency(value);
  if (field.format === "compact") {
    if (value >= 1000) {
      const thousands = value / 1000;
      return `${thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)}k`;
    }
    return formatNumber(value);
  }
  return formatNumber(value);
}

export function ServiceCalculator({ service }: { service: ServiceData }) {
  const router = useRouter();
  const [values, setValues] = useState<CalculatorValues>(() =>
    defaultsFromFields(service.calculator.fields)
  );

  const estimate = useMemo(
    () => calculateEstimate(service.slug, values),
    [service.slug, values]
  );

  function updateValue(id: string, next: number | string | string[]) {
    setValues((prev) => ({ ...prev, [id]: next }));
  }

  function lockEstimate() {
    const payload = serializeEstimate(estimate, service.name);
    sessionStorage.setItem(ESTIMATE_STORAGE_KEY, JSON.stringify(payload));
    const params = new URLSearchParams({
      service: service.slug,
      estimate: estimate.investmentLabel,
      timeline: estimate.timeline,
    });
    router.push(`/contact-us?${params.toString()}`);
  }

  return (
    <SectionBackdrop id="calculator" variant="mesh" className="scroll-mt-24 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Live scope calculator
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{service.calculator.title}</h2>
          <p className="mt-4 text-muted-foreground">{service.calculator.subtitle}</p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 rounded-2xl border border-border/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
            {service.calculator.fields.map((field) => (
              <div key={field.id} className="space-y-3">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <Label className="text-base text-foreground">{field.label}</Label>
                    <p className="mt-1 text-sm text-muted-foreground">{field.helper}</p>
                  </div>
                  {field.type === "slider" ? (
                    <span className="font-mono text-sm text-indigo-600">
                      {formatFieldValue(field, Number(values[field.id] ?? field.defaultValue))}
                      {field.id === "velocity" ? " / week" : null}
                    </span>
                  ) : null}
                </div>

                {field.type === "slider" ? (
                  <Slider
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={[Number(values[field.id] ?? field.defaultValue)]}
                    onValueChange={(next) => updateValue(field.id, next[0] ?? field.defaultValue)}
                    aria-label={field.label}
                  />
                ) : null}

                {field.type === "select" ? (
                  <Select
                    value={String(values[field.id] ?? field.defaultValue)}
                    onValueChange={(next) => updateValue(field.id, next)}
                  >
                    <SelectTrigger aria-label={field.label}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <span className="flex flex-col">
                            <span>{option.label}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : null}

                {field.type === "multiselect" ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {field.options.map((option) => {
                      const selected = asStringArray(values[field.id]).includes(option.value);
                      return (
                        <label
                          key={option.value}
                          className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/50 bg-slate-50 p-3 transition-all hover:border-primary/40"
                        >
                          <Checkbox
                            checked={selected}
                            onCheckedChange={(checked) => {
                              const current = asStringArray(values[field.id]);
                              const next = checked
                                ? [...current, option.value]
                                : current.filter((item) => item !== option.value);
                              updateValue(field.id, next.length ? next : [option.value]);
                            }}
                            aria-label={option.label}
                          />
                          <span>
                            <span className="block text-sm font-medium">{option.label}</span>
                            {option.description ? (
                              <span className="text-xs text-muted-foreground">
                                {option.description}
                              </span>
                            ) : null}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <aside className="rounded-2xl border border-indigo-100 bg-gradient-to-b from-cyan-50 via-white to-fuchsia-50 p-6 shadow-sm md:p-8 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Instant estimate
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {estimate.investmentLabel}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{estimate.summary}</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Wallet className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <span className="block text-muted-foreground">Investment range</span>
                  <span className="font-medium">{estimate.investmentLabel}</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock3 className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <span className="block text-muted-foreground">Timeline</span>
                  <span className="font-medium">{estimate.timeline}</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <UsersRound className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <span className="block text-muted-foreground">Team shape</span>
                  <span className="font-medium">{estimate.teamSize}</span>
                </span>
              </li>
            </ul>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {estimate.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Button type="button" size="lg" className="mt-8 w-full" onClick={lockEstimate}>
              Lock in this Estimate
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Carries this range into the contact form. Final SOW follows discovery.
            </p>
          </aside>
        </div>
      </div>
    </SectionBackdrop>
  );
}

function asStringArray(value: CalculatorValues[string] | undefined): string[] {
  return Array.isArray(value) ? value : [];
}
