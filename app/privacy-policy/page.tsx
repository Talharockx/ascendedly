import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ascendedly Technologies collects, uses, and protects inquiry data, analytics, and engagement information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective September 8, 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Ascendedly Technologies (“Ascendedly,” “we,” “us”) operates {siteConfig.url} and related
            discovery, proposal, and delivery systems. This policy describes how we handle personal
            data when you browse the site, submit an inquiry, or lock a calculator estimate into a
            contact brief.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <p>
            Inquiry forms collect name, work email, selected service, budget bracket, and message.
            Calculator estimates stored in your browser (session storage) are sent only if you choose
            “Lock in this Estimate” and complete the form. Server logs may include IP address, user
            agent, and referring URL for security and performance.
          </p>
          <h2 className="text-xl font-semibold text-foreground">How we use it</h2>
          <p>
            We use inquiry data to staff discovery, prepare statements of work, and communicate about
            engagements. We do not sell personal data. We do not use form contents to train public
            generative models.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Retention and security</h2>
          <p>
            Qualified leads are retained for up to 24 months unless you request deletion. Access is
            limited to principals and delivery leads on a need-to-know basis. Requests:{" "}
            <a className="text-indigo-600 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
          <p>
            Related terms are published at{" "}
            <Link href="/terms-of-service" className="text-indigo-600 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
