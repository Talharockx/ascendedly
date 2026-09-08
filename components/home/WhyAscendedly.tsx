"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fingerprint, Lock, Users } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Top 1% vetted talent",
    copy: "Live work trials before anyone touches a client system. Seniority and communication are scored.",
  },
  {
    icon: Fingerprint,
    title: "Transparent sprints",
    copy: "You see the board, burn, and demo. Scope changes are written and priced, not buried.",
  },
  {
    icon: Lock,
    title: "IP protection by default",
    copy: "What you fund is yours. Least-privilege access and clean credential offboarding at the last sprint.",
  },
];

export function WhyAscendedly() {
  return (
    <section className="overflow-hidden py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-glow">
            <Image
              src="/images/contact-office.jpg"
              alt="Ascendedly workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden max-w-[220px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-glow backdrop-blur md:block">
            <p className="text-[11px] uppercase tracking-[0.16em] text-indigo-600">Operating model</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Product discipline. Partner accountability.
            </p>
          </div>
        </motion.div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Why Ascendedly
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            Built like a product org. Accountable like a partner.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We staff hybrid pods so discovery, engineering, and growth move in the same operating
            cadence, not as three disconnected vendors.
          </p>

          <div className="mt-10 space-y-5">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-fuchsia-50 text-indigo-600">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{pillar.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
