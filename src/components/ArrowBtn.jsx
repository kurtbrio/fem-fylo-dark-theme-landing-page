import React from "react";

const ArrowBtn = ({ text }) => {
  return (
    <button className="flex items-center text-xs text-cta-cyan font-normal border-b-1 w-fit gap-1">
      {text}
      <img src="icons/icon-arrow.svg" />
    </button>
  );
};

export default ArrowBtn;
