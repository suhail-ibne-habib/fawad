import React from "react";
import { BookOpen, Eye, ShieldCheck, ExternalLink, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10 border-t border-zinc-900/60">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
          About <span className="text-cyber-cyan text-glow">CorpTech AI</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          We combine deep technical expertise with a business-first approach to deliver scalable, secure, and high-performing artificial intelligence systems.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {/* Our Story & Our Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Story Card */}
          <div 
            id="story" 
            className="scroll-mt-28 relative bg-cyber-card/40 border border-zinc-800/60 rounded-3xl p-8 md:p-10 hover:border-cyber-cyan/30 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-6 h-6 text-cyber-cyan" />
            </div>
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-zinc-100 group-hover:text-white transition-colors">
              Our Story
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Founded on the belief that artificial intelligence should be a practical driver of enterprise success, CorpTech AI began with a mission to bridge the gap between complex research and real-world execution. With over 20 years of enterprise operational leadership, we help organizations streamline complex workflows, integrate state-of-the-art models, and build robust AI platforms that deliver measurable ROI.
            </p>
          </div>

          {/* Our Vision Card */}
          <div 
            id="vision" 
            className="scroll-mt-28 relative bg-cyber-card/40 border border-zinc-800/60 rounded-3xl p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(2,132,199,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <Eye className="w-6 h-6 text-cyber-blue" />
            </div>
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-zinc-100 group-hover:text-white transition-colors">
              Our Vision
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              We envision a future where enterprise intelligence is seamlessly integrated, secure by default, and aligned with human values. Our goal is to build the next generation of enterprise AI platforms that not only automate routine tasks but also enable teams to discover hidden insights, make critical strategic decisions with confidence, and establish industry-leading operational governance.
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div id="leadership" className="scroll-mt-28 flex flex-col items-center">
          <div className="text-center mb-16">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-6 mx-auto">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="font-orbitron font-bold text-2xl md:text-3xl mb-4 text-zinc-100">
              Leadership
            </h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl">
              Backed by seasoned technology leaders dedicated to helping you steer your AI initiatives in the right direction.
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 max-w-md w-full">
            {/* Leader Card */}
            <div className="relative bg-cyber-card/75 border border-zinc-800/80 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
              
              {/* Leader Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyber-cyan to-cyber-blue p-0.5 mb-6 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-cyber-cyan font-orbitron font-bold text-3xl">
                  SH
                </div>
              </div>

              <h4 className="font-orbitron font-bold text-xl text-zinc-100 mb-1 group-hover:text-white transition-colors">
                Suhail Habib
              </h4>
              <p className="text-cyber-cyan text-xs font-semibold font-orbitron uppercase tracking-wider mb-4">
                Founder & Chief AI Strategist
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Over 20 years of enterprise operational leadership and practical technology consultancy expertise. Passionate about empowering organizations through secure, reliable, and compliant AI solutions.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:suhailibnehabib@gmail.com" 
                  aria-label="Email"
                  className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/80 flex items-center justify-center text-zinc-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
