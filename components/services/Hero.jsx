import Link from "next/link";
import FadeIn from "../FadeIn";

export const Hero = () => {
  return (
    <FadeIn classname="lg:!pb-2">
      <div className="relative w-full mt-6 text-center">
        <div className="relative w-full h-auto flex items-center justify-start flex-col lg:w-11/12 md:rounded-2xl py-6 lg:p-20 mx-auto">
          <div className="py-6 md:pt-10 flex flex-col sm:w-full mx-4 sm:mx-8 xl:mx-0 3xl:w-3/5 gap-3 xl:gap-4">
            <h2 className="font-Trajan sm:tracking-wider text-green-100 text-[2.2rem] font-bold sm:leading-[65px] xl:leading-[80px] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5 mx-auto">
              OUR SERVICES
            </h2>
            <p className="text-black text-sm sm:text-base !leading-7 md:text-lg md:!leading-9 font-light w-full md:w-3/4 xl:w-3/5 mx-auto font-Avenir">
              We go beyond traditional real estate services, we specialize in
              turning houses into dream homes
            </p>

            <Link
              href="/contact-us"
              className="mt-6 mx-auto flex items-center justify-center bg-primary-green text-[#fafafb] text-center xl:py-2 xl:px-4 rounded-lg font-Avenir-heavy font-bold w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-gold hover:text-white transition duration-300"
            >
              Book Appoinment
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
