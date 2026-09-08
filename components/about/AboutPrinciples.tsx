"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Ship the constraint, not the theater",
    copy: "Every sprint has a bottleneck we are paid to remove: indexation, CAC, latency, hallucination risk. We do not decorate the bottleneck with workshops.",
  },
  {
    num: "02",
    title: "Typed interfaces over tribal knowledge",
    copy: "Contracts, schemas, and runbooks travel with the code. When a principal rotates, the system still explains itself to the next engineer and to your internal team.",
  },
  {
    num: "03",
    title: "Measure like finance",
    copy: "SEO, growth marketing, and product releases report in pipeline, retention, and cost-to-serve. Dashboards exist to change decisions, not to decorate stand-ups.",
  },
  {
    num: "04",
    title: "Security is a feature of the first release",
    copy: "Least privilege, audit trails, and vendor boundaries are not a phase-two apology. AI without a privacy sandbox is a demo, not a product.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Engineering
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl lg:text-5xl">
            Principles that survive the first hard sprint
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            How we build when the board packet is due and the demo cannot lie.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {principles.map((item, index) => (
            <motion.article
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-indigo-700">
                {item.num}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                {item.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
