"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import type { ServiceData } from "@/data/servicesData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="relative overflow-hidden py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 section-backdrop-mesh" />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accentFrom} ${service.accentTo} opacity-[0.1]`}
      />
      <div className="container relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>Services</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{service.shortName}</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              <Badge>{service.eyebrow}</Badge>
              <Badge variant="cyan">Enterprise delivery</Badge>
              <Badge variant="outline">Discovery in 5 days</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 max-w-3xl text-4xl font-semibold text-slate-950 md:text-5xl lg:text-6xl"
            >
              {service.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              {service.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <Link href="/contact-us">
                  {service.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#calculator">Model your scope</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-glow"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={service.image}
                alt={`${service.name} delivery at Ascendedly`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Market position
              </p>
              <p className="text-base leading-relaxed text-slate-700">{service.positioning}</p>
              <div className="rounded-xl border border-border/70 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Who this is for
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.audience}</p>
              </div>
              <p className="text-sm font-medium text-indigo-700">{service.promise}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
