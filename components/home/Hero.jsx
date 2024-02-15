import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/hero-image.svg";

const Hero = () => {
  return (
    <div className="w-full mt-6 overflow-x-hidden">
      <div className="relative w-full h-full flex items-start justify-start flex-col xl:w-11/12 bg-green-light mx-auto rounded-2xl">
        <div className="z-10 flex flex-col sm:w-full py-14 lg:px-10 xl:px-20 mx-4 sm:mx-8 xl:mx-0 xl:w-4/5 3xl:w-3/5 gap-2 xs:gap-3 xl:gap-4">
          <p className="text-primary-gold font-Avenir-Heavy font-semibold text-sm md:text-lg">
            Welcome To Assets Worldwide Real Estate
          </p>
          <h2 className="font-Trajan sm:tracking-wider text-[#044625] text-3xl leading-[45px] xs:leading-[55px] xs:text-[2.2rem] font-bold md:leading-[65px] xl:leading-[78px] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5">
            Turning Houses <br /> into
            <span className="text-[#006633]"> Dream Homes</span>
          </h2>
          <p className="text-black text-sm xs:text-base !leading-6 md:!leading-7 md:text-lg lg:!leading-8 font-light sm:-mt-2 md:-mt-0 w-full xs:w-11/12 sm:w-2/3 md:w-3/4 xl:w-3/5 font-Avenir-Medium">
            Explore our transformative services and embark on a journey to
            redefine your living spaces. We specialize in turning houses into
            dream homes, ensuring that every space reflects your lifestyle,
            personality, and unique taste.
          </p>

          <Link
            href="book-appoinment"
            className="mt-3 3xl:mt-6 flex items-center justify-center bg-primary-green text-[#fafafb] text-center xl:py-2 xl:px-4 rounded-lg font-Avenir-heavy font-bold w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-gold hover:text-white transition duration-300"
          >
            Book Appoinment
          </Link>
        </div>
        <div className="w-full h-full rounded-b-2xl -mt-20 xxs:-mt-28 xs:-mt-36 sm:-mt-52 lg:-mt-64 xl:-mt-96 bg-green-light">
          <Image
            src={HeroImage}
            alt=""
            layout="responsive"
            className="xl:rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
