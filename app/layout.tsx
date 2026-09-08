import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ascendedly | Enterprise Software, SEO & AI Transformation",
    template: "%s | Ascendedly",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  applicationName: siteConfig.name,
  icons: {
    icon: [{ url: "/brand/mark.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/brand/mark.png"],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Ascendedly | Enterprise Software, SEO & AI Transformation",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascendedly | Enterprise Software, SEO & AI Transformation",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  areaServed: "Worldwide",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postal,
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  knowsAbout: [
    "Search engine optimization",
    "Growth marketing",
    "Enterprise software",
    "AI transformation",
    "Web development",
    "App development",
    "Generative AI",
    "Social media marketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital agency services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative AI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Development" } },
    ],
  },
  sameAs: siteConfig.social.map((item) => item.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
