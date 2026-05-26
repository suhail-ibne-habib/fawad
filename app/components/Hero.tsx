import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10">
      {/* Background Gradients for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-cyber-cyan/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-cyber-blue/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none -z-20" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan font-orbitron text-xs font-semibold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          AI Consultancy
        </div>

        {/* Hero Title */}
        <h1 className="font-orbitron font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Empowering Through
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue text-glow">
            Intelligent Innovation
          </span>
        </h1>

        {/* Sub-description */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed">
          Expert AI consultancy specializing in automation, cybersecurity, and marketing solutions to transform your business operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold font-orbitron text-white rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] border-glow"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 text-sm font-semibold font-orbitron text-zinc-300 hover:text-white rounded-full border border-zinc-700/60 bg-cyber-dark/50 hover:bg-cyber-dark/80 hover:border-zinc-500/80 active:scale-[0.98] transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
