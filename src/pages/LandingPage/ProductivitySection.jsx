import React from "react";
import Img from "../../assets/illustration-stay-productive.png";
import ArrowBtn from "../../components/ArrowBtn";

const ProductivitySection = () => {
  return (
    <div className="grid md:grid-cols-2 px-7 md:px-20 gap-10">
      <div>
        <img src={Img} alt="Illustration Stay Productive" />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-[17px]">Stay productive, wherever you are</h2>
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
