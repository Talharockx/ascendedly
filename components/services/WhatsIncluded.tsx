"use client";

import { motion } from "framer-motion";

import type { ServiceData } from "@/data/servicesData";
import { SectionBackdrop } from "@/components/layout/SectionBackdrop";
import { getServiceIcon } from "@/lib/icons";

export function WhatsIncluded({ service }: { service: ServiceData }) {
  return (
    <SectionBackdrop variant="dots" className="border-t border-border/60 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            What&apos;s included
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
            A delivery system, not a slide of promises
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every {service.shortName} engagement ships with named workstreams, instrumentation, and a
            cadence your operators can inspect.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {service.inclusions.map((item, index) => {
            const Icon = getServiceIcon(item.icon);
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:border-indigo-300 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-fuchsia-400/10 blur-2xl" />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-100 bg-gradient-to-br from-cyan-50 to-fuchsia-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionBackdrop>
  );
}
