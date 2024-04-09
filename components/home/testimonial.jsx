"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { customersList } from "./Experiences";

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
    setStartIndex(startIndex + slidesToShow);
    setEndIndex(endIndex + slidesToShow);
  };

  const handlePrev = () => {
    const slidesToShow = getSlidesToShow();
    setStartIndex(startIndex - slidesToShow);
    setEndIndex(endIndex - slidesToShow);
  };

  const getSlidesToShow = () => {
    if (window.innerWidth >= 2040) {
      // Desktop
      return 4;
    }
    if (window.innerWidth >= 1440) {
      // Laptop
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
  const isNextDisabled = endIndex >= customersList.length;

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
          <div className="mt-10 flex items-center xl:grid grid-cols-3 3xl:grid-cols-4 gap-4 justify-center w-11/12 lg:w-10/12 2xl:w-3/4 mx-auto">
            {customersList
              .slice(startIndex, endIndex)
              .map((customer, index) => (
                <div
                  key={customer.id}
                  className={`number-slide${index} relative !min-w-min snap-start mx-auto`}
                  style={{ minWidth: "auto" }}
                >
                  <div className="w-[360px] h-[626px] flex flex-col justify-start items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-20 h-20 absolute -top-[40px] z-10">
                      {/* <Image
                        src={customer.img}
                        alt="exp-1"
                        className="w-full h-full object-cover object-center rounded-lg"
                      /> */}
                      <div class="h-20 w-20 overflow-hidden rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          class="h-20 w-20 p-5 text-black bg-[#eee] stroke-current"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch px-6 mt-20">
                      <p className="text-primary-green text-[1.125rem] font-bold font-Avenir-Black">
                        {customer.title}
                      </p>
                      {/* <p className="text-black text-[0.875rem] font-Avenir-Regular">
                        {customer.title}
                      </p> */}
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
