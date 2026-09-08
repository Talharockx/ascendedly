"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Brief",
    copy: "Name the bottleneck: pipeline, product velocity, retention, or AI risk.",
  },
  {
    num: "02",
    title: "Audit",
    copy: "Score stack, analytics, and demand against commercial outcomes.",
  },
  {
    num: "03",
    title: "Scope",
    copy: "Sprint board, investment range, and owners before a long retainer.",
  },
  {
    num: "04",
    title: "Decide",
    copy: "Go or no-go. If we are not the right firm, we say so early.",
  },
];

export function MethodSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
              Discovery
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl lg:text-5xl">
              Five days. One operating plan. A clear next step.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
              No six-week alignment theater. A paid week that ends with scope you can brief to a
              board.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex h-12 items-center justify-center gap-2 self-start rounded-md bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Book the sprint
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ol className="mt-14 grid gap-0 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="border-b border-slate-200 py-8 sm:border-b-0 sm:px-6 sm:py-10 lg:border-r lg:px-8 lg:last:border-r-0 first:sm:pl-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                Day {step.num.replace("0", "")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{step.copy}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
