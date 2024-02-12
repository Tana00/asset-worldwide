import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full md:w-4/5 bg-green-light py-6 px-8  mx-auto hero-container">
        <div className="flex flex-col w-full md:w-3/5 gap-4">
          <p className="text-primary-gold font-Avenir-Regular font-semibold text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] 2xl:text-[1.5rem]">
            Welcome To Assets Worldwide Real Estate
          </p>
          <h2 className="font-Trajan text-[#044625] text-[2rem] font-bold md:leading-[80px] md:text-[4rem] xl:text-[3rem] 2xl:text-[4rem] 2xl:leading-[80px] ">
            Turning Houses <br /> into
            <span className="text-[#006633]"> Dream Homes</span>
          </h2>
          <p className="text-black text-[0.8rem] w-full md:w-4/5 font-Avenir-Regular">
            Explore our transformative services and embark on a journey to
            redefine your living spaces. We specialize in turning houses into
            dream homes, ensuring that every space reflects your lifestyle,
            personality, and unique taste.
          </p>

          <Link
            href="book-appoinment"
            className="bg-primary-green text-[#fafafb] text-center py-2 px-4 rounded-lg font-Avenir-Black w-max text-[18px] hover:bg-primary-gold transition duration-300"
          >
            Book Appoinment
          </Link>
        </div>
        <div className="flex-2"></div>
      </div>
    </div>
  );
}

export default Hero