"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Background radial glow */}
      <div className="absolute right-1/4 bottom-10 w-[350px] h-[350px] bg-cyber-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
          Ready to <span className="text-cyber-cyan text-glow">Transform</span>?
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          Get in touch with our team of AI experts to discuss how we can help automate, secure, and grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Info Coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-cyber-card/60 border border-zinc-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-bl-full pointer-events-none" />
          
          <div>
            <h3 className="font-orbitron font-bold text-xl md:text-2xl mb-8 text-zinc-100">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:hello@corptech.ai"
                className="flex items-center gap-4 text-zinc-400 hover:text-cyber-cyan transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center shrink-0 group-hover:border-cyber-cyan/30">
                  <Mail className="w-5 h-5 text-cyber-cyan" />
                </div>
                <span className="text-sm font-medium">hello@corptech.ai</span>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center gap-4 text-zinc-400 hover:text-cyber-cyan transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center shrink-0 group-hover:border-cyber-cyan/30">
                  <Phone className="w-5 h-5 text-cyber-cyan" />
                </div>
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </a>

              <div className="flex items-center gap-4 text-zinc-400 group">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyber-cyan" />
                </div>
                <span className="text-sm font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 pt-8 border-t border-zinc-800/60 flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-cyan/20 bg-cyber-cyan/5 text-cyber-cyan text-xs font-semibold font-orbitron">
              <Clock className="w-3.5 h-3.5" />
              Response within 24 hours
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-cyber-card/40 border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 className="w-8 h-8 text-cyber-cyan" />
              </div>
              <h3 className="font-orbitron font-bold text-2xl text-white mb-3">
                Message Sent!
              </h3>
              <p className="text-zinc-400 text-sm max-w-sm">
                Thank you for reaching out. A CorpTech AI representative will contact you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm font-semibold font-orbitron text-cyber-cyan hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold font-orbitron text-zinc-400 uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/20 transition-all placeholder-zinc-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold font-orbitron text-zinc-400 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/20 transition-all placeholder-zinc-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-bold font-orbitron text-zinc-400 uppercase mb-2">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/20 transition-all placeholder-zinc-600"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold font-orbitron text-zinc-400 uppercase mb-2">
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/20 transition-all placeholder-zinc-600 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                id="submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full relative inline-flex items-center justify-center p-4 overflow-hidden text-sm font-semibold font-orbitron text-white rounded-xl group bg-gradient-to-br from-cyber-cyan to-cyber-blue hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none border-glow shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
