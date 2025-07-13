// import React from "react"
import { Navbar } from "@/components/utils/Navbar";
import Footer from "@/components/utils/Footer";
import Hero from "@/components/LandingPage/Hero";
import MainContent from "@/components/LandingPage/MainContent";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};