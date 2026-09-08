"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Design-only background (no photo) */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(217,70,239,0.12),transparent_28%),radial-gradient(circle_at_8%_78%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_60%_100%,rgba(99,102,241,0.1),transparent_38%)]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 30% 40%, #000 15%, transparent 72%)",
          }}
        />
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute right-[28%] top-8 h-48 w-48 rounded-full bg-indigo-300/25 blur-2xl" />
        <div className="absolute left-[42%] top-[58%] h-px w-40 rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute right-[18%] top-[30%] h-px w-32 rotate-[14deg] bg-gradient-to-r from-transparent via-fuchsia-400/45 to-transparent" />
      </div>

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700"
          >
            Ascendedly
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.08] text-slate-950 md:text-5xl lg:text-6xl"
          >
            About the firm operators hire when search, software, and AI share one P&L.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700"
          >
            The market sells SEO, growth, engineering, and AI as four stories. Buyers live one:
            revenue, risk, and time. We assembled the practices accordingly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/contact-us">
                Talk with leadership
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#services">See the suite</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16, duration: 0.65 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-indigo-400/20 to-fuchsia-400/30 blur-xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] sm:aspect-[5/6]">
            <Image
              src="/images/about-team.jpg"
              alt="Ascendedly team collaborating"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
