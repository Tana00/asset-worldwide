import Link from "next/link";
import Image from "next/image";
import aboutAsset from "@/public/images/about-assets.png";
import { AboutVideo } from "../About-Video";

const Hero = () => {
  return (
    <div className="w-full mt-6 text-center">
      <div className="relative w-full h-auto lg:h-[700px] xl:h-[800px] flex items-center justify-start flex-col xl:w-11/12 bg-gold-light md:rounded-2xl py-6 lg:py-14 lg:px-20 mx-auto">
        <div className="pt-10 flex flex-col sm:w-full mx-4 sm:mx-8 xl:mx-0 3xl:w-3/5 gap-3 xl:gap-4">
          <h2 className="font-Trajan sm:tracking-wider text-green-100 text-[2.2rem] font-bold sm:leading-[65px] xl:leading-[80px] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5 mx-auto">
            About Us
          </h2>
          <p className="text-black text-sm sm:text-base !leading-7 md:text-lg md:!leading-9 font-light w-full md:w-3/4 xl:w-3/5 mx-auto font-Avenir">
            Asset Worldwide, a prominent real estate entity based in the United
            Kingdom, boasts a rich operational history spanning over five years.
            We redefine the concept of home by seamlessly merging real estate
            expertise with transformative design and innovation. We understand
            that a house is more than just a property; it&apos;s a canvas
            waiting to be transformed into a masterpiece that reflects your
            unique lifestyle.
          </p>

          <Link
            href="book-appoinment"
            className="mt-6 mx-auto flex items-center justify-center bg-primary-green text-[#fafafb] text-center xl:py-2 xl:px-4 rounded-lg font-Avenir-heavy font-bold w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-gold hover:text-white transition duration-300"
          >
            Book Appoinment
          </Link>
        </div>
        <div className="w-11/12 object-cover h-52 sm:h-auto lg:w-10/12 mt-6 lg:absolute lg:bottom-[-10rem] xl:bottom-[-12rem]">
          <AboutVideo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
