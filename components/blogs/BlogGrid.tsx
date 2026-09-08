"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { blogCategories, blogPosts, type BlogCategory } from "@/data/blogsData";
import { Badge } from "@/components/ui/badge";

type Filter = "All" | BlogCategory;

export function BlogGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const posts = useMemo(() => {
    const sorted = [...blogPosts].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    if (filter === "All") return sorted;
    return sorted.filter((post) => post.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Article categories">
        {(["All", ...blogCategories] as Filter[]).map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={filter === category}
            onClick={() => setFilter(category)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              filter === category
                ? "border-indigo-300 bg-indigo-50 text-indigo-700"
                : "border-border bg-white text-muted-foreground hover:border-indigo-200 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-glow"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="cyan">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-950 group-hover:text-indigo-700">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  {post.author} · {post.role} ·{" "}
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
