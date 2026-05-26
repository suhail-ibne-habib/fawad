import React from "react";
import { Compass, Layers, Network, Brain, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "strategy",
      icon: Compass,
      title: "AI Strategy & Transformation",
      desc: "Helping organisations define their AI future.",
      details: "We work with leadership teams to identify where AI can create meaningful impact across operations, decision-making and knowledge management.",
      features: [
        "AI Opportunity Mapping",
        "Strategic Alignment & Visioning",
        "Operational Impact Analysis",
      ],
      featuresTitle: "Focus Areas",
      color: "from-cyan-500/10 to-blue-500/5",
      borderColor: "group-hover:border-cyber-cyan/40",
      iconColor: "text-cyber-cyan",
      shadow: "shadow-[0_0_50px_rgba(6,182,212,0.1)]",
    },
    {
      id: "platform",
      icon: Layers,
      title: "AI Platform Development",
      desc: "Building scalable AI-powered platforms for enterprise workflows.",
      details: "We design and deploy custom end-to-end AI platforms that scale with your enterprise needs, streamlining complex business workflows and operations.",
      features: [
        "Scalable Architecture Design",
        "Enterprise Workflow Automation",
        "Bespoke LLM Platforms",
      ],
      featuresTitle: "Key Offerings",
      color: "from-blue-500/10 to-purple-500/5",
      borderColor: "group-hover:border-blue-500/40",
      iconColor: "text-blue-400",
      shadow: "shadow-[0_0_50px_rgba(59,130,246,0.1)]",
    },
    {
      id: "integration",
      icon: Network,
      title: "Enterprise AI Integration",
      desc: "Integrating intelligent capabilities into existing systems.",
      details: "Enhance your current infrastructure by seamlessly embedding advanced AI models and intelligent capabilities directly into your existing business systems.",
      features: [
        "System Connectivity & APIs",
        "Legacy Infrastructure Upgrades",
        "Intelligent Feature Addition",
      ],
      featuresTitle: "Capabilities",
      color: "from-indigo-500/10 to-cyan-500/5",
      borderColor: "group-hover:border-indigo-500/40",
      iconColor: "text-indigo-400",
      shadow: "shadow-[0_0_50px_rgba(99,102,241,0.1)]",
    },
    {
      id: "consultancy",
      icon: Brain,
      title: "AI Consultancy",
      desc: "Expert guidance for organisations exploring and adopting artificial intelligence.",
      details: "Our consultancy services support organisations at every stage of their AI journey — from early exploration to implementation and scaling.",
      features: [
        "AI use case discovery",
        "Technical advisory and architecture",
        "AI solution design",
        "Organisational AI readiness",
      ],
      featuresTitle: "Focus areas",
      color: "from-teal-500/10 to-emerald-500/5",
      borderColor: "group-hover:border-teal-500/40",
      iconColor: "text-teal-400",
      shadow: "shadow-[0_0_50px_rgba(20,184,166,0.1)]",
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Title */}
      <div className="text-center mb-24">
        <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
          Our <span className="text-cyber-cyan text-glow">Services</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          Comprehensive AI solutions designed to transform your business operations, secure your data, and drive sustainable market growth.
        </p>
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative flex flex-col gap-12 md:gap-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              style={{ top: `${96 + index * 24}px` }}
              className={`sticky bg-cyber-card/90 backdrop-blur-xl border border-zinc-800/80 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-start justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] group transition-all duration-300 hover:border-zinc-700/80 ${service.shadow}`}
            >
              {/* Background gradient flare */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none -z-10`} />

              {/* Card Left: Icon and Title */}
              <div className="flex-1">
                <div className={`w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="font-orbitron font-bold text-2xl md:text-3xl mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 lg:mb-0">
                  {service.desc}
                </p>
              </div>

              {/* Card Right: Features and detail summary */}
              <div className="flex-1 lg:pl-10 border-t lg:border-t-0 lg:border-l border-zinc-800/80 pt-8 lg:pt-0 w-full">
                <p className="text-zinc-300 text-sm md:text-base mb-6 leading-relaxed">
                  {service.details}
                </p>
                {service.featuresTitle && (
                  <h4 className="text-zinc-300 font-semibold text-sm mb-4 uppercase tracking-wider">
                    {service.featuresTitle}
                  </h4>
                )}
                <ul className="space-y-3.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zinc-400">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${service.iconColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

