export const blogCategories = [
  "SEO",
  "Artificial Intelligence",
  "Engineering",
  "Social Strategy",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  role: string;
  publishedAt: string;
  readTime: string;
  keywords: string[];
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "technical-seo-is-a-product-discipline",
    title: "Technical SEO is a product discipline, not a quarterly audit",
    excerpt:
      "Enterprise organic growth stalls when search engine optimization is treated as a PDF. Here is how we operationalize crawl health, Core Web Vitals, and programmatic architecture as a release train.",
    category: "SEO",
    image: "/images/services/seo.jpg",
    author: "Amelia Cho",
    role: "Principal SEO Strategist",
    publishedAt: "2026-08-12",
    readTime: "8 min",
    keywords: ["search engine optimization", "technical SEO", "Core Web Vitals", "programmatic SEO"],
    content: [
      "Most enterprise search engine optimization programs still begin with a 90-page audit and end with a backlog nobody owns. Rankings move in the opposite direction of the slideware. The fix is not another crawl. The fix is to treat technical SEO as a product discipline with a release train, acceptance criteria, and a named owner in engineering.",
      "Start with indexation economics. Log-file analysis will tell you whether Googlebot is spending its time on revenue URLs or on faceted ghosts. If 40% of crawl is wasted on parameters, no amount of blog content will compound. Canonical policy, robots, and sitemap hygiene are the first sprint, not a footnote.",
      "Programmatic architecture is how category leaders win the long tail without writing 8,000 unique essays. Templates must be unique enough to deserve indexation: internal links that express entity relationships, copy blocks that are generated from structured data rather than spun, and rendering that search engines can see without a five-second JavaScript lottery.",
      "Core Web Vitals remediation belongs in the same stand-up as feature work. LCP is usually an image and font problem. INP is usually a hydration and third-party script problem. CLS is usually a reserved-space problem. None of those are “SEO tasks.” They are engineering tasks with search revenue attached.",
      "Finally, report organic the way finance reports paid. Cluster keywords by commercial intent, reconcile Search Console with CRM opportunities, and show the compounding curve. When search engine optimization is a product, it gets budget. When it is a PDF, it gets archived.",
    ],
  },
  {
    slug: "revenue-driven-keyword-architecture",
    title: "Build keyword architecture around pipeline, not volume",
    excerpt:
      "Traffic is a lagging vanity metric. A revenue-driven search strategy maps entities and intent to sales stages so organic demand actually reaches the forecast.",
    category: "SEO",
    image: "/images/services/seo.jpg",
    author: "Marcus Ellison",
    role: "Growth Marketing Director",
    publishedAt: "2026-07-02",
    readTime: "7 min",
    keywords: ["keyword strategy", "organic growth", "B2B SEO", "search engine optimization"],
    content: [
      "Volume-first keyword lists are how B2B sites accumulate informational traffic that never talks to sales. A revenue-driven search engine optimization program starts from closed-won language: the phrases buyers use in RFPs, the objections that stall deals, and the comparison queries that appear two weeks before a signature.",
      "Map those phrases into an entity graph. Your product, the jobs it performs, the industries it serves, and the alternatives it displaces should each own a cluster. Internal links should express that graph so PageRank and users travel toward commercial URLs.",
      "Gap analysis against competitors is useful only if you score gaps by pipeline potential. A rival ranking for a 20,000-volume glossary term is not a threat. A rival owning seven solution pages that match your ICP’s buying committee is.",
      "Once architecture is set, content production becomes a system: briefs tied to SERP intent, SME interviews, and unique data. Publishing cadence matters less than whether each URL has a job in the funnel and a query set it can realistically win.",
    ],
  },
  {
    slug: "rag-that-survives-legal-review",
    title: "RAG that survives legal review: citations, permissions, and evaluation",
    excerpt:
      "AI transformation dies in the CISO’s inbox when retrieval-augmented generation cannot prove where an answer came from. Production RAG is an access-control problem first.",
    category: "Artificial Intelligence",
    image: "/images/services/gen-ai.jpg",
    author: "Dr. Priya Nandakumar",
    role: "Head of AI Systems",
    publishedAt: "2026-08-28",
    readTime: "9 min",
    keywords: ["AI transformation", "RAG", "enterprise AI", "generative AI"],
    content: [
      "Demo RAG is a vector store and a prompt. Production RAG is a permissions graph, a citation contract, and an evaluation harness that fails closed. If your assistant can see a document the employee cannot, you do not have a knowledge bot. You have a data leak with a friendly UI.",
      "Chunking strategy determines whether citations are usable. Too large and the model quotes the wrong paragraph. Too small and you lose the policy context legal requires. Hybrid search plus a reranker beats “embed everything and hope,” especially on policies, contracts, and engineering runbooks.",
      "Evaluation is not a vibe check. Build a golden set from real tickets and questions, score faithfulness and refusal quality, and re-run it on every index refresh. Drift is normal. Undetected drift is how a confident wrong answer reaches a customer.",
      "Privacy sandboxes (private endpoints, PII redaction, retention windows) are what make AI transformation fundable. The model is interchangeable. The governance around retrieval is the moat.",
    ],
  },
  {
    slug: "autonomous-agents-need-brakes",
    title: "Autonomous agents need brakes: tool use with human-in-the-loop",
    excerpt:
      "Agent workflows create leverage only when refunds, legal language, and VIP accounts stay behind explicit gates. Here is the control plane we ship with every production agent.",
    category: "Artificial Intelligence",
    image: "/images/services/gen-ai.jpg",
    author: "Julian Park",
    role: "Principal AI Engineer",
    publishedAt: "2026-06-18",
    readTime: "8 min",
    keywords: ["autonomous agents", "AI transformation", "customer service AI", "LLM ops"],
    content: [
      "An agent that can call tools is an employee with a very fast keyboard. You would not give a new hire refund authority on day one. Do not give it to a model because the demo looked smooth.",
      "We design agents as graphs: retrieve, decide, act, write back. Each act node has a policy. Low-risk actions (order status, password reset links, knowledge answers with citations) can complete. High-risk actions pause for a human with the full trace attached.",
      "Observability is the product. Every tool call, retrieved chunk, and token cost should land in a trace you can replay. When something goes wrong (and it will), the question is not “did the model misbehave?” It is “which policy failed, and how do we prevent the class of failure?”",
      "Cost control belongs in the same dashboard. Agents that loop, over-retrieve, or call the largest model for a FAQ will quietly become the most expensive intern in the building. Route by task difficulty. Keep a small model on the well-worn paths.",
    ],
  },
  {
    slug: "nextjs-app-router-for-enterprise-software",
    title: "What enterprise software actually needs from the Next.js App Router",
    excerpt:
      "Server Components, streaming, and typed data layers are not blog-demo features. They are how we keep enterprise software fast, cacheable, and maintainable after the original team rotates.",
    category: "Engineering",
    image: "/images/services/web-development.jpg",
    author: "Sofia Rahman",
    role: "Director of Engineering",
    publishedAt: "2026-08-05",
    readTime: "10 min",
    keywords: ["enterprise software", "Next.js", "web development", "App Router"],
    content: [
      "The App Router is a rendering model, not a folder fad. Enterprise software needs a clear split: server components fetch and authorize, client components handle interaction, and nothing in between leaks secrets into the browser bundle.",
      "We default to streaming shells for authenticated products. The chrome and the permissioned data should not share a waterfall. Caching is explicit: tags, revalidation, and a policy for what is user-specific versus what is shared. Accidental personalization in a shared cache is an incident.",
      "Typed end-to-end contracts (Zod on the boundary, generated types from the API) stop the slow death of “any” that appears six months after launch. Headless CMS content gets the same treatment: schemas, preview, and localization as code, not CMS folklore.",
      "Performance budgets are release gates. If a template cannot hit its LCP target with production third parties enabled, it does not ship. That single rule has saved more enterprise software launches than any after-the-fact speed project.",
    ],
  },
  {
    slug: "design-systems-that-outlive-the-agency",
    title: "Design systems that outlive the agency that built them",
    excerpt:
      "A modern component system is documentation, tokens, and contribution rules, not a Figma file with 400 variants. This is how we hand enterprise UI to internal teams without a second rebuild.",
    category: "Engineering",
    image: "/images/services/web-development.jpg",
    author: "Elena Voss",
    role: "Head of Product Design",
    publishedAt: "2026-05-21",
    readTime: "6 min",
    keywords: ["design systems", "enterprise software", "UI engineering", "accessibility"],
    content: [
      "Agencies love to ship a beautiful marketing site and call the component folder a design system. Internal teams discover the truth on week three: undocumented variants, inaccessible dialogs, and spacing that only works on the homepage.",
      "A durable system starts with tokens that map to CSS variables, not magic numbers. Radius, color, type, and motion should be boringly consistent. Primitives come from a maintained set (buttons, inputs, focus rings) with accessibility as a default, not a ticket.",
      "Contribution rules matter as much as components. If a product squad cannot add a pattern without breaking three pages, they will fork. We leave lint rules, Storybook (or equivalent), and a short “when to create a new primitive” guide.",
      "The goal is not visual novelty. The goal is an interface language the company can still speak after we leave.",
    ],
  },
  {
    slug: "linkedin-is-a-demand-system-not-a-newsletter",
    title: "LinkedIn is a demand system, not a newsletter",
    excerpt:
      "Growth marketing on LinkedIn fails when organic thought leadership and paid acquisition are owned by different agencies with different goals. Unify the narrative and the pipeline will follow.",
    category: "Social Strategy",
    image: "/images/services/smm.jpg",
    author: "Noah Whitaker",
    role: "Social Performance Lead",
    publishedAt: "2026-07-24",
    readTime: "7 min",
    keywords: ["growth marketing", "LinkedIn ads", "social media marketing", "B2B demand"],
    content: [
      "Most B2B social media marketing still splits the house: a content team chasing impressions and a media team chasing CPL, using different stories. Buyers notice. Your category narrative should be one system with two amplifiers: organic distribution and paid reach.",
      "Organic on LinkedIn is document posts, founder POV, and customer proof with a point of view. Cadence beats volume. A precise three-times-weekly program with sales commenting will outperform a fifteen-post spray that the executive team refuses to share.",
      "Paid should retarget the people who engaged with that narrative and prospect lookalikes built from pipeline, not from “job title plus country.” Creative testing is a weekly operating rhythm: hooks, offers, and proof, retired without sentimentality.",
      "Measure social like a demand system. Track assisted pipeline, not likes. If sales cannot quote a post in a discovery call, the narrative is not working, regardless of the dashboard’s vanity peak.",
    ],
  },
  {
    slug: "creative-velocity-beats-perfect-campaigns",
    title: "Creative velocity beats perfect campaigns on paid social",
    excerpt:
      "Meta and TikTok punish slow creative. The brands that win treat asset production as a factory with hypotheses, not as a quarterly brand film.",
    category: "Social Strategy",
    image: "/images/services/smm.jpg",
    author: "Camila Duarte",
    role: "Creative Strategist",
    publishedAt: "2026-04-09",
    readTime: "6 min",
    keywords: ["paid social", "creative testing", "growth marketing", "social media marketing"],
    content: [
      "A single hero film cannot carry a paid social program. Platforms decay winners in days. The operating model that works is velocity: many tight hypotheses, native aspect ratios, and a kill-or-scale rule that creative teams agree to before the first export.",
      "We brief in systems. Hook, body, proof, offer. Each slot can vary independently. That is how you learn whether the problem is the first second or the landing URL without waiting for another brand review cycle.",
      "Influencer and creator assets belong in the same factory when the claim is controlled. UGC-style work often beats studio polish on Meta and TikTok, but only if product truth survives the edit and disclosures are non-negotiable.",
      "Pair velocity with conversion tracking that finance trusts. Otherwise you will scale the ad that looks cheap and starves pipeline. Creative without measurement is theater. Measurement without creative is a spreadsheet.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory | "All"): BlogPost[] {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  if (category === "All") return sorted;
  return sorted.filter((post) => post.category === category);
}
