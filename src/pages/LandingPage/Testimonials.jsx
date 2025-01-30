import React from "react";
import Satish from "../../assets/profile-1.jpg";
import Bruce from "../../assets/profile-2.jpg";
import Iva from "../../assets/profile-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: Satish,
    },
    {
      name: "Bruce McKenzie",
      position: "Founder & CEO, Huddle",
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: Bruce,
    },
    {
      name: "Iva Boyd",
      position: "Founder & CEO, Huddle",
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: Iva,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row relative mx-14 md:mx-16 lg:mx-24 xl:mx-30 gap-5 lg:gap-10 pb-72">
      <div className="absolute -top-[12.5px] md:-top-[20px] lg:-top-[25px] left-0 md:-left-1.5 w-5 md:w-8 lg:w-10 h-5 md:h-8 lg:h-10 font-body z-0">
        <img src="backgrounds/bg-quotes.png" />
      </div>
      {testimonialsData.map((testimonial, index) => (
        <div
          className="flex flex-col z-50 p-5 bg-testimonials-bg light:bg-testimonials-bg-light text-[10px] gap-4 rounded-sm xl:text-xs"
          key={index}
        >
          <div className="text-custom-white/70 light:text-lightmode/70 lg:text-[17px]">
            {testimonial.testimonial}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div>
              <div className="text-custom-white light:text-lightmode text-bold text-sm ">
                {testimonial.name}
              </div>
              <div className="text-custom-white/70 light:text-lightmode/70 text-xs">
                {testimonial.position}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
