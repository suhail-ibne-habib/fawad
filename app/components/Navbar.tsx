"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const solutionsSubMenu = [
    { name: "AI Strategy & Transformation", href: "#strategy" },
    { name: "AI Platform Development", href: "#platform" },
    { name: "Enterprise AI Integration", href: "#integration" },
    { name: "AI Consultancy", href: "#consultancy" },
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
          {/* Solutions Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-cyber-cyan transition-colors duration-200 cursor-pointer">
              Solutions
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 rounded-2xl border border-zinc-800 bg-cyber-card/95 backdrop-blur-xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="flex flex-col gap-1">
                {solutionsSubMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold font-orbitron text-zinc-400 hover:text-cyber-cyan hover:bg-cyber-cyan/5 border border-transparent hover:border-cyber-cyan/15 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

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
              Explore CorpQ
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
          {/* Solutions Mobile Accordion */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="flex items-center gap-2 text-2xl font-orbitron font-medium text-zinc-300 hover:text-cyber-cyan transition-colors cursor-pointer"
            >
              Solutions
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col items-center gap-4 mt-4 transition-all duration-300 overflow-hidden ${isSolutionsOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
              {solutionsSubMenu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-orbitron font-medium text-zinc-500 hover:text-cyber-cyan transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

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
            Explore CorpQ
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
