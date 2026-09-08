import Link from "next/link";
import { Clock, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { services } from "@/data/servicesData";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/layout/Logo";

const socialIcons = {
  LinkedIn: Linkedin,
  X: XIcon,
  GitHub: Github,
  Instagram: Instagram,
} as const;

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.725-8.835L1.254 2.25H8.08l4.25 5.688L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.name as keyof typeof socialIcons];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    title={item.title}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-500 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{item.title}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Quick links
            </p>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Services", "/#services"],
                ["Blogs", "/blogs"],
                ["Contact Us", "/contact-us"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link className="text-muted-foreground transition-colors hover:text-indigo-600" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Services
            </p>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-indigo-600"
                    href={`/services/${service.slug}`}
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="mt-0.5 h-4 w-4 text-indigo-600" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="mt-0.5 h-4 w-4 text-indigo-600" />
              {siteConfig.phone}
            </a>
            <p className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postal}
                <br />
                {siteConfig.address.country}
              </span>
            </p>
            <p className="flex items-start gap-3 text-sm text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 text-indigo-600" />
              {siteConfig.hours}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 bg-slate-50/80">
        <div className="container flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
