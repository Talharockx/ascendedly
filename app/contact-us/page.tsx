import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { SectionBackdrop } from "@/components/layout/SectionBackdrop";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Book a Discovery Call",
  description:
    "Brief Ascendedly on search engine optimization, growth marketing, enterprise software, or AI transformation. Multi-step inquiry with Zod-validated fields and estimate lock-in from our service calculators.",
  keywords: [
    "contact digital agency",
    "book discovery call",
    "enterprise software consultation",
    "SEO agency contact",
    "AI transformation inquiry",
  ],
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <SectionBackdrop variant="orbs" className="py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border/70 shadow-sm">
            <Image
              src="/images/contact-office.jpg"
              alt="Ascendedly San Francisco office reception"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950 md:text-5xl">
            Start with a precise brief. Finish with a named team.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Tell us the outcome, the constraint, and the budget bracket. If you modeled a service
            calculator, that estimate is already attached to this inquiry.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex gap-3 text-muted-foreground">
              <Mail className="mt-0.5 h-4 w-4 text-indigo-600" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Phone className="mt-0.5 h-4 w-4 text-indigo-600" />
              <a href={siteConfig.phoneHref} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
                {siteConfig.address.postal}
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-glow backdrop-blur-md md:p-8">
          <Suspense fallback={<p className="text-sm text-muted-foreground">Loading inquiry form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </SectionBackdrop>
  );
}
