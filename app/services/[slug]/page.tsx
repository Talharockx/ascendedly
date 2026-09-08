import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceCalculator } from "@/components/services/ServiceCalculator";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhatsIncluded } from "@/components/services/WhatsIncluded";
import { CtaBand } from "@/components/home/CtaBand";
import { getServiceBySlug, serviceSlugs } from "@/data/servicesData";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <WhatsIncluded service={service} />
      <ServiceCalculator service={service} />
      <CtaBand />
    </>
  );
}
