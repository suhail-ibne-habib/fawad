import React from "react";
import { Check, Zap, Users, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "End-to-End AI Implementation",
      desc: "From initial feasibility analysis and scoping to production deployment, optimization, and staff training.",
    },
    {
      title: "Industry-Leading Security",
      desc: "Zero-trust architecture, encrypted data transmission, and model alignment security defaults built-in.",
    },
    {
      title: "Scalable Automation Frameworks",
      desc: "Integrations engineered to support high-volume transaction loads and grow as your team expands.",
    },
    {
      title: "Data-Driven Decision Making",
      desc: "Interactive metrics dashboards that visualize live performance, usage models, and cost parameters.",
    },
    {
      title: "Continuous Optimization & Support",
      desc: "24/7 post-deployment monitoring, prompt iteration, parameter tuning, and periodic vulnerability patching.",
    },
    {
      title: "Compliance & Regulatory Expertise",
      desc: "Guidance on local and international standards, ensuring safe deployment within strict industry boundaries.",
    },
  ];

  const stats = [
    {
      icon: Zap,
      number: "199+",
      label: "Projects Delivered",
      glowColor: "text-cyber-cyan",
    },
    {
      icon: Users,
      number: "50+",
      label: "Enterprise Clients",
      glowColor: "text-blue-400",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      glowColor: "text-indigo-400",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Background visual elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
          Why Choose <span className="text-cyber-cyan text-glow">CorpTech AI</span>?
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          We combine deep technical expertise with a business-first approach to deliver scalable, secure, and high-performing artificial intelligence systems.
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
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center py-4 ${
                  idx < 2 ? "md:border-r border-zinc-800/80" : ""
                }`}
              >
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
