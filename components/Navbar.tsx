'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-900/5'
          : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 font-bold text-white shadow-lg transition-transform group-hover:scale-110">
              AG
            </div>
            <span className="text-xl font-bold text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">
              Abdelmoniem
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-slate-700 transition-colors hover:text-indigo-600"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
              className="h-0.5 w-6 rounded-full bg-slate-900"
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="h-0.5 w-6 rounded-full bg-slate-900"
            />
            <motion.span
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
              className="h-0.5 w-6 rounded-full bg-slate-900"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-slate-200 md:hidden"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-center text-sm font-semibold text-white"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
