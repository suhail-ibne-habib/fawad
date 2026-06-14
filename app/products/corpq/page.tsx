"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight, ArrowRight, User, MessageSquare, FileText, Search, Briefcase, Network, Brain, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function CorpQPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-cyber-dark text-zinc-100 flex flex-col font-sans relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyber-blue/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyber-cyan/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative max-w-7xl w-full mx-auto px-6 md:px-12 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start gap-6 z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium mb-2">
            <Link href="/" className="hover:text-cyber-cyan transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-cyber-cyan transition-colors cursor-default">Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cyber-blue font-semibold">CorpQ</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] sm:text-xs font-bold tracking-widest font-orbitron uppercase shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            In Development
          </div>

          {/* Logo Title */}
          <h1 className="text-5xl sm:text-7xl font-extrabold font-orbitron tracking-tight flex items-center">
            <span className="text-white drop-shadow-md">Corp</span>
            <span className="text-cyber-blue drop-shadow-[0_0_15px_rgba(2,132,199,0.8)]">Q</span>
          </h1>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight mt-2 text-white">
            Find the right expert.<br />
            Solve faster.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">Every time.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-zinc-300 font-medium max-w-lg mt-2">
            The <span className="text-cyber-blue font-semibold">Human Intelligence Layer</span> for the Enterprise.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-md leading-relaxed">
            CorpQ uses real organizational signals to identify the best experts, connect knowledge, and accelerate resolution across your enterprise.
          </p>

          {/* CTA Button */}
          <a
            href="https://corpq.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-cyber-blue to-blue-600 hover:from-cyber-cyan hover:to-cyber-blue text-white px-8 py-3.5 rounded-xl font-orbitron font-semibold transition-all shadow-[0_0_20px_rgba(2,132,199,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] group"
          >
            Explore CorpQ Website
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Graphic Column (The Orbit Network) */}
        <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto flex items-center justify-center">
          {/* Base Globe / Sphere Glow */}
          <div className="absolute inset-0 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 shadow-[inset_0_0_50px_rgba(2,132,199,0.2)]"></div>
          
          {/* Orbital Rings */}
          <div className="absolute w-[100%] h-[100%] rounded-full border border-cyber-blue/30 border-dashed animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute w-[75%] h-[75%] rounded-full border border-cyber-cyan/30 animate-[spin_30s_linear_infinite_reverse]"></div>
          <div className="absolute w-[50%] h-[50%] rounded-full border border-purple-500/30 border-dashed animate-[spin_20s_linear_infinite]"></div>

          {/* Central Logo */}
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-cyber-dark/80 backdrop-blur-md border border-cyber-blue/50 flex items-center justify-center shadow-[0_0_40px_rgba(2,132,199,0.6)] z-20">
             <span className="text-5xl sm:text-7xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyber-cyan to-cyber-blue drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">Q</span>
          </div>

          {/* Orbital Nodes */}
          {/* Outer Ring Nodes */}
          <div className="absolute w-[100%] h-[100%] animate-[spin_40s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyber-dark border border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-[spin_40s_linear_infinite_reverse]">
              <User className="w-5 h-5 text-purple-400" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-cyber-dark border border-cyber-blue flex items-center justify-center shadow-[0_0_20px_rgba(2,132,199,0.6)] animate-[spin_40s_linear_infinite_reverse]">
              <User className="w-5 h-5 text-cyber-blue" />
            </div>
          </div>

          {/* Middle Ring Nodes */}
          <div className="absolute w-[75%] h-[75%] animate-[spin_30s_linear_infinite_reverse]">
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyber-dark border border-cyber-cyan flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6)] animate-[spin_30s_linear_infinite]">
              <Search className="w-5 h-5 text-cyber-cyan" />
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyber-dark border border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-[spin_30s_linear_infinite]">
              <User className="w-5 h-5 text-purple-400" />
            </div>
          </div>

          {/* Inner Ring Nodes */}
          <div className="absolute w-[50%] h-[50%] animate-[spin_20s_linear_infinite]">
            <div className="absolute top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cyber-dark border border-cyber-cyan flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-[spin_20s_linear_infinite_reverse]">
              <MessageSquare className="w-4 h-4 text-cyber-cyan" />
            </div>
            <div className="absolute bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-cyber-dark border border-cyber-blue flex items-center justify-center shadow-[0_0_15px_rgba(2,132,199,0.5)] animate-[spin_20s_linear_infinite_reverse]">
              <FileText className="w-4 h-4 text-cyber-blue" />
            </div>
          </div>

          {/* Network Connection Lines (Static background decoration) */}
          <svg className="absolute inset-0 w-full h-full opacity-40 z-[-1]" viewBox="0 0 100 100">
            <line x1="50" y1="50" x2="50" y2="0" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="100" y2="50" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="15" y2="85" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="15" y2="15" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="85" y2="85" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
          
          {/* Ambient Particles */}
          <div className="absolute w-1.5 h-1.5 bg-cyber-cyan rounded-full top-[25%] left-[35%] shadow-[0_0_8px_#06b6d4] animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-purple-400 rounded-full bottom-[35%] left-[25%] shadow-[0_0_10px_#a855f7] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-cyber-blue rounded-full top-[45%] right-[25%] shadow-[0_0_8px_#0284c7] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-2.5 h-2.5 bg-cyber-cyan rounded-full bottom-[20%] right-[40%] shadow-[0_0_12px_#06b6d4] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        </section>

        {/* Features Section */}
        <section className="py-24 bg-cyber-dark/50 border-t border-cyber-cyan/10 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-cyber-cyan font-orbitron font-bold tracking-widest text-sm uppercase mb-3">Core Capabilities</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Engine of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">Human Intelligence</span></h2>
              <p className="text-zinc-400 text-lg">CorpQ doesn't just search for keywords. It understands context, relationships, and proven expertise to build a dynamic map of your organization's true capabilities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-cyber-card/60 border border-zinc-800 hover:border-cyber-cyan/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] group">
                <div className="w-14 h-14 rounded-xl bg-cyber-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Network className="w-7 h-7 text-cyber-cyan" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-orbitron">Dynamic Knowledge Mapping</h4>
                <p className="text-zinc-400 leading-relaxed">Automatically maps explicit and tacit knowledge across your workforce, breaking down departmental silos to reveal hidden experts.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-cyber-card/60 border border-zinc-800 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] group">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-orbitron">AI-Powered Matching</h4>
                <p className="text-zinc-400 leading-relaxed">Advanced language models understand the nuance of every query, matching it instantly with the right human expert based on verified experience.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-cyber-card/60 border border-zinc-800 hover:border-cyber-blue/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(2,132,199,0.1)] group">
                <div className="w-14 h-14 rounded-xl bg-cyber-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-cyber-blue" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-orbitron">Real-Time Resolution</h4>
                <p className="text-zinc-400 leading-relaxed">Connects seekers with solvers directly in their existing workflows, reducing resolution times from days to mere minutes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works / Value Prop Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background ambient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-900/5 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl border border-zinc-800 bg-cyber-card overflow-hidden group shadow-2xl">
                  {/* Abstract visualization of connection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 to-transparent"></div>
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/50 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] z-10 animate-pulse">
                    <User className="w-8 h-8 text-cyber-cyan" />
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] z-10 animate-pulse" style={{ animationDelay: '1s' }}>
                    <User className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  {/* Connecting Line animated */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <path d="M 33% 33% Q 50% 50% 67% 67%" fill="none" stroke="url(#gradient)" strokeWidth="4" strokeDasharray="10 10" className="animate-[dash_2s_linear_infinite]" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <style>
                      {`
                        @keyframes dash {
                          to {
                            stroke-dashoffset: -20;
                          }
                        }
                      `}
                    </style>
                  </svg>
                  
                  {/* Background Grid */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop searching for answers. <br />Start connecting with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">experts</span>.</h2>
                
                <ul className="space-y-6 mt-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center flex-shrink-0 mt-1 border border-cyber-blue/30">
                      <Shield className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-orbitron">Enterprise-Grade Security</h4>
                      <p className="text-zinc-400 mt-1">Deployed securely within your infrastructure. Your organizational data and intellectual property never leave your control.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1 border border-purple-500/30">
                      <Globe className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-orbitron">Seamless Integrations</h4>
                      <p className="text-zinc-400 mt-1">Connects natively with Slack, Teams, Jira, and Confluence. We fit into the tools your team already uses daily.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative border-t border-cyber-cyan/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/10 to-transparent"></div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold font-orbitron text-white mb-6">Ready to empower your workforce?</h2>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
              Join the organizations using CorpQ to transform their distributed workforce into a unified intelligence network.
            </p>
            <a
              href="https://corpq.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-cyber-dark hover:bg-cyber-cyan px-8 py-4 rounded-xl font-orbitron font-bold text-lg transition-all group shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
