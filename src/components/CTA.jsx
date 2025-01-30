import React from "react";

const CTA = ({ text, submit }) => {
  return (
    <button
      className={`bg-gradient-to-r from-cta-cyan to-cta-blue rounded-full text-sm text-custom-white hover:to-cta-cyan hover:opacity-90 font-bold h-12 w-56 ${
        submit ? "w-full" : ""
      }`}
      type="button"
    >
      {text}
    </button>
  );
};

export default CTA;
