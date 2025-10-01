"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FrontMatter {
  title: string;
  date: string;
  summary?: string;
  category?: string;
}

interface PostItem {
  slug: string;
  frontMatter: FrontMatter;
}

interface BlogPostListProps {
  posts: PostItem[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
          className="group rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm shadow-slate-900/5"
        >
          <Link href={`/blog/${post.slug}`} className="space-y-3">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                {post.frontMatter.category ?? "Automation"}
              </span>
              <p className="text-sm font-medium text-slate-500">{post.frontMatter.date}</p>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 transition group-hover:text-indigo-600">
              {post.frontMatter.title}
            </h2>
            {post.frontMatter.summary && (
              <p className="text-sm leading-relaxed text-slate-600">{post.frontMatter.summary}</p>
            )}
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-500">
              Read article &gt;
            </span>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
