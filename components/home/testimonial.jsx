"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { customersList } from "./Experiences";
// import "./TestimonialSlider.css";

const testimonials = [
  { id: 1, text: "Testimonial 1" },
  { id: 2, text: "Testimonial 2" },
  { id: 3, text: "Testimonial 3" },
  { id: 4, text: "Testimonial 4" },
  { id: 5, text: "Testimonial 5" },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3); // Initial end index for desktop

  useEffect(() => {
    // Adjust endIndex on mount to match the slidesToShow
    const slidesToShow = getSlidesToShow();
    setEndIndex(slidesToShow);
  }, []);

  const handleNext = () => {
    const slidesToShow = getSlidesToShow();
    const nextStartIndex = Math.min(
      startIndex + slidesToShow,
      testimonials.length - slidesToShow
    );
    const nextEndIndex = Math.min(endIndex + slidesToShow, testimonials.length);
    setStartIndex(startIndex + slidesToShow);
    setEndIndex(endIndex + slidesToShow);
  };

  const handlePrev = () => {
    const slidesToShow = getSlidesToShow();
    const prevStartIndex = Math.max(startIndex - slidesToShow, 0);
    const prevEndIndex = Math.max(endIndex - slidesToShow, slidesToShow);
    setStartIndex(startIndex - slidesToShow);
    setEndIndex(endIndex - slidesToShow);
  };

  const getSlidesToShow = () => {
    if (window.innerWidth >= 1440) {
      // Desktop
      return 3;
    } else if (window.innerWidth >= 1024) {
      // Tablet
      return 2;
    } else {
      // Mobile
      return 1;
    }
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = endIndex >= testimonials.length;

  return (
    <div>
      <div className="w-full min-h-screen sm:py-12 bg-green-light">
        <div className="w-full py-6 px-2 md:px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
          <div className="xl:w-4/5 flex flex-col gap-3 px-4 md:px-16 font-light justify-center items-center text-center">
            <h2 className="text-primary-green text-2xl md:text-[2rem] lg:text-[2.5rem] font-bold lg:leading-[80px] font-Trajan">
              Our Customer Experiences
            </h2>
            <p className="text-black text-[1.125rem] w-full md:w-3/5 font-Avenir-Regular">
              What our customers say about us.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center w-11/12 md:w-10/12 mx-auto">
            {customersList
              .slice(startIndex, endIndex)
              .map((customer, index) => (
                <div
                  key={customer.id}
                  className={` number-slide${index} relative !min-w-min snap-start mx-auto`}
                  style={{ minWidth: "auto" }}
                >
                  <div className="w-[360px] h-[476px] flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-20 h-20 absolute -top-[40px] z-10">
                      <Image
                        src={customer.img}
                        alt="exp-1"
                        className="w-full h-full object-cover object-center rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col items-stretch px-6 mt-8">
                      <p className="text-primary-green text-[1.125rem] font-bold font-Avenir-Black">
                        {customer.name}
                      </p>
                      <p className="text-black text-[0.875rem] font-Avenir-Regular">
                        {customer.title}
                      </p>
                      <p className="text-black text-[0.875rem] font-Avenir-Regular mt-4 leading-8">
                        {customer.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* {loaded && instanceRef.current && ( */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className="w-10 h-10 border-2 border-primary-green text-primary-green rounded-full flex justify-center items-center disabled:opacity-50"
            >
              <IoArrowBack />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="w-10 h-10 border-2 border-primary-green text-primary-green rounded-full flex justify-center items-center disabled:opacity-50"
            >
              <IoArrowForward />
            </button>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
