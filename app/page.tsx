"use client";

import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Stats from "@/components/Landing/Stats";
import Features from "@/components/Landing/Features";
import Testimonial from "@/components/Landing/Testimonials";
import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
