import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { blogPosts, getPostBySlug } from "@/data/blogsData";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="py-24">
      <div className="container max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/blogs" className="hover:text-foreground">
            Blogs
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{post.category}</span>
        </nav>

        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border/70 shadow-sm">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <Badge variant="cyan">{post.category}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-muted-foreground">{post.excerpt}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          {post.author} · {post.role} · {post.readTime} ·{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
