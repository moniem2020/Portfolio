import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/AnimatedText";
import ArticleReveal from "@/components/ArticleReveal";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "app/blog/posts"));
  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

async function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join(process.cwd(), "app/blog/posts", slug + ".mdx"), "utf-8");
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const props = await getPost(params);
    return (
      <article className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[-160px] -z-10 flex justify-center blur-3xl">
          <div className="h-[360px] w-[640px] bg-gradient-to-r from-indigo-300 via-violet-200 to-sky-200 opacity-60" />
        </div>
        <section className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-24 pt-16 lg:px-0">
          <header className="space-y-5 text-center">
            <AnimatedText
              text={props.frontMatter.title}
              className="text-4xl font-semibold text-slate-900 md:text-5xl"
            />
            <p className="text-sm font-medium uppercase tracking-[0.26em] text-indigo-500">
              {props.frontMatter.date}
            </p>
            {props.frontMatter.summary && (
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
                {props.frontMatter.summary}
              </p>
            )}
          </header>
          <ArticleReveal className="prose prose-lg prose-slate mx-auto w-full rounded-3xl border border-slate-200/80 bg-white/80 p-8 text-slate-700 shadow-sm shadow-slate-900/5 max-w-none">
            <MDXRemote source={props.content} />
          </ArticleReveal>
        </section>
      </article>
    );
  } catch {
    notFound();
  }
}
