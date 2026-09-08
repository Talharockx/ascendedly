"use client";

import { motion } from "framer-motion";
import { FileCheck2, ShieldCheck, UserRoundCheck } from "lucide-react";

const values = [
  {
    icon: FileCheck2,
    title: "Radical scope honesty",
    copy: "If the calculator says a SaaS platform is a two-quarter build, we will not compress it into a six-week miracle to win the SOW.",
  },
  {
    icon: UserRoundCheck,
    title: "Named owners",
    copy: "You always know who is accountable for SEO, engineering, and AI. Escalations skip account-manager theater and go to a principal.",
  },
  {
    icon: ShieldCheck,
    title: "Leave the company stronger",
    copy: "Documentation, design tokens, evaluation sets, and admin access are part of done. We are not a forever dependency by design.",
  },
];

export function AboutValues() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Delivery
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl lg:text-5xl">
            Client values that show up before the SOW
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            How we behave when incentives conflict with the pitch deck.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{value.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
