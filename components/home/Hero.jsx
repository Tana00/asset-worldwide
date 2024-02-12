import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full mt-6 min-h-screen overflow-x-hidden">
      <div className="w-full flex items-start justify-start flex-col xl:w-10/12 3xl:w-11/12 bg-green-light py-14 lg:px-20 mx-auto hero-container">
        <div className="flex flex-col sm:w-full mx-4 sm:mx-8 xl:mx-0 3xl:w-3/5 gap-3 xl:gap-4">
          <p className="text-primary-gold font-Avenir-Heavy font-semibold text-sm md:text-lg">
            Welcome To Assets Worldwide Real Estate
          </p>
          <h2 className="font-Trajan sm:tracking-wider text-[#044625] text-[2.2rem] font-bold sm:leading-[65px] xl:leading-[80px] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5">
            Turning Houses <br /> into
            <span className="text-[#006633]"> Dream Homes</span>
          </h2>
          <p className="text-black text-base !leading-6 md:text-lg font-light w-full md:w-3/4 xl:w-3/5 font-Avenir">
            Explore our transformative services and embark on a journey to
            redefine your living spaces. We specialize in turning houses into
            dream homes, ensuring that every space reflects your lifestyle,
            personality, and unique taste.
          </p>

          <Link
            href="book-appoinment"
            className="md:mt-6 flex items-center justify-center bg-primary-green text-[#fafafb] text-center xl:py-2 xl:px-4 rounded-lg font-Avenir-heavy font-bold w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-gold transition duration-300"
          >
            Book Appoinment
          </Link>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Hero;
