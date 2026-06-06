import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "https://www.linkedin.com/company/corptechai",
      label: "LinkedIn"
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      href: "https://www.instagram.com/corptech.ai",
      label: "Instagram"
    },
  ];

  return (
    <footer className="border-t border-zinc-800/80 bg-cyber-dark/80 backdrop-blur-md relative z-10 py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-orbitron font-extrabold text-lg tracking-wider flex items-center">
              <span className="text-cyber-cyan">CorpTech</span>
              <span className="text-white">AI</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-zinc-500 text-xs font-medium">
            <span>&copy; {currentYear} CorpTech AI. All rights reserved.</span>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <Link
              href="/privacy"
              className="hover:text-cyber-cyan transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-700">|</span>
            <Link
              href="/terms"
              className="hover:text-cyber-cyan transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-zinc-700">|</span>
            <Link
              href="/cookie"
              className="hover:text-cyber-cyan transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
          <div className="mt-3 text-zinc-500 text-xs space-y-1 text-center md:text-left">
            <p className="font-semibold text-zinc-400">CorpTechAI</p>
            <p>A trading name of CORPTECH LTD</p>
            <p>Registered in England and Wales</p>
            <p>Company No. 16395138</p>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => {
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300"
              >
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
