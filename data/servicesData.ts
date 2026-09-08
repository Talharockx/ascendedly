export const serviceSlugs = [
  "seo",
  "smm",
  "web-development",
  "gen-ai",
  "app-development",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type CalculatorField =
  | {
      type: "slider";
      id: string;
      label: string;
      helper: string;
      min: number;
      max: number;
      step: number;
      defaultValue: number;
      format: "number" | "currency" | "compact";
    }
  | {
      type: "select";
      id: string;
      label: string;
      helper: string;
      options: { value: string; label: string; description?: string }[];
      defaultValue: string;
    }
  | {
      type: "multiselect";
      id: string;
      label: string;
      helper: string;
      options: { value: string; label: string; description?: string }[];
      defaultValue: string[];
    };

export interface CalculatorConfig {
  title: string;
  subtitle: string;
  fields: CalculatorField[];
}

export interface ServiceInclusion {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceData {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  eyebrow: string;
  headline: string;
  intro: string;
  positioning: string;
  audience: string;
  promise: string;
  ctaLabel: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  accentFrom: string;
  accentTo: string;
  inclusions: ServiceInclusion[];
  calculator: CalculatorConfig;
}

export const services: ServiceData[] = [
  {
    slug: "seo",
    name: "Search Engine Optimization",
    shortName: "SEO",
    eyebrow: "Organic revenue systems",
    headline: "Enterprise organic growth engineered for compound search demand.",
    intro:
      "Ascendedly builds search engine optimization programs that behave like product: technical audits that actually ship, programmatic architecture that captures long-tail intent, and revenue-driven search strategy tied to pipeline, not vanity rankings.",
    positioning:
      "We operate at the intersection of crawl economics, content systems, and commercial intent. Every engagement starts with indexation health and ends with attributed organic revenue, so your search channel becomes a durable asset rather than a campaign that resets every quarter.",
    audience:
      "Built for B2B operators, multi-location brands, and category leaders who already invest in growth marketing and need search engine optimization that survives algorithm volatility and sales-cycle complexity.",
    promise:
      "Technical excellence, programmatic coverage, and executive-grade reporting that finance teams can underwrite.",
    ctaLabel: "Book an SEO discovery call",
    metaTitle: "Enterprise SEO Agency | Technical & Revenue-Driven Search",
    metaDescription:
      "Ascendedly delivers enterprise search engine optimization: technical SEO audits, programmatic architecture, Core Web Vitals remediation, and revenue-driven organic growth strategy.",
    keywords: [
      "search engine optimization",
      "enterprise SEO",
      "technical SEO audits",
      "programmatic SEO",
      "Core Web Vitals",
      "organic growth",
    ],
    image: "/images/services/seo.jpg",
    accentFrom: "from-indigo-500",
    accentTo: "to-cyan-400",
    inclusions: [
      {
        title: "Technical SEO audits",
        description:
          "Full-stack crawl diagnostics covering indexation, canonicalization, JavaScript rendering, sitemap integrity, log-file analysis, and crawl-budget waste across enterprise domains.",
        icon: "ScanSearch",
      },
      {
        title: "On-page optimization",
        description:
          "Intent-mapped information architecture, entity-rich copy systems, internal linking graphs, and snippet engineering that convert qualified search demand into meetings.",
        icon: "FileSearch",
      },
      {
        title: "Off-page authority building",
        description:
          "Digital PR, digital asset seeding, and editorial placements that grow topical authority without the link schemes that put enterprise brands at risk.",
        icon: "Link2",
      },
      {
        title: "Competitor keyword gap analysis",
        description:
          "Share-of-voice modeling against category rivals, including SERP feature ownership, content gap clusters, and whitespace that maps to revenue, not traffic theater.",
        icon: "Waypoints",
      },
      {
        title: "Core Web Vitals remediation",
        description:
          "LCP, INP, and CLS engineering with development partners: image pipelines, font loading, hydration strategy, and edge caching that Google actually rewards.",
        icon: "Gauge",
      },
      {
        title: "Continuous tracking and transparent analytics",
        description:
          "Looker-ready dashboards, Search Console + GA4 reconciliation, rank tracking by revenue cluster, and monthly executive narratives your board can read in five minutes.",
        icon: "LineChart",
      },
    ],
    calculator: {
      title: "SEO investment & ROI model",
      subtitle:
        "Calibrate target keywords, current organic traffic, and market scope to generate a monthly investment range and a realistic ROI timeline.",
      fields: [
        {
          type: "slider",
          id: "keywords",
          label: "Target keywords",
          helper: "Priority commercial and programmatic terms you want to own.",
          min: 10,
          max: 200,
          step: 5,
          defaultValue: 40,
          format: "number",
        },
        {
          type: "slider",
          id: "traffic",
          label: "Current monthly organic traffic",
          helper: "Sessions from unpaid search over the last 30 days.",
          min: 0,
          max: 250000,
          step: 500,
          defaultValue: 8000,
          format: "compact",
        },
        {
          type: "select",
          id: "scope",
          label: "Market scope",
          helper: "Competitive intensity and localization complexity.",
          defaultValue: "national",
          options: [
            {
              value: "local",
              label: "Local",
              description: "City, metro, or multi-location catchments",
            },
            {
              value: "national",
              label: "National",
              description: "Country-wide commercial intent",
            },
            {
              value: "global",
              label: "Global",
              description: "Multi-market languages and SERPs",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "smm",
    name: "Social Media Marketing",
    shortName: "SMM",
    eyebrow: "Narrative + paid acquisition",
    headline: "High-impact social media marketing that compounds brand and pipeline.",
    intro:
      "Ascendedly runs social as a growth system: brand narrative creation that executives are proud to post, performance paid acquisition that respects CAC targets, and multi-platform community scaling that turns attention into qualified demand.",
    positioning:
      "We treat LinkedIn, Meta, Instagram, X, and TikTok as distinct buying environments, not a content calendar copy-paste. Creative, media, and community sit in one operating cadence so your social channel reports like a revenue program.",
    audience:
      "Designed for B2B brands, product-led companies, and professional services firms that need growth marketing on social without sacrificing brand equity or compliance.",
    promise:
      "Always-on narrative, paid amplification with adult unit economics, and community operations that sales teams actually use.",
    ctaLabel: "Book an SMM discovery call",
    metaTitle: "B2B Social Media Marketing Agency | LinkedIn, Meta, TikTok",
    metaDescription:
      "Ascendedly delivers high-impact social media marketing: brand narrative, performance paid acquisition, influencer partnerships, and multi-platform community scaling.",
    keywords: [
      "social media marketing",
      "growth marketing",
      "LinkedIn ads",
      "B2B social strategy",
      "paid social",
      "brand narrative",
    ],
    image: "/images/services/smm.jpg",
    accentFrom: "from-fuchsia-500",
    accentTo: "to-indigo-400",
    inclusions: [
      {
        title: "Organic content calendars",
        description:
          "Executive-ready editorial systems spanning thought leadership, product proof, and customer evidence, planned in 30-day sprints with asset specs your designers can ship.",
        icon: "CalendarDays",
      },
      {
        title: "Creative ad production",
        description:
          "Motion, static, and document ads engineered for platform-native stop rates, with iterative hooks and offers informed by weekly creative testing.",
        icon: "Clapperboard",
      },
      {
        title: "Paid social campaign scaling",
        description:
          "LinkedIn, Meta, and X acquisition architecture: audience design, bid strategy, frequency caps, and creative rotation mapped to pipeline stages.",
        icon: "Megaphone",
      },
      {
        title: "Influencer partnership management",
        description:
          "Creator and industry-voice programs with brief control, FTC-safe disclosures, and conversion tracking that separates applause from attributed pipeline.",
        icon: "Users",
      },
      {
        title: "Social listening and sentiment analysis",
        description:
          "Category and competitor listening that feeds product, PR, and sales enablement, so you hear the market before the quarterly research deck does.",
        icon: "AudioLines",
      },
      {
        title: "Conversion tracking",
        description:
          "CAPI, LinkedIn Insight, and CRM-matched conversions with dark-funnel modeling so finance can see social’s true contribution beyond last-click.",
        icon: "MousePointerClick",
      },
    ],
    calculator: {
      title: "Social management fee model",
      subtitle:
        "Select platforms, monthly ad spend, and content velocity to generate a management fee tier that matches operating intensity.",
      fields: [
        {
          type: "multiselect",
          id: "platforms",
          label: "Platforms",
          helper: "Choose every network you want in the always-on program.",
          defaultValue: ["linkedin", "meta"],
          options: [
            { value: "linkedin", label: "LinkedIn", description: "Demand + executive brand" },
            { value: "instagram", label: "Instagram", description: "Visual narrative" },
            { value: "meta", label: "Meta", description: "Facebook + Advantage+ acquisition" },
            { value: "tiktok", label: "TikTok", description: "Short-form reach and talent" },
          ],
        },
        {
          type: "select",
          id: "adSpend",
          label: "Monthly ad spend tier",
          helper: "Media budget we will steer. Management fees scale with complexity, not a blunt percentage.",
          defaultValue: "25k",
          options: [
            { value: "10k", label: "$10,000 / month", description: "Focused tests" },
            { value: "25k", label: "$25,000 / month", description: "Always-on acquisition" },
            { value: "50k", label: "$50,000 / month", description: "Multi-market scale" },
            { value: "100k", label: "$100,000+ / month", description: "Enterprise media" },
          ],
        },
        {
          type: "slider",
          id: "velocity",
          label: "Content asset velocity",
          helper: "Original posts and creative variants shipped per week.",
          min: 3,
          max: 21,
          step: 1,
          defaultValue: 8,
          format: "number",
        },
      ],
    },
  },
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Development",
    eyebrow: "Headless, cloud-native platforms",
    headline: "Full-stack web engineering for products that cannot afford to feel slow.",
    intro:
      "Ascendedly designs and ships high-performance headless web apps, modern component systems, and cloud-native platforms. We build enterprise software the way operators actually use it: typed, observable, and ready for the next decade of traffic.",
    positioning:
      "Our default stack is Next.js, typed APIs, and a design system your internal teams can extend. We do not leave you with a theme. We leave you with architecture, documentation, and a sprint cadence that keeps shipping after launch.",
    audience:
      "For product, marketing, and IT leaders who need enterprise software on the web (marketing sites, customer portals, and SaaS platforms) with security and performance treated as features.",
    promise:
      "Componentized UI, disciplined APIs, and launch-grade performance budgets from sprint one.",
    ctaLabel: "Book a web engineering call",
    metaTitle: "Enterprise Web Development | Next.js & Headless Platforms",
    metaDescription:
      "Ascendedly engineers high-performance headless web apps and cloud-native platforms: Next.js/React architecture, API orchestration, headless CMS, and enterprise security.",
    keywords: [
      "enterprise software",
      "web development",
      "Next.js agency",
      "headless CMS",
      "cloud-native platforms",
      "React engineering",
    ],
    image: "/images/services/web-development.jpg",
    accentFrom: "from-cyan-400",
    accentTo: "to-indigo-500",
    inclusions: [
      {
        title: "Custom Next.js / React architecture",
        description:
          "App Router systems, server components where they belong, typed data layers, and routing that scales from a flagship site to a multi-tenant product.",
        icon: "AppWindow",
      },
      {
        title: "API orchestration",
        description:
          "BFF patterns, webhook reliability, rate-limit strategy, and integration with CRMs, ERPs, billing, and identity so the UI is never waiting on a brittle glue layer.",
        icon: "Workflow",
      },
      {
        title: "Headless CMS integration",
        description:
          "Sanity, Contentful, or custom admin experiences with preview, localization, and governance that marketing can run without paging engineering.",
        icon: "PanelsTopLeft",
      },
      {
        title: "Mobile-first responsive UI/UX",
        description:
          "Design systems with production tokens, accessibility baked into primitives, and layouts proven on the devices your buyers actually use.",
        icon: "Smartphone",
      },
      {
        title: "Enterprise security and SOC 2 readiness",
        description:
          "AuthN/AuthZ, secret hygiene, audit logs, dependency policy, and evidence collection patterns that make SOC 2 and ISO conversations shorter.",
        icon: "ShieldCheck",
      },
      {
        title: "Speed optimization",
        description:
          "Streaming, caching, image and font pipelines, and Core Web Vitals ownership so performance is a release criterion, not a rescue project.",
        icon: "Zap",
      },
    ],
    calculator: {
      title: "Scope, sprints, and capital budget",
      subtitle:
        "Set project scope, unique page templates, and data/auth needs to generate an estimated sprint timeline and capital budget.",
      fields: [
        {
          type: "select",
          id: "scope",
          label: "Project scope",
          helper: "The primary surface we will engineer first.",
          defaultValue: "corporate",
          options: [
            {
              value: "landing",
              label: "Landing page",
              description: "High-converting campaign or product narrative",
            },
            {
              value: "corporate",
              label: "Corporate site",
              description: "Multi-template brand and demand site",
            },
            {
              value: "saas",
              label: "SaaS platform",
              description: "Authenticated product with ongoing releases",
            },
          ],
        },
        {
          type: "slider",
          id: "templates",
          label: "Unique page templates",
          helper: "Distinct layouts, not CMS entries.",
          min: 1,
          max: 40,
          step: 1,
          defaultValue: 8,
          format: "number",
        },
        {
          type: "select",
          id: "dataAuth",
          label: "Database / auth requirements",
          helper: "How much backend gravity the build carries.",
          defaultValue: "auth",
          options: [
            { value: "none", label: "None", description: "Static or CMS-only" },
            { value: "auth", label: "Auth only", description: "SSO, roles, gated content" },
            {
              value: "full",
              label: "Full database + auth",
              description: "Custom data model, APIs, and identities",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "gen-ai",
    name: "Generative AI",
    shortName: "Gen AI",
    eyebrow: "Production AI, not demos",
    headline: "Production AI integrations, autonomous agents, and private knowledge systems.",
    intro:
      "Ascendedly deploys generative AI that survives contact with real users: retrieval-augmented generation pipelines, autonomous agent workflows, fine-tuned LLMs, and intelligent internal knowledge bots governed by enterprise data privacy.",
    positioning:
      "We are an AI transformation partner, not a prompt shop. Evaluation harnesses, permissioning, and cost controls ship with the model so legal, security, and operations can say yes.",
    audience:
      "For CIOs, heads of operations, and product teams who need AI transformation inside existing enterprise software (customer service, knowledge work, and workflow automation) without leaking data into the public internet.",
    promise:
      "Grounded answers, observable agents, and a privacy sandbox your CISO can defend.",
    ctaLabel: "Book an AI transformation call",
    metaTitle: "Enterprise Generative AI Agency | RAG, Agents, Fine-Tuning",
    metaDescription:
      "Ascendedly delivers production AI integrations: RAG pipelines, autonomous agents, custom LLM fine-tuning, vector databases, and enterprise data privacy sandboxes.",
    keywords: [
      "AI transformation",
      "generative AI consulting",
      "RAG pipelines",
      "autonomous agents",
      "LLM fine-tuning",
      "enterprise AI",
    ],
    image: "/images/services/gen-ai.jpg",
    accentFrom: "from-violet-500",
    accentTo: "to-cyan-400",
    inclusions: [
      {
        title: "Proprietary RAG pipelines",
        description:
          "Chunking strategy, hybrid search, reranking, citation UX, and evaluation sets so answers stay faithful to your corpus instead of hallucinating confidence.",
        icon: "Library",
      },
      {
        title: "Autonomous customer service agents",
        description:
          "Tool-using agents that resolve tickets, escalate with context, and write back to your CRM, with human-in-the-loop gates on refunds, legal, and VIP accounts.",
        icon: "Bot",
      },
      {
        title: "Custom model fine-tuning",
        description:
          "Domain adaptation for tone, taxonomy, and task accuracy when retrieval alone cannot carry the last 15% of quality your operators demand.",
        icon: "BrainCircuit",
      },
      {
        title: "Vector database setup",
        description:
          "Pinecone, pgvector, or Weaviate with namespace isolation, embedding refresh jobs, and index hygiene that keeps retrieval fast as the corpus grows.",
        icon: "Database",
      },
      {
        title: "Enterprise data privacy sandboxes",
        description:
          "VPC and private endpoint patterns, PII redaction, retention policy, and vendor DPAs so AI transformation does not become a data-residency incident.",
        icon: "LockKeyhole",
      },
      {
        title: "Continuous model evaluation",
        description:
          "Offline golden sets, online feedback loops, drift alerts, and cost-per-successful-task reporting that product and finance can share.",
        icon: "Activity",
      },
    ],
    calculator: {
      title: "AI deployment estimate",
      subtitle:
        "Choose a use case, data volume, and API provider preference to generate a deployment range, timeline, and recommended team shape.",
      fields: [
        {
          type: "select",
          id: "useCase",
          label: "Use case",
          helper: "The first production surface we will harden.",
          defaultValue: "rag",
          options: [
            { value: "rag", label: "RAG search", description: "Grounded knowledge assistants" },
            {
              value: "agents",
              label: "Agent automation",
              description: "Tool-using workflow agents",
            },
            {
              value: "finetune",
              label: "Custom fine-tuning",
              description: "Domain-adapted model training",
            },
          ],
        },
        {
          type: "slider",
          id: "volume",
          label: "Data volume scale",
          helper: "Documents in the corpus or queries expected per month.",
          min: 500,
          max: 250000,
          step: 500,
          defaultValue: 10000,
          format: "compact",
        },
        {
          type: "select",
          id: "provider",
          label: "API provider preference",
          helper: "We remain model-agnostic; this sets hosting and compliance shape.",
          defaultValue: "azure",
          options: [
            { value: "openai", label: "OpenAI", description: "Frontier models, fast iteration" },
            { value: "anthropic", label: "Anthropic", description: "Long-context, safety-first" },
            { value: "azure", label: "Azure OpenAI", description: "Enterprise tenancy & region" },
            { value: "mixed", label: "Mixed / routed", description: "Best model per task" },
          ],
        },
      ],
    },
  },
  {
    slug: "app-development",
    name: "App Development",
    shortName: "App Development",
    eyebrow: "Retention-first mobile products",
    headline: "iOS, Android, and cross-platform apps engineered for frictionless retention.",
    intro:
      "Ascendedly ships scalable mobile applications that people keep. Native where it matters, cross-platform where it compounds, with offline-first data, biometric trust, and store compliance handled as part of the product, not a week-before-launch panic.",
    positioning:
      "We design the loop first: onboarding, core job-to-be-done, and re-entry. Then we engineer React Native or Flutter with native Swift and Kotlin modules so performance never becomes the reason users churn.",
    audience:
      "For product companies and enterprise teams taking a customer or field app to the stores, or replacing a brittle hybrid that cannot survive the next OS release.",
    promise:
      "Store-ready quality, instrumentation from day one, and a roadmap that survives version 2.0.",
    ctaLabel: "Book an app discovery call",
    metaTitle: "Mobile App Development Agency | iOS, Android, Cross-Platform",
    metaDescription:
      "Ascendedly engineers scalable iOS, Android, and cross-platform mobile apps: React Native, Flutter, native modules, offline-first data, biometrics, and store launch compliance.",
    keywords: [
      "app development",
      "React Native agency",
      "Flutter development",
      "iOS Android apps",
      "enterprise mobile",
      "cross-platform engineering",
    ],
    image: "/images/services/app-development.jpg",
    accentFrom: "from-emerald-400",
    accentTo: "to-cyan-500",
    inclusions: [
      {
        title: "React Native / Flutter development",
        description:
          "Shared product logic with platform-faithful UI, typed state, and release trains that keep iOS and Android within a sprint of each other.",
        icon: "TabletSmartphone",
      },
      {
        title: "Native Swift / Kotlin modules",
        description:
          "Performance-critical and OS-level capabilities (sensors, background tasks, widgets) implemented natively and bridged cleanly into the shared app.",
        icon: "Cpu",
      },
      {
        title: "Offline-first local databases",
        description:
          "SQLite / Watermelon / Realm patterns with conflict-aware sync so field teams and travelers keep working when the network does not.",
        icon: "HardDrive",
      },
      {
        title: "Biometric authentication",
        description:
          "Face ID, Touch ID, and Android biometrics with secure enclave storage and graceful fallback that still satisfies enterprise IAM.",
        icon: "Fingerprint",
      },
      {
        title: "Payment gateway hooks",
        description:
          "StoreKit, Google Play Billing, and optional Stripe/Braintree paths with receipt validation and entitlement sync that finance can audit.",
        icon: "CreditCard",
      },
      {
        title: "App Store & Google Play launch compliance",
        description:
          "Privacy nutrition labels, data-safety forms, review-ready metadata, and a launch checklist that has cleared both stores on the first serious submission.",
        icon: "Store",
      },
    ],
    calculator: {
      title: "Roadmap and cost estimation",
      subtitle:
        "Set target OS and feature complexity to generate a phased delivery roadmap and capital estimate for v1.",
      fields: [
        {
          type: "select",
          id: "os",
          label: "Target OS",
          helper: "Where v1 must ship to be commercially real.",
          defaultValue: "cross",
          options: [
            { value: "ios", label: "iOS", description: "iPhone + iPad first" },
            { value: "android", label: "Android", description: "Phone + selected tablets" },
            {
              value: "cross",
              label: "Cross-platform",
              description: "iOS and Android from one product system",
            },
          ],
        },
        {
          type: "multiselect",
          id: "features",
          label: "Feature complexity",
          helper: "Select the capabilities that define v1 scope.",
          defaultValue: ["offline"],
          options: [
            { value: "chat", label: "Real-time chat", description: "Presence, push, history" },
            { value: "gps", label: "GPS / mapping", description: "Location, geofence, routes" },
            { value: "iap", label: "In-app purchases", description: "Stores + entitlements" },
            { value: "offline", label: "Offline sync", description: "Local DB + conflict rules" },
          ],
        },
      ],
    },
  },
];

export const servicesBySlug: Record<ServiceSlug, ServiceData> = services.reduce(
  (acc, service) => {
    acc[service.slug] = service;
    return acc;
  },
  {} as Record<ServiceSlug, ServiceData>
);

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  if (!isServiceSlug(slug)) return undefined;
  return servicesBySlug[slug];
}
