import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Engagement terms for Ascendedly Technologies websites, discovery sprints, and professional services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective September 8, 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            These terms govern use of {siteConfig.url} and any discovery or professional services
            subsequently contracted with {siteConfig.legalName}. A signed statement of work controls
            if it conflicts with this page.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Estimates and calculators</h2>
          <p>
            Interactive calculators produce non-binding ranges for investment, timeline, and team
            shape. They are planning tools. Final fees, acceptance criteria, and intellectual-property
            terms appear only in a mutually executed statement of work.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Acceptable use</h2>
          <p>
            You may not scrape the site in a way that degrades service, submit unlawful content, or
            misrepresent your authority to buy services for an organization.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p>
            Site content is owned by Ascendedly unless a statement of work assigns deliverables to
            you. Pre-existing tools, frameworks, and models remain ours; client data remains yours.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
          <p>
            To the extent permitted by law, Ascendedly is not liable for indirect or consequential
            damages arising from site use. Professional-services liability is capped as specified in
            the applicable master services agreement.
          </p>
          <p>
            Privacy practices are described in our{" "}
            <Link href="/privacy-policy" className="text-indigo-600 hover:underline">
              Privacy Policy
            </Link>
            . Questions:{" "}
            <a className="text-indigo-600 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
