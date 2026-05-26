import React from "react";
import { ArrowRight, Cpu, ShoppingBag, ShieldAlert } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Automation",
      subtitle: "Fortune 500 Process Automation",
      icon: Cpu,
      desc: "Designed and deployed a fleet of custom agentic systems to automate global financial operations, auditing trails, and cross-department invoice matching.",
      metrics: ["40% Cost Reduction", "65% Faster Processing", "99.9% Accuracy"],
      iconColor: "text-cyber-cyan",
      borderColor: "hover:border-cyber-cyan/30",
    },
    {
      title: "E-commerce AI",
      subtitle: "AI-Powered Recommendation Engine",
      icon: ShoppingBag,
      desc: "Built a real-time recommendations engine processing user interaction events at scale, utilizing deep learning algorithms to predict customer purchase intent.",
      metrics: ["32% Revenue Increase", "45% Better Engagement", "2M+ Monthly Users"],
      iconColor: "text-blue-400",
      borderColor: "hover:border-blue-500/30",
    },
    {
      title: "Healthcare Security",
      subtitle: "Medical Data Protection Platform",
      icon: ShieldAlert,
      desc: "Configured a secure transmission and storage platform for medical research, running real-time cryptographic anomaly threat monitors and verifying compliance parameters.",
      metrics: ["Zero Security Breaches", "HIPAA Compliant", "24/7 Threat Protection"],
      iconColor: "text-indigo-400",
      borderColor: "hover:border-indigo-500/30",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Background gradients */}
      <div className="absolute left-0 bottom-1/4 w-[250px] h-[250px] bg-cyber-cyan/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
          Featured <span className="text-cyber-cyan text-glow">Projects</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          Explore our portfolio of cutting-edge AI implementations that have transformed business efficiency, engagement, and security.
        </p>
      </div>

      {/* Grid of projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div
              key={idx}
              className={`bg-cyber-card/50 border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] ${project.borderColor}`}
            >
              <div>
                {/* Icon & Subtitle */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Icon className={`w-6 h-6 ${project.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase block">
                      {project.title}
                    </span>
                    <h3 className="font-orbitron font-bold text-base text-zinc-200 mt-0.5 group-hover:text-white transition-colors">
                      {project.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-[10px] font-bold font-orbitron bg-zinc-900/80 text-cyber-cyan border border-cyber-cyan/15 px-3 py-1.5 rounded-md"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Learn More link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold font-orbitron text-cyber-cyan group-hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
