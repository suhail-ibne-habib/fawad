import React from "react";
import { Check, Zap, Users, Award, Layers } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Practical Business Focus",
      desc: "Improving business processes and operational performance before applying technology solutions.",
    },
    {
      title: "Enterprise Operational Experience",
      desc: "Built on 20+ years of leadership across operations, governance, service management and transformation.",
    },
    {
      title: "Governance & Risk Expertise",
      desc: "Helping organisations establish controls, accountability, compliance and responsible AI practices.",
    },
    {
      title: "Automation with Purpose",
      desc: "Identifying opportunities where automation delivers measurable business value and efficiency gains.",
    },
    {
      title: "Cybersecurity & Resilience",
      desc: "Supporting secure technology adoption through governance, risk management and operational resilience.",
    },
    {
      title: "Independent & Vendor-Neutral",
      desc: "Providing practical advice focused on business outcomes rather than technology sales.",
    },
  ];

  const stats = [
    {
      icon: Zap,
      number: "20+ Years",
      label: "Enterprise Technology Experience",
      glowColor: "text-cyber-cyan",
    },
    {
      icon: Users,
      number: "5+ Partners",
      label: "Technology & Industry Collaborations",
      glowColor: "text-blue-400",
    },
    {
      icon: Layers,
      number: "1 Platform",
      label: "Building CorpQ — Enterprise Expert Discovery AI",
      glowColor: "text-indigo-400",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Background visual elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
          Why Choose <span className="text-cyber-cyan text-glow">CorpTech AI</span>?
        </h2>
        <p className="text-white-400 text-base md:text-lg max-w-2xl mx-auto">
          Leveraging 20+ years of enterprise operational leadership and practical consultancy expertise to help organisations improve processes, strengthen governance, automate workflows, and adopt AI with confidence.
        </p>
      </div>

      {/* Grid of Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-cyber-card/40 border border-zinc-800/60 rounded-2xl p-8 hover:border-zinc-700/80 transition-all duration-300 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
          >
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyber-cyan/20 transition-colors">
                <Check className="w-4 h-4 text-cyber-cyan" />
              </div>
              <div>
                <h3 className="font-orbitron font-semibold text-lg text-zinc-100 mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Card Container */}
      <div className="relative bg-cyber-card/75 border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Subtle grid background for the stats card */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-5 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center relative z-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const containerClasses = `flex flex-col items-center text-center py-4 ${
              idx < 2 ? "md:border-r border-zinc-800/80" : ""
            }`;

            return (
              <div key={idx} className={containerClasses}>
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyber-cyan" />
                </div>
                <div className={`font-orbitron font-extrabold text-4xl md:text-5xl mb-2 text-glow ${stat.glowColor}`}>
                  {stat.number}
                </div>
                <div className="text-zinc-400 text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
