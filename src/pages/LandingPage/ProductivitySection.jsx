import React from "react";
import Img from "../../assets/illustration-stay-productive.png";
import ArrowBtn from "../../components/ArrowBtn";

const ProductivitySection = () => {
  return (
    <div className="grid md:grid-cols-2 px-7 md:px-12 lg:px-16 xl:px-24 gap-10 items-center">
      <div>
        <img src={Img} alt="Illustration Stay Productive" />
      </div>
      <div className="flex flex-col gap-3 md:gap-4 xl:pr-16">
        <h2 className="text-[17px] md:text-2xl lg:text-3xl xl:text-4xl md:pr-32 lg:pr-40 xl:pr-52">
          Stay productive, wherever you are
        </h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <ArrowBtn text={"See how Fylo works"} />
      </div>
    </div>
  );
};

export default ProductivitySection;
