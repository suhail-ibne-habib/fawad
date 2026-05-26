"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-dark/85 backdrop-blur-md border-b border-cyber-cyan/15 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-orbitron font-extrabold text-xl tracking-wider text-glow flex items-center">
            <span className="text-cyber-cyan">CorpTech</span>
            <span className="text-white">AI</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-cyber-cyan transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold font-orbitron text-white rounded-full group bg-gradient-to-br from-cyber-cyan to-cyber-blue group-hover:from-cyber-cyan group-hover:to-cyber-blue hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 transition-all"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-cyber-dark rounded-full group-hover:bg-transparent">
              Get Started
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none z-50"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-0 h-screen w-screen bg-cyber-dark/98 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 gap-8 items-center w-full max-w-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-orbitron font-medium text-zinc-300 hover:text-cyber-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full text-center py-3.5 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-blue font-orbitron font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
