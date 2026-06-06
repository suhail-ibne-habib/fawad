import React from "react";
import MatrixRain from "../components/MatrixRain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>

            <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                At CorpTechAI, we use cookies and similar tracking technologies to improve and analyze your experience on our website.
              </p>

              <div className="space-y-4 mt-8">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  1. What are Cookies?
                </h2>
                <p className="text-zinc-400">
                  Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They help the website remember your actions and preferences over time, providing a more efficient and personalized browsing experience.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  2. How We Use Cookies
                </h2>
                <p className="text-zinc-400">
                  We use cookies for the following key purposes:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2 text-zinc-400">
                  <li>
                    <strong className="text-zinc-200">Essential Cookies:</strong> Necessary for the core functions of the website to operate correctly and securely.
                  </li>
                  <li>
                    <strong className="text-zinc-200">Performance & Analytics:</strong> To gather insights into how visitors interact with our website (e.g., page views, link clicks) so that we can optimize design and usability.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  3. Managing Cookies
                </h2>
                <p className="text-zinc-400">
                  You can control and manage your cookie preferences through your web browser's settings. Most browsers allow you to block or delete cookies, but please note that disabling certain cookies might affect the functionality or availability of parts of our website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl">
                  4. Policy Updates
                </h2>
                <p className="text-zinc-400">
                  We may occasionally update this Cookie Policy to reflect changes in our practices or legal requirements. We encourage you to check this page periodically to stay informed about our cookie usage.
                </p>
              </div>

              <p className="border-t border-zinc-800/50 pt-6 mt-8">
                If you have any questions about this Cookie Policy, please contact us at{" "}
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
