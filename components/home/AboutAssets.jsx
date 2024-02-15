"use client";

import Link from "next/link";
import { AboutVideo } from "../About-Video";

const AboutAssets = () => {
  return (
    <div className="w-full min-h-screen py-6 sm:py-12">
      <div className="w-full md:w-11/12 xl:w-4/5 bg-white py-6 px-8 mx-auto mt-8 flex flex-col justify-center items-center text-center gap-14">
        <div className="flex flex-col gap-3 px-2 lg:px-16 font-light justify-center items-center text-center">
          <h2 className="text-primary-gold text-2xl md:text-[2rem] lg:text-[2.5rem] font-medium sm:leading-[40px] lg:leading-[80px] font-Trajan uppercase">
            About Assets Worldwide
          </h2>
          <p className="text-black text-sm !leading-6 md:text-lg md:!leading-8 font-medium w-full 2xl:w-3/5 font-Avenir-Regular">
            Asset Worldwide, a prominent real estate entity based in the United
            Kingdom, boasts a rich operational history spanning over five years.
            We redefine the concept of home by seamlessly merging real estate
            expertise with transformative design and innovation. We understand
            that a house is more than just a property; it&apos;s a canvas
            waiting to be transformed into a masterpiece that reflects your
            unique lifestyle.
          </p>
          <Link
            href="/learn-more"
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
