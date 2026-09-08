"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TypewriterWord } from "@/components/home/TypewriterWord";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-agency.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/88 to-cyan-50/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(217,70,239,0.12),transparent_28%),radial-gradient(circle_at_12%_72%,rgba(34,211,238,0.14),transparent_30%)]" />
      </div>

      <div className="container relative grid min-h-[88vh] items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Enterprise growth + engineering partner
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.55 }}
            className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600"
          >
            Ascendedly
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.15] text-slate-950 [text-wrap:wrap] md:text-6xl lg:text-[4.35rem]"
          >
            <span className="block">The operating system for</span>
            <TypewriterWord
              className="mt-1"
              words={["search", "software", "growth", "AI", "pipeline", "retention"]}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Search, software, and AI transformation under one accountable delivery surface. Built
            for operators who need revenue systems, not slideware.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <Link href="/contact-us">
                Book Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#services">See the suite</Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200/90 pt-6"
          >
            {[
              { label: "Discovery", value: "5 days" },
              { label: "Practices", value: "5" },
              { label: "Delivery", value: "Named pods" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-950">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_40px_100px_-40px_rgba(79,70,229,0.55)]">
            <Image
              src="/images/about-team.jpg"
              alt="Ascendedly operators collaborating"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-md"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-200">Live method</p>
              <p className="mt-2 text-sm font-medium leading-relaxed">
                Brief → Audit → Scope → Decide. A paid week that ends with a clear go / no-go.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -left-4 top-10 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-glow backdrop-blur md:block"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Focus</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Revenue systems</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="absolute -right-3 bottom-28 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-glow backdrop-blur md:block"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Stack</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">SEO · Web · Gen AI</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
