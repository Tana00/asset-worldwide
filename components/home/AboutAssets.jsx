"use client";

import Link from "next/link";
import { AboutVideo } from "../About-Video";

const AboutAssets = () => {
  return (
    <div className="w-full min-h-screen py-6 sm:py-12">
      <div className="w-full md:w-11/12 xl:w-4/5 mx-auto bg-white py-6 mt-8 flex flex-col justify-center items-center text-center gap-10 md:gap-14">
        <div className="px-8 flex flex-col gap-3 lg:px-16 font-light justify-center items-center text-center">
          <h2 className="text-primary-gold text-2xl md:text-[2rem] lg:text-[2.5rem] font-medium sm:leading-[40px] lg:leading-[80px] font-Trajan uppercase">
            About Assets Worldwide
          </h2>
          <p className="text-black text-sm !leading-6 md:text-lg md:!leading-8 font-medium w-full 2xl:w-3/5 font-Avenir-Regular">
            At Asset Worldwide, we offer a comprehensive suite of services to
            meet all your property needs. In addition to our expertise in
            revitalizing empty homes, we provide Lease Option and Rent to Rent
            solutions, offering landlords guaranteed rent while we secure
            tenants under fixed contract terms. Our meticulous property
            management services ensure smooth operations and maintenance,
            optimizing the value and potential of every property in our care.
            With a dedication to innovation and client satisfaction, Asset
            Worldwide is your ultimate partner for seamless property
            transformation and management.
          </p>
          <Link
            href="/about-us"
            className="flex items-center justify-center mt-6 bg-primary-green text-[#fafafb] font-bold text-center py-2 px-4 rounded-lg font-Avenir-Regular text-sm sm:text-lg w-[201px] 2xl:w-[147px] sm:h-14 h-12 hover:bg-primary-gold hover:text-white transition duration-300"
          >
            Learn More
          </Link>
        </div>
        <AboutVideo />
      </div>
    </div>
  );
};

export default AboutAssets;
