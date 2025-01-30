import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-footer-bg light:bg-footer-bg-light w-full pt-64 px-6 md:px-16 flex flex-col gap-10 pb-8">
      <div className="w-48 h-20 fill-custom-white light:fill-main-bg ">
        <svg
          className="cursor-pointer hover:fill-cta-cyan"
          width="176"
          height="52"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <g fill="" fillRule="evenodd">
            <path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col gap-20 lg:gap-48 lg:flex-row justify-between">
        <div className="flex flex-col gap-4 md:justify-between md:flex-row grow-1">
          <div className="flex items-start gap-4 max-w-[380px]">
            <div className="w-8 h-8 p-0.5 flex-shrink-0 fill-custom-white light:fill-lightmode">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z"
                  fill=""
                  fillRule="evenodd"
                  transform="translate(7,2)"
                />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 p-1.25 flex-shrink-0 fill-custom-white light:fill-lightmode">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
                    fill=""
                    fillRule="evenodd"
                    transform="translate(0,5.5)"
                  />
                </svg>
              </div>
              <p>+1-543-123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex-shrink-0 fill-custom-white light:fill-lightmode ">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
                    fill=""
                    transform="translate(6,8)"
                  />
                </svg>
              </div>
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row grow-1 lg:justify-between">
          <div className="flex flex-col gap-10 md:flex-row">
            <ul className="space-y-3">
              <li className="hover:text-white light:hover:text-black">
                About Us
              </li>
              <li className="hover:text-white light:hover:text-black">Jobs</li>
              <li className="hover:text-white light:hover:text-black">Press</li>
              <li className="hover:text-white light:hover:text-black">Blog</li>
            </ul>
            <ul className="space-y-3">
              <li className="hover:text-white light:hover:text-black">
                Contact Us
              </li>
              <li className="hover:text-white light:hover:text-black">Terms</li>
              <li className="hover:text-white light:hover:text-black">
                Privacy
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <ul className="flex gap-5">
              <li>
                <a
                  href="https://github.com/kurtbrio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-xs hover:text-cta-cyan w-6 h-6 rounded-full border-1 border-custom-white light:border-lightmode  hover:border-cta-cyan"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/kurtbrio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-xs  hover:text-cta-cyan w-6 h-6 rounded-full border-1 border-custom-white light:border-lightmode  hover:border-cta-cyan"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kurtbrio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-xs  hover:text-cta-cyan w-6 h-6 rounded-full border-1 border-custom-white light:border-lightmode hover:border-cta-cyan"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
