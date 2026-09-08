import type { Metadata } from "next";

import { BlogGrid } from "@/components/blogs/BlogGrid";
import { SectionBackdrop } from "@/components/layout/SectionBackdrop";

export const metadata: Metadata = {
  title: "Blogs | SEO, AI, Engineering & Social Strategy",
  description:
    "Operator-grade writing on search engine optimization, artificial intelligence, enterprise engineering, and social strategy from the Ascendedly practice leads.",
  keywords: [
    "SEO insights",
    "AI transformation blog",
    "enterprise engineering",
    "social strategy",
    "growth marketing thought leadership",
  ],
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <SectionBackdrop variant="grid" className="py-24">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">Blogs</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-slate-950 md:text-5xl">
          Notes from the practices: search, software, and intelligent systems.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          No recycled listicles. These are the operating notes our principals share with clients
          after the sprint review, filtered by SEO, Artificial Intelligence, Engineering, and Social
          Strategy.
        </p>
        <div className="mt-12">
          <BlogGrid />
        </div>
      </div>
    </SectionBackdrop>
  );
}
