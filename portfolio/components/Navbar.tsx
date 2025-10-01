"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-600">
          Moniem Ghazal
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors hover:text-slate-900 ${isActive ? "text-slate-900" : "text-slate-600"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-indigo-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/projects"
            className="btn-animate rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900"
          >
            View work
          </Link>
          <Link
            href="/#contact"
            className="btn-animate rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Let&apos;s talk
          </Link>
        </div>
        <button
          type="button"
          className="btn-animate inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <motion.span
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="relative block h-3 w-4"
          >
            <motion.span
              variants={{ closed: { rotate: 0, y: -4 }, open: { rotate: 45, y: 0 } }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 4 }, open: { rotate: -45, y: 0 } }}
              className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current"
            />
          </motion.span>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-slate-200/60 bg-white/90 px-6 pb-6 pt-4 text-sm font-medium text-slate-600 shadow-lg">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 ${isActive ? "text-slate-900" : "text-slate-600"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/projects"
                  className="btn-animate rounded-full border border-slate-200 px-4 py-2 text-center font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900"
                >
                  View work
                </Link>
                <Link
                  href="/#contact"
                  className="btn-animate rounded-full bg-indigo-600 px-4 py-2 text-center font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Let&apos;s talk
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
