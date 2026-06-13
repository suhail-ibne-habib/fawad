import type { Metadata } from "next";
import React from "react";
import { Award, Shield, Users, Zap } from "lucide-react";
import MatrixRain from "../../components/MatrixRain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Leadership | CorpTech AI",
  description:
    "Meet the experience behind CorpTech AI — enterprise operational leadership, governance expertise, and practical AI consultancy.",
};

const leadershipPillars = [
  {
    icon: Zap,
    title: "Enterprise Operational Leadership",
    desc: "More than 20 years of experience across operations, service management, and large-scale transformation programmes.",
  },
  {
    icon: Shield,
    title: "Governance & Risk",
    desc: "Deep expertise in establishing controls, accountability, compliance frameworks, and responsible AI practices.",
  },
  {
    icon: Users,
    title: "People-Centred Delivery",
    desc: "A consultancy approach that works with your teams — improving processes and capability, not just deploying tools.",
  },
  {
    icon: Award,
    title: "Independent Advisory",
    desc: "Vendor-neutral guidance focused on business outcomes, free from technology sales agendas.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <MatrixRain />

      <div className="relative flex flex-col min-h-screen z-10">
        <Navbar />

        <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-36 pb-24">
          <div className="bg-cyber-card/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-white mb-8 border-b border-zinc-800/80 pb-6 text-glow">
              Leadership
            </h1>

            <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                CorpTech AI is led by practitioners with decades of hands-on experience in enterprise operations, governance, and technology transformation — not theorists, but advisors who have lived the challenges our clients face every day.
              </p>

              <p>
                Our leadership team brings together operational depth, consultancy rigour, and a commitment to practical AI adoption. We have led and supported programmes spanning service management, compliance, automation, cybersecurity, and digital change across complex organisations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {leadershipPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="bg-cyber-card/40 border border-zinc-800/60 rounded-2xl p-6 hover:border-zinc-700/80 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-cyber-cyan" />
                      </div>
                      <h2 className="font-orbitron font-semibold text-zinc-100 text-base mb-2">
                        {pillar.title}
                      </h2>
                      <p className="text-zinc-400 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>

              <p className="pt-4">
                Beyond consultancy, our leadership is actively shaping product innovation through CorpQ — an enterprise expert discovery platform built on the same principles of clarity, governance, and practical value.
              </p>

              <p className="border-t border-zinc-800/50 pt-6 mt-8">
                Interested in working with our team?{" "}
                <a href="/#contact" className="text-cyber-cyan hover:underline transition-colors">
                  Contact us
                </a>{" "}
                or email{" "}
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
