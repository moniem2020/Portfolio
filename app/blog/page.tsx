import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AnimatedText from "@/components/AnimatedText";
import BlogPostList from "@/components/BlogPostList";

interface FrontMatter {
  title: string;
  date: string;
  summary?: string;
  category?: string;
}

async function getAllPosts(): Promise<{ frontMatter: FrontMatter; slug: string; }[]> {
  const files = fs.readdirSync(path.join(process.cwd(), "app/blog/posts"));
  return files
    .map((file) => {
      const markdownFile = fs.readFileSync(path.join(process.cwd(), "app/blog/posts", file), "utf-8");
      const { data: rawFrontMatter } = matter(markdownFile);
      const frontMatter = rawFrontMatter as FrontMatter;
      return {
        frontMatter,
        slug: file.replace(".mdx", ""),
      };
    })
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
}

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] -z-10 flex justify-center blur-3xl">
        <div className="h-[320px] w-[620px] bg-gradient-to-r from-indigo-300 via-violet-200 to-sky-200 opacity-60" />
      </div>
      <section className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-12 lg:px-8">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
            Learning log
          </span>
          <AnimatedText
            text="Field notes from automation internships, remote ops builds, and RAG experiments"
            align="left"
            className="text-4xl font-semibold text-slate-900 md:text-5xl"
          />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Writing about the automations I ship, the teams behind them, and the rituals that keep RAG systems and remote talent programs reliable.
          </p>
        </header>
        <BlogPostList posts={posts} />
      </section>
    </div>
  );
}

