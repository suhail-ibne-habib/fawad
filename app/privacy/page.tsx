import React from "react";
import MatrixRain from "../components/MatrixRain";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>

            <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                At CorpTechAI, we respect your privacy and are committed to protecting your personal information.
              </p>

              <p>
                We only collect information that you voluntarily provide through our contact forms, email communications, or other interactions with our website. This may include your name, email address, company details, and any information you choose to share with us.
              </p>

              <div className="space-y-3">
                <h2 className="font-orbitron font-semibold text-zinc-100 text-lg md:text-xl mt-8">
                  We use this information solely to:
                </h2>
                <ul className="list-disc list-inside pl-4 space-y-2 text-zinc-400">
                  <li>Respond to enquiries and requests</li>
                  <li>Provide our consultancy services</li>
                  <li>Improve our website and user experience</li>
                  <li>Meet legal and regulatory obligations</li>
                </ul>
              </div>

              <p>
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>

              <p>
                Our website may use cookies to improve functionality and understand how visitors use our site. You can manage cookie preferences through your browser settings.
              </p>

              <p>
                We take reasonable measures to protect your information from unauthorised access, disclosure, or misuse.
              </p>

              <p className="border-t border-zinc-800/50 pt-6 mt-8">
                If you have any questions about this Privacy Policy or how your data is handled, please contact us at{" "}
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
