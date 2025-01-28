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
    <div className="flex flex-col relative mx-14 gap-5">
      <div className="absolute top-[-15px] left-0 z-0 w-5 h-5 font-body">
        <img src="backgrounds/bg-quotes.png" />
      </div>
      {testimonialsData.map((testimonial, index) => (
        <div
          className="flex flex-col z-50 p-5 bg-testimonials-bg text-[10px] gap-4 rounded-sm"
          key={index}
        >
          <div className=" text-custom-white/70">{testimonial.testimonial}</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div>
              <div className="text-custom-white text-bold text-[13px]">
                {testimonial.name}
              </div>
              <div className="text-custom-white/70">{testimonial.position}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
