import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abdelmoniem-ghazal-40613925a', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/moniem2020', icon: Github },
  { name: 'Email', href: 'mailto:moniemghazal@gmail.com', icon: Mail },
];

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      <div className="container-custom relative py-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Abdelmoniem Ghazal"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Abdelmoniem Ghazal</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              AI & Automation Engineer building intelligent systems that scale. Passionate about LangChain, RAG pipelines, and workflow automation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
                  title={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Cairo, Egypt</span>
              </li>
              <li>
                <a href="mailto:moniemghazal@gmail.com" className="flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4" />
                  <span>moniemghazal@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+201009441336" className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4" />
                  <span>+20 100 944 1336</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Abdelmoniem Ghazal. Crafted with passion for AI & automation.</p>
        </div>
      </div>
    </footer>
  );
}
