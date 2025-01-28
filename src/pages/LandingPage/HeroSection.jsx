import React from "react";
import heroImg from "../../assets/illustration-intro.png";
import CTA from "../../components/CTA";

const HeroSection = () => {
  return (
    <div className="pt-10 lg:mb-0 lg:pb-48 flex flex-col bg-email-bg relative">
      <picture className="w-full absolute bottom-0 ">
        <source
          media="(min-width:700px)"
          srcSet="backgrounds/bg-curvy-desktop.svg"
        />
        <img src="backgrounds/bg-curvy-mobile.svg" className="w-full" />
      </picture>

      <div className="z-50">
        <div className="flex justify-center w-full">
          <img
            src={heroImg}
            alt="Illustration Intro"
            className="w-72 lg:w-[28rem]"
          />
        </div>
        <div className="flex flex-col items-center text-center gap-6 mt-10">
          <h1 className="text-2xl lg:3xl px-8 sm:px-40 md:px-48 lg:px-64">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="px-12 sm:px-32 md:px-52 lg:px-[310px] xl:px-[500px]">
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
