import React from "react";
import heroImg from "../../assets/illustration-intro.png";
import CTA from "../../components/CTA";

const HeroSection = () => {
  return (
    <div className="pt-10 pb-24 flex flex-col bg-email-bg relative">
      <picture className="w-full absolute bottom-0">
        <source
          media="(min-width:700px)"
          srcSet="backgrounds/bg-curvy-desktop.svg"
        />
        <img src="backgrounds/bg-curvy-mobile.svg" className="w-full" />
      </picture>

      <div className="z-50">
        <div className="flex justify-center w-full">
          <img src={heroImg} alt="Illustration" className="w-72 lg:w-[28rem]" />
        </div>
        <div className="flex flex-col items-center text-center gap-6 mt-10">
          <h1 className="text-2xl lg:3xl w-80 lg:w-[32rem]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="w-[280px] lg:w-[25rem]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <CTA text={"Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
