import React from "react";
import CTA from "../../components/CTA";

const SignUp = () => {
  return (
    <div className="absolute -bottom-[154px] md:-bottom-[126px] left-1/2 transform -translate-x-1/2 w-full text-center md:max-w-[850px] ">
      <div className="bg-testimonials-bg light:bg-testimonials-bg-light px-6 py-9 md:px-20 mx-6 rounded-md shadow-lg shadow-black light:shadow-white flex flex-col gap-6">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Get early access today
        </h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="grid md:grid-cols-3 gap-6">
          <input
            type="email"
            placeholder="email@example.com"
            className="px-8 h-12 w-full bg-custom-white rounded-full text-xs md:col-span-2"
          />
          <CTA text={"Get Started For Free"} submit={true} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
