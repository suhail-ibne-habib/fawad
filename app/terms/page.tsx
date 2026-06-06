import React from "react";
import MatrixRain from "../components/MatrixRain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfUse() {
  return (
    <>
      {/* Matrix digital rain backdrop layer */}
      <MatrixRain />

      {/* Main content wrapper */}
      <div className="relative flex flex-col min-h-screen z-10">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-36 pb-24">
          <div className="bg-cyber-card/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-white mb-8 border-b border-zinc-800/80 pb-6 text-glow">
              Terms of Use
            </h1>

            <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                Welcome to CorpTechAI. By accessing or using our website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our services or website.
              </p>

              <div className="space-y-4 mt-8">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  1. Acceptance of Terms
                </h2>
                <p className="text-zinc-400">
                  By using this website, you represent that you have read, understood, and agreed to be bound by these Terms of Use and our Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  2. Intellectual Property
                </h2>
                <p className="text-zinc-400">
                  All content, branding, logos, graphics, design, layout, and source code on this website are the intellectual property of CORPTECH LTD. You may not copy, reproduce, republish, distribute, or use any of our content without prior written permission from us.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  3. Disclaimer of Liability
                </h2>
                <p className="text-zinc-400">
                  The information provided on this website is for general informational purposes only and does not constitute professional consultancy advice. CORPTECH LTD makes no representations or warranties about the accuracy, reliability, or completeness of the information on this website and is not liable for any decisions or actions taken based on it.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  4. Third-Party Links
                </h2>
                <p className="text-zinc-400">
                  Our website may contain links to external, third-party websites. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  5. Governing Law
                </h2>
                <p className="text-zinc-400">
                  These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the English courts.
                </p>
              </div>

              <p className="border-t border-zinc-800/50 pt-6 mt-8">
                For any questions regarding these Terms of Use, please contact us at{" "}
                <a href="mailto:getintouch@corptechai.co.uk" className="text-cyber-cyan hover:underline transition-colors">
                  getintouch@corptechai.co.uk
                </a>.
              </p>

              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider pt-4">
                Last Updated: June 2026
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
