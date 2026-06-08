import type { Metadata } from "next";
import { Space_Grotesk, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionEffect from "@/components/TransitionEffect";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moniemghazal.vercel.app"),
  title: "Moniem Ghazal — AI & Automation Engineer",
  description:
    "Freelance AI & Automation Engineer. I build RAG copilots, AI agents, automation pipelines, and full-stack web apps that help teams work smarter. Available for freelance projects.",
  keywords: [
    "AI Engineer",
    "Automation",
    "Freelance",
    "LangChain",
    "RAG",
    "n8n",
    "Power BI",
    "Cairo",
    "Moniem Ghazal",
  ],
  authors: [{ name: "Moniem Ghazal" }],
  openGraph: {
    title: "Moniem Ghazal — AI & Automation Engineer",
    description:
      "Freelance AI & Automation Engineer building RAG copilots, AI assistants, and full-stack apps that help teams work smarter.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <TransitionEffect />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
