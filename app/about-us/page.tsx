import type { Metadata } from "next";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutVision } from "@/components/about/AboutVision";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "About Us | Engineering Principles & Leadership",
  description:
    "Ascendedly is a B2B technology and growth agency. Learn our vision, core engineering principles, client delivery values, and the leadership that runs search, software, and AI transformation.",
  keywords: [
    "digital agency leadership",
    "enterprise software partner",
    "AI transformation firm",
    "B2B growth agency",
  ],
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutVision />
      <AboutPrinciples />
      <AboutValues />
      <AboutLeadership />
      <CtaBand />
    </>
  );
}
