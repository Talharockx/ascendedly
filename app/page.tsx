import type { Metadata } from "next";

import { CaseStudies } from "@/components/home/CaseStudies";
import { CtaBand } from "@/components/home/CtaBand";
import { HomeHero } from "@/components/home/HomeHero";
import { MethodSection } from "@/components/home/MethodSection";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";
import { WhyAscendedly } from "@/components/home/WhyAscendedly";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Ascendedly | Enterprise Software, SEO & AI Transformation",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  keywords: [...siteConfig.keywords],
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MethodSection />
      <ServiceShowcase />
      <CaseStudies />
      <WhyAscendedly />
      <CtaBand />
    </>
  );
}
