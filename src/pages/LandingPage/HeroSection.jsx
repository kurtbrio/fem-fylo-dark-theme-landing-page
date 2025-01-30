import React from "react";
import heroImg from "../../assets/illustration-intro.png";
import CTA from "../../components/CTA";

const HeroSection = () => {
  return (
    <div className="pt-10 lg:mb-0 lg:pb-48 flex flex-col bg-email-bg light:bg-email-bg-light relative">
      <div className="w-full h-full absolute bottom-0 fill-main-bg light:fill-main-bg-light">
        {/* mobile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="block lg:hidden w-full h-auto absolute bottom-0"
          viewBox="0 0 375 141"
        >
          <defs>
            <path id="a" d="M0 0h375v141H0z" />
          </defs>
          <g fill="" fillRule="evenodd">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <path
              d="M0 128.937c22.708-1.669 44.049-15.69 64.024-42.063 29.962-39.56 23.473-54.118 73.218-40.562 49.746 13.556 45.508 4.677 77.494-26.648 31.985-31.325 52.746-24.157 72.245 13.912 19.499 38.07 55.147 47.264 88.395 61.244 22.165 9.32 22.165 1296.047 0 3860.18H0V128.937z"
              fill=""
              mask="url(#b)"
            />
          </g>
        </svg>

        {/* desktop */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="hidden lg:block w-full h-full"
          viewBox="0 0 1440 1"
        >
          <defs>
            <path id="a" d="M0 0h1454v449H0z" />
          </defs>
          <g transform="translate(-14)" fill="" fillRule="evenodd">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <path
              d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z"
              fill=""
              mask="url(#b)"
            />
          </g>
        </svg>
      </div>

      <div className="z-50">
        <div className="flex justify-center w-full">
          <img
            src={heroImg}
            alt="Illustration Intro"
            className="w-72 lg:w-[28rem] xl:w-[700px]"
          />
        </div>
        <div className="flex flex-col items-center text-center gap-6 mt-10">
          <h1 className="text-2xl lg:text-3xl px-8 sm:px-40 md:px-48 lg:px-64 xl:px-[400px]">
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
