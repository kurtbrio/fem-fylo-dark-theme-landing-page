import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import ProductivitySection from "./ProductivitySection";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <div className="w-full bg-main-bg min-h-screen flex flex-col gap-28 lg:gap-0">
      <HeroSection />
      <div className="flex flex-col gap-28">
        <Features />
        <ProductivitySection />
        <Testimonials />
      </div>
    </div>
  );
};

export default LandingPage;
