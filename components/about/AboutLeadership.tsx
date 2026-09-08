"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Maya Ellison",
    role: "Founder & Chief Executive",
    focus: "Growth systems · Board narrative",
    bio: "Maya spent a decade building growth and product orgs inside multi-product B2B companies before founding Ascendedly. She holds operators to a simple bar: if it cannot be briefed to a board in one page, it is not a strategy.",
    initials: "ME",
  },
  {
    name: "Rafael Okonkwo",
    role: "Chief Technology Officer",
    focus: "Platform · Reliability",
    bio: "Rafael leads enterprise software architecture across Next.js platforms, mobile, and cloud. He previously ran platform engineering for logistics and fintech products that could not take downtime as a lifestyle.",
    initials: "RO",
  },
  {
    name: "Dr. Priya Nandakumar",
    role: "Head of AI Systems",
    focus: "RAG · Evaluation · Agents",
    bio: "Priya designs production RAG, agents, and evaluation harnesses. Her research background in information retrieval is why our generative AI work starts with permissions and citations, not with a chatbot theme.",
    initials: "PN",
  },
];

export function AboutLeadership() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl lg:text-5xl">
            Principals stay on the work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            The people below still review architecture, narratives, and model evaluations, not
            only kickoff decks.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-700 text-base font-semibold text-white">
                {leader.initials}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950 md:text-2xl">
                {leader.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-indigo-700">{leader.role}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                {leader.focus}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{leader.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
