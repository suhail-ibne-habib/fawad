import React from "react";
import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Matrix digital rain backdrop layer */}
      <MatrixRain />

      {/* Main content wrapper */}
      <div className="relative flex flex-col min-h-screen z-10">
        {/* Navigation header */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Services Stacking cards section */}
        <Services />

        {/* Why Choose Us features list & stats */}
        <WhyChooseUs />

        {/* Portfolio Showcase section */}
        <Projects />

        {/* Inquiries & Coordinates form */}
        <Contact />

        {/* Corporate Footer copyright */}
        <Footer />
      </div>
    </>
  );
}
