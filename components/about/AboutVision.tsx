"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "One revenue system",
    copy: "Search, software, growth, and AI move in the same sprint cadence, not as four disconnected vendors.",
  },
  {
    title: "Principals on the work",
    copy: "Architecture, narrative, and model evaluation stay with people who can brief a board, not only a kickoff deck.",
  },
  {
    title: "A clean go / no-go",
    copy: "Discovery ends with scope, owners, and a decision. If we are not the right firm, we say so early.",
  },
];

export function AboutVision() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Why we exist
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Operators should not assemble a holding company of agencies to ship one P&L outcome.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
            Ascendedly is the accountable delivery surface for mid-market and enterprise teams who
            treat search, software, and AI as one commercial system.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 border-t border-slate-200 pt-12 md:grid-cols-3 md:gap-10">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                {reason.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
