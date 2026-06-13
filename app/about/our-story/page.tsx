import type { Metadata } from "next";
import React from "react";
import MatrixRain from "../../components/MatrixRain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Our Story | CorpTech AI",
  description:
    "Learn how CorpTech AI was built on decades of enterprise operational experience to deliver practical AI consultancy.",
};

export default function OurStoryPage() {
  return (
    <>
      <MatrixRain />

      <div className="relative flex flex-col min-h-screen z-10">
        <Navbar />

        <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-36 pb-24">
          <div className="bg-cyber-card/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-white mb-8 border-b border-zinc-800/80 pb-6 text-glow">
              Our Story
            </h1>

            <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                CorpTech AI is a trading name of CORPTECH LTD — an AI consultancy built on more than 20 years of enterprise operational leadership across governance, service management, and transformation.
              </p>

              <p>
                Our story began with a simple observation: many organisations were being sold AI solutions before they had the processes, governance, and operational foundations to use them well. We set out to change that by putting business outcomes first and technology second.
              </p>

              <div className="space-y-3">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl mt-8">
                  What drives us
                </h2>
                <ul className="list-disc list-inside pl-4 space-y-2 text-zinc-400">
                  <li>Improving business processes before applying technology</li>
                  <li>Helping teams adopt AI with confidence, not confusion</li>
                  <li>Strengthening governance, compliance, and accountability</li>
                  <li>Delivering automation that creates measurable value</li>
                </ul>
              </div>

              <p>
                Today, we work with organisations of all sizes — from established enterprises to ambitious founders — helping them improve operations, automate workflows, and apply AI where it genuinely makes a difference.
              </p>

              <p>
                We are also building CorpQ, our enterprise expert discovery platform, extending the same practical, outcome-focused philosophy into product innovation.
              </p>

              <p className="border-t border-zinc-800/50 pt-6 mt-8">
                Want to learn more about how we work?{" "}
                <a href="/#contact" className="text-cyber-cyan hover:underline transition-colors">
                  Get in touch
                </a>{" "}
                or email us at{" "}
                <a href="mailto:getintouch@corptechai.co.uk" className="text-cyber-cyan hover:underline transition-colors">
                  getintouch@corptechai.co.uk
                </a>.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
