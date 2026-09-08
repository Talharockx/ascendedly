export const siteConfig = {
  name: "Ascendedly",
  legalName: "Ascendedly Technologies",
  tagline: "Enterprise software, search engine optimization, and AI transformation for operators who refuse average.",
  description:
    "Ascendedly is a B2B technology and growth agency that designs, engineers, and scales revenue systems across search engine optimization, growth marketing, enterprise software, and generative AI.",
  url: "https://www.ascendedly.com",
  ogImage: "/og-image.png",
  email: "partnerships@ascendedly.com",
  phone: "+1 (415) 555-0186",
  phoneHref: "tel:+14155550186",
  address: {
    line1: "548 Market Street, Suite 2400",
    city: "San Francisco",
    region: "CA",
    postal: "94104",
    country: "United States",
  },
  hours: "Monday–Friday, 9:00 AM – 6:00 PM PT",
  keywords: [
    "search engine optimization",
    "growth marketing",
    "enterprise software",
    "AI transformation",
    "B2B digital agency",
    "web development",
    "app development",
    "generative AI consulting",
    "social media marketing",
    "technical SEO",
  ],
  nav: [
    { label: "Homepage", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Services",
      href: "/#services",
      children: [
        { label: "SEO", href: "/services/seo" },
        { label: "SMM", href: "/services/smm" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "Gen AI", href: "/services/gen-ai" },
        { label: "App Development", href: "/services/app-development" },
      ],
    },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ascendedly",
      title: "Ascendedly on LinkedIn",
    },
    {
      name: "X",
      href: "https://x.com/ascendedly",
      title: "Ascendedly on X (Twitter)",
    },
    {
      name: "GitHub",
      href: "https://github.com/ascendedly",
      title: "Ascendedly on GitHub",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ascendedly",
      title: "Ascendedly on Instagram",
    },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
