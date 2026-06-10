"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration
// Sign up free at https://www.emailjs.com then fill in these three values.
// See EMAILJS_SETUP.md in the project root for step-by-step instructions.
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "aLAMjC01K3Xu4KcC8";   // e.g. "AbCdEfGhIjKlMnOp"

const TOPIC_OPTIONS = [
  "AI Consultancy",
  "AI Governance & Frameworks",
  "AI Automation",
  "Cybersecurity",
  "Founder & Startup Advisory",
  "Other (Please specify)",
];

type FormData = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });

  const [topicOpen, setTopicOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.topic || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          topic: formData.topic,
          message: formData.message,
          to_email: "getintouch@corptechai.co.uk",
          reply_to: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", topic: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        "Failed to send your message. Please try again or email us directly at getintouch@corptechai.co.uk"
      );
    } finally {
      setIsSubmitting(false);
    }
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
        <p className="text-white-400 text-base md:text-lg max-w-3xl mx-auto">
          Let's turn operational challenges into smarter processes, better decisions and measurable business outcomes through practical AI, governance and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-cyber-card/60 border border-zinc-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-bl-full pointer-events-none" />

          <div>
            <h3 className="font-orbitron font-bold text-xl md:text-2xl mb-8 text-zinc-100">
              Let's Connect 👋
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:getintouch@corptechai.co.uk"
                className="flex items-center gap-4 text-zinc-400 hover:text-cyber-cyan transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center shrink-0 group-hover:border-cyber-cyan/30">
                  <Mail className="w-5 h-5 text-cyber-cyan" />
                </div>
                <span className="text-sm font-medium">getintouch@corptechai.co.uk</span>
              </a>

              <div className="flex items-center gap-4 text-zinc-400 group">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyber-cyan" />
                </div>
                <span className="text-sm font-medium">London, UK</span>
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email row */}
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
                    onChange={(e) => handleField("name", e.target.value)}
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
                    onChange={(e) => handleField("email", e.target.value)}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/20 transition-all placeholder-zinc-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold font-orbitron text-zinc-400 uppercase mb-2">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleField("company", e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/20 transition-all placeholder-zinc-600"
                  placeholder="Acme Corp"
                />
              </div>

              {/* Topic dropdown */}
              <div className="relative">
                <label htmlFor="topic-btn" className="block text-xs font-bold font-orbitron text-zinc-400 uppercase mb-2">
                  Choose Topic *
                </label>
                <button
                  id="topic-btn"
                  type="button"
                  onClick={() => setTopicOpen((o) => !o)}
                  className={`w-full bg-zinc-950/80 border rounded-xl px-4 py-3 text-sm text-left flex items-center justify-between transition-all focus:outline-none ${topicOpen
                      ? "border-cyber-cyan/60 ring-1 ring-cyber-cyan/20"
                      : "border-zinc-800"
                    } ${formData.topic ? "text-white" : "text-zinc-600"}`}
                >
                  <span>{formData.topic || "Select a topic"}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyber-cyan transition-transform duration-200 ${topicOpen ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>

                {topicOpen && (
                  <ul className="absolute z-50 mt-2 w-full bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                    {TOPIC_OPTIONS.map((opt) => (
                      <li key={opt}>
                        <button
                          type="button"
                          onClick={() => {
                            handleField("topic", opt);
                            setTopicOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-cyber-cyan/10 hover:text-cyber-cyan ${formData.topic === opt
                              ? "text-cyber-cyan bg-cyber-cyan/5"
                              : "text-zinc-300"
                            }`}
                        >
                          {opt}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold font-orbitron text-zinc-400 uppercase mb-2">
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleField("message", e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan/60 focus:ring-1 focus:ring-cyber-cyan/20 transition-all placeholder-zinc-600 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {/* Error message */}
              {errorMsg && (
                <p className="text-red-400 text-xs font-medium bg-red-400/5 border border-red-400/20 rounded-xl px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                id="submit-btn"
                type="submit"
                disabled={isSubmitting || !formData.topic}
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
