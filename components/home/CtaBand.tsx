"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28">
      <Image
        src="/images/hero-agency.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/85" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Bring the brief. Leave with an operating plan.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200">
            Discovery is a five-day paid sprint: stack review, opportunity map, and a scoped first
            quarter. If we are not the right firm, we say so before a statement of work exists.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-base font-medium text-slate-950 shadow-sm transition hover:bg-slate-100"
            >
              Book Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 text-base font-medium text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/15"
            >
              About Ascendedly
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
