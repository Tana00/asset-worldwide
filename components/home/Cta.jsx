import Image from "next/image";
import Link from "next/link";
import ctaImage from "../../public/images/why-us-cta.svg";

const Cta = () => {
  return (
    <div className="min-h-max w-full">
      <div className="h-full px-8 md:px-6 lg:pr-0 w-full bg-primary-green flex justify-between">
        <div className="flex-1 ml-0 xl:ml-6 2xl:ml-36 flex flex-col justify-center gap-4 text-white w-full lg:w-2/3 xl:w-1/3 py-10 lg:py-16 xl:py-20 px-4 pl-0 md:pl-12">
          <h2 className="text-2xl font-Avenir-Heavy font-semibold md:text-3xl lg:text-[2rem] xl:leading-[55px] xl:text-[2.5rem]">
            Let&apos;s Transform Together
          </h2>
          <div className="w-full md:w-11/12 font-normal font-Avenir-Regular text-sm md:text-base lg:text-[17px] leading-7 xl:!leading-8 md:my-2 lg:my-1 xl:my-2">
            <p>
              Whether you&apos;re looking to breathe new life into an existing
              property or reimagine your dream home from the ground up, Asset
              Worldwide Transforming Houses is your trusted partner. Join us on
              a transformative journey that turns houses into exceptional living
              spaces, elevating your lifestyle to new heights.
            </p>
            <p className="mt-2 lg:mt-3 xl:mt-4">
              Contact us today to start the conversation and discover the
              endless possibilities of transforming your house into a home like
              never before
            </p>
          </div>
          <Link
            href="/contact-us"
            className="flex items-center justify-center text-primary-green bg-white text-center py-2 px-6 h-14 rounded-lg w-max font-Avenir-Heavy font-bold text-base lg:text-[18px] hover:bg-primary-gold hover:text-white transition duration-300"
          >
            Book Appoinment
          </Link>
        </div>
        <div className="hidden max-h-[600px] lg:block lg:w-1/2 cta_clip">
          <Image
            src={ctaImage}
            alt="cta"
            className="w-full h-full object-cover"
            // layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
