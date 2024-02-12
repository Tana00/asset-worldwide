import Image from "next/image";
import Link from "next/link";
import ctaImage from "../../public/images/cta-image.png";

const Cta = () => {
  return (
    <div className="min-h-max w-full">
      <div className="h-full px-6 lg:pr-0 xl:h-4/5 w-full bg-primary-green flex justify-between">
        <div className="flex-1 ml-0 md:ml-6 2xl:ml-48 flex flex-col justify-center gap-4 text-white w-full lg:w-1/3 py-8 lg:py-16 px-4 pl-0 md:pl-12">
          <h2 className="text-2xl font-Avenir-black font-semibold md:text-[2rem] lg:text-[2.5rem]">
            Let&apos;s Tranform Together
          </h2>
          <p className="w-full md:w-11/12 font-normal font-Avenir-Regular text-sm sm:text-base lg:text-[17px] leading-6 lg:!leading-8 my-2">
            Whether you&apos;re looking to breathe new life into an existing
            property or reimagine your dream home from the ground up, Asset
            Worldwide Transforming Houses is your trusted partner. Join us on a
            transformative journey that turns houses into exceptional living
            spaces, elevating your lifestyle to new heights.
            <br /> <br />
            Contact us today to start the conversation and discover the endless
            possibilities of transforming your house into a home like never
            before
          </p>
          <Link
            href="/learn-more"
            className="flex items-center justify-center text-primary-green bg-white font-Avenir-Black text-center py-2 px-6 h-14 rounded-lg w-max text-base lg:text-[18px] hover:bg-primary-gold hover:text-white transition duration-300"
          >
            Book Appoinment
          </Link>
        </div>
        <div className="hidden lg:block w-1/2">
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
