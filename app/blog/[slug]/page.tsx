import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/AnimatedText";
import ArticleReveal from "@/components/ArticleReveal";

const postsDirectory = path.join(process.cwd(), "app/blog/posts");

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function formatDate(value: string) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : dateFormatter.format(parsed);
}

export async function generateStaticParams() {
  const files = await fs.readdir(postsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}

async function getPost(slug: string) {
  const markdownFile = await fs.readFile(path.join(postsDirectory, `${slug}.mdx`), "utf-8");
  const { data: frontMatter, content } = matter(markdownFile);
  return { frontMatter, slug, content };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const props = await getPost(slug);

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
              {formatDate(props.frontMatter.date)}
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
