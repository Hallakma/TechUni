import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1642303826050-b804ae26eed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80",
      name: "Shalima Hayden",
      designation: "Product Designer",
      content:
        "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Mark Smith",
      designation: "Marketing Manager, ABC Corp",
      content:
        "Sed eleifend erat eu erat fringilla, id viverra odio placerat. Proin ut ligula eget leo volutpat congue. Morbi consequat, neque sit amet rhoncus aliquet, urna mauris maximus est, nec condimentum lorem sapien nec nisi.",
    },
    // Add more testimonials as needed
  ];

  const handlePrevious = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div>
      <div className="text-center mt-24">
        <h1 className="text-[48px] text-[#11142D] mb-24">
          What Our Customer Says
        </h1>
      </div>
      <div className="relative text-center flex justify-center">
        <div className="flex overflow-x-auto"></div>
        <div className=" relative">
          <div className="flex-none p-8 bg-[#FFEFEB] rounded-lg shadow-md w-[50%] justify-center mx-auto relative">
            <div className="flex items-center justify-center absolute top-[-40px] left-0 right-0">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt="User Avatar"
                className="w-[88px] h-[88px]  rounded-full bg-[#E2E2EA] object-cover"
              />
            </div>
            <p className="text-[#515151]  pt-16">
              {testimonials[currentTestimonial].content}
            </p>
            <h4 className="mt-4 font-bold text-[24px] text-[#11142D]">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className=" text-[16px] text-[#515151]">
              {testimonials[currentTestimonial].designation}
            </p>
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-[#F3692E]  rounded-full text-orange "
            onClick={handlePrevious}
          >
            <ChevronLeftIcon className="h-16 w-16 text-orange" />
            {/* Previous Button */}
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-[#F3692E] rounded-full "
            onClick={handleNext}
          >
            <ChevronRightIcon className="h-16 w-16 text-orange" />
            {/* Next Button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
