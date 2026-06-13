import type { Metadata } from "next";
import React from "react";
import MatrixRain from "../../components/MatrixRain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Our Vision | CorpTech AI",
  description:
    "CorpTech AI's vision for responsible, practical AI adoption — helping organisations improve processes, governance, and automation with confidence.",
};

export default function OurVisionPage() {
  return (
    <>
      <MatrixRain />

      <div className="relative flex flex-col min-h-screen z-10">
        <Navbar />

        <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-36 pb-24">
          <div className="bg-cyber-card/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-white mb-8 border-b border-zinc-800/80 pb-6 text-glow">
              Our Vision
            </h1>

            <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                We envision a future where every organisation can adopt AI responsibly — with clear governance, strong operational foundations, and technology that serves people rather than overwhelming them.
              </p>

              <p>
                CorpTech AI exists to make that future practical. We believe AI should improve how businesses operate, not add complexity for its own sake. Our vision is rooted in measurable outcomes: better processes, stronger controls, smarter automation, and confident decision-making.
              </p>

              <div className="space-y-3">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl mt-8">
                  Our guiding principles
                </h2>
                <ul className="list-disc list-inside pl-4 space-y-2 text-zinc-400">
                  <li>Practical business focus over hype-driven technology adoption</li>
                  <li>Governance and risk management built into every AI initiative</li>
                  <li>Independent, vendor-neutral advice focused on your outcomes</li>
                  <li>Automation designed to deliver efficiency and lasting value</li>
                  <li>Cybersecurity and resilience as non-negotiable foundations</li>
                </ul>
              </div>

              <p>
                Whether we are advising on AI strategy, building governance frameworks, automating workflows, or supporting founders on their growth journey, our vision remains the same: help organisations transform operations through practical AI.
              </p>

              <p className="border-t border-zinc-800/50 pt-6 mt-8">
                Ready to align your AI ambitions with a clear roadmap?{" "}
                <a href="/#contact" className="text-cyber-cyan hover:underline transition-colors">
                  Let&apos;s connect
                </a>{" "}
                or reach us at{" "}
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
