import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

const capabilities = [
  "Agentic workflow design",
  "Automation roadmapping",
  "AI ops instrumentation",
  "Technical advisory",
];

const contactLinks = [
  { label: "Email", href: "mailto:hello@moniemghazal.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moniemghazal/", external: true },
  { label: "GitHub", href: "https://github.com/moniem-ghazal", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/20 bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
        <div className="flex flex-col gap-8 rounded-3xl border border-slate-800/60 bg-slate-900/50 p-10 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
              Collaborate
            </span>
            <h2 className="text-2xl font-semibold sm:text-3xl">Let&apos;s design your next automation leap</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              From discovery sprints to production rollouts, I partner with teams to ship agentic workflows that feel seamless for customers and operators alike.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {contactLinks.map((link) => {
              const className = "btn-animate rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-100 hover:border-indigo-300/60 hover:bg-indigo-400/20";
              return link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href} className={className}>
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Moniem Ghazal</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              AI & Automation engineer translating complex workflows into resilient systems. I blend agent design, orchestration, and analytics to help teams move faster with confidence.
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-200/90">Capabilities</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-200/90">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-300 sm:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-indigo-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-800/70 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} Moniem Ghazal. All rights reserved.</p>
          <p>Based in Dubai | Available for select partnerships and advisory engagements.</p>
        </div>
      </div>
    </footer>
  );
}
