import React from "react";

const CTA = ({ text }) => {
  return (
    <button className="bg-gradient-to-r from-cta-cyan to-cta-blue px-20 py-3 rounded-full text-sm">
      {text}
    </button>
  );
};

export default CTA;
