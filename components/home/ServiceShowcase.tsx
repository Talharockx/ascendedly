"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/servicesData";
import { SectionBackdrop } from "@/components/layout/SectionBackdrop";

export function ServiceShowcase() {
  const [featured, ...rest] = services;

  return (
    <SectionBackdrop
      id="services"
      variant="grid"
      className="scroll-mt-24 border-t border-border/60 py-24"
    >
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Capability suite
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 md:text-5xl">
            Five practices. One delivery surface.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open any practice, model scope in the calculator, and lock an estimate into discovery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {featured ? (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <Link
                href={`/services/${featured.slug}`}
                className="group relative flex h-full min-h-[420px] overflow-hidden rounded-[1.75rem] border border-border/70 shadow-glow"
              >
                <Image
                  src={featured.image}
                  alt={featured.shortName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                <div className="relative mt-auto p-8 text-white md:p-10">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                    {featured.eyebrow}
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold md:text-4xl">{featured.shortName}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                    {featured.intro}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    Open {featured.shortName}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 2).map((service, index) => (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex min-h-[200px] overflow-hidden rounded-[1.5rem] border border-border/70"
                >
                  <Image
                    src={service.image}
                    alt={service.shortName}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
                  <div className="relative mt-auto p-6 text-white">
                    <h3 className="text-xl font-semibold">{service.shortName}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/75">{service.eyebrow}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.slice(2).map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group grid overflow-hidden rounded-[1.5rem] border border-border/70 bg-white shadow-sm md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative min-h-[180px]">
                  <Image
                    src={service.image}
                    alt={service.shortName}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-slate-950">{service.shortName}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {service.intro}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionBackdrop>
  );
}
