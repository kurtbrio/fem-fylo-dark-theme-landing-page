import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import ProductivitySection from "./ProductivitySection";
import Testimonials from "./Testimonials";
import SignUp from "./SignUp";

const LandingPage = () => {
  return (
    <div className="w-full bg-main-bg min-h-screen flex flex-col gap-28 lg:gap-0 light:bg-main-bg-light">
      <HeroSection />
      <div className="flex flex-col gap-28 relative">
        <Features />
        <ProductivitySection />
        <Testimonials />
        <SignUp />
      </div>
    </div>
  );
};

export default LandingPage;
