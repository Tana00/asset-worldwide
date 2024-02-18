import Link from "next/link";

export const Cta = () => {
  return (
    <section className="relative">
      <div className="min-h-max w-full why_us_cta relative z-10">
        <div className="bg-[#000]/60 backdrop-brightness-50 h-full w-full flex items-center justify-center mx-auto text-center py-6 lg:py-16">
          <div className="lg:w-2/3 xl:w-3/5 3xl:w-1/3 flex flex-col items-center justify-center gap-4 w-full py-8 lg:py-10 xl:py-16 px-4 mx-auto text-center">
            <h2 className="text-white text-2xl font-Avenir-Heavy font-semibold md:text-3xl lg:text-[2rem] xl:leading-[55px] xl:text-[2.5rem]">
              Connect With Us
            </h2>
            <div className="text-white w-full md:w-11/12 font-normal font-Avenir-Regular text-[13.5px] xs:text-sm sm:text-base lg:text-[17px] leading-6 lg:leading-7 xl:!leading-8 lg:my-1 xl:my-2">
              <p>
                Feel free to book an appointment with us for inquiries,
                collaboration opportunities, or to discuss how Asset Worldwide
                can serve your unique needs. We look forward to connecting with
                you and being a part of your real estate journey!
              </p>
            </div>
            <Link
              href="/learn-more"
              className="flex items-center justify-center bg-primary-gold text-white text-center py-2 px-6 h-12 sm:h-14 rounded-lg w-max font-Avenir-Heavy font-bold text-[15px] sm:text-base lg:text-[18px] hover:bg-primary-green hover:text-white transition duration-300"
            >
              Book Appoinment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
