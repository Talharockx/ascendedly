"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
  {
    metricValue: 240,
    prefix: "+",
    suffix: "%",
    label: "organic reach",
    context: "Programmatic SEO + Core Web Vitals",
  },
  {
    metricValue: 99.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "platform uptime",
    context: "Cloud-native portal rebuild",
  },
  {
    metricValue: 4,
    prefix: "",
    suffix: "x",
    label: "qualified meetings",
    context: "Social narrative + paid velocity",
  },
];

function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden py-28">
      <Image
        src="/images/case-studies.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-fuchsia-500/25" />

      <div className="container relative">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Proof operators can put in a board packet
          </h2>
          <p className="mt-4 text-base text-slate-200/90">
            Measured in analytics and CRM, not vanity dashboards.
          </p>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 md:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="relative"
            >
              <p className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
                <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                  <AnimatedMetric
                    value={item.metricValue}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    decimals={item.decimals ?? 0}
                  />
                </span>
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/55">{item.label}</p>
              <p className="mt-4 text-sm text-slate-200/85">{item.context}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
