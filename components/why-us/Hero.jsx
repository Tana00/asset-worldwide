import Link from "next/link";
import Image from "next/image";
import FadeIn from "../FadeIn";

export const Hero = () => {
  const imagesArr = [
    "/images/why-us-hero1.svg",
    "/images/why-us-hero2.svg",
    "/images/why-us-hero3.svg",
  ];
  return (
    <FadeIn classname="xl:!mb-[16rem]">
      <div className="w-full mt-6 text-center">
        <div className="relative w-full h-auto lg:h-[700px] xl:h-[800px] flex items-center justify-start flex-col py-6 lg:py-10 2xl:py-14 mx-auto">
          <div className=" xl:w-11/12 mx-auto py-6 lg:px-20 md:py-10 flex flex-col sm:w-full px-4 sm:mx-8 xl:mx-0 3xl:w-3/5 gap-3 xl:gap-4">
            <h2 className="font-Trajan sm:tracking-wider text-green-100 text-3xl xs:text-[2.2rem] font-bold sm:leading-[65px] xl:leading-[80px] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] 2xl:leading-[85px] sm:w-4/5 mx-auto">
              Why Choose Us
            </h2>
            <p className="text-black text-sm sm:text-base !leading-7 md:text-lg md:!leading-9 font-light w-full md:w-3/4 xl:w-3/5 mx-auto font-Avenir">
              Asset Worldwide stands at the intersection of creativity and
              practicality. We specialize in transforming empty homes into
              vibrant living spaces, offering a Guaranteed Rent Scheme for
              property owners, providing seamless Property Management services,
              and introducing a Lease Option for flexible transactions.
            </p>

            <Link
              href="book-appoinment"
              className="mt-6 mx-auto flex items-center justify-center bg-primary-green text-[#fafafb] text-center xl:py-2 xl:px-4 rounded-lg font-Avenir-heavy font-bold w-fit px-8 py-3.5 sm:text-base xl:w-[210px] xl:h-[56px] xl:text-lg hover:bg-primary-gold hover:text-white transition duration-300"
            >
              Book Appoinment
            </Link>
          </div>
          <div className="w-full h-full bg-green-light mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-full max-w-6xl mx-auto">
              {imagesArr.map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt=""
                  width={100}
                  height={100}
                  layout="responsive"
                  className="h-full w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
